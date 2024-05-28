import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult/SearchResult';
import './search.css';
////////////////////////////////////////////////////////////
function Search(props) {
  const [music, setMusic] = useState({});
  const [query, setQuery] = useState('');
  const [storedQuery, setStoredQuery] = useState('');
  const [matchingResults, setMatchingResults] = useState([]);

  useEffect(() => {
    const getMusicData = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}/`;
        const response = await axios.get(url);
        setMusic(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMusicData();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setStoredQuery(query);
    }
  };

  useEffect(() => {
    if (storedQuery) {
      findMatchingResults(storedQuery);
    }
  }, [storedQuery]);

  // const findMatchingResults = (searchQuery) => {
  //   if (!music || Object.keys(music).length === 0) {
  //     console.error('Data is undefined or empty');
  //     return;
  //   }

  //   const lowerCaseQuery = searchQuery.toLowerCase();
  //   const results = [];

  //   for (const category in music) {
  //     if (music.hasOwnProperty(category)) {
  //       const items = music[category];
  //       for (const item of items) {
  //         if (
  //           item.music_name.toLowerCase().includes(lowerCaseQuery) ||
  //           item.singer_name.toLowerCase().includes(lowerCaseQuery)
  //         ) {
  //           results.push(item);
  //         }
  //       }
  //     }
  //   }

    
  //   if (results.length > 0) {
  //     props.handleFound(); // Call handleFound if matching data is found
      
  //   }
  //   setMatchingResults(results);
  // };
  const findMatchingResults = async (searchQuery) => {
    if (!music || Object.keys(music).length === 0) {
      console.error('Data is undefined or empty');
      return;
    }
  
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = [];
  
    for (const category in music) {
      if (music.hasOwnProperty(category)) {
        const items = music[category];
        for (const item of items) {
          if (
            item.music_name.toLowerCase().includes(lowerCaseQuery) ||
            item.singer_name.toLowerCase().includes(lowerCaseQuery)
          ) {
            results.push(item);
          }
        }
      }
    }
  
    if (results.length > 0) {
      // Call props.handleFound immediately
      props.handleFound();
  
      // Delay setting matching results by 2 seconds
      setTimeout(() => {
        setMatchingResults(results);
      }, 2000); // Delay for 2000 milliseconds (2 seconds)
    } else {
      // If no results, directly set matching results
      setMatchingResults(results);
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search here..."
          className="input-search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill=""
          viewBox="0 0 24 24"
          className="icon"
          onClick={() => setStoredQuery(query)}
        >
          <path
            fill=""
            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="results-container">
        <SearchResult data={matchingResults} location="search" handleDelete={props.handleDelete} />
      </div>
    </>
  );
}

export default Search;




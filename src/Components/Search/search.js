import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css';

function Search(props) {
  // const [query, setQuery] = useState('');
  console.log(props);
  // const navigate = useNavigate();
// const [filteredMusic ,setFilteredMusic] = useState([])
//   const handleInputChange = (e) => {
//     const value = e.target.value; // Get the value directly from the input element
//     const filterItems = props.music.filter((item) => {
//       return item.title.toLowerCase().includes(value.toLowerCase());
//     });
//     if (filterItems.length > 0) {
//       setFilteredMusic(filterItems); // Assuming setFilteredMusic is a state update function
//       setShowError(false); // Reset showError state if there are results
//     } else {
//       setFilteredMusic([]); // Clear the filtered music array if no results
//       setShowError(true); // Set showError state if there are no results
//     }
//   };
  const [filteredMusic, setFilteredMusic] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase(); // Get the value directly from the input element and convert to lowercase
    const filterItems = props.music.filter((item) => {
      return item.title.toLowerCase().includes(value);
    });
    setFilteredMusic(filterItems); // Update the filtered music state
  };


  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     navigate(`/search?query=${query}`);
  //   }
  // };

  return (
    <>
       <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search for an artist or a song"
        className="search-bar"
      />
    </>
  );
}

export default Search;







/*
this code capturing the user's search query,
 processing it to make it case-insensitive, splitting it into individual terms title and artist, 
 and then filtering a list of songs to find those that match all the search terms.
 The matching songs are then displayed to the user
*/

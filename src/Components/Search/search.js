import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css';

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
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

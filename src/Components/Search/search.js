import { useState } from 'react';
import musicData from '../Data/musicData.json'; 
import Cards from '../Card/Card';
import $Modal from '../Modal/Modal'; 
import { Container, Row } from 'react-bootstrap';
import './search.css';



function Search() {
  const [query, setQuery] = useState(''); 
  const [searchedSongs, setSearchedSongs] = useState([]); //This state variable holds the list of songs that match the search query.
  const [showModal, setShowModal] = useState(false); 
  const [selectedSong, setSelectedSong] = useState(''); // State to hold the currently selected song


  const handleInputChange = (event) => {// updates the search query state whenever the user types 
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {//for retriving song when user types enter
    if (event.key === 'Enter') {
      const searchTerms = query.toLowerCase().split(' ').filter(term => term);
      const matchingData = musicData.filter(data => {
        const songName = data.songName.toLowerCase();
        const artistName = data.artistName.toLowerCase();
        const combined = `${songName} ${artistName}`;
        return searchTerms.every(term => combined.includes(term));
      });

      setSearchedSongs(matchingData);
    }
  };

  const handleShowModal = (song) => {
    setSelectedSong(song);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSong(null);
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for an artist or song"
        className="search-bar" 
      />

      <Container className="my-4">
        <Row className="d-flex flex-wrap justify-content-left">
          {searchedSongs.map((song, index) => (
            <Cards key={index} data={song} onPlay={() => handleShowModal(song)} />
          ))}
        </Row>
      </Container>

      {selectedSong && (
        <$Modal
          handleCloseModal={handleCloseModal}
          showModal={showModal}
          song={selectedSong} 
        />
      )}
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

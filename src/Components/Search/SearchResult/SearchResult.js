import { useLocation } from 'react-router-dom'; 
import musicData from '../../Data/musicData.json';
import Cards from '../../Card/Card';
import { Container, Row } from 'react-bootstrap';
import './SearchResult.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResult() {
  const query = useQuery().get('query');
  const searchTerms = query ? query.toLowerCase().split(' ').filter(term => term) : [];
  const matchingData = musicData.filter(data => {
    const songName = data.songName.toLowerCase();
    const artistName = data.artistName.toLowerCase();
    const combined = `${songName} ${artistName}`;
    return searchTerms.every(term => combined.includes(term));
  });

  return (
    <Container className="my-4">
      {matchingData.length > 0 ? (
        <Row className="d-flex flex-wrap justify-content-left">
          {matchingData.map((song, index) => (
            <Cards key={index} data={song} />
          ))}
        </Row>
      ) : (
        <p>Data not found :\</p>
      )}
    </Container>
  );
}

export default SearchResult;

/*
useLocation hook: 
 This hook helps us access the current URL's location in a React component.
 It's useful for extracting query parameters or other information from the URL.


 query: extract the value of the 'query' parameter from the URL's search parameters.


 it filters the musicData based on the search terms from the query parameter.
 This filtering process matches the search terms with song names
  and artist names in the musicData.could use both at the same time for searching


*/


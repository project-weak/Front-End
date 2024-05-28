import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../../Card/Card';
import './SearchResult.css';

function SearchResult({ data, location, handleDelete }) {
  return (
    <div className='search-result-container'>
      {data.map((item, index) => (
        <div key={index} className='search-result-card'>
          <Cards 
            id={String(item.id)} 
            data={item} 
            location={location} 
            handleDelete={handleDelete} 
          />
        </div>
      ))}
    </div>
  );
}

SearchResult.propTypes = {
  data: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default SearchResult;

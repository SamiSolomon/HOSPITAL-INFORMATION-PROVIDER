import React, { useState } from 'react';
import "./searchService.css"

const SearchService = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform search or any other operations with the search query
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search by location, by service or by hospital"
          value={searchQuery}
          onChange={handleInputChange}
        />
        
        <button type='submit' >Search</button>
      </form>
    </div>
  );
};

export default  SearchService  
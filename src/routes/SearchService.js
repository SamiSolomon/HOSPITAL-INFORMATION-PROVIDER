import React, { useState } from 'react';
import "./searchService.css"

const SearchService = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const hospitalList = [
    { name: 'Menilik Hospital', location: 'Addis Ababa' },
    { name: 'Paul\'s Hospital', location: 'Gondar' },
    { name: 'Yekatit Hospital', location: 'Addis Ababa' },
    { name: 'Cure Hospital', location: 'Jimma' },
    { name: 'St. Paul Hospital', location: 'Addis Ababa' },
  ];

  const serviceList = [
    { name: 'Cardiology', hospital: 'Menilik Hospital', location: 'Addis Ababa' },
    { name: 'Pediatrics', hospital: 'Paul\'s Hospital', location: 'Gondar' },
    { name: 'Orthopedics', hospital: 'Yekatit Hospital', location: 'Addis Ababa' },
    { name: 'Oncology', hospital: 'Cure Hospital', location: 'Jimma' },
    { name: 'Neurology', hospital: 'St. Paul Hospital', location: 'Addis Ababa' },
  ];

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterResults(query);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedResult) {
      // Perform search or any other operations with the selected result
      console.log('Selected result:', selectedResult);
    } else {
      console.log('Search query:', searchQuery);
    }
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    setSearchQuery(result.name);
    setFilteredResults([]);
  };

  const filterResults = (query) => {
    if (query.trim() === '') {
      setFilteredResults([]);
      setSelectedResult(null);
    } else {
      const filteredHospitals = hospitalList.filter((hospital) =>
        hospital.name.toLowerCase().includes(query.toLowerCase()) ||
        hospital.location.toLowerCase().includes(query.toLowerCase())
      );
      const filteredServices = serviceList.filter((service) =>
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.hospital.toLowerCase().includes(query.toLowerCase()) ||
        service.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults([...filteredHospitals, ...filteredServices]);
    }
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

        {filteredResults.length > 0 && (
          <div className="search-suggestions">
            {filteredResults.map((result, index) => (
              <div
                key={index}
                className={`search-suggestion ${selectedResult === result ? 'selected' : ''}`}
                onClick={() => handleResultClick(result)}
              >
                {result.name} - {result.location}
                {result.hospital && ` (${result.hospital})`}
              </div>
            ))}
          </div>
        )}

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchService;
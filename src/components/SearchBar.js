import { useState } from 'react';
import '../App.css';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <label htmlFor="search">Search for a city:</label>
      <input
        id="search"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Paris, France"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

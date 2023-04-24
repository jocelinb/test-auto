import React from 'react';
import '../App.css';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      <ul>
        {results.map((result) => (
          <li key={result.place_id}>
            {result.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;

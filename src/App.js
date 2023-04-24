import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const mapRef = useRef();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (city) => {
    axios
      .get(`https://nominatim.openstreetmap.org/search?format=json&q=${city}&limit=5`)
      .then((response) => {
        setSearchResults(response.data);
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          const map = mapRef.current;
          map.setView([lat, lon], 15);
        }
      });
  };

  return (
    <div id="map-container">
      <MapContainer id="map" ref={mapRef} center={[48.8566, 2.3522]} zoom={12}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
      </MapContainer>
      <div id="search-results-container">
        <SearchBar id="search-bar" onSearch={handleSearch} />
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
}

export default App;

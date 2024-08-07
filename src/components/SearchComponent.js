import React, { useState } from 'react';
import { fetchPlaces } from '../services/foursquareService';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchComponent = ({ setLocations }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const results = await fetchPlaces(query);
    setLocations(results);
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control mb-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Colocar el lugar a buscar (parques, iglesias, universidades)"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Buscar
        </button>
        {loading && <div className="mt-2">Cargando...</div>}
      </div>
    </div>
  );
};

export default SearchComponent;

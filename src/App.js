import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import MapComponent from './components/MapComponent';
import SearchResultsTable from './components/SearchResultsTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1">
        <div className={`d-flex flex-column bg-light border-right ${isMenuOpen ? 'col-md-3' : 'col-md-1'}`} style={{ transition: 'width 0.3s' }}>
          <div className="bg-white border-bottom p-2 text-center">
            <button className="btn btn-primary" onClick={toggleMenu}>☰ Menu</button>
          </div>
          <div className={`flex-grow-1 ${isMenuOpen ? 'd-block' : 'd-none'}`}>
            <SearchComponent setLocations={setLocations} />
            <SearchResultsTable 
              locations={locations.slice(0, 5)} 
              onLocationSelect={handleLocationSelect} 
            />
          </div>
        </div>
        <div className="flex-grow-1 d-flex flex-column p-3">
          <h1 className="mb-3 text-center">Grupo 3: Mapa de Lugares Turísticos</h1>
          <MapComponent locations={locations} selectedLocation={selectedLocation} />
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">© 2024 Grupo 3 - Derechos de autor</p>
        <p className="mb-0">Desarrollado por Antohny Macas, Olger Catucuamba, Ivan Zambrano</p>
      </footer>
    </div>
  );
};

export default App;

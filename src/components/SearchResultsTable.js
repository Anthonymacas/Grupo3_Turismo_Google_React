import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchResultsTable = ({ locations, onLocationSelect }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-2">Resultados de Búsqueda</h2>
      {locations.length === 0 ? (
        <div className="alert alert-info" role="alert">
          No hay datos disponibles. Empezar la busqueda.
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo de Lugar</th>
              <th>Dirección</th>
              <th>Más Info</th>
            </tr>
          </thead>
          <tbody>
            {locations.map(location => (
              <tr key={location.fsq_id} onClick={() => onLocationSelect(location)} style={{ cursor: 'pointer' }}>
                <td>{location.name}</td>
                <td>{location.category || 'Plan de pago'}</td> 
                <td>{location.address || 'Plan de pago'}</td> 
                <td>
                  {location.url ? (
                    <a href={location.url} target="_blank" rel="noopener noreferrer">Más Info</a>
                  ) : (
                    'Plan de pago'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchResultsTable;

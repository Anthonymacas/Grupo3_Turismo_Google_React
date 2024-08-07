import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = { height: "80vh", width: "100%" }; 
const defaultCenter = { lat: -0.180653, lng: -78.467834 };  

const containerStyles = {
  backgroundColor: '#71d772',  
  border: '8px solid #71d772',     
  borderRadius: '8px',          
  height: '82vh',               
  width: '100%',                
};

const MapComponent = ({ locations, selectedLocation }) => {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  const onLoad = mapInstance => {
    setMap(mapInstance);
    mapRef.current = mapInstance;
  };

  useEffect(() => {
    if (map && locations.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      locations.forEach(location => {
        const lat = parseFloat(location.geocodes.main.latitude);
        const lng = parseFloat(location.geocodes.main.longitude);
        if (!isNaN(lat) && !isNaN(lng)) {
          bounds.extend(new window.google.maps.LatLng(lat, lng));
        }
      });
      if (selectedLocation) {
        const lat = parseFloat(selectedLocation.geocodes.main.latitude);
        const lng = parseFloat(selectedLocation.geocodes.main.longitude);
        bounds.extend(new window.google.maps.LatLng(lat, lng));
        map.fitBounds(bounds);
        map.panTo(new window.google.maps.LatLng(lat, lng));
      } else {
        map.fitBounds(bounds);
      }
    }
  }, [locations, map, selectedLocation]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDJ57Frem0kSku8CABbePsNpvZKFxKd2zg">
      <div style={containerStyles}>  
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          onLoad={onLoad}
          onUnmount={() => setMap(null)}
        >
          {locations.map(location => {
            const lat = parseFloat(location.geocodes.main.latitude);
            const lng = parseFloat(location.geocodes.main.longitude);
            if (isNaN(lat) || isNaN(lng)) {
              console.error('Coordenadas Invalidas:', location);
              return null;
            }
            return <Marker key={location.fsq_id} position={{ lat, lng }} />;
          })}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapComponent;

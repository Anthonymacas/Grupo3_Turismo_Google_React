import axios from 'axios';

export const fetchPlaces = async (query) => {
  try {
    const response = await axios.get(`https://api.foursquare.com/v3/places/search`, {
      params: {
        query: query,
        ll: '-0.180653,-78.467834',  // Coordenadas de Quito
        limit: 5  // Limita el número de resultados
      },
      headers: {
        'Accept': 'application/json',
        'Authorization': 'fsq3g1iIiQsDNCOJai6xqhhpBwUIh4YBaUXTmwpwJIbUJlY='
      }
    });
    // Filtra y devuelve solo los resultados necesarios
    return response.data.results;
  } catch (error) {
    console.error('Error fetching places:', error);
    return [];
  }
};

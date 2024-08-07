import axios from 'axios';

// clave de API de Google Places
const GOOGLE_PLACES_API_KEY = 'AIzaSyDJ57Frem0kSku8CABbePsNpvZKFxKd2zg';

export const fetchPlaceDetails = async (placeId) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
      params: {
        place_id: placeId,
        key: GOOGLE_PLACES_API_KEY,
      },
    });
    return response.data.result;
  } catch (error) {
    console.error('Error no se encuentran los detalles del lugar:', error);
    return null;
  }
};


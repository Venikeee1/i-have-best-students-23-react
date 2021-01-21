import axios from 'axios';

export const getApartments = () => {
  return axios({
    method: 'GET',
    url: 'https://apt-booking-api.herokuapp.com/apartments/',
  });
};

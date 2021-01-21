import axios from 'axios';

export const getApartments = () => {
  return axios({
    method: 'GET',
    url: 'https://apt-booking-api.herokuapp.com/apartments/',
  });
};

const isPalindrom = (str) => {
  return str === str.split('').reverse().join('');
};

// '{[()]}[]{}'; '{[()]' '{' '{]'
const validateBrackets = ('{[()]}') => {};

new Promise((resolve) => resolve(1)).then(123213).then(1);

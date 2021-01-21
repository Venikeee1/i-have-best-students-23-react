import axios from 'axios';

export const loginUser = ({ email, password }) => {
  return axios.post('https://apt-booking-api.herokuapp.com/users/login', {
    email,
    password,
  });
};

import axios from 'axios';
import settings from '../config';

const { BASE_URL } = settings;

export const loginUser = ({ email, password }) => {
  return axios.post(`${BASE_URL}/users/login`, {
    email,
    password,
  });
};

export const registerUser = ({ name, email, password }) => {
  return axios.post(`${BASE_URL}/users/register`, {
    name,
    email,
    password,
  });
};

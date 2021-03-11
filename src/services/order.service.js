import axios from 'axios';
import config from '../config';
import store from '../redux/store';

const { BASE_URL } = config;

export const requestApartmentsOrder = (apartmentId) => {
  const token = store.getState().user.session.token;

  return axios({
    method: 'POST',
    url: `${BASE_URL}/orders/`,
    data: {
      apartmentId,
      date: new Date(),
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

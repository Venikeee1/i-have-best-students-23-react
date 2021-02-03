import React from 'react';
import Reviews from '../components/apartments/Reviews';
import axios from 'axios';

const Apartment = ({ match }) => {
  const { id } = match.params;
  // console.log(id);
  axios
    .get(`https://apt-booking-api.herokuapp.com/apartments/${id}`)
    .then((res) => console.log(res.data));
  return <Reviews />;
};

export default Apartment;

import React from 'react';
import Reviews from '../components/apartments/Reviews';
import axios from 'axios';

const Apartment = ({ match }) => {
  const { id } = match.params;

  return <Reviews />;
};

export default Apartment;

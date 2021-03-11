import React, { useState, useEffect, useCallback } from 'react';
import { fetchApartmentById } from '../services/apartments.service';
import ApartmentView from '../components/apartments';

const Apartment = ({ match }) => {
  const [apartmentsData, setApartment] = useState(null);
  const logger = useCallback(
    () => console.log('---apartmentsData', apartmentsData),
    [apartmentsData]
  );

  useEffect(() => {
    logger();
  }, [apartmentsData, logger]);

  useEffect(() => {
    const asyncRequest = async () => {
      try {
        const { id } = match.params;
        const { data } = await fetchApartmentById(id);
        setApartment(data);
      } catch (error) {
        console.error(error);
      }
    };

    asyncRequest();
  }, [match.params]);

  return <ApartmentView apartment={apartmentsData} />;
};

export default Apartment;

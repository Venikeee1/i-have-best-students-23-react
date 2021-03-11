import React, { Component, useState, useEffect, useCallback } from 'react';
import { fetchApartmentById } from '../services/apartments.service';
import ApartmentView from '../components/apartments';

// class Apartment extends Component {
//   state = {
//     apartment: null,
//   };

//   async componentDidMount() {
//     try {
//       const { match } = this.props;
//       const { id } = match.params;
//       const { data } = await fetchApartmentById(id);
//       this.setState(() => ({ apartment: data }));
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   render() {
//     return <Reviews />;
//   }
// }

const Apartment = ({ match }) => {
  const [apartmentsData, setApartment] = useState(null);
  const logger = useCallback(() => console.log(apartmentsData), [
    apartmentsData,
  ]);

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

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ProductList from '../components/product/ProductList';
import Container from '../components/UI/Container';
import MainTitle from '../components/UI/typography/title';
import ApartmentsFilter from '../components/homepage/apartments-filter';
import { getApartments } from '../services/apartments.service';
import debounce from 'lodash.debounce';

const Homepage = () => {
  const [apartments, setApartments] = useState([]);
  const [cities, setCities] = useState([]);
  const [filterPrice, setFilterPrice] = useState(0);
  const [filterCity, setFilterCity] = useState('');
  const { t, i18n } = useTranslation();
  const componentDidMount = useRef(false);

  const filterApartmentsByPrice = (event) => {
    const { value = 0 } = event.target;
    setFilterPrice(Number(value));
  };

  const handleCityChange = (event) => {
    const { value = '' } = event.target;
    setFilterCity(value);
  };

  const keyboardHandler = useCallback((event) => {
    console.log(event.code);
  }, []);

  useEffect(() => {
    window.addEventListener('keypress', keyboardHandler);

    return () => {
      window.removeEventListener('keypress', keyboardHandler);
    };
  }, [keyboardHandler]);

  useEffect(() => {
    if (componentDidMount.current) {
      console.log(`filterCity change value to ${filterPrice}`);
    } else {
      componentDidMount.current = true;
    }
  }, [filterPrice]);

  useEffect(() => {
    const asyncFn = async () => {
      const { data } = await getApartments();
      const cities = [
        ...new Set([...data.map((apartment) => apartment.location.city)]),
      ];
      setCities(cities);
      setApartments(data);
    };

    asyncFn();
  }, []);

  const debounceHandler = useCallback(
    debounce(filterApartmentsByPrice, 200),
    []
  );

  const currentApartments = apartments.filter((apartment) => {
    const isHigherPrice = apartment.price >= filterPrice;
    const isCityMatched = filterCity
      ? apartment.location.city === filterCity
      : true;

    return isHigherPrice && isCityMatched;
  });

  return (
    <main className="homepage">
      <Container>
        <button
          onClick={() => {
            i18n.changeLanguage('ua');
          }}
        >
          Change language
        </button>
        <ApartmentsFilter
          cities={cities}
          handleChange={debounceHandler}
          handleCityChange={handleCityChange}
        />
        <MainTitle>{t('homepage_title')}</MainTitle>
        <ProductList items={currentApartments} />
      </Container>
    </main>
  );
};

export default Homepage;

// class Homepage extends Component {
//   state = {
//     apartments: [],
//     filterPrice: 0,
//     filterCity: '',
//     cities: [],
//   };

//   filterApartmentsByPrice = (event) => {
//     const { value = 0 } = event.target;

//     this.setState(() => ({
//       filterPrice: Number(value),
//     }));
//   };

//   handleCityChange = (event) => {
//     const { value = '' } = event.target;

//     this.setState(() => ({
//       filterCity: value,
//     }));
//   };

//   async componentDidMount() {
//     const { data } = await getApartments();
//     const cities = [
//       ...new Set([...data.map((apartment) => apartment.location.city)]),
//     ];
//     this.setState((prevState) => ({
//       apartments: data,
//       cities,
//     }));
//   }

//   render() {
//     const { apartments, filterPrice, cities, filterCity } = this.state;
//     const currentApartments = apartments.filter((apartment) => {
//       const isHigherPrice = apartment.price >= filterPrice;
//       const isCityMatched = filterCity
//         ? apartment.location.city === filterCity
//         : true;

//       return isHigherPrice && isCityMatched;
//     });

//     return (
//       <main className="homepage">
//         <Container>
//           <ApartmentsFilter
//             cities={cities}
//             handleChange={debounce(this.filterApartmentsByPrice, 200)}
//             handleCityChange={this.handleCityChange}
//           />
//           <MainTitle>Подборка согласно выбора</MainTitle>
//           <ProductList items={currentApartments} />
//         </Container>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     name: state.name,
//   };
// };

// export default connect(mapStateToProps)(Homepage);

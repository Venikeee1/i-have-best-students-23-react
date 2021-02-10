import { Component } from 'react';
import ProductList from '../components/product/ProductList';
import Container from '../components/UI/Container';
import MainTitle from '../components/UI/typography/title';
import ApartmentsFilter from '../components/homepage/apartments-filter';
import { getApartments } from '../services/apartments.service';
import debounce from 'lodash.debounce';
import Tooltip from '../components/UI/Tooltip';
import MouseTracker from '../components/MouseTracker';

class Homepage extends Component {
  state = {
    apartments: [],
    filterPrice: 0,
    cities: [],
    filterCity: '',
  };

  filterApartmentsByPrice = (event) => {
    const { value = 0 } = event.target;

    this.setState(() => ({
      filterPrice: Number(value),
    }));
  };

  handleCityChange = (event) => {
    const { value = '' } = event.target;

    this.setState(() => ({
      filterCity: value,
    }));
  };

  async componentDidMount() {
    const { data } = await getApartments();
    const cities = [
      ...new Set([...data.map((apartment) => apartment.location.city)]),
    ];
    this.setState((prevState) => ({
      apartments: data,
      cities,
    }));
  }

  render() {
    const { apartments, filterPrice, cities, filterCity } = this.state;
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
          <ApartmentsFilter
            cities={cities}
            handleChange={debounce(this.filterApartmentsByPrice, 200)}
            handleCityChange={this.handleCityChange}
          />
          <Tooltip>
            {({ hide, isOpen }) => (
              <MainTitle onClick={hide}>
                Подборка согласно выбора : {isOpen.toString()}
              </MainTitle>
            )}
          </Tooltip>
          <MouseTracker>
            {({ x, y }) => (
              <Tooltip>
                {() => (
                  <h2>
                    Coords: {x}, {y}
                  </h2>
                )}
              </Tooltip>
            )}
          </MouseTracker>
          <ProductList items={currentApartments} />
        </Container>
      </main>
    );
  }
}

export default Homepage;

const isLoggedIn = false;
const withAuth = (WrappedComponent) => {
  return (props) =>
    isLoggedIn && <WrappedComponent {...props} isLoggedIn={isLoggedIn} />;
};

const Description = () => <p>Hello world</p>;
const DescriptionWithAuth = withAuth(Description);

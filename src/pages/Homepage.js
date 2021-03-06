import { Component } from 'react';
import ProductList from '../components/product/ProductList';
import Container from '../components/UI/Container';
import MainTitle from '../components/UI/typography/title';
import ApartmentsFilter from '../components/homepage/apartments-filter';
import { getApartments } from '../services/apartments.service';
import debounce from 'lodash.debounce';

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
          <MainTitle>Подборка согласно выбора</MainTitle>
          <ProductList items={currentApartments} />
        </Container>
      </main>
    );
  }
}

export default Homepage;

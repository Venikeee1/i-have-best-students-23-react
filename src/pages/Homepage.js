import { Component } from 'react';
import ProductList from '../components/product/ProductList';
import Container from '../components/UI/Container';
import MainTitle from '../components/UI/typography/title';
import ApartmentsFilter from '../components/homepage/apartments-filter';
import { getApartments } from '../services/apartments.service';
import debounce from 'lodash.debounce';

import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';

export class Example extends Component {
  openPopupbox() {
    const content = (
      <div>
        <p className="quotes">Work like you don't need the money.</p>
        <p className="quotes">Dance like no one is watching.</p>
        <p className="quotes">And love like you've never been hurt.</p>
        <span className="quotes-from">― Mark Twain</span>
      </div>
    )
    PopupboxManager.open({ content })
  }

  render() {
    return (
      <div>
        <button onClick={this.openPopupbox}>Click me</button>
        <PopupboxContainer />
      </div>
    )
  }
}

class Homepage extends Component {
  state = {
    apartments: [],
    filterPrice: 0,
    cities: [],
    filterCity: '',
    selectedApartment: null,
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

  onFileChange = (event) => {
    console.log(event.target.files);
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
          <input
            onChange={this.onFileChange}
            type="file"
            style={{ margin: '50px' }}
          />
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

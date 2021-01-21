import { Component } from 'react';
import ProductList from '../components/product/ProductList';
import Container from '../components/UI/Container';
import MainTitle from '../components/UI/typography/title';
import ApartmentsFilter from '../components/homepage/apartments-filter';
import { getApartments } from '../services/apartments.service';

class Homepage extends Component {
  state = {
    apartments: [],
    filterPrice: 0,
  };

  filterApartmentsByPrice = (event) => {
    const { value = 0 } = event.target;

    this.setState(() => ({
      filterPrice: Number(value),
    }));
  };

  async componentDidMount() {
    const { data } = await getApartments();
    this.setState((prevState) => ({
      apartments: data,
    }));
  }

  render() {
    const { apartments, filterPrice } = this.state;
    console.log(filterPrice);
    const currentApartments = apartments.filter(
      (apartment) => apartment.price >= filterPrice
    );

    return (
      <main className="homepage">
        <Container>
          <ApartmentsFilter handleChange={this.filterApartmentsByPrice} />
          <MainTitle>Подборка согласно выбора</MainTitle>
          <ProductList items={currentApartments} />
        </Container>
      </main>
    );
  }
}

export default Homepage;

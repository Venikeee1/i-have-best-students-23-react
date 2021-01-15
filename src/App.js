import React from 'react';
// import ProductList from './components/product/ProductList/';
// import ApartmentsPage from './pages/Apartment';
import Login from './components/auth/login';
import Registration from './components/auth/registration';
import Footer from './components/footer';

import './App.css';

const mockData = [
  {
    id: '1',
    price: 2500,
    rating: 4.5,
  },
  {
    id: '2',
    price: 1500,
    rating: 2.8,
  },
  {
    id: '3',
    price: 4500,
    rating: 1.7,
  },
  {
    id: '4',
    price: 8500,
    rating: 4.1,
  },
  {
    id: '5',
    price: 500,
    rating: 4.5,
  },
];

function App() {
  return (
    <>
      <Login />
      <Registration />
      {/* <ApartmentsPage />
      <ProductList items={mockData} /> */}
      <Footer />
    </>
  );
}

export default App;

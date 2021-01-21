import React from 'react';
import Homepage from './pages/Homepage';
// import ApartmentsPage from './pages/Apartment';
import Login from './components/auth/login';
import Registration from './components/auth/registration';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <>
      <Homepage />
      <Login />
      <Registration />
      {/* <ApartmentsPage />*/}
      <Footer />
    </>
  );
}

export default App;

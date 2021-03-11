import React from 'react';
import Router from './router/Router';
import Footer from './components/footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-content">
        <Router />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

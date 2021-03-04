import React from 'react';
import Router from './router/Router';
import Footer from './components/footer';
import './App.css';

function App({ auth }) {
  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;

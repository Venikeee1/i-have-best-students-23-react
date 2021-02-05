import React from 'react';
import Router from './router/Router';
import Footer from './components/footer';

import './App.css';

const SvgSprite = ({ icon }) => {
  return (
    <svg className="svg-sprite">
      <use xlinkHref={`/svg/sprite.svg#${icon}`}></use>
    </svg>
  );
};

function App() {
  return (
    <div className="app-wrapper">
      <SvgSprite icon="cloud" />
      <div className="app-content">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;

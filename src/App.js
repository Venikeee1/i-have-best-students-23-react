import React, { Component } from 'react';
import Router from './router/Router';
import Footer from './components/footer';
// import withIcon from './hocs/WithIcon';
// import withToggle from './hocs/WithToggle';
import './App.css';

// const Title = ({ iconName, isOpen }) => <h1>Super title for : {iconName}</h1>;
// const TitleWithIconWithToggle = withIcon(
//   'cloud-computing',
//   'medium'
// )(withToggle(Title));

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

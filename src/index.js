import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
/**
 * Стор без тулкита
 * import store from './redux/storeWithoutReduxToolkit/store';
 */

import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider value={{ name: 'John', age: 10 }}>
          <App />
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

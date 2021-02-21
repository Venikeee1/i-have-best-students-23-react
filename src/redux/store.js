import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import apartmentsReducer from './apartmentsReducer';
import { setItem as saveItemToStorage } from '../services/clientStorage';
import throttle from 'lodash.throttle';

const store = configureStore({
  reducer: {
    user: userReducer,
    apartments: apartmentsReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveItemToStorage(store.getState().user);
  }, 1000)
);

export default store;

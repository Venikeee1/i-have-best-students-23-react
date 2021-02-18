import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import apartmentsReducer from './apartmentsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  apartments: apartmentsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

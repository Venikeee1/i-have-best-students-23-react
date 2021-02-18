import { types } from './actions';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_APARTMENT:
      return [...state, action.payload];

    case types.REMOVE_APARTMENT:
      return state.filter((apartment) => apartment.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;

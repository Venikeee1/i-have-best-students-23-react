import { types } from './actions';

const initialState = {
  session: {},
  error: null,
  pending: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SESSION_SUCCESS: {
      return { ...state, session: action.payload, pending: false };
    }

    case types.SESSION_ERROR: {
      return { ...state, error: action.payload, pending: false };
    }

    case types.SESSION_PENDING: {
      return { ...state, pending: true };
    }

    default:
      return state;
  }
};

export default reducer;

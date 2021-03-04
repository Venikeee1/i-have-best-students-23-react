export const types = {
  SESSION_SUCCESS: 'sessionSuccess',
  SESSION_ERROR: 'sessionError',
  SESSION_PENDING: 'sessionPending',
};

export const sessionSuccess = (payload) => {
  return {
    payload,
    type: types.SESSION_SUCCESS,
  };
};

export const sessionError = (payload) => {
  return {
    payload,
    type: types.SESSION_ERROR,
  };
};

export const sessionPending = () => {
  return {
    type: types.SESSION_PENDING,
  };
};

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItem as getItemFromStorage } from '../services/clientStorage';
import { loginUser as login } from '../services/auth.service';
import { registerUser as register } from '../services/auth.service';

const persistData = getItemFromStorage() ?? {};
const initialState = {
  session: {
    user: null,
    token: '',
  },
  error: null,
  pending: false,
  registrationError: null,
  registrationPending: false,
};

export const loginUser = createAsyncThunk(
  'user',
  async ({ email, password }) => {
    const { data } = await login({ email, password });
    return data;
  }
);

export const registerUser = createAsyncThunk(
  'user',
  async ({ name, email, password }) => {
    const { data } = await register({ name, email, password });
    return data;
  }
);

const slice = createSlice({
  name: 'user',
  initialState: {
    ...initialState,
    ...persistData,
  },
  reducers: {
    logout(state) {
      state = { ...initialState };
      return state;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.session = payload;
      state.pending = false;
    },
    [loginUser.error]: (state, { payload }) => {
      state.error = payload;
      state.pending = false;
    },
    [loginUser.pending]: (state) => {
      state.pending = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.session = payload;
      state.registrationPending = false;
    },
    [registerUser.error]: (state, { payload }) => {
      state.registrationError = payload;
      state.registrationPending = false;
    },
    [registerUser.pending]: (state) => {
      state.registrationPending = true;
    },
  },
});

export const { logout } = slice.actions;
export default slice.reducer;

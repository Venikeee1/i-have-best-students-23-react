import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItem as getItemFromStorage } from '../services/clientStorage';
import { loginUser as login } from '../services/auth.service';

const persistData = getItemFromStorage() ?? {};
const initialState = {
  session: {},
  error: null,
  pending: false,
};

export const loginUser = createAsyncThunk(
  'user',
  async ({ email, password }) => {
    const { data } = await login({ email, password });
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
  },
});

export const { logout } = slice.actions;
export default slice.reducer;

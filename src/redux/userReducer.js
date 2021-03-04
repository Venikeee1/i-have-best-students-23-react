import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItem as getItemFromStorage } from '../services/clientStorage';
import { loginUser as login } from '../services/auth.service';

const initialState = {
  userData: getItemFromStorage() ?? {},
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
  initialState,
  reducers: {
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

export const { changeName, changeAge } = slice.actions;
export default slice.reducer;

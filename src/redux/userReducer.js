import { createSlice } from '@reduxjs/toolkit';
import { getItem as getItemFromStorage } from '../services/clientStorage';

const initialState = getItemFromStorage();

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeAge(state, action) {
      state.age = action.payload;
    },
  },
});

export const { changeName, changeAge } = slice.actions;
export default slice.reducer;

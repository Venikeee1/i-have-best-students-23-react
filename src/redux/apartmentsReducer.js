import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const slice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    addApartment(state, action) {
      state.push(action.payload);
    },
    removeApartment(state, action) {
      return state.filter((apartment) => apartment.id !== action.payload);
    },
  },
});

export const { addApartment, removeApartment } = slice.actions;
export default slice.reducer;

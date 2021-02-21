import { createAction } from '@reduxjs/toolkit';

const changeName = createAction('CHANGE_NAME');
const changeAge = createAction('CHANGE_AGE');

const addApartment = createAction('ADD_APARTMENT');
const removeApartment = createAction('REMOVE_APARTMENT');

const actions = {
  changeName,
  changeAge,
  addApartment,
  removeApartment,
};

export default actions;

/* eslint-disable object-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import { dummyNotes } from 'constants.js';
import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, DELETE_NOTES } from '../action-types';

const initialState = dummyNotes;

export const notes = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTE:
      return [...state, payload];
    case UPDATE_NOTE:
      return state.map((it) => (it.id === payload.id ? { ...it, ...payload } : it));
    case DELETE_NOTE:
      return state.filter((item) => item.id !== payload);
    case DELETE_NOTES:
      return [];
    default:
      return state;
  }
};

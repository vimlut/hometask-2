import {
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  DELETE_NOTES,
} from '../action-types';

export const addNote = (newNote) => (dispatch) => {
  dispatch({ type: ADD_NOTE, payload: newNote });
};

export const updateNote = (data) => (dispatch) => {
  dispatch({ type: UPDATE_NOTE, payload: data });
};

export const deleteNote = (id) => (dispatch) => {
  dispatch({ type: DELETE_NOTE, payload: id });
};

export const deleteNotes = () => (dispatch) => {
  dispatch({ type: DELETE_NOTES });
};

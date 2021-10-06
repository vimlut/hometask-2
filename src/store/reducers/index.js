import { combineReducers } from 'redux';
import { notes } from './_notes';

const rootReducer = combineReducers({
  notes,
});

export default rootReducer;

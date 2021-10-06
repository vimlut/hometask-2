import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistedState = {};
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

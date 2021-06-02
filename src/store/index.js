import { createStore } from 'redux';

import rootReducer from '../reducers';

const EXTENSION = window.devToolsExtension() || ((f) => f);

const store = createStore(
  rootReducer,
  EXTENSION,
);

export default store;

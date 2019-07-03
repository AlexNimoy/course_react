import {
  createStore, applyMiddleware
} from 'redux';

import APIMiddleware from 'middleware/API';
import LocalStorage from 'middleware/LocalStorage';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from 'reducers';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      APIMiddleware,
      LocalStorage
    )
  )
);

export default store;

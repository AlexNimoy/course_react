import {
  createStore, applyMiddleware, compose
} from 'redux';

import APIMiddleware from '~/src/middleware/API';
import LocalStorage from '~/src/middleware/LocalStorage';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from '~/src/reducers';

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

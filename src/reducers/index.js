import { combineReducers } from 'redux';

import products from './Products';
import cart from './Cart';

export default combineReducers({
  products, cart
});

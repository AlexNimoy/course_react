import { assign } from 'lodash/object';

import * as types from '../constants/actionTypes/CartActionTypes';

const initialState = {
  entries: []
}

const buy = (product_id, cart, product_quantity = 1) => {
  const id = parseInt(product_id);
  const quantity = parseInt(product_quantity);
  const index = cart.findIndex(x => x.id === id);

  if (index == -1) {
    return [...cart, { id, quantity }];
  } else {
    cart[index].quantity += quantity;
    return cart;
  }
}

const Cart = (state = initialState, action)  => {
  switch(action.type) {
    case types.ADD_TO_CART:
      const cart = buy(action.id, state.entries, action.quantity);
      return assign({} , initialState, { entries: cart });
    default:
      return state;
  }
}

export default Cart;

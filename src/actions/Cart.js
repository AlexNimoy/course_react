import * as types from 'constants/actionTypes/CartActionTypes';

export const addToCart = (id, quantity) => ({
  type: types.ADD_TO_CART,
  id,
  quantity
});

export const loadFromLocalStorage = () => ({
  type: types.LOAD_FROM_LOCAL_STORAGE
});

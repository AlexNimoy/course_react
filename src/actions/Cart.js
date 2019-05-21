import * as types from '~/src/constants/actionTypes/CartActionTypes';

const actionAddToCart = (id, quantity) => ({
  type: types.ADD_TO_CART,
  id,
  quantity
});

export const addToCart = (id, quantity) => {
  return (dispatch) => dispatch(actionAddToCart(id, quantity));
}

import { assign } from 'lodash/object';

import * as types from '../constants/actionTypes/ProductsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
}

const Products = (state = initialState, action)  => {
  switch(action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_PRODUCTS_FAILURE:
      return assign({}, initialState, { error: true });
    case types.FETCH_PRODUCTS_SUCCESS:
      return assign({} , initialState, { entries: action.res })
    default:
      return state;
  }
}

export default Products;

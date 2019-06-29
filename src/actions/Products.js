import * as types from 'constants/actionTypes/ProductsActionTypes';

import { API_CALL } from 'middleware/API';

export const fetchProducts = () => {
  return {
    [API_CALL]: {
      endpoint: '/products',
      method: 'GET',
      query: {},
      types: [
        types.FETCH_PRODUCTS_REQUEST,
        types.FETCH_PRODUCTS_SUCCESS,
        types.FETCH_PRODUCTS_FAILURE
      ]
    }
  }
}

import request from 'superagent';

import { API_ROOT } from '~/src/constants/API';
import * as types from '~/src/constants/actionTypes/ProductsActionTypes';

const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const receiveProducts = (res) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  res
});

const errorProducts = () => ({
  type: types.FETCH_PRODUCTS_FAILURE
});

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(requestProducts());

    return request
      .get(`${API_ROOT}/products`)
      .end((err, res) => {
        err ?
          dispatch(errorProducts()) :
          dispatch(receiveProducts(res.body))
      })
  }
}

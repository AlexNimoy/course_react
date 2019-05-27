import * as types from '~/src/constants/actionTypes/CartActionTypes';
import { assign } from 'lodash';

import { saveState, loadState } from '~/src/helpers/cartLocalStorage';

export default store => next => action => {
  switch(action.type) {
    case types.LOAD_FROM_LOCAL_STORAGE:
      return next(assign({}, action, { local_storage: loadState() }));
    case types.ADD_TO_CART:
      next(action);
      const storeData = store.getState();
      const cart = storeData.cart.entries;
      saveState(cart);
      return null;
    default:
      return next(action);
  }
}

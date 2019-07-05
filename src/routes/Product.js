import React from 'react';

import { productsPath } from "helpers/routes";
import Product from "components/pages/Product";
import { fetchProducts } from 'actions/Products';

export default {
  path: productsPath(),
  prepareData: (store) =>  {
    return store.dispatch(fetchProducts());
  },
  render: ({ match }) => (
    <Product id={ match.params.id } />
  )
}

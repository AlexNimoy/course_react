import React from 'react';

import { productsPath } from "~/src/helpers/routes";
import Product from "~/src/components/pages/Product";
import { fetchProducts } from '~/src/actions/Products';

export default {
  path: productsPath(),
  prepareData: (store) =>  {
    store.dispatch(fetchProducts());
  },
  render: ({ match }) => (
    <Product id={ match.params.id } />
  )
}

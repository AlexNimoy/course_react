import React from 'react';

import { productsPath } from "../helpers/routes";
import ProductPage from "../components/views/Product";

export default {
  path: productsPath(),
  render: ({ match }) => (
    <ProductPage id={ match.params.id } />
  )
}

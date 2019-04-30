import React from 'react';

import { productsPath } from "~/src/helpers/routes";
import ProductPage from "~/src/components/pages/ProductPage";

export default {
  path: productsPath(),
  render: ({ match }) => (
    <ProductPage id={ match.params.id } />
  )
}

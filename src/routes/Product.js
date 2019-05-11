import React from 'react';

import { productsPath } from "~/src/helpers/routes";
import Product from "~/src/components/pages/Product";

export default {
  path: productsPath(),
  render: ({ match }) => (
    <Product id={ match.params.id } />
  )
}

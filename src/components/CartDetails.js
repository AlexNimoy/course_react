import React from 'react';

import CartDetailsTable from './CartDetailsTable';
import { CatalogConsumer } from '../contexts/catalogContext';

const CartDetails = () => (
  <CatalogConsumer>
    {context =>
      <CartDetailsTable>
        { context }
      </CartDetailsTable>
    }
  </CatalogConsumer>
)

export default CartDetails;

import React from 'react';

import CartDetailsTable from './CartDetailsTable';
import { CatalogConsumer } from '../contexts/catalogContext';
import { CartConsumer } from '../contexts/cartContext';

const CartDetails = () => (
  <div>
    <CartConsumer>
      {context => context.blankCartRedirect() }
    </CartConsumer>

    <CatalogConsumer>
      {context =>
        <CartDetailsTable>
          { context }
        </CartDetailsTable>
      }
    </CatalogConsumer>
  </div>
)

export default CartDetails;

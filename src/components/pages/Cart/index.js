import React from 'react';

import Products from '~/src/components/pages/Cart/Products';
import { CatalogConsumer } from '~/src/contexts/catalogContext';
import { CartConsumer } from '~/src/contexts/cartContext';

const Cart = () => (
  <div>
    <CartConsumer>
      {context => context.blankCartRedirect() }
    </CartConsumer>

    <CatalogConsumer>
      {context =>
        <Products>
          { context }
        </Products>
      }
    </CatalogConsumer>
  </div>
)

export default Cart;

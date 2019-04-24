import React from 'react';
import { CartConsumer } from '../contexts/cartContext';

const CartButton = () => (
  <div>
    <CartConsumer>
      { context => <button>In cart: { context }</button> }
    </CartConsumer>
  </div>
)

export default CartButton;

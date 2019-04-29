import React from 'react';
import PropTypes from 'prop-types';

import CartDetailsItem from './CartDetailsItem';
import { CartConsumer } from '../contexts/cartContext';

const CartDetailsTable = ({ children }) => (
  <table className='cart__reciept' >
    <thead>
      <tr>
        <th>Product</th>
        <th>quantity</th>
        <th>price</th>
      </tr>
    </thead>
    <CartConsumer>
      {context =>
        <tbody>
          {context.productList(children).map((item, key)=>
            <CartDetailsItem {...item} key={key} />
          )}
        </tbody>
      }
    </CartConsumer>
  </table>
)

CartDetailsTable.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape(
      CartDetailsItem.propTypes
    )
  )
}

export default CartDetailsTable;

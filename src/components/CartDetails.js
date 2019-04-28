import React from 'react';
import PropTypes from 'prop-types';

import CartDetailsItem from './CartDetailsItem';

const CartDetails = ({ children }) => (
  <table className='cart__reciept' >
    <thead>
      <tr>
        <th>Product</th>
        <th>quantity</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
    {
      children.map((item, i) =>
        <CartDetailsItem {...item} key={i}/>
      )
    }
    </tbody>
  </table>
)

CartDetails.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape(
      CartDetailsItem.propTypes
    )
  )
}

export default CartDetails;

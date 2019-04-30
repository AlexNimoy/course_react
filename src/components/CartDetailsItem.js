import React from 'react';
import PropTypes from 'prop-types';

const CartDetailsItem = ({quantity, product}) => (
  <tr>
    <td>{ product.title }</td>
    <td>{ quantity }</td>
    <td>{ product.price }</td>
  </tr>
)

CartDetailsItem.propTypes = {
  quantity: PropTypes.number,
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
}

export default CartDetailsItem;

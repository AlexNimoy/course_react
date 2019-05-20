import React from 'react';
import PropTypes from 'prop-types';

const Product = ({quantity, product}) => (
  <tr>
    <td>{ product.title }</td>
    <td>{ quantity }</td>
    <td>{ product.price }</td>
  </tr>
)

Product.propTypes = {
  quantity: PropTypes.number,
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
}

export default Product;

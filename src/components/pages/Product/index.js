import React from 'react';
import ProductDetails from './widgets/Product';

const Product = ({ id }) => (
  <ProductDetails>{ id }</ProductDetails>
);

export default Product;

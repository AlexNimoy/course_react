import React from 'react';
import ProductContainer from '~/src/containers/ProductContainer';

const Product = ({ id }) => (
  <ProductContainer>{ id }</ProductContainer>
);

export default Product;

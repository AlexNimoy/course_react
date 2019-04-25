import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import Buy from './Buy';

const ProductCard = ({ id, price, title, image }) => (
  <div className='product-card'>
    <Image {...image} />
    <Price>{ price }</Price>
    <TextBox>{ title }</TextBox>
    <Buy>{id}</Buy>
  </div>
);

ProductCard.propTypes = {
  id: Buy.propTypes.children,
  price: Price.propTypes.children,
  title: TextBox.propTypes.children,
  image: PropTypes.shape(Image.propTypes)
}

export default ProductCard;

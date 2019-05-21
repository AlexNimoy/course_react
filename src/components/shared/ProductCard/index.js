import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { productsPath } from '~/src/helpers/routes';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import Buy from './Buy';

const ProductCard = ({ id, price, title, images }) => (
  <div
    className='product'
    draggable
    onDragStart={ (e) => e.dataTransfer.setData('text/plain', id) }
  >
    <Link to={ productsPath(id) }>
      <Image { ...images[0] } />
      <Price>{ price }</Price>
      <TextBox>{ title }</TextBox>
    </Link>
    <Buy>{id}</Buy>
  </div>
);

ProductCard.propTypes = {
  id: Buy.propTypes.children,
  price: Price.propTypes.children,
  title: TextBox.propTypes.children,
  images: PropTypes.arrayOf(
    PropTypes.shape(Image.propTypes)
  )
}

export default ProductCard;

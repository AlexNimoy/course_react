import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { productsPath } from '~/src/helpers/routes';

import { CartConsumer } from '~/src/contexts/cartContext';

import Image from '~/src/components/shared/ProductCard/Image';
import TextBox from '~/src/components/shared/ProductCard/TextBox';
import Price from '~/src/components/shared/ProductCard/Price';
import Buy from '~/src/components/shared/ProductCard/Buy';

const ProductCard = ({ id, price, title, images }) => (
  <Fragment>
    <CartConsumer>
      { context =>
        <div
          className='product'
          draggable
          onDragStart={ (e) => context.dragStart(e, id) }
        >
          <Link to={ productsPath(id) }>
            <Image { ...images[0] } />
            <Price>{ price }</Price>
            <TextBox>{ title }</TextBox>
          </Link>
          <Buy>{id}</Buy>
        </div>
      }
    </CartConsumer>
  </Fragment>
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

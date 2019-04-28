import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { BuyConsumer } from '../contexts/buyContext';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import Buy from './Buy';

const ProductCard = ({ id, price, title, image }) => (
  <Fragment>
    <BuyConsumer>
      { context =>
        <div
          className='product'
          draggable
          onDragStart={ (e) => context.dragStart(e, id) }
        >
          <Image {...image} />
          <Price>{ price }</Price>
          <TextBox>{ title }</TextBox>
          <Buy>{id}</Buy>
        </div>
      }
    </BuyConsumer>
  </Fragment>
);

ProductCard.propTypes = {
  id: Buy.propTypes.children,
  price: Price.propTypes.children,
  title: TextBox.propTypes.children,
  image: PropTypes.shape(Image.propTypes)
}

export default ProductCard;

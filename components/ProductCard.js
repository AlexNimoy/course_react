import React from 'react';

import Image from '~/components/Image';
import TextBox from '~/components/TextBox';
import Price from '~/components/Price';

const ProductCard = ({ product }) => (
  <div className='product-card'>
    <Image
      src={ product.imageUrl }
      alt={ product.title }
      height='200'
      width='200'
    />
    <Price money={ product.price } />
    <TextBox str={ product.title } />
  </div>
);

export default ProductCard;

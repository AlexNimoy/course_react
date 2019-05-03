import React from 'react';
import { CatalogConsumer } from '~/src/contexts/catalogContext';

import Image from '~/src/components/Image';
import Price from '~/src/components/Price';
import TextBox from '~/src/components/TextBox';

const ProductPage = ({ id }) => (
  <CatalogConsumer>
    { context =>
      context.filter(x => x.id == id).map((product) =>
        <div className="product_info" key={ product.id }>
          <Image {...product.image} />
          <Price>{ product.price }</Price>
          <TextBox>{ product.title }</TextBox>
        </div>
      )
    }
  </CatalogConsumer>
);

export default ProductPage;

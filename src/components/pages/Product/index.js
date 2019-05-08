import React from 'react';
import { CatalogConsumer } from '~/src/contexts/catalogContext';

import GalleryLayout from '~/src/components/shared/Gallery';
import Price from '~/src/components/shared/ProductCard/Price';
import TextBox from '~/src/components/shared/ProductCard/TextBox';

const Product = ({ id }) => (
  <CatalogConsumer>
    { context =>
      context.filter(x => x.id == id).map((product) =>
        <div className="product_info" key={ product.id }>
          <GalleryLayout>{ product.images }</GalleryLayout>
          <Price>{ product.price }</Price>
          <TextBox>{ product.title }</TextBox>
        </div>
      )
    }
  </CatalogConsumer>
);

export default Product;

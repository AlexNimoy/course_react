import React, { Component, Fragment } from 'react';
import GalleryLayout from '~/src/components/shared/Gallery';
import Price from '~/src/components/shared/ProductCard/Price';
import TextBox from '~/src/components/shared/ProductCard/TextBox';
import AddToCartButton from '~/src/components/shared/widgets/AddToCartButton';
class Product extends Component {
  render() {
    const { product } = this.props;

    return(
      <Fragment>
        { product && (
            <div className="product_info">
              <GalleryLayout>{ product.images }</GalleryLayout>
              <Price>{ product.price }</Price>
              <TextBox>{ product.title }</TextBox>
              <AddToCartButton>{ product.id }</AddToCartButton>
            </div>
          )
        }
      </Fragment>
    )
  }
}

export default Product;

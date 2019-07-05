import React, { Component, Fragment } from 'react';
import GalleryLayout from 'components/shared/Gallery';
import Price from 'components/shared/ProductCard/Price';
import TextBox from 'components/shared/ProductCard/TextBox';
import AddToCartButton from 'components/shared/widgets/AddToCartButton';
import Helmet from 'react-helmet';
class Product extends Component {
  render() {
    const { product } = this.props;

    return(
      <Fragment>
        <Helmet>
          <title>{ product && product.title }</title>
        </Helmet>
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

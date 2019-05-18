import React, { Component, Fragment } from 'react';
import GalleryLayout from '~/src/components/shared/Gallery';
import Price from '~/src/components/shared/ProductCard/Price';
import TextBox from '~/src/components/shared/ProductCard/TextBox';
import AddToCartButton from '~/src/containers/CartAddContainer';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    }
  }

  static getDerivedStateFromProps(props, _) {
    const { items } = props;
    const products = items.data ? items.data : [];

    return{
      product: products.find(s => s.id == props.children)
    }
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { product } = this.state;

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

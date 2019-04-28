import React, { Component } from 'react';

import { CartProvider } from '../contexts/cartContext';
import { CatalogConsumer } from '../contexts/catalogContext';

import CartButton from '~/src/components/CartButton';
import CartDetails from '~/src/components/CartDetails';

import CatalogPage from '~/src/components/CatalogPage';


class CartContainer extends Component {
  constructor(){
    super();
    this.state = {
      cart: []
    }

    this.buy = this.buy.bind(this);
  }

  buy(product_id, product_quantity = 1) {
    const { cart } = this.state;
    const id = parseInt(product_id);
    const quantity = parseInt(product_quantity);

    const index = cart.findIndex(x => x.id === id);

    if (index == -1) {
      this.setState({ cart: [...cart, { id, quantity }]})
    } else {
      cart[index].quantity += quantity;
      this.setState({ cart });
    }
  }

  productList(products){
    const { cart } = this.state;

    return (
      cart.map((item) =>
        ({
          ...item,
          product: products.find(x => x.id === item.id)
        })
      )
    )
  }

  handleDragStart(e, id) {
    e.dataTransfer.setData('text/plain', id);
  }

  render() {
    const { cart } = this.state;
    const cart_length = cart.length;

    return(
      <CartProvider
        value={{
          cart_length,
          buy: this.buy,
          dragStart: this.handleDragStart
        }}
      >
        <CatalogConsumer>
          {context =>
            <CartDetails>
              { this.productList(context) }
            </CartDetails>
          }
        </CatalogConsumer>

        <CartButton />
        <CatalogPage />

      </CartProvider>
    );
  }
}

export default CartContainer;

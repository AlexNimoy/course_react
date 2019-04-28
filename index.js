import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Products from '~/src/constants/Products';
import Catalog from '~/src/components/Catalog';
import CartButton from '~/src/components/CartButton';

import { CartProvider } from '~/src/contexts/cartContext';
import { BuyProvider } from '~/src/contexts/buyContext';
import CartDetails from '~/src/components/CartDetails';

class CatalogPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    }
    this.buy = this.buy.bind(this)
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

  productList(){
    const { cart, products } = this.state;
    return (
      cart.map((item) =>
        ({
          ...item,
          product: products.find(x => x.id === item.id)
        })
      )
    )
  }

  componentDidMount() {
    this.setState({ products: Products });
  }

  handleDragStart(e, id) {
    e.dataTransfer.setData('text/plain', id);
  }

  render() {
    const { cart, products } = this.state;
    const cart_length = cart.length;
    return (
      <div className='catalog-page'>
        <CartDetails>{ this.productList() }</CartDetails>
        <CartProvider value={{ cart_length, buy: this.buy }}>
          <CartButton />
        </CartProvider>
        <BuyProvider
          value={{
            buy: this.buy,
            dragStart: this.handleDragStart
          }}
        >
          <Catalog products={ products } />
        </BuyProvider>
      </div>
    );
  }
}

ReactDOM.render(
  <CatalogPage />,
  document.getElementById('root')
)

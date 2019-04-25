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

  buy(id, quantity) {
    const { cart } = this.state;
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

  render() {
    const { cart, products } = this.state;
    return (
      <div className='catalog-page'>
        <CartDetails>{ this.productList() }</CartDetails>
        <CartProvider value={ cart.length }>
          <CartButton />
        </CartProvider>
        <BuyProvider value={ this.buy }>
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

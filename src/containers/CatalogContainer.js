import React, { Component } from 'react';

import Products from '~/src/constants/Products';

import { CatalogProvider } from '../contexts/catalogContext';

import CartContainer from './CartContainer';

class CatalogContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.setState({ products: Products });
  }

  render(){
    return(
      <CatalogProvider value={ this.state.products }>
        <CartContainer />
      </CatalogProvider>
    );
  }
}

export default CatalogContainer;

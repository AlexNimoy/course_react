import React, { Component } from 'react';

import Products from '~/src/constants/Products';

import { CatalogProvider } from '../contexts/catalogContext';

class CatalogContainer extends Component {
  constructor(props) {
    super(props);
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
        { this.props.children }
      </CatalogProvider>
    );
  }
}

export default CatalogContainer;

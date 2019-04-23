import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Products from './constants/Products';
import Catalog from './components/Catalog';

class CatalogPage extends Component {
  constructor() {
    super();
    this.state = { products: [] }
  }

  componentDidMount() {
    this.setState({ products: Products });
  }

  render() {
    return <Catalog products={this.state.products} />;
  }
}

ReactDOM.render(
  <CatalogPage />,
  document.getElementById('root')
)

import React, { Component } from 'react';

import { CatalogProvider } from '../contexts/catalogContext';

import requst from 'superagent';

const url = {
  host: 'http://localhost:8085'
};

class CatalogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    requst
      .get(`${url.host}/products`)
      .then((res) => this.setState({products: res.body.data}))
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

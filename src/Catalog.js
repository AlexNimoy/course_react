import React, { Component } from 'react';

import requst from 'superagent';

const url = {
  host: 'https://cdn.contentful.com',
  spaces: 'zjzdam2xoc1c',
  environments: 'master',
  queryParams: {
    access_token: 'dz4UaK0ozplLKi1itrypil8SaWz26ILdnwnwEunsVa4',
    content_type: 'products'
  }
};

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  // /spaces/zjzdam2xoc1c/environments/master/entries?access_token=dz4UaK0ozplLKi1itrypil8SaWz26ILdnwnwEunsVa4&content_type=products

  componentDidMount() {
    requst
      .get(`${url.host}/spaces/${url.spaces}/environments/${url.environments}/entries`)
      .query(url.queryParams)
      .then((res) => this.setState({products: res.body.items}))
  }

  render() {
    const { products } = this.state;
    return(
      <div>
        <h1>Catalog</h1>
        {
          products.map((product) =>
            <div key={ product.sys.id } >{ product.fields.name }</div>
          )
        }
      </div>
    )
  }
}

export default Catalog;

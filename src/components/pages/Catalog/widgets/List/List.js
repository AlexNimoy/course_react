import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from 'components/shared/ProductCard';

class Catalog extends Component {
  render() {
    const { items } = this.props;

    return(
      <section className='catalog'>
        { items.data &&
          items.data.map((product) =>
          <ProductCard {...product} key={product.id}/>)
        }
      </section>
    );
  }
}

Catalog.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape(ProductCard.propTypes)
  )
}

export default Catalog;

import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

const Catalog = ({ products }) => (
  <section className='catalog'>
    {
      products.map((product, i) =>
      <ProductCard {...product} key={product.id}/>)
    }
  </section>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(ProductCard.propTypes)
  )
}

export default Catalog;

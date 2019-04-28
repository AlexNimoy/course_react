import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

const Catalog = ({ children }) => (
  <section className='catalog'>
    {
      children.map((product, i) =>
      <ProductCard {...product} key={product.id}/>)
    }
  </section>
);

Catalog.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape(ProductCard.propTypes)
  )
}

export default Catalog;

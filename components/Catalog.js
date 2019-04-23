import React from 'react';
import ProductCard from '~/components/ProductCard';

const Catalog = ({ products }) => (
  <section className='catalog'>
    {
      products.map((product, i) =>
        <ProductCard product={product} key={i}/>)
    }
  </section>
);

export default Catalog;

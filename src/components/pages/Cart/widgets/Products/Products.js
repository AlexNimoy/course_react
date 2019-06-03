import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import CheckoutForm from '../../CheckoutForm';

const Table = props => (
  <Fragment>
    <table className='cart__reciept' >
      <thead>
        <tr>
          <th>Product</th>
          <th>quantity</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        { props.cartProducts.map((item, key) =>
            <Product {...item} key={key} />
        )}
      </tbody>
    </table>
    <CheckoutForm cart={ props.cart }/>
  </Fragment>
)

Table.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape(
      Product.propTypes
    )
  )
}

export default Table;

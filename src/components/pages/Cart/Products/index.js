import React from 'react';
import PropTypes from 'prop-types';

import Item from '~/src/components/pages/Cart/Products/Item';
import { CartConsumer } from '~/src/contexts/cartContext';

const Table = ({ children }) => (
  <table className='cart__reciept' >
    <thead>
      <tr>
        <th>Product</th>
        <th>quantity</th>
        <th>price</th>
      </tr>
    </thead>
    <CartConsumer>
      {context =>
        <tbody>
          {context.productList(children).map((item, key)=>
            <Item {...item} key={key} />
          )}
        </tbody>
      }
    </CartConsumer>
  </table>
)

Table.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape(
      Item.propTypes
    )
  )
}

export default Table;

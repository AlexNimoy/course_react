import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
class Table extends Component {
  productList(){
    const { cart, items } = this.props;
    const products = items.data;

    return (
      cart.map((item) =>
        ({
          ...item,
          product: products.find(x => x.id === item.id)
        })
      )
    )
  }

  render() {
    return(
      <table className='cart__reciept' >
        <thead>
          <tr>
            <th>Product</th>
            <th>quantity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          { this.productList().map((item, key) =>
              <Item {...item} key={key}  />
          )}
        </tbody>
      </table>
    )
  }
}


Table.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape(
      Item.propTypes
    )
  )
}

export default Table;

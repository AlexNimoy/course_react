import React, { Fragment, Component } from 'react';

import CartDetails from '../Products';
import { Redirect } from 'react-router-dom';

class Cart extends Component {
  renderRedirect() {
    if (this.props.items.length === 0) {
      return (
        <Redirect to={{
          pathname: '/',
          state: 'Cart is empty'
        }}/>
      )
    }
  }

  render() {
    return(
      <Fragment>
        { this.renderRedirect() }
        <CartDetails/>
      </Fragment>
    )
  }
}

export default Cart;

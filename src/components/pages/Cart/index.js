import React, { Fragment, Component } from 'react';

import CartDetailsContainer from '~/src/containers/CartDetailsContainer';
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
        <CartDetailsContainer/>
      </Fragment>
    )
  }
}

export default Cart;

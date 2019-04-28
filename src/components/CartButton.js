import React, { Component, Fragment } from 'react';
import { CartConsumer } from '../contexts/cartContext';

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
  }

  handleDragEnter() {
    this.setState({ hover: true });
  }

  handleDragLeave() {
    this.setState({ hover: false });
  }

  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  handleDrop(e, func) {
    func(e.dataTransfer.getData('text/plain'));
    this.setState({ hover: false });
  }

  render() {
    let cartClass = ['cart__drop_zone'];
    if(this.state.hover) { cartClass.push('target') }

    return(
      <Fragment>
        <CartConsumer>
          { context =>
            <div className={ cartClass.join(' ') }
              onDragEnter={ this.handleDragEnter }
              onDragLeave={ this.handleDragLeave }
              onDragOver={ this.handleDragOver }
              onDrop={ (e) => this.handleDrop(e, context.buy) }
            >
              <div className='cart__drop_zone-label'>Drop Product here</div>
              <button>In cart: { context.cart_length }</button>
            </div>
          }
        </CartConsumer>
      </Fragment>
    );
  }
}

export default CartButton;

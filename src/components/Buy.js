import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BuyConsumer } from '../contexts/buyContext';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  updateQuantity(e) {
    this.setState({ quantity: e.target.value });
  }

  render() {
    const { children } = this.props;
    const { quantity } = this.state;

    return(
      <div>
        <input
          onChange={ this.updateQuantity }
          type='number'
          step='1'
          min='1'
          max='1000'
          value={ quantity }
        />

        <BuyConsumer>
          {context =>
            <button
              onClick={() =>
                context.buy(children, quantity)
              }
            >
              Buy
            </button>
          }
        </BuyConsumer>
      </div>
    )
  }
}

Buy.propTypes = {
  children: PropTypes.number.isRequired
}

export default Buy;

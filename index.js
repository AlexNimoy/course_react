import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Receipt from '~/src/Receipt';

class ReceiptComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { positions: [] };
  }

  componentDidMount() {
    const positions = [
      { id: 1, name: 'Product 1', cost: 2.50 },
      { id: 2, name: 'Product 2', cost: 2.99 },
      { id: 3, name: 'Product 3', cost: 3.70 }
    ];

    this.setState({ positions });
  }

  render() {
    const { positions } = this.state;
    const receipt = new Receipt(positions);

    return (
      <table border='1' width='25%'>
        <thead>
          <tr>
            <td width='85%' >Product</td>
            <td>Price</td>
          </tr>
        </thead>

        <tbody>
          <ReceiptPositions
            positions={ receipt.show() }
          />

          <Amount amount={ receipt.amount() } />
          <Total total={ receipt.total() }/>
        </tbody>
      </table>
    );
  }
}

const Amount = ({ amount }) => (
  <tr><td>Amount</td><td>{amount}</td></tr>
);

const Total = ({ total }) => (
  <tr><td>Total</td><td>{total}</td></tr>
);

const ReceiptPositions = ({ positions }) => (
  positions.map((i, index) =>
    <tr key={ index }>
      <td>{ i.name }</td>
      <td>{ i.cost }</td>
    </tr>
  )
);

ReactDOM.render(
  <ReceiptComponent />,
  document.getElementById('root')
)

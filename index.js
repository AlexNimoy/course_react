import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Arithmetic from './src/Arithmetic';

class Calculate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x, y, operation } = this.props;

    return new Arithmetic(x, y)[operation]() ;
  }
}

ReactDOM.render(
  <Calculate x='4' y='2' operation='add' />,
  document.getElementById('root')
)

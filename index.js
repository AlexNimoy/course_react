import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component {
  render() {
    return "Hello World!";
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
)

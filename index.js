import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const delta = e.shiftKey ? 10 : 1;
    this.setState((prevState) => ({ value: prevState.value + delta }));
  }

  render() {
    const { value } = this.state;
    return(
      <div>
        <h1>Counter: { value }</h1>
        <button
          onClick={ this.handleClick }
        >
          Increment
        </button>
      </div>
    );
  }
}

Counter.defaultPrors = {
  value: 0
}

ReactDOM.render(
  <Counter value={1}/>,
  document.getElementById('root')
)

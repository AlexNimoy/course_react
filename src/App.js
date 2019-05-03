import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { stateProp: 'oldValue' }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    return null;
  }

  static getDerivedStateFromProps(prev, state) {
    console.log('getDerivedStateFromProps', prev, state);
    return state;
  }

  shouldComponentUpdate() {
    console.log(this.shouldComponentUpdate);
    return true;
  }

  componentDidUpdate() {
    console.log(this.shouldComponentUpdate);
    return true;
  }

  render() {
    return (
      <button onClick={() => this.setState({ stateProp: 'newValue' })}>
        Click Me
      </button>
    )
  }
}

export default App;

import React, { Component } from 'react';

import Person from './Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.currentTarget.value })
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <input
          type='text'
          onChange={ this.handleNameChange }
        />
        <Person name={ name } />
      </div>
    )
  }
}

export default App;

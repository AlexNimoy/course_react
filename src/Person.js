import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLingName: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.name.length > 4)
      return { isLingName: true }
    else
      return { isLingName: false }
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        name: { name }
        {this.state.isLingName ? ' very long name' : '' }
      </div>
    )
  }
}

export default Person;

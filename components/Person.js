import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Unknown',
      lastName: 'Unknown'
    }
  }

  setField(name, e) {
    this.setState({ [name]: e.target.value })
  }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <div>
        <ul>
          <li>First Name: { firstName }</li>
          <li>Last Name: { lastName }</li>
        </ul>
        <label>First Name
          <input
            onChange={ (e) => this.setField('firstName', e) }
            value={ firstName }
          />
        </label>
        <label>
          Last Name
          <input
            onChange={ (e) => this.setField('lastName', e) }
            value={ lastName }
          />
        </label>
      </div>
    );
  }
}

export default Person;

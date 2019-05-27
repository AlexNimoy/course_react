import React, { Component } from 'react';

import { assign, mapValues } from 'lodash/object';

import classNames from 'classnames';

class ContactPage extends Component{
  constructor(props) {
    super(props);

    this.form = {};
    this.state = { errors: {} };
    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e){
    e.preventDefault();

    this.setState({ errors: {} });

    const values = mapValues(this.form, 'value');

    if(!values.email || values.email.length < 3) {
      this.setState(assign(
        {},
        this.state,
        { errors: assign({}, this.state.errors, { email: true }) }
      ));
    }

    alert(JSON.stringify(values));
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return(
      <div>
        { console.log(this.state) }
        <h1>ContactPage</h1>
        <form className="ui form" onSubmit={ this.onSubmit }>
          <Text
            label="Full name"
            name="fullName"
            fieldRef={ this.generateRef('fullName') }
          />
          <Text
            label="Email"
            name="email"
            error={ this.state.errors.email }
            fieldRef={ this.generateRef('email') }
          />
          <Textarea
            label="Message"
            name="message"
            fieldRef={ this.generateRef('message') }
          />
          <input
            className="ui button primary"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    )
  }
}

export default ContactPage;

class Text extends Component {
  render() {
    const { label, name, fieldRef, error } = this.props;
    return (
      <div className={ classNames('ui field', { error }) }>
        <label htmlFor={ name }>
          { label }
        </label>
        <input
          id={ name }
          className='ui input'
          name={ name }
          ref={ fieldRef }
        />
      </div>
    );
  }
}

class Textarea extends Component {
  render() {
    const { label, name, fieldRef } = this.props;
    return (
      <div className="ui field">
        <label htmlFor={ name }>
          { label }
        </label>
        <textarea
          id={ name }
          className="ui input"
          name={ name }
          ref={ fieldRef }
        />
      </div>
    );
  }
}

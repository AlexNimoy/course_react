import React, { Component } from 'react';
import { set, assign } from 'lodash/object';
import classNames from 'classnames';
class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    alert(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form','errors', fieldName],
      false
    ));
  }

  handleChange(fieldName) {
    return (e) => {

      switch(fieldName) {
        case 'email':
          this.clearError(fieldName);
          if(e.target.value.length < 3)
            this.setState(set(
              assign({}, this.state),
              'form.errors.email',
              true
            ));
          break;
      }

      this.setState(set(
        assign({}, this.state),
        ['form', 'values', fieldName],
        e.target.value
      ))
    }
  }

  render() {
    const { fullName, email, message } = this.state.form.values;

    return (
      <div>
        <h1>Contact Page</h1>
        <form
          onSubmit={ this.onSubmit }
          className='ui form'
        >
          <Text
            name='fullName'
            label='Full Name'
            value={ fullName }
            onChange={ this.handleChange('fullName') }
          />
          <Text
            name='email'
            label='Email'
            value={ email }
            error={ this.state.form.errors.email }
            onChange={ this.handleChange('email') }
          />
          <TextArea
            name='message'
            label='Message'
            value={ message }
            onChange={ this.handleChange('message') }
          />
          <input type='submit' value='Submit' className='' />
        </form>
      </div>
    );
  }
}

export default ContactPage;

const Text = ({ name, value, onChange, label, error }) => (
  <div className={ classNames('ui field', { error }) }>
    <label htmlFor={ name }>{ label }</label>
    <input
      name={ name }
      id={ name }
      className='ui field'
      type='text'
      value={ value }
      onChange={ onChange }
    />
  </div>
);

const TextArea = ({ name, value, onChange, label }) => (
  <div className='ui field'>
    <label htmlFor={ name }>{ label }</label>
    <textarea
      name={ name }
      id={ name }
      className='ui field'
      value={ value }
      onChange={ onChange }
    />
  </div>
);

import React, { Component } from 'react';
import { set, assign } from 'lodash/object';

import Text from './Fields/Text';
import TextArea from './Fields/TextArea';
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

  clearError(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form','errors', fieldName],
      false
    ));
  }

  render(){
    const { fullName, email, message } = this.state.form.values;

    return(
      <div>
        <h1>ContactPage</h1>
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
    )
  }
}

export default ContactPage;

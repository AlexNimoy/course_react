import React from 'react';
import { withFormik, Formik, Form, Field } from 'formik';
import request from 'superagent';

const Errors = ({ errors, touched, fieldName }) => {
  if(errors[fieldName] && touched[fieldName]) {
    return(
      <div className='error'>
        { errors[fieldName] }
      </div>
    );
  }

  return null;
}

const CheckoutFrom = props => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit
  } = props;

  return(
    <div className='checkout_form'>
      <h1>Checkout</h1>
      <Formik
        render={() => (
          <Form onSubmit={  handleSubmit  }>
            <Field
              name='fio'
              onChange={ handleChange }
              onBlur={ handleBlur }
              placeholder='ФИО'
            />
            <Errors {...props} fieldName='fio'/>

            <Field
              name='phone'
              onChange={ handleChange }
              onBlur={ handleBlur }
              placeholder='Телефон'
            />
            <Errors {...props} fieldName='phone'/>

            <Field
              name='email'
              onChange={ handleChange }
              onBlur={ handleBlur }
              placeholder='Email'
            />
            <Errors {...props} fieldName='email'/>

            <Field
              name='address'
              onChange={ handleChange }
              onBlur={ handleBlur }
              placeholder='Адрес'
            />
            <Errors {...props} fieldName='address'/>

            <button type='submit'>Submit</button>
          </Form>
        )}
      />
    </div>
  );
}

const ContactPageFormContainer = withFormik({
  handleSubmit: (values) => {
    request
    .post('http://localhost:8085/checkout')
    .send(values)
    .then(res => {
       alert(JSON.stringify(res.body));
    });
  },

  validate: values => {
    const errors = {};

    if (!values.fio) {
      errors.fio = 'Required';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.address) {
      errors.address = 'Required';
    }

    return errors;
  }
})(CheckoutFrom);

export default ContactPageFormContainer;

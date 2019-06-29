import React from 'react';
import { withFormik, Formik, Form, Field } from 'formik';
import APIRequestCheckout from 'helpers/APIRequestCheckout';
import FormErrors from 'components/shared/FormErrors';

const CheckoutForm = props => {
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
            <FormErrors {...props} fieldName='fio'/>

            <Field
              name='phone'
              onChange={ handleChange }
              onBlur={ handleBlur }
              placeholder='Телефон'
            />
            <FormErrors {...props} fieldName='phone'/>

            <Field
              name='email'
              onChange={ handleChange }
              onBlur={ handleBlur }
              placeholder='Email'
            />
            <FormErrors {...props} fieldName='email'/>

            <Field
              name='address'
              onChange={ handleChange }
              onBlur={ handleBlur }
              placeholder='Адрес'
            />
            <FormErrors {...props} fieldName='address'/>

            <button type='submit'>Submit</button>
          </Form>
        )}
      />
    </div>
  );
}

const CheckoutFormContainer = withFormik({
  handleSubmit: (values) => {
    APIRequestCheckout(values).then(
      response => alert(JSON.stringify(response)),
      error => calert(JSON.stringify(error))
    );
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
})(CheckoutForm);

export default CheckoutFormContainer;

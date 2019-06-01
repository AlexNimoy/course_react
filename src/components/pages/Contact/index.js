import React from 'react';
import { withFormik, Form, Field, FieldArray } from 'formik';

const Error = ({ children }) => {
  if(children)
    return(
      <span style={{ color: 'red' }} >{ children }</span>
    );

  return null;
};

const ContactPage = ({ errors, values }) => (
  <Form>
    <div>
      <Field
        type='text'
        name='title'
        placeholder='title'
      />
      <Error>{ errors.title }</Error>
    </div>

    <div>
      <h2>Periods</h2>
      <FieldArray
        name='periods'
        render={
          (arrayHelpers) => (
            <div>
              { values.periods && values.periods.length > 0 && values.periods.map(
                (_, index) => (
                  <div key={ index }>
                    <Field type='date' name={`periods[${index}].startFrom`} placeholder='From' />
                    <Field type='date' name={`periods[${index}].endAt`} placeholder='End' />
                    <Field type='number' name={`periods[${index}].price`} placeholder='Price' />
                    <button
                      type='button'
                      onClick={()=> arrayHelpers.remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                )
              )}

              <button
                type='button'
                onClick={() => arrayHelpers.push({
                  startFrom: '',
                  endAt: '',
                  price: 0
                })}
              >
                Add Period
              </button>
            </div>
          )
        }
      />
    </div>

    <button type='submit'>Save</button>
  </Form>
);

const ContactPageFormContainer = withFormik({
  mapPropsToValues: () => ({
    title: 'New Price List'
  }),
  handleSubmit: (values) => alert(JSON.stringify(values)),
  validate: (values) => {
    const errors = {};

    if(!values.title)
      errors.title = 'Required';

    return errors;
  }
})(ContactPage);

export default ContactPageFormContainer;

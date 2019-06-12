import React from 'react';
import { create } from 'react-test-renderer';
import FormErrors from '../FormErrors';

test('return error div', () => {
  const component = create(
    <FormErrors
      errors = {{ fio: 'Required' }}
      touched = {{ fio: true }}
      fieldName = 'fio'
    />
  );

  expect(component.toJSON()).toMatchSnapshot();
})

test('return null if not have errors', () => {
  const component = create(
    <FormErrors
      errors = {{}}
      touched = {{ fio: true }}
      fieldName = 'fio'
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
})

test('return null if exist error for other fields', () => {
  const component = create(
    <FormErrors
      errors = {{ phone: 'Required' }}
      touched = {{ fio: true }}
      fieldName = 'fio'
    />
  );

  expect(component.toJSON()).toMatchSnapshot();
})

test('return null if field not touched', () => {
  const component = create(
    <FormErrors
      errors = {{ fio: 'Required' }}
      touched = {{}}
      fieldName = 'fio'
    />
  );

  expect(component.toJSON()).toMatchSnapshot();
})

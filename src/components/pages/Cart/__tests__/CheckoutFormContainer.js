import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import CheckoutFormContainer from '../CheckoutForm';

describe('<CheckoutFormContainer>', () => {
  const form = render(<CheckoutFormContainer />);

  it('from include fields', () => {
    expect(form.getByPlaceholderText('ФИО')).toBeInTheDocument();
    expect(form.getByPlaceholderText('Телефон')).toBeInTheDocument();
    expect(form.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(form.getByPlaceholderText('Адрес')).toBeInTheDocument();
  });

  it('include submit button', () => {
    expect(form.getByText('Submit')).toBeInTheDocument();
    expect(form.getByText('Submit')).toHaveAttribute('type', 'submit')
  });

  it('inclue h1 tag', () => {
    expect(form.getByText('Checkout')).toMatchSnapshot();
  });

  it('not have error div', () => {
    expect(form.queryByTestId('error-text')).not.toBeInTheDocument();
  });
});

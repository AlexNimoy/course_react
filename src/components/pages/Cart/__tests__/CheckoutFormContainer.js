import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import CheckoutFormContainer from '../CheckoutForm';

test('from include fields', () => {
  const form = render(<CheckoutFormContainer />);
  console.log(form);
})

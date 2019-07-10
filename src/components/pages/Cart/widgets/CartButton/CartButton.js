import React from 'react';

import { Link } from 'react-router-dom';
import { cartPath } from 'helpers/routes';

const Button = props => (
  <Link to={ cartPath() }>
    <button>In cart: { props.items.length }</button>
  </Link>
)

export default Button;

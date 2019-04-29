import React from 'react';
import ReactDOM from 'react-dom';

import CatalogContainer from '~/src/containers/CatalogContainer';
import CartContainer from '~/src/containers/CartContainer';

ReactDOM.render(
  <CatalogContainer>
    <CartContainer/>
  </CatalogContainer>,
  document.getElementById('root')
)

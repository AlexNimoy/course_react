import React from 'react';

import CatalogContainer from '~/src/containers/CatalogContainer';
import CartContainer from '~/src/containers/CartContainer';
import CatalogPage from '~/src/components/CatalogPage';
import CartButton from '~/src/components/CartButton';
import CartDetails from '~/src/components/CartDetails';

 const App = () => (
  <CatalogContainer>
    <CartContainer>
      <CartDetails />
      <CartButton />
      <CatalogPage />
    </CartContainer>
  </CatalogContainer>
);

export default App;

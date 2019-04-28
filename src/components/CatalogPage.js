import React from 'react';

import { CatalogConsumer } from '~/src/contexts/catalogContext';
import Catalog from '~/src/components/Catalog';

const CatalogPage = () => (
  <div className='catalog-page'>
    <CatalogConsumer>
      { context => <Catalog>{ context }</Catalog> }
    </CatalogConsumer>
  </div>
)

export default CatalogPage;

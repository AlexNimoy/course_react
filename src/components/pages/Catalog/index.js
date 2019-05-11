import React, { Fragment } from 'react';

import { CatalogConsumer } from '~/src/contexts/catalogContext';
// import Catalog from './Catalog';
import Slides from '~/src/components/shared/Slides';
import ProductsContainer from '~/src/containers/ProductsContainer';

const CatalogPage = () => (
  <div className='catalog-page'>
    <CatalogConsumer>
      { context =>
        <Fragment>
          <Slides>{ context }</Slides>
          {/* <Catalog>{ context }</Catalog> */}
          <ProductsContainer/>
        </Fragment>
      }
    </CatalogConsumer>
  </div>
)

export default CatalogPage;

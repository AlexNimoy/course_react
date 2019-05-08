import React, { Fragment } from 'react';

import { CatalogConsumer } from '~/src/contexts/catalogContext';
import Catalog from '~/src/components/pages/Catalog/Catalog';
import Slides from '~/src/components/shared/Slides';

const CatalogPage = () => (
  <div className='catalog-page'>
    <CatalogConsumer>
      { context =>
        <Fragment>
          <Slides>{ context }</Slides>
          <Catalog>{ context }</Catalog>
        </Fragment>
      }
    </CatalogConsumer>
  </div>
)

export default CatalogPage;

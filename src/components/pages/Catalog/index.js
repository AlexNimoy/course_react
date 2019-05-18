import React, { Fragment } from 'react';

import CatalogContainer from '~/src/containers/CatalogContainer';
import SlidesContainer from '~/src/containers/SlidesContainer';

const CatalogPage = () => (
  <div className='catalog-page'>
    <Fragment>
      <SlidesContainer/>
      <CatalogContainer/>
    </Fragment>
  </div>
)

export default CatalogPage;

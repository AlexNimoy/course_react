import React from 'react';

import List from './widgets/List';
import Slides from './widgets/Slides';
import Helmet from 'react-helmet';

const CatalogPage = () => (
  <div className='catalog-page'>
    <Helmet>
      <title>Catalog</title>
    </Helmet>
    <Slides/>
    <List/>
  </div>
)

export default CatalogPage;

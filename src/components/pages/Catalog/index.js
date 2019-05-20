import React from 'react';

import List from './widgets/List';
import Slides from './widgets/Slides';

const CatalogPage = () => (
  <div className='catalog-page'>
    <Slides/>
    <List/>
  </div>
)

export default CatalogPage;

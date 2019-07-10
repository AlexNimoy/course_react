import React, { Fragment } from 'react';
import PreviewImage from './PreviewImage';

const Images = ({ children, handle }) => (
  <Fragment>
    {
      children.map((image, index) =>
        <PreviewImage
          handle={ handle }
          index={ index }
          key={ index }
          { ...image }
        />
      )
    }
  </Fragment>
);

export default Images;

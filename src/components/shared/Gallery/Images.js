import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

Images.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape(Image.propTypes)
  )
}

export default Images;

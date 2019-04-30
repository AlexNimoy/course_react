import React from 'react';
import PropTypes from 'prop-types';

const Image = ({imageUrl, alt, width, height}) => (
  <img
    srcSet={imageUrl}
    alt={alt}
    width={width}
    height={height}
  />
);

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Image;

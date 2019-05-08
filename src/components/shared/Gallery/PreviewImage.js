import React from 'react';

const PreviewImage = ({ imageUrl, alt, handle, index }) => (
  <img
    className="prewiew__image"
    onClick={ () => handle(index) }
    srcSet={ imageUrl }
    alt={ alt }
    width="100"
    height="100"
  />
)

export default PreviewImage;

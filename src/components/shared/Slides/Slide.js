import React from 'react';
import Image from '~/src/components/shared/ProductCard/Image';

const Slide = ({ title, images }) => {
  if (images) {
    return(
      <div className="slide">
        <h1>{ title }</h1>
        <Image size='big' {...images[0]} />
      </div>
    )
  }
  return null;
}

export default Slide;

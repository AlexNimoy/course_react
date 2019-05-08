import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  calculateSize() {
    let w, h = 0;
    switch (this.props.size) {
      case 'small':
        w = h = 100;
        break;
      case 'big':
        [w, h] = [600, 400];
        break;
      default:
        w = h  = 200;
    }
    return [w, h];
  }

  render() {
    const { imageUrl, alt } = this.props;

    return(
      <img
        srcSet={ imageUrl }
        alt={ alt }
        width={ this.calculateSize()[0] }
        height={ this.calculateSize()[1] }
      />
    )
  }
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Image;

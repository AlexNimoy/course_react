import React, { Component } from 'react';
import Images from './Images';
import Image from '~/src/components/shared/ProductCard/Image';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      clientX: 0
    }

    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleImageSelect = this.handleImageSelect.bind(this);
  }

  handleRight() {
    this.listImages('right');
  }

  handleLeft() {
    this.listImages('left');
  }

  handleImageSelect(index) {
    this.setState({ selected: index + 1})
  }

  handleMouseDown(e) {
    e.preventDefault();
    this.setState({ clientX: e.clientX });
  }

  handleMouseUp(e) {
    e.preventDefault();
    const direction = (this.state.clientX > e.clientX) ? 'left' : 'right';
    this.listImages(direction);
  }

  listImages(direction) {
    const { selected } = this.state;
    const { children } = this.props;
    let next = '';

    if(direction === 'left') {
      next = (selected > 1) ? selected - 1 : children.length;
    }

    if(direction === 'right') {
      next = (selected < children.length) ? selected + 1 : 1;
    }

    this.setState({ selected: next})
  }

  render() {
    const { children } = this.props;
    return(
      <div className="gallery">
        <div
          className="gallery__big-image"
          onMouseDown={ (e) => this.handleMouseDown(e) }
          onMouseUp={ (e) => this.handleMouseUp(e) }
        >
          <Image size='big' {...children[this.state.selected - 1]} />
        </div>
        <button onClick={ () => this.handleLeft() }>&larr;</button>
        <button onClick={ () => this.handleRight() }>&rarr;</button>
        <div className="preview">
          <Images handle={ this.handleImageSelect }>{ children }</Images>
        </div>
      </div>
    )
  }
}

export default Gallery;

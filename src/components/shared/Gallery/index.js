import React, { Component } from 'react';
import Gallery from '~/src/components/shared/Gallery/Gallery';
import Modal from '~/src/components/shared/Gallery/Modal';

class GalleryLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return(
      <div className="gallery-layout">
        <button onClick={() => this.setState({ isOpen: true })}>
          &equiv;
        </button>
        { isOpen &&
          <Modal
            onClickOutside={(e) =>
              e.target.className == 'modal-overlay' &&
              this.setState({ isOpen: false })}
          >
            { children }
          </Modal>
        }
        <Gallery>{ children }</Gallery>
      </div>
    )
  }
}

export default GalleryLayout;

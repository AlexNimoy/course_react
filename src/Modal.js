import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '~/src/css/Modal';

const Modal = ({ onClickOutside }) => (
  <div>
    {ReactDOM.createPortal(
      <div className='modal-overlay' onClick={ onClickOutside } >
        <div className='modal'>Modal window</div>
      </div>,
      document.getElementById('modal')
    )}
  </div>
)

class AppModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ isOpen: true })}>open Modal</button>
        {isOpen &&
          <Modal onClickOutside={(e) =>
            e.target.className == 'modal-overlay' &&
            this.setState({ isOpen: false })} />
        }
      </div>
    )
  }
}

export default AppModal;

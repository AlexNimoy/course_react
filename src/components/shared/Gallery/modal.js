import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

import '~/css/Modal';

const Modal = ({ children, onClickOutside }) => (
  <div>
    {ReactDOM.createPortal(
      <div
        className='modal-overlay'
        onClick={ onClickOutside }
      >
        <div className='modal'>
          <Gallery>{ children }</Gallery>
        </div>
      </div>,
      document.getElementById('modal')
    )}
  </div>
)

export default Modal;

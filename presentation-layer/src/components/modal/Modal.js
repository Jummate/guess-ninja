import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/Button';
// import Input from "../Input/Input";
import './Modal.css';

let portalRoot = document.getElementById('modal-root');
if (!portalRoot) {
  portalRoot = document.createElement('div');
  portalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(portalRoot);
}

const Modal = ({ onClose, title, dialog = true, children }) => {
  return ReactDOM.createPortal(
    <>
      <div className='modal-overlay'></div>
      <div className='modal'>
        <div className='modal-header'>
          <h3>{title}</h3>
          <h2
            className='extra-close'
            onClick={onClose}
          >
            &times;
          </h2>
        </div>
        <hr />
        <div className='modal-body'>{children}</div>
        {!dialog && (
          <div className='modal-footer'>
            <Button
              onClick={onClose}
              buttonSize='btn--medium'
              buttonStyle='btn--danger--solid'
            >
              Close
            </Button>
            <Button
              buttonSize='btn--medium'
              buttonStyle='btn--success--solid'
            >
              Save
            </Button>
          </div>
        )}
      </div>
    </>,
    portalRoot
  );
};
export default Modal;

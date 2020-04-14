import React from 'react';
import './Modal.css'
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <a href="javascript:;" className="modal-close" onClick={handleClose}>
          close
        </a>
        </section>
      </div>
    );
  };

  export default Modal
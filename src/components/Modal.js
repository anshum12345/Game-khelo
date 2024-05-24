import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const modalContentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    width: '80%',
    maxWidth: '600px'
  };

  const modalHeaderFooterStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const buttonStyle = {
    background: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const buttonHoverStyle = {
    background: '#0056b3'
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
        <div style={modalHeaderFooterStyle}>
          <h4>Rules</h4>
        </div>
        <div>
          {children}
        </div>
        <div style={modalHeaderFooterStyle}>
          <button 
            onClick={onClose} 
            style={buttonStyle} 
            onMouseOver={e => e.currentTarget.style.background = buttonHoverStyle.background} 
            onMouseOut={e => e.currentTarget.style.background = buttonStyle.background}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

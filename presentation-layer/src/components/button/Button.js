import React from 'react';
import './Button.css';

const Button = ({ buttonStyle, buttonSize, onClick, children }) => {
  return (
    <button
      type='button'
      className={`btn ${buttonStyle} ${buttonSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;

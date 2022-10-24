import React from 'react';

import './Button.css';

const Button = ({ buttonStyle, buttonSize, children }) => {
  return (
    <button
      type='button'
      className={`btn ${buttonStyle} ${buttonSize}`}
    >
      {children}
    </button>
  );
};
export default Button;

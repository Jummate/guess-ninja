import React from 'react';

import './Input.css';

const Input = ({ type = 'text', placeholder }) => {
  return (
    <input
      type={type}
      className='input'
      placeholder={placeholder}
    />
  );
};

export default Input;

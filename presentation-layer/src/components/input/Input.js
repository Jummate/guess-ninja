import React from "react";

import "./Input.css";

const Input = ({ type = "text", placeholder, value, width, onChange }) => {
  return (
    <input
      type={type}
      className={`input ${width}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

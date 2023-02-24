import React from "react";

import "./Input.css";

const Input = ({
  type = "text",
  placeholder,
  value,
  width,
  onChange,
  min = 2,
  max = 5,
}) => {
  return (
    <input
      type={type}
      className={`input ${width}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  );
};

export default Input;

import React, { forwardRef } from "react";

import "./Input.css";

const Input = forwardRef(
  (
    { type = "text", placeholder, value, width, onChange, min = 2, max = 5 },
    ref
  ) => {
    return (
      <input
        type={type}
        ref={ref}
        className={`input ${width}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    );
  }
);

export default Input;

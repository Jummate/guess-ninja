import React from "react";
import "./Button.css";

export const Button = ({
  buttonStyle,
  buttonSize,
  onClick,
  width,
  children,
}) => {
  return (
    <button
      type="button"
      className={`btn ${buttonStyle} ${buttonSize} ${width}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

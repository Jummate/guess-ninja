import React from "react";

import "./Header.css";

export const Header = ({ hOneText, hFourText, height, mt, tRadius, bg }) => {
  return (
    <header
      style={{
        height: `${height}%`,
        marginTop: `${mt ? mt : 0}px`,
        borderTopLeftRadius: `${tRadius ? tRadius : 0}px`,
        borderTopRightRadius: `${tRadius ? tRadius : 0}px`,
        backgroundColor: `${bg ? bg : "#000"}`,
      }}
    >
      <h1>{hOneText.toUpperCase()}</h1>
      {hFourText ? <h4>{hFourText}</h4> : null}
    </header>
  );
};

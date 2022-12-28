import React from "react";

import "./Footer.css";

const Footer = ({ height, bg, children }) => {
  return (
    <footer
      style={{
        height: `${height}%`,
        // borderBottomLeftRadius: `${bRadius ? bRadius : 0}px`,
        // borderBottomRightRadius: `${bRadius ? bRadius : 0}px`,
        backgroundColor: `${bg ? bg : "#000"}`,
      }}
    >
      {children}
    </footer>
  );
};

export default Footer;

import React from "react";
import SoundIcon from "./SoundController";

const Menu = ({ children }) => {
  const styles = {
    height: "100%",
    width: "100%",
    background: "linear-gradient(black, rgba(0,0,0, 0.7)",
    borderRadius: "20px",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "0",
    left: "0",
    zIndex: "1",
  };
  return (
    <div style={styles}>
      <SoundIcon />
      {children}
    </div>
  );
};

export default Menu;

import React from "react";

const Overlay = () => {
  const styles = {
    height: "100%",
    width: "100%",
    background: "linear-gradient(black, rgba(0,0,0, 0.4))",
    borderRadius: "20px",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "1",
  };
  return <div style={styles}></div>;
};

export default Overlay;

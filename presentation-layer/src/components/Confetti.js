import ReactConfetti from "react-confetti";
import React, { useEffect, useState } from "react";

export const Confetti = ({ opacity = 0.1 }) => {
  // const {
  //   initialState: { confettiOpacity },
  // } = context;
  // const root = document.getElementById("root");
  const [windowDimenson, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const monitorDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", monitorDimension);
    return window.removeEventListener("resize", monitorDimension);
  });
  return (
    <>
      <ReactConfetti
        width={windowDimenson.width}
        height={windowDimenson.height}
        opacity={opacity}
      />
    </>
  );
};

import ReactConfetti from "react-confetti";
import React, { useEffect, useState } from "react";

const Confetti = () => {
  const root = document.getElementById("root");
  const [windowDimenson, setWindowDimension] = useState({
    width: root.innerWidth,
    height: root.innerHeight,
  });

  const monitorDimension = () => {
    setWindowDimension({
      width: root.innerWidth,
      height: root.innerHeight,
    });
  };

  useEffect(() => {
    root.addEventListener("resize", monitorDimension);
    return root.removeEventListener("resize", monitorDimension);
  });
  return (
    <>
      <ReactConfetti
        width={windowDimenson.width}
        height={windowDimenson.height}
        opacity={0.1}
        numberOfPieces={200}
      />
    </>
  );
};

export default Confetti;

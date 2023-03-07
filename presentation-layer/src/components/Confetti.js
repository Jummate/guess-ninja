import ReactConfetti from "react-confetti";
import React, { useEffect, useState } from "react";

const Confetti = () => {
  const root = document.getElementById("root");
  const [rootDimenson, setRootDimension] = useState({
    width: root.innerWidth,
    height: root.innerHeight,
  });

  const monitorDimension = () => {
    setRootDimension({
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
        width={rootDimenson.width}
        height={rootDimenson.height}
        opacity={0.1}
      />
    </>
  );
};

export default Confetti;

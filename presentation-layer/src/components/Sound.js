import React from "react";

export const Sound = ({ src, loop = true, autoPlay = true }) => {
  return (
    <audio
      loop={loop}
      autoPlay={autoPlay}
    >
      <source src={src}></source>
    </audio>
  );
};

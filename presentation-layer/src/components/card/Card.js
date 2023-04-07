import React from "react";

import "./Card.css";

export const Card = ({ headerText, content }) => {
  return (
    <article className="Card__container">
      <h6>{headerText}</h6>
      <p>{content}</p>
    </article>
  );
};

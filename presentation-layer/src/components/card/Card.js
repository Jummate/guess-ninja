import React from "react";

import "./Card.css";

const Card = ({ headerText, content }) => {
  return (
    <article className="Card__container">
      <h5>{headerText}</h5>
      <p>{content}</p>
    </article>
  );
};

export default Card;

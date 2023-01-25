import React from "react";
import "./Loading.css";

const Loading = ({ isSessionGame, sessionCount }) => (
  <div className="loading">
    {isSessionGame ? <h1>SESSION {sessionCount}</h1> : null}
    <h3>Loading...</h3>
  </div>
);

export default Loading;

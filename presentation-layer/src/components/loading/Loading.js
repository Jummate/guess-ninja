import React from "react";
import "./Loading.css";

const Loading = ({ isSessionGame, sessionCount }) => (
  <div className="loading">
    {isSessionGame ? (
      <h1>
        ROUND <span style={{ color: "#49cdcb" }}>{sessionCount}</span>
      </h1>
    ) : null}
    <h3>Loading...</h3>
  </div>
);

export default Loading;

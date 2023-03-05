import React from "react";
import "./Loading.css";
import { color_type } from "../../utils/reusable-variables";

const Loading = ({ isSessionGame, sessionCount }) => {
  const { PRIMARY } = color_type;
  return (
    <div className="loading">
      {isSessionGame ? (
        <h1>
          ROUND <span style={{ color: `${PRIMARY}` }}>{sessionCount}</span>
        </h1>
      ) : null}
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;

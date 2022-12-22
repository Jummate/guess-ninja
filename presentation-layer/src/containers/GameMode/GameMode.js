import React, { useContext } from "react";
import "./GameMode.css";
import Button from "../../components/button/Button";
import Navigation from "../../components/nav/Navigation";
import { AppContext } from "../../utils/context";

const GameMode = () => {
  const context = useContext(AppContext);
  const { contextDispatch } = context;
  return (
    <>
      <h1 className="GameMode__heading">Game Mode</h1>
      <h3 className="GameMode__text">Click to indicate the preferred mode</h3>
      <div className="GameMode__btn-wrapper">
        <Button
          buttonSize="btn--large"
          buttonStyle="btn--gradient"
          onClick={() =>
            contextDispatch({
              type: "SHOW_GAME_SETUP_PAGE",
              payload: { selectedMode: "Single" },
            })
          }
        >
          One Player
        </Button>
        <Button
          buttonSize="btn--large"
          buttonStyle="btn--gradient"
          onClick={() =>
            contextDispatch({
              type: "SHOW_GAME_SETUP_PAGE",
              payload: { selectedMode: "Multi" },
            })
          }
        >
          Multiplayer
        </Button>
      </div>

      <Navigation />
    </>
  );
};
export default GameMode;

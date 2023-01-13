import React, { useContext } from "react";
import "./GameMode.css";
import Button from "../../components/button/Button";
import Navigation from "../../components/nav/Navigation";
import { AppContext } from "../../utils/context";
import Header from "../../components/header/Header";

const GameMode = () => {
  const context = useContext(AppContext);
  const { contextDispatch } = context;
  return (
    <section className="GameMode__container">
      <Header
        hOneText="Game Mode"
        hFourText="Click to indicate the preferred mode"
        mt="40"
        height="20"
        bg="#0d0d0d"
      />
      <div className="GameMode__btn-container">
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
      </div>

      <Navigation />
    </section>
  );
};
export default GameMode;

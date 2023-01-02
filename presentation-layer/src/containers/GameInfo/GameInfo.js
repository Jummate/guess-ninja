import React, { useContext } from "react";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navigation from "../../components/nav/Navigation";
import { AppContext } from "../../utils/context";

import "./GameInfo.css";

const GameInfo = () => {
  const context = useContext(AppContext);

  const {
    initialState: { numOfPlayer, difficulty, selectedMode, newGame },
    contextDispatch,
  } = context;

  return (
    <section className="GameInfo__container">
      <Header
        hOneText="Game Details"
        hFourText="Confirm the configuration of the game"
        mt="40"
        height="23"
      />

      <div className="GameInfo__body">
        <ul type="square">
          <li>Game Mode: {selectedMode}</li>
          <li>No of players: {selectedMode === "Multi" ? numOfPlayer : 1}</li>
          <li>Difficulty: {difficulty}</li>
          <li>
            Players involved:{" "}
            {selectedMode === "Multi"
              ? newGame.getPlayersInvolvedByName().join(", ")
              : "n/a"}
          </li>
        </ul>

        <Button
          buttonSize="btn--large"
          buttonStyle="btn--gradient"
          onClick={() =>
            contextDispatch({
              type: "SHOW_GAME_PREP_PAGE",
            })
          }
        >
          Start Game
        </Button>
      </div>

      {/* <Footer height="7">{""}</Footer> */}

      <Navigation />
    </section>
  );
};

export default GameInfo;

import React, { useContext } from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Navigation from "../../components/nav/Navigation";
import { AppContext } from "../../utils/context";
import Card from "../../components/card/Card";

import "./GameInfo.css";

const GameInfo = () => {
  const context = useContext(AppContext);

  const {
    initialState: {
      numOfPlayer,
      difficulty,
      selectedMode,
      newGame,
      onePlayerGameType,
      multiPlayerGameType,
    },
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
        <div className="GameInfo__wrapper">
          <Card
            headerText="Game Mode:"
            content={selectedMode}
          />

          <Card
            headerText="Number of Players:"
            content={selectedMode === "Multi" ? numOfPlayer : 1}
          />

          <Card
            headerText="Players involved:"
            content={
              selectedMode === "Multi"
                ? newGame.getPlayersInvolvedByName().join(", ")
                : "n/a"
            }
          />
          <Card
            headerText="Difficulty:"
            content={difficulty}
          />

          <Card
            headerText="Game Type:"
            content={
              selectedMode === "Single"
                ? onePlayerGameType
                : multiPlayerGameType
            }
          />
        </div>

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

      <Navigation />
    </section>
  );
};

export default GameInfo;

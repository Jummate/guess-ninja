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
      numOfGamesInSession,
    },
    contextDispatch,
  } = context;

  return (
    <section className="GameInfo__container">
      <Header
        hOneText="Game Details"
        hFourText="Confirm the info about the game"
        mt="40"
        height="23"
      />

      <div className="GameInfo__body">
        <div className="GameInfo__wrapper">
          <Card
            headerText="Game Mode:"
            content={selectedMode}
          />

          {selectedMode === "Multi" ? (
            <Card
              headerText="Number of Players:"
              content={selectedMode === "Multi" ? numOfPlayer : 1}
            />
          ) : null}

          {selectedMode === "Multi" ? (
            <Card
              headerText="Players involved:"
              content={newGame.getPlayersInvolvedByName().join(", ")}
            />
          ) : null}

          {!["Random", "Progressive"].includes(onePlayerGameType) ? (
            <Card
              headerText="Difficulty:"
              content={difficulty}
            />
          ) : null}

          <Card
            headerText="Game Type:"
            content={
              selectedMode === "Single"
                ? onePlayerGameType
                : multiPlayerGameType
            }
          />

          {selectedMode === "Multi" && multiPlayerGameType === "Session" ? (
            <Card
              headerText="Number of Games:"
              content={numOfGamesInSession}
            />
          ) : null}
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

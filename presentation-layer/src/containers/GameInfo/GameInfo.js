import React, { useContext } from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Navigation from "../../components/nav/Navigation";
import { AppContext } from "../../utils/context";
import Card from "../../components/card/Card";
import { game_mode, mode_type } from "../../utils/reusable-variables";

import "./GameInfo.css";
import Confetti from "../../components/Confetti";
import { playGameStart } from "../../utils/game-sound";

const GameInfo = () => {
  const { SINGLE, MULTI } = game_mode;
  const { SESSION, RANDOM, PROGRESSIVE } = mode_type;
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

          {selectedMode === `${MULTI}` ? (
            <Card
              headerText="Number of Players:"
              content={selectedMode === `${MULTI}` ? numOfPlayer : 1}
            />
          ) : null}

          {selectedMode === `${MULTI}` ? (
            <Card
              headerText="Players involved:"
              content={newGame.getPlayersInvolvedByName().join(", ")}
            />
          ) : null}

          {![`${RANDOM}`, `${PROGRESSIVE}`].includes(onePlayerGameType) ? (
            <Card
              headerText="Difficulty:"
              content={difficulty}
            />
          ) : null}

          <Card
            headerText="Game Type:"
            content={
              selectedMode === `${SINGLE}`
                ? onePlayerGameType
                : multiPlayerGameType
            }
          />

          {selectedMode === `${MULTI}` &&
          multiPlayerGameType === `${SESSION}` ? (
            <Card
              headerText="Number of Games:"
              content={numOfGamesInSession}
            />
          ) : null}
        </div>

        <Button
          buttonSize="btn--large"
          buttonStyle="btn--gradient"
          onClick={() => {
            playGameStart();
            contextDispatch({
              type: "PLAY_MUSIC",
              payload: {
                playBackgroundMusic: false,
                playBackgroundMusic2: true,
              },
            });
            contextDispatch({
              type: "SHOW_GAME_PREP_PAGE",
            });
          }}
        >
          Start Game
        </Button>
      </div>

      <Navigation />
      <Confetti opacity={0.06} />
    </section>
  );
};

export default GameInfo;

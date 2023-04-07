import React, { useContext } from "react";
import "./GameInfo.css";
import {
  Button,
  Header,
  Navigation,
  Card,
  Confetti,
  SoundController,
} from "../../components";
import {
  AppContext,
  game_mode,
  mode_type,
  playSound,
  sound,
} from "../../utils";

export const GameInfo = () => {
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
      turnSoundOff,
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
            headerText="Mode:"
            content={selectedMode}
          />

          {selectedMode === `${MULTI}` ? (
            <Card
              headerText="No of Players:"
              content={selectedMode === `${MULTI}` ? numOfPlayer : 1}
            />
          ) : null}

          {selectedMode === `${MULTI}` ? (
            <Card
              headerText="Players:"
              content={newGame
                .getPlayersInvolvedByName()
                .map((player, index) => (
                  <li key={index}>{player}</li>
                ))}
            />
          ) : null}

          {![`${RANDOM}`, `${PROGRESSIVE}`].includes(onePlayerGameType) ? (
            <Card
              headerText="Difficulty:"
              content={difficulty}
            />
          ) : null}

          <Card
            headerText="Mode Type:"
            content={
              selectedMode === `${SINGLE}`
                ? onePlayerGameType
                : multiPlayerGameType
            }
          />

          {selectedMode === `${MULTI}` &&
          multiPlayerGameType === `${SESSION}` ? (
            <Card
              headerText="No of Rounds:"
              content={numOfGamesInSession}
            />
          ) : null}
        </div>

        <Button
          buttonSize="btn--large"
          buttonStyle="btn--gradient"
          onClick={() => {
            !turnSoundOff && playSound(sound.GameStart);
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
          Continue
        </Button>
      </div>

      <Navigation />
      <Confetti opacity={0.06} />
      <SoundController />
    </section>
  );
};

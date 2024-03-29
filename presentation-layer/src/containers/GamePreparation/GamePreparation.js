import React, { useContext, useEffect, useState, useMemo } from "react";
import "./GamePreparation.css";

import {
  Button,
  Header,
  Navigation,
  Loading,
  SoundController,
} from "../../components";

import {
  AppContext,
  generateNumberToGuess,
  game_mode,
  mode_type,
  color_type,
  playSound,
  sound,
} from "../../utils";

import { RobotRomeo } from "../../assets";

export const GamePreparation = () => {
  const { MULTI } = game_mode;
  const { SESSION } = mode_type;
  const { PRIMARY } = color_type;
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(AppContext);
  const {
    initialState: {
      selectedMode,
      numOfPlayer,
      numOfAttempt,
      difficulty,
      multiPlayerGameType,
      sessionCount,
      turnSoundOff,
    },
    contextDispatch,
  } = context;

  const memoizedValue = useMemo(
    () => generateNumberToGuess(numOfPlayer, numOfAttempt, difficulty),
    [numOfAttempt, numOfPlayer, difficulty]
  );

  const { start, end, numberToGuess, numberArray } = memoizedValue;

  const isSessionGame =
    selectedMode === `${MULTI}` && multiPlayerGameType === `${SESSION}`
      ? true
      : false;

  useEffect(() => {
    const timerId = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <section className="GamePrep__container">
      {isLoading && (
        <Loading
          isSessionGame={isSessionGame}
          sessionCount={sessionCount}
        />
      )}
      <Header
        hOneText="Game Prep"
        hFourText="Brace up! it's about time!"
        mt="40"
        height="23"
      />
      <div className="GamePrep__body">
        <div className="GamePrep__wrapper">
          <div className="GamePrep__body-item-1">
            <img
              src={RobotRomeo}
              className="GamePrep__image"
              alt="Robot Romeo"
            />
          </div>

          <div className="GamePrep__body-item-2">
            <p style={{ marginBottom: "10px" }}>
              {" "}
              <span style={{ color: `${PRIMARY}` }}>ROMEO</span> picked a number
              from a box containing numbers between{" "}
              <span
                style={{
                  backgroundColor: "maroon",
                  color: "#fff",
                  padding: "1px 3px",
                }}
              >
                {start}
              </span>{" "}
              and{" "}
              <span
                style={{
                  backgroundColor: "maroon",
                  color: "#fff",
                  padding: "1px 3px",
                }}
              >
                {end}
              </span>
            </p>
            <p
              style={{
                color: "red",
              }}
            >
              What number does{" "}
              <span style={{ color: `${PRIMARY}` }}>ROMEO</span> have?
            </p>

            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gradient"
              // width="w-20"
              onClick={() => {
                contextDispatch({
                  type: "SHOW_GUESS_TAKING_PAGE",
                  payload: { numberToGuess, numberArray },
                });
                !turnSoundOff && playSound(sound.GameStart);
              }}
            >
              START
            </Button>
          </div>
        </div>
      </div>
      <Navigation />
      <SoundController />
    </section>
  );
};

import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Navigation from "../../components/nav/Navigation";
import Loading from "../../components/loading/Loading";
import { AppContext } from "../../utils/context";
import { generateNumberToGuess } from "../../utils/numberToGuess";
import RobotRomeo from "../../assets/romeo-robot.webp";
import "./GamePreparation.css";

const GamePreparation = () => {
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
    },
    contextDispatch,
  } = context;

  const { start, end, numberToGuess, numberArray } = generateNumberToGuess(
    numOfPlayer,
    numOfAttempt,
    difficulty
  );

  const isSessionGame =
    selectedMode === "Multi" &&
    multiPlayerGameType.toString().toLowerCase() === "session"
      ? true
      : false;

  useEffect(() => {
    const timerId = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timerId);
  });

  return (
    <section className="GamePrep__container">
      {isLoading && (
        <Loading
          isSessionGame={isSessionGame}
          sessionCount={sessionCount}
        />
      )}
      <Header
        hOneText="Game Preparation"
        hFourText="it's about get down thick!"
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
              Romeo picked a number {numberToGuess} from a box containing
              numbers between{" "}
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
              What number is he holding?
            </p>

            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gradient"
              // width="w-20"
              onClick={() =>
                contextDispatch({
                  type: "SHOW_GUESS_TAKING_PAGE",
                  payload: { numberToGuess, numberArray },
                })
              }
            >
              START
            </Button>
          </div>
        </div>
      </div>
      <Navigation />
    </section>
  );
};

export default GamePreparation;

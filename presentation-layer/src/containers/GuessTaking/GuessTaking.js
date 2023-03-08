import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { AppContext } from "../../utils/context";
import { generateRandomPlayers } from "../../utils/random-player";
import ThinkingDoll from "../../assets/images/thinking.gif";
import { difficultyValue } from "../../utils/difficultyValue";
import Navigation from "../../components/nav/Navigation";
import { game_mode } from "../../utils/reusable-variables";

import {
  alertIncorrectGuess,
  alertNoWinner,
  alertSuccess,
} from "../../utils/alert";

import "./GuessTaking.css";
import { checkAndConfirmGuess } from "../../utils/checkGuess";
import Header from "../../components/header/Header";
import Confetti from "../../components/Confetti";

const GuessTaking = () => {
  const { MULTI } = game_mode;
  const context = useContext(AppContext);
  const {
    initialState: {
      numberToGuess,
      newGame,
      selectedMode,
      numOfAttempt,
      numOfPlayer,
      numberArray,
      difficulty,
    },
    contextDispatch,
  } = context;

  const [randomizedPlayers, setRandomizedPlayers] = useState(
    generateRandomPlayers(newGame.getPlayersInvolved())
  );
  const [count, setCount] = useState(0);
  const [playerToGuess, setPlayerToGuess] = useState(randomizedPlayers[0]);
  const [numArray, setNumArray] = useState(numberArray);
  const [combinedAttempts, setCombinedAttempts] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNumberButtonClick = (e) => {
    let numberClicked = e.target.textContent;
    const { initialState } = context;

    const currentPlayer = randomizedPlayers[count];
    const currentPlayerName = currentPlayer
      ?.getPlayerName()
      .toString()
      .toUpperCase();

    setCombinedAttempts((prev) => prev + 1);
    savePlayersGuess(currentPlayer, numberClicked);
    setCount((prev) => prev + 1);
    setNumArray(
      numArray.filter((number) => Number(number) !== Number(numberClicked))
    );

    if (checkAndConfirmGuess(numberToGuess, currentPlayer)) {
      currentPlayer.setPlayerNoOfWins(currentPlayer.getPlayerNoOfWins() + 1);
      currentPlayer.setPlayerScore(
        currentPlayer.getPlayerScore() +
          difficultyValue[difficulty.toString().toLowerCase()]
      );

      newGame.updatePlayersNoOfPlays();
      newGame.resetPlayersPlayStatus();

      setShowConfetti(true);

      alertSuccess(currentPlayerName, initialState, contextDispatch);
    } else {
      if (
        (combinedAttempts + Number(numOfPlayer)) % Number(numOfPlayer) ===
        0
      ) {
        if (combinedAttempts === Number(numOfAttempt) * Number(numOfPlayer)) {
          newGame.updatePlayersNoOfPlays();
          alertNoWinner(initialState, contextDispatch);
        } else {
          newGame.resetPlayersPlayStatus();
          setRandomizedPlayers(
            generateRandomPlayers(newGame.getPlayersInvolved())
          );
          setCount(0);
          alertIncorrectGuess(contextDispatch);
        }
      } else {
        alertIncorrectGuess(contextDispatch);
      }
    }
  };

  const savePlayersGuess = (player, guessedNum) => {
    player.setPlayerPlayStatus(!player.getPlayerPlayStatus());
    player.setPlayerCurrentGuess(guessedNum);
  };

  useEffect(() => {
    if (count < randomizedPlayers.length) {
      setPlayerToGuess(randomizedPlayers[count]);
    }
  }, [count, randomizedPlayers]);

  return (
    <section className="GuessTaking__container">
      <Header
        hOneText="Take A Guess"
        mt="40"
        height="20"
      />

      <div className="next-player-container">
        <div className="next-player-wrapper">
          <div className="next-player-item-1">
            <img
              className="GuessTaking__image"
              src={ThinkingDoll}
              alt="Thinking Doll"
            />
          </div>
          {selectedMode === `${MULTI}` ? (
            <div className="next-player-item-2">
              <h1>
                <span style={{ color: "#000" }}>
                  {playerToGuess?.getPlayerName().toUpperCase()}
                  {", "}
                </span>
                it's your turn
              </h1>
            </div>
          ) : null}
        </div>

        <div className="next-player-item-3">
          <div>
            <span style={{ color: "#000", marginRight: "2px" }}>Attempt: </span>
            <span>
              {Math.floor(
                (combinedAttempts + Number(numOfPlayer) - 1) /
                  Number(numOfPlayer)
              )}{" "}
              of {numOfAttempt}
            </span>
          </div>
          <div>
            <span style={{ color: "#000", marginRight: "2px" }}>
              Difficulty:{" "}
            </span>
            <span>{difficulty}</span>
          </div>
        </div>
      </div>

      <div className="number-buttons-container">
        {numArray.map((number) => (
          <Button
            key={number}
            buttonSize="btn--medium"
            buttonStyle="btn--danger--solid"
            width="w-10"
            onClick={handleNumberButtonClick}
          >
            {number}
          </Button>
        ))}
      </div>
      <Navigation />
      {showConfetti ? <Confetti opacity={1.0} /> : null}
    </section>
  );
};

export default GuessTaking;

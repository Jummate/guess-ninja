import React, { useCallback, useContext, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { AppContext } from "../../utils/context";
import { generateRandomPlayers } from "../../utils/random-player";
import ThinkingDoll from "../../assets/thinking.gif";
import { difficultyValue } from "../../utils/difficultyValue";
import Navigation from "../../components/nav/Navigation";

import {
  alertIncorrectGuess,
  alertNoWinner,
  alertSuccess,
} from "../../utils/alert";

import "./GuessTaking.css";
import { checkAndConfirmGuess } from "../../utils/checkGuess";
import { checkAllPlayersHaveGuessed } from "../../utils/allPlayersHaveGuessed";
import Header from "../../components/header/Header";

const GuessTaking = () => {
  const context = useContext(AppContext);
  const {
    initialState: {
      numberToGuess,
      newGame,
      selectedMode,
      numOfAttempt,
      numOfPlayer,
      numberArray,
      sessionCount,
      difficulty,
      // numOfGamesInSession,
    },
    contextDispatch,
  } = context;
  const [playersAlreadyGuessed, setPlayersAlreadyGuessed] = useState([]);
  const [nextPlayerToGuess, setNextPlayerToGuess] = useState(
    generateRandomPlayers(newGame.getPlayersInvolved(), playersAlreadyGuessed)
  );
  const [combinedAttempts, setCombinedAttempts] = useState(0);
  const [numArray, setNumArray] = useState(numberArray);

  // console.log("meeeee");

  const attemptMade = Math.round(
    Number(combinedAttempts) / Number(numOfPlayer)
  );

  const incrementCombinedAttempts = () => {
    // console.log("incerment");
    // console.log({ combinedAttempts });
    if (Number(combinedAttempts) < Number(numOfAttempt) * Number(numOfPlayer)) {
      setCombinedAttempts((prev) => prev + 1);
    }
  };

  const processPlayerGuess = useCallback(() => {
    // console.log("processs");
    // console.log({ combinedAttempts });

    const winningPlayer = !Array.prototype.at
      ? playersAlreadyGuessed[playersAlreadyGuessed.length - 1]
      : playersAlreadyGuessed.at(-1);

    const winningPlayerName = winningPlayer
      ?.getPlayerName()
      .toString()
      .toUpperCase();

    if (checkAllPlayersHaveGuessed(newGame, playersAlreadyGuessed)) {
      if (Number(combinedAttempts) % Number(numOfPlayer) === 0) {
        // console.log("okayyyy");
        newGame.resetPlayersPlayStatus();
        setPlayersAlreadyGuessed([]);
      }
      if (combinedAttempts === Number(numOfAttempt) * Number(numOfPlayer)) {
        // console.log("no winner");
        newGame.updatePlayersNoOfPlays();
        alertNoWinner(
          numberToGuess,
          sessionCount,
          selectedMode,
          contextDispatch
        );
      }
    }

    if (checkAndConfirmGuess(numberToGuess, winningPlayer)) {
      winningPlayer.setPlayerNoOfWins(winningPlayer.getPlayerNoOfWins() + 1);
      winningPlayer.setPlayerScore(
        winningPlayer.getPlayerScore() +
          difficultyValue[difficulty.toString().toLowerCase()]
      );

      newGame.updatePlayersNoOfPlays();

      alertSuccess(
        winningPlayerName,
        numberToGuess,
        sessionCount,
        selectedMode,
        contextDispatch
      );
    }
  }, [
    playersAlreadyGuessed,
    selectedMode,
    sessionCount,
    combinedAttempts,
    contextDispatch,
    difficulty,
    newGame,
    numOfAttempt,
    numOfPlayer,
    numberToGuess,
  ]);

  const handleNumberButtonClick = (e) => {
    let numberClicked = e.target.textContent;
    const winningPlayer = !Array.prototype.at
      ? playersAlreadyGuessed[playersAlreadyGuessed.length - 1]
      : playersAlreadyGuessed.at(-1);

    // const x = generateRandomPlayers(
    //   newGame.getPlayersInvolved(),
    //   playersAlreadyGuessed
    // );
    // console.log(x);

    setNextPlayerToGuess(
      generateRandomPlayers(newGame.getPlayersInvolved(), playersAlreadyGuessed)
    );
    incrementCombinedAttempts();

    setNumArray(
      numArray.filter((number) => Number(number) !== Number(numberClicked))
    );
    savePlayersAlreadyGuessed(Number(numberClicked));

    if (!checkAndConfirmGuess(numberToGuess, winningPlayer)) {
      alertIncorrectGuess(contextDispatch);
    }
  };

  const savePlayersAlreadyGuessed = (guessedNum) => {
    nextPlayerToGuess.setPlayerPlayStatus(
      !nextPlayerToGuess.getPlayerPlayStatus()
    );

    nextPlayerToGuess.setPlayerCurrentGuess(guessedNum);
    setPlayersAlreadyGuessed((prev) => [...prev, nextPlayerToGuess]);
  };

  useEffect(() => {
    // console.log("youuuuuu");
    processPlayerGuess();
  }, [processPlayerGuess]);

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
          {selectedMode === "Multi" ? (
            <div className="next-player-item-2">
              <h1>
                <span style={{ color: "#000" }}>
                  {nextPlayerToGuess &&
                  Object.keys(nextPlayerToGuess).length > 0
                    ? nextPlayerToGuess?.getPlayerName().toUpperCase()
                    : null}
                  {", "}
                </span>
                it's your turn
              </h1>
            </div>
          ) : null}
        </div>

        <div className="next-player-item-3">
          <h1 style={{ color: "#000", marginRight: "10px" }}>Attempt: </h1>
          <h2>
            {attemptMade + 1} of {numOfAttempt}
          </h2>
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
    </section>
  );
};

export default GuessTaking;

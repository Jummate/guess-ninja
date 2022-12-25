import React, { useCallback, useContext, useEffect, useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { AppContext } from "../../utils/context";
import Modal from "../../components/modal/Modal";
import { generateRandomPlayers } from "../../utils/random-player";

import "./GuessTaking.css";
import { checkAndConfirmGuess } from "../../utils/checkGuess";
import { checkAllPlayersHaveGuessed } from "../../utils/allPlayersHaveGuessed";

const GuessTaking = () => {
  const context = useContext(AppContext);
  const {
    initialState: {
      isOpenQuit,
      numberToGuess,
      newGame,
      selectedMode,
      numOfAttempt,
      numOfPlayer,
      numberArray,
    },
    contextDispatch,
  } = context;
  const [playersAlreadyGuessed, setPlayersAlreadyGuessed] = useState([]);
  const [playerGuess, setPlayerGuess] = useState("");
  const [nextPlayerToGuess, setNextPlayerToGuess] = useState(null);
  const [combinedAttempts, setCombinedAttempts] = useState(0);
  const [numArray, setNumArray] = useState(numberArray);

  const attemptMade = Math.round(
    Number(combinedAttempts) / Number(numOfPlayer)
  );

  const clearInputField = (e) => {
    setPlayerGuess("");
  };

  const incrementCombinedAttempts = useCallback(() => {
    if (attemptMade < numOfAttempt) {
      setCombinedAttempts((prev) => prev + 1);
    }
  }, [playersAlreadyGuessed]);

  const processPlayerGuess = useCallback(() => {
    if (checkAndConfirmGuess(numberToGuess, playersAlreadyGuessed.at(-1))) {
      contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
      return;
    }
    if (checkAllPlayersHaveGuessed(newGame, playersAlreadyGuessed)) {
      if (attemptMade < numOfAttempt) {
        newGame.resetPlayersPlayStatus();
        setPlayersAlreadyGuessed([]);
      } else if (Number(attemptMade) === Number(numOfAttempt)) {
        contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
      }
    }
  }, [playersAlreadyGuessed]);

  const handleClick = () => {
    savePlayersAlreadyGuessed();
    clearInputField();
  };

  const handleNumberButtonClick = (e) => {
    let numberClicked = e.target.textContent;
    setPlayerGuess(numberClicked);
    setNumArray(
      numArray.filter((number) => Number(number) !== Number(numberClicked))
    );
    savePlayersAlreadyGuessed(Number(numberClicked));
  };

  const savePlayersAlreadyGuessed = (guessedNum) => {
    nextPlayerToGuess.setPlayerPlayStatus(
      !nextPlayerToGuess.getPlayerPlayStatus()
    );

    nextPlayerToGuess.setPlayerCurrentGuess(guessedNum);
    setPlayersAlreadyGuessed((prev) => [...prev, nextPlayerToGuess]);
  };

  useEffect(() => {
    setNextPlayerToGuess(
      generateRandomPlayers(newGame.getPlayersInvolved(), playersAlreadyGuessed)
    );
    incrementCombinedAttempts();
    processPlayerGuess();
  }, [
    playersAlreadyGuessed,
    newGame,
    processPlayerGuess,
    incrementCombinedAttempts,
  ]);

  return (
    <section className="GuessTaking__container">
      {isOpenQuit ? (
        <Modal
          title="Confirmation"
          onClose={() => contextDispatch({ type: "CLOSE_QUIT_MODAL" })}
        >
          <h3>Are you sure you want to quit?</h3>
          <p>
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gradient"
              onClick={() => contextDispatch({ type: "SHOW_HOME_PAGE" })}
            >
              OK
            </Button>
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gradient"
              onClick={() => contextDispatch({ type: "CLOSE_QUIT_MODAL" })}
            >
              CANCEL
            </Button>
          </p>
        </Modal>
      ) : null}

      <div className="next-player-container">
        <h1 className="GuessTaking__heading">
          This is Guess Taking Page{""}
          {`Attempts: ${attemptMade} of ${numOfAttempt}`}
        </h1>

        <p data-testid="input-wrapper">
          {selectedMode === "Multi" ? (
            <label>
              It's your turn, {nextPlayerToGuess?.getPlayerName().toUpperCase()}{" "}
            </label>
          ) : (
            <label>Single Playing</label>
          )}
          {/* <Input
            type="number"
            value={playerGuess}
            onChange={(e) => setPlayerGuess(e.target.value)}
          /> */}
        </p>
      </div>

      <div className="number-buttons-container">
        {numArray.map((number) => (
          <Button
            key={number}
            buttonSize="btn--medium"
            buttonStyle="btn--danger--solid"
            onClick={handleNumberButtonClick}
          >
            {number}
          </Button>
        ))}
      </div>

      <footer>
        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--gradient"
          onClick={() => contextDispatch({ type: "OPEN_QUIT_MODAL" })}
        >
          Quit
        </Button>
      </footer>
    </section>
  );
};

export default GuessTaking;

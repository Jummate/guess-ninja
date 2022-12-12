import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { AppContext } from "../../utils/context";
import Modal from "../../components/modal/Modal";
import { generateRandomPlayers } from "../../utils/random-player";

import "./GuessTaking.css";
import { checkAndConfirmGuess } from "../../utils/checkGuess";

const GuessTaking = () => {
  const context = useContext(AppContext);
  const {
    initialState: { isOpenQuit, numberToGuess, newGame, selectedMode },
    contextDispatch,
  } = context;
  const [playersAlreadyGuessed, setPlayersAlreadyGuessed] = useState([]);
  const [playerGuess, setPlayerGuess] = useState("");
  const [nextPlayerToGuess, setNextPlayerToGuess] = useState(
    generateRandomPlayers(
      newGame.getPlayersInvolvedByObjects(),
      playersAlreadyGuessed
    )
  );

  const clearInputField = (e) => {
    setPlayerGuess("");
  };

  const processPlayerGuess = () => {
    if (checkAndConfirmGuess(numberToGuess, playerGuess)) {
      console.log("Yes");
      return;
    }
    console.log("NO");
  };

  const handleClick = () => {
    processPlayerGuess();
    savePlayersAlreadyGuessed();
    clearInputField();
  };

  const savePlayersAlreadyGuessed = () => {
    setPlayersAlreadyGuessed((prev) => [...prev, nextPlayerToGuess]);
  };

  useEffect(() => {
    // setPlayersAlreadyGuessed((prev) => [...prev, nextPlayerToGuess]);
    // console.log(nextPlayerToGuess);
    setNextPlayerToGuess(
      generateRandomPlayers(
        newGame.getPlayersInvolvedByObjects(),
        playersAlreadyGuessed
      )
    );
  }, [playersAlreadyGuessed, newGame]);

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

      <h1 className="GuessTaking__heading">
        This is Guess Taking Page {numberToGuess}
      </h1>
      <form>
        <p data-testid="input-wrapper">
          {selectedMode === "Multi" ? (
            <label>Player: {nextPlayerToGuess.getPlayerName()}</label>
          ) : (
            <label>Single Playing</label>
          )}
          <Input
            type="number"
            value={playerGuess}
            onChange={(e) => setPlayerGuess(e.target.value)}
          />
        </p>

        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--gradient"
          onClick={handleClick}
        >
          Submit Guess
        </Button>
      </form>

      <footer>
        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--danger--solid"
          onClick={() => contextDispatch({ type: "OPEN_QUIT_MODAL" })}
        >
          Quit
        </Button>
      </footer>
    </section>
  );
};

export default GuessTaking;

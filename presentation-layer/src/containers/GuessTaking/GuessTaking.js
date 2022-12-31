import React, { useCallback, useContext, useEffect, useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { AppContext } from "../../utils/context";
import Modal from "../../components/modal/Modal";
import { generateRandomPlayers } from "../../utils/random-player";
import ThinkingDoll from "../../assets/thinking.gif";
import swal from "sweetalert";

import "./GuessTaking.css";
import { checkAndConfirmGuess } from "../../utils/checkGuess";
import { checkAllPlayersHaveGuessed } from "../../utils/allPlayersHaveGuessed";
import Header from "../../components/header/Header";

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
  // const [playerGuess, setPlayerGuess] = useState("");
  const [nextPlayerToGuess, setNextPlayerToGuess] = useState(null);
  const [combinedAttempts, setCombinedAttempts] = useState(0);
  const [numArray, setNumArray] = useState(numberArray);

  const attemptMade = Math.round(
    Number(combinedAttempts) / Number(numOfPlayer)
  );

  // const clearInputField = (e) => {
  //   setPlayerGuess("");
  // };

  const incrementCombinedAttempts = useCallback(() => {
    if (attemptMade < numOfAttempt) {
      setCombinedAttempts((prev) => prev + 1);
    }
  }, [playersAlreadyGuessed]);

  const processPlayerGuess = useCallback(() => {
    const winningPlayer = playersAlreadyGuessed.at(-1);
    if (checkAndConfirmGuess(numberToGuess, winningPlayer)) {
      swal({
        title: "Correct!",
        text: `${winningPlayer.getPlayerName().toUpperCase()} wins it!`,
        icon: "success",
        buttons: {
          continue: {
            text: "Continue",
            value: "continue",
          },
          quit: {
            text: "Quit Game",
            value: "quit",
          },
        },
      }).then((value) => {
        switch (value) {
          case "continue":
            contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
            break;

          default:
            contextDispatch({ type: "SHOW_HOME_PAGE" });
            break;
        }
      });
      // contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
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

  // const handleClick = () => {
  //   savePlayersAlreadyGuessed();
  //   clearInputField();
  // };

  const handleNumberButtonClick = (e) => {
    let numberClicked = e.target.textContent;
    // setPlayerGuess(numberClicked);
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
      {/* {isOpenQuit ? (
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
      ) : null} */}

      {/* <div className="GuessTaking__header">

        <h1 className="GuessTaking__header-text">Take A Guess</h1>
      </div> */}
      <Header
        hOneText="Take A Guess"
        tRadius="30"
        height="10"
      />

      <div className="next-player-container">
        <div className="next-player-item-1">
          <img
            className="GuessTaking__image"
            src={ThinkingDoll}
            alt="Thinking Doll"
          />
        </div>
        <div className="next-player-item-2">
          {selectedMode === "Multi" ? (
            <h1>
              <span style={{ color: "#000" }}>
                {nextPlayerToGuess?.getPlayerName().toUpperCase()}
                {", "}
              </span>
              it's your turn
            </h1>
          ) : (
            <span>Single Playing</span>
          )}
          {/* <Input
            type="number"
            value={playerGuess}
            onChange={(e) => setPlayerGuess(e.target.value)}
          /> */}
        </div>
        <div className="next-player-item-3">
          <h1 style={{ color: "#000" }}>Attempt: </h1>
          <h2>
            {attemptMade} of {numOfAttempt}
          </h2>
        </div>
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

      {/* <footer>
        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--gradient"
          onClick={() => contextDispatch({ type: "OPEN_QUIT_MODAL" })}
        >
          Quit
        </Button>
      </footer> */}
    </section>
  );
};

export default GuessTaking;

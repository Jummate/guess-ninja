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
  const [nextPlayerToGuess, setNextPlayerToGuess] = useState(
    generateRandomPlayers(newGame.getPlayersInvolved(), playersAlreadyGuessed)
  );
  const [combinedAttempts, setCombinedAttempts] = useState(0);
  const [numArray, setNumArray] = useState(numberArray);

  const attemptMade = Math.floor(
    Number(combinedAttempts) / Number(numOfPlayer)
  );

  const incrementCombinedAttempts = useCallback(() => {
    if (Number(combinedAttempts) < Number(numOfAttempt) * Number(numOfPlayer)) {
      setCombinedAttempts((prev) => prev + 1);
    }
  }, [playersAlreadyGuessed]);

  const processPlayerGuess = useCallback(() => {
    // const winningPlayer = playersAlreadyGuessed.at(-1);
    const winningPlayer = !Array.prototype.at
      ? playersAlreadyGuessed[playersAlreadyGuessed.length - 1]
      : playersAlreadyGuessed.at(-1);

    const winningPlayerName = winningPlayer?.getPlayerName().toUpperCase();
    if (checkAndConfirmGuess(numberToGuess, winningPlayer)) {
      winningPlayer.setPlayerNoOfWins(winningPlayer.getPlayerNoOfWins() + 1);
      swal({
        title: `${winningPlayerName} wins!`,
        text: `The number to guess was ${numberToGuess}`,
        icon: "success",
        closeOnClickOutside: false,
        closeOnEsc: false,
        dangerMode: true,
        // content: {
        //   element: "p",
        //   attributes: {
        //     innerHTML: "You are trying",
        //   },
        // },

        buttons: {
          continue: {
            text: "Continue",
            value: "continue",
          },
          quit: {
            text: "End Game",
            value: "quit",
          },
        },
      }).then((value) => {
        switch (value) {
          case "continue":
            contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
            break;

          default:
            swal({
              title: "Are you sure you want to end the game?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willEnd) => {
              if (willEnd) {
                contextDispatch({ type: "SHOW_HOME_PAGE" });
              } else {
                contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
              }
            });
            break;
        }
      });
      return;
    }
    if (checkAllPlayersHaveGuessed(newGame, playersAlreadyGuessed)) {
      if (Number(combinedAttempts) % Number(numOfPlayer) === 0) {
        newGame.resetPlayersPlayStatus();
        setPlayersAlreadyGuessed([]);
      }
      if (combinedAttempts === Number(numOfAttempt) * Number(numOfPlayer)) {
        swal({
          title: `Oops! No winner in this round!`,
          text: `The number to guess was ${numberToGuess}`,
          icon: "error",
          closeOnClickOutside: false,
          closeOnEsc: false,
          dangerMode: true,
          // content: {
          //   element: "p",
          //   attributes: {
          //     innerHTML: "You are trying",
          //   },
          // },

          buttons: {
            continue: {
              text: "Start A New Round",
              value: "continue",
            },
            quit: {
              text: "End Game",
              value: "quit",
            },
          },
        }).then((value) => {
          switch (value) {
            case "continue":
              contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
              break;

            default:
              swal({
                title: "Are you sure you want to end the game?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((willEnd) => {
                if (willEnd) {
                  contextDispatch({ type: "SHOW_HOME_PAGE" });
                } else {
                  contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
                }
              });
              break;
          }
        });
        // contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
      }
    }
  }, [playersAlreadyGuessed]);

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
      <Header
        hOneText="Take A Guess"
        tRadius="30"
        height="10"
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
          </div>
        </div>

        <div className="next-player-item-3">
          <h1 style={{ color: "#000", marginRight: "10px" }}>Attempt: </h1>
          <h2>
            {Number(combinedAttempts) % Number(numOfPlayer) === 0
              ? attemptMade
              : attemptMade + 1}{" "}
            of {numOfAttempt}
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

import React, { useContext, useEffect, useState } from "react";
import "./GuessTaking.css";

import {
  Button,
  Navigation,
  Header,
  Confetti,
  SoundController,
} from "../../components";
import { ThinkingDoll } from "../../assets";
import {
  game_mode,
  mode_type,
  alertIncorrectGuess,
  alertNoWinner,
  alertSuccess,
  checkAndConfirmGuess,
  playSound,
  sound,
  difficultyValue,
  generateRandomPlayers,
  AppContext,
} from "../../utils";

export const GuessTaking = () => {
  const { SINGLE, MULTI } = game_mode;
  const { PROGRESSIVE } = mode_type;
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
      turnSoundOff,
      onePlayerGameType,
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

  //the increment of numOfPlayer for Progressive type is solely to increase the count of number buttons, the original value should always be 1
  const modifiedNumOfPlayer =
    selectedMode === SINGLE && onePlayerGameType === PROGRESSIVE
      ? 1
      : numOfPlayer;

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
      contextDispatch({
        type: "PLAY_MUSIC",
        payload: {
          playBackgroundMusic: false,
          playBackgroundMusic2: false,
        },
      });
      !turnSoundOff && playSound(sound.CorrectGuess);

      alertSuccess(currentPlayerName, initialState, contextDispatch);
    } else {
      if (
        (combinedAttempts + Number(modifiedNumOfPlayer)) %
          Number(modifiedNumOfPlayer) ===
        0
      ) {
        if (
          combinedAttempts ===
          Number(numOfAttempt) * Number(modifiedNumOfPlayer)
        ) {
          !turnSoundOff && playSound(sound.AttemptExhausted);
          newGame.updatePlayersNoOfPlays();
          newGame.incrementVoid();
          alertNoWinner(initialState, contextDispatch);
        } else {
          newGame.resetPlayersPlayStatus();
          setRandomizedPlayers(
            generateRandomPlayers(newGame.getPlayersInvolved())
          );
          setCount(0);
          !turnSoundOff && playSound(sound.WrongGuess);
          alertIncorrectGuess(initialState, contextDispatch);
        }
      } else {
        !turnSoundOff && playSound(sound.WrongGuess);
        alertIncorrectGuess(initialState, contextDispatch);
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
                (combinedAttempts + Number(modifiedNumOfPlayer) - 1) /
                  Number(modifiedNumOfPlayer)
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
            onClick={(e) => {
              !turnSoundOff && playSound(sound.NumberClick);
              handleNumberButtonClick(e);
            }}
          >
            {number}
          </Button>
        ))}
      </div>
      <Navigation />
      {showConfetti ? <Confetti opacity={1.0} /> : null}
      <SoundController />
    </section>
  );
};

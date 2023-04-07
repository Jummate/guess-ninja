import React, { useState, useContext, createRef } from "react";
import "./PlayerRegistration.css";
import {
  Navigation,
  Button,
  Input,
  Header,
  Overlay,
  Confetti,
  SoundController,
} from "../../components";
import { AppContext, playSound, sound, validatePlayerName } from "../../utils";
import { toast } from "react-toastify";

export const PlayerRegistration = () => {
  const context = useContext(AppContext);
  const nameRef = createRef();
  const {
    initialState: {
      numOfPlayer,
      difficulty,
      newGame,
      numOfAttempt,
      numOfGamesInSession,
      multiPlayerGameType,
      turnSoundOff,
    },
    contextDispatch,
  } = context;
  const [playerCount, setPlayerCount] = useState(1);
  const [player, setPlayer] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const registerPlayer = () => {
    newGame.addPlayer(player);
  };

  const incrementPlayerCount = () => {
    if (playerCount < Number(numOfPlayer)) {
      setPlayerCount((prev) => prev + 1);
    }
  };
  const clearInputField = (e) => {
    setPlayer("");
  };

  const handleClick = () => {
    if (validatePlayerName(nameRef, newGame, turnSoundOff)) {
      registerPlayer();
      incrementPlayerCount();
      clearInputField();
      if (playerCount === Number(numOfPlayer)) {
        !turnSoundOff && playSound(sound.SuccessfulRegistration);
        toast("All players successfully registered", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "success",
          onClose: () =>
            contextDispatch({
              type: "SHOW_GAME_INFO_PAGE",
              payload: {
                difficulty,
                newGame,
                numOfAttempt,
                numOfGamesInSession,
                multiPlayerGameType,
              },
            }),
        });
        setShowOverlay(true);
      }
    }
  };
  return (
    <section className="PlayerReg__container">
      <Header
        hOneText="Registration"
        hFourText="It's KYC time! Meet the players"
        mt="40"
        height="25"
      />

      <div className="PlayerReg__body">
        <div className="PlayerReg__wrapper">
          <div className="PlayerReg__body-item-1">
            <label>
              Player <span style={{ color: "#49cdcb" }}>{playerCount}</span>
            </label>
            <Input
              value={player}
              ref={nameRef}
              onChange={(e) => setPlayer(e.target.value)}
              width="w-80"
            />
          </div>
          <div className="PlayerReg__body-item-2">
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gradient"
              onClick={() => {
                !turnSoundOff && playSound(sound.ButtonClick);
                handleClick();
              }}
              width="w-80"
            >
              Enter
            </Button>
          </div>
        </div>
      </div>

      {showOverlay && <Overlay />}
      <Navigation />
      <Confetti opacity={0.05} />
      <SoundController />
    </section>
  );
};

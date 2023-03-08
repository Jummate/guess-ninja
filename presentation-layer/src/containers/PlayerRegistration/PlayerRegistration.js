import React, { useState, useContext } from "react";
import Navigation from "../../components/nav/Navigation";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { AppContext } from "../../utils/context";
import Header from "../../components/header/Header";
import Overlay from "../../components/Overlay";

import { toast } from "react-toastify";

import "./PlayerRegistration.css";
import Confetti from "../../components/Confetti";
import { playGameStart } from "../../utils/game-sound";

const PlayerRegistration = () => {
  const context = useContext(AppContext);
  const {
    initialState: {
      numOfPlayer,
      difficulty,
      newGame,
      numOfAttempt,
      numOfGamesInSession,
      multiPlayerGameType,
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
    registerPlayer();
    incrementPlayerCount();
    clearInputField();
    if (playerCount === Number(numOfPlayer)) {
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
              onChange={(e) => setPlayer(e.target.value)}
              width="w-80"
            />
          </div>
          <div className="PlayerReg__body-item-2">
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gradient"
              onClick={() => {
                playGameStart();
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
    </section>
  );
};

export default PlayerRegistration;

import React, { useState, useContext } from "react";
import Navigation from "../../components/nav/Navigation";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { AppContext } from "../../utils/context";
import Modal from "../../components/modal/Modal";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Overlay from "../../components/Overlay";
// import { showAlert } from "../../utils/alert";

import { FaStar } from "react-icons/fa";

import { toast } from "react-toastify";

import "./PlayerRegistration.css";

const PlayerRegistration = () => {
  const context = useContext(AppContext);
  const {
    initialState: { numOfPlayer, difficulty, isOpenPlayerReg, newGame },
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
            payload: { difficulty, newGame },
          }),
      });
      setShowOverlay(true);
    }
  };
  return (
    <section className="PlayerReg__container">
      <Header
        hOneText="Register Players"
        hFourText="Let's get to meet our players"
        mt="40"
        height="25"
      />

      <div className="PlayerReg__body">
        <div className="PlayerReg__body-item-1">
          <label>Player {playerCount}:</label>
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
            onClick={handleClick}
            width="w-80"
          >
            Enter
          </Button>
        </div>
      </div>

      {/* <Footer height="10">{""}</Footer> */}

      {showOverlay && <Overlay />}
      <Navigation />
    </section>
  );
};

export default PlayerRegistration;

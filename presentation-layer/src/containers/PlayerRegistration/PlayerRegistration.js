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
      // contextDispatch({
      //   type: "OPEN_PLAYER_REG_MODAL",
      // });
    }
  };
  return (
    <section className="PlayerReg__container">
      {/* Modal starts---------------------------- */}
      {/* {isOpenPlayerReg ? (
        <Modal
          title="Confirmation"
          onClose={() => contextDispatch({ type: "CLOSE_PLAYER_REG_MODAL" })}
        >
          <h2>
            COMPLETED{" "}
            <span>
              <FaStar />
            </span>
          </h2>
          <h3>Players successfully registered!</h3>
          <p>
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--gradient"
              onClick={() =>
                contextDispatch({
                  type: "SHOW_GAME_INFO_PAGE",
                  payload: { difficulty, newGame },
                })
              }
            >
              Proceed
            </Button>
          </p>
        </Modal>
      ) : null} */}

      <Header
        hOneText="Registration of Players"
        hFourText="Let's get to meet our players"
        mt="40"
        height="20"
      />

      <div className="PlayerReg__body">
        <p>
          <label>Player {playerCount}:</label>
          <Input
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </p>

        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--gradient"
          onClick={handleClick}
        >
          Enter
        </Button>
      </div>

      <Footer height="10">{""}</Footer>

      {showOverlay && <Overlay />}
      <Navigation />
    </section>
  );
};

export default PlayerRegistration;

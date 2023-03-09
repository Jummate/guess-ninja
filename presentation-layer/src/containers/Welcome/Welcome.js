import React, { useContext, useState } from "react";
import Button from "../../components/button/Button";
import NinjaImage from "../../assets/images/ninja-gaming-joystick-sport-logo-icon.jpg";
import "./Welcome.css";
import { AppContext } from "../../utils/context";
import Menu from "../../components/Menu";
import Confetti from "../../components/Confetti";
// import MinimalBeat from "../../assets/minimal.mp3";
// import GameStart from "../../assets/game-start.mp3";
// import Sound from "../../components/Sound";
import { playGameStart } from "../../utils/game-sound";
import SoundIcon from "../../components/SoundController";

const Welcome = () => {
  const [showMenu, setShowMenu] = useState(false);
  const context = useContext(AppContext);
  const {
    initialState: { turnSoundOff },
    contextDispatch,
  } = context;

  return (
    <div className="Welcome__container">
      <SoundIcon />
      <h1 className="Welcome__heading">Guess Ninja</h1>
      <img
        className="Welcome__image"
        src={NinjaImage}
        alt="Ninja Gaming Joystick Sport Logo"
      />

      <Button
        buttonSize="btn--medium"
        buttonStyle="btn--gradient"
        onClick={() => {
          !turnSoundOff && playGameStart();
          setShowMenu(!showMenu);
        }}
      >
        GET STARTED
      </Button>

      {showMenu ? (
        <Menu>
          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            width="w-80"
            onClick={() => {
              contextDispatch({ type: "SHOW_GAME_GUIDE_PAGE" });
              !turnSoundOff && playGameStart();
            }}
          >
            GUIDE
          </Button>

          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            width="w-80"
            onClick={() => {
              contextDispatch({ type: "SHOW_GAME_MODE_PAGE" });
              !turnSoundOff && playGameStart();
            }}
          >
            START
          </Button>

          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            width="w-80"
            onClick={() => {
              contextDispatch({ type: "SHOW_HOME_PAGE" });
              setShowMenu(!showMenu);
              !turnSoundOff && playGameStart();
            }}
          >
            BACK
          </Button>
        </Menu>
      ) : null}
      <Confetti />
    </div>
  );
};

export default Welcome;

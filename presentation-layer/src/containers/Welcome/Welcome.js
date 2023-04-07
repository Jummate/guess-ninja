import React, { useContext, useState } from "react";
import { Button, Menu, SoundController, Confetti } from "../../components";
import { NinjaImage } from "../../assets";
import "./Welcome.css";
import { AppContext, sound, playSound } from "../../utils";

export const Welcome = () => {
  const [showMenu, setShowMenu] = useState(false);
  const context = useContext(AppContext);
  const {
    initialState: { turnSoundOff },
    contextDispatch,
  } = context;

  return (
    <div className="Welcome__container">
      <SoundController />
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
          !turnSoundOff && playSound(sound.GameStart);
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
              !turnSoundOff && playSound(sound.GameStart);
            }}
          >
            INTRO
          </Button>

          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            width="w-80"
            onClick={() => {
              contextDispatch({ type: "SHOW_GAME_MODE_PAGE" });
              !turnSoundOff && playSound(sound.GameStart);
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
              !turnSoundOff && playSound(sound.GameStart);
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

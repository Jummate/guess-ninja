import React, { useContext, useState } from "react";
import Button from "../../components/button/Button";
import NinjaImage from "../../assets/images/ninja-gaming-joystick-sport-logo-icon.jpg";
import "./Welcome.css";
import { AppContext } from "../../utils/context";
import Menu from "../../components/Menu";
import Confetti from "../../components/Confetti";

const Welcome = () => {
  const [showMenu, setShowMenu] = useState(false);
  const context = useContext(AppContext);
  const { contextDispatch } = context;

  return (
    <div className="Welcome__container">
      <h1 className="Welcome__heading">Guess Ninja</h1>
      <img
        className="Welcome__image"
        src={NinjaImage}
        alt="Ninja Gaming Joystick Sport Logo"
      />

      <Button
        buttonSize="btn--medium"
        buttonStyle="btn--gradient"
        onClick={() => setShowMenu(!showMenu)}
      >
        GET STARTED
      </Button>

      {showMenu ? (
        <Menu>
          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            width="w-80"
            onClick={() => contextDispatch({ type: "SHOW_GAME_GUIDE_PAGE" })}
          >
            GUIDE
          </Button>

          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            width="w-80"
            onClick={() => contextDispatch({ type: "SHOW_GAME_MODE_PAGE" })}
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

import React, { useContext } from "react";
import Button from "../../components/button/Button";
import NinjaImage from "../../assets/ninja-gaming-joystick-sport-logo-icon.jpg";
import "./Welcome.css";
import { AppContext } from "../../utils/context";

const Welcome = () => {
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

      <aside className="action-buttons-wrapper">
        <Button
          buttonSize="btn--small"
          buttonStyle="btn--gradient"
          onClick={() => contextDispatch({ type: "SHOW_GAME_GUIDE_PAGE" })}
        >
          INSTRUCTION
        </Button>

        <Button
          buttonSize="btn--small"
          buttonStyle="btn--gradient"
          onClick={() => contextDispatch({ type: "SHOW_GAME_MODE_PAGE" })}
        >
          START
        </Button>
      </aside>
    </div>
  );
};

export default Welcome;

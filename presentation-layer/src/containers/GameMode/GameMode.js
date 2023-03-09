import React, { useContext, useState } from "react";
import "./GameMode.css";
import Button from "../../components/button/Button";
import Navigation from "../../components/nav/Navigation";
import { AppContext } from "../../utils/context";
import Header from "../../components/header/Header";
import Menu from "../../components/Menu";
import {
  game_mode,
  mode_type,
  color_type,
} from "../../utils/reusable-variables";
import Confetti from "../../components/Confetti";
import { playGameStart } from "../../utils/game-sound";
import SoundIcon from "../../components/SoundController";

const GameMode = () => {
  const { SINGLE, MULTI } = game_mode;
  const { SESSION, RANDOM, CONSTANT, REGULAR, PROGRESSIVE } = mode_type;
  const { LIGHTER } = color_type;

  const context = useContext(AppContext);
  const {
    initialState: { turnSoundOff },
    contextDispatch,
  } = context;
  const [showMenu, setShowMenu] = useState(false);
  const [mode, setMode] = useState("");
  return (
    <section className="GameMode__container">
      <Header
        hOneText="Game Mode"
        hFourText="Click to indicate the preferred mode"
        mt="40"
        height="20"
        bg={LIGHTER}
      />
      <div className="GameMode__btn-container">
        <div className="GameMode__btn-wrapper">
          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            onClick={(e) => {
              !turnSoundOff && playGameStart();
              setShowMenu(!showMenu);
              setMode(e.target.textContent.trim());
            }}
          >
            Single Player
          </Button>
          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            onClick={(e) => {
              !turnSoundOff && playGameStart();
              setShowMenu(!showMenu);
              setMode(e.target.textContent.trim());
            }}
          >
            Multiplayer
          </Button>

          {showMenu ? (
            <Menu>
              {mode === "Single Player" ? (
                <>
                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) => {
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: `${SINGLE}`,
                          onePlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      });
                      !turnSoundOff && playGameStart();
                    }}
                  >
                    {PROGRESSIVE}
                  </Button>

                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) => {
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: `${SINGLE}`,
                          onePlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      });
                      !turnSoundOff && playGameStart();
                    }}
                  >
                    {CONSTANT}
                  </Button>

                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) => {
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: `${SINGLE}`,
                          onePlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      });
                      !turnSoundOff && playGameStart();
                    }}
                  >
                    {RANDOM}
                  </Button>
                </>
              ) : null}

              {mode === "Multiplayer" ? (
                <>
                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) => {
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: `${MULTI}`,
                          multiPlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      });
                      !turnSoundOff && playGameStart();
                    }}
                  >
                    {REGULAR}
                  </Button>

                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) => {
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: `${MULTI}`,
                          multiPlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      });
                      !turnSoundOff && playGameStart();
                    }}
                  >
                    {SESSION}
                  </Button>
                </>
              ) : null}

              <Button
                buttonSize="btn--large"
                buttonStyle="btn--gradient"
                width="w-80"
                onClick={() => {
                  !turnSoundOff && playGameStart();
                  contextDispatch({ type: "SHOW_HOME_PAGE" });
                  setShowMenu(!showMenu);
                }}
              >
                BACK
              </Button>
            </Menu>
          ) : null}
        </div>
      </div>

      <Navigation />
      <Confetti />
      <SoundIcon />
    </section>
  );
};
export default GameMode;

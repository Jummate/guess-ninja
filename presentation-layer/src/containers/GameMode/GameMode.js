import React, { useContext, useState } from "react";
import "./GameMode.css";
import Button from "../../components/button/Button";
import Navigation from "../../components/nav/Navigation";
import { AppContext } from "../../utils/context";
import Header from "../../components/header/Header";
import Menu from "../../components/Menu";

const GameMode = () => {
  const context = useContext(AppContext);
  const { contextDispatch } = context;
  const [showMenu, setShowMenu] = useState(false);
  const [mode, setMode] = useState("");
  return (
    <section className="GameMode__container">
      <Header
        hOneText="Game Mode"
        hFourText="Click to indicate the preferred mode"
        mt="40"
        height="20"
        bg="#0d0d0d"
      />
      <div className="GameMode__btn-container">
        <div className="GameMode__btn-wrapper">
          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            onClick={(e) => (
              setShowMenu(!showMenu), setMode(e.target.textContent.trim())
            )}
            // onClick={() =>
            //   contextDispatch({
            //     type: "SHOW_GAME_SETUP_PAGE",
            //     payload: { selectedMode: "Single" },
            //   })
            // }
          >
            One Player
          </Button>
          <Button
            buttonSize="btn--large"
            buttonStyle="btn--gradient"
            onClick={(e) => (
              setShowMenu(!showMenu), setMode(e.target.textContent.trim())
            )}
            // onClick={() => (
            //   contextDispatch({
            //     type: "SHOW_GAME_SETUP_PAGE",
            //     payload: { selectedMode: "Multi" },
            //   }),
            //   setMode("Multi")
            // )}
          >
            Multiplayer
          </Button>

          {showMenu ? (
            <Menu>
              {mode === "One Player" ? (
                <>
                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) =>
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: "Single",
                          onePlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      })
                    }
                  >
                    PROGRESSIVE
                  </Button>

                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) =>
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: "Single",
                          onePlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      })
                    }
                  >
                    CONSTANT
                  </Button>

                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) =>
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: "Single",
                          onePlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      })
                    }
                  >
                    RANDOM
                  </Button>
                </>
              ) : null}

              {mode === "Multiplayer" ? (
                <>
                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) =>
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: "Multi",
                          onePlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      })
                    }
                  >
                    ONE-TIME
                  </Button>

                  <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) =>
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: "Multi",
                          onePlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      })
                    }
                  >
                    SESSION
                  </Button>

                  {/* <Button
                    buttonSize="btn--large"
                    buttonStyle="btn--gradient"
                    width="w-80"
                    onClick={(e) =>
                      contextDispatch({
                        type: "SHOW_GAME_SETUP_PAGE",
                        payload: {
                          selectedMode: "Multi",
                          onePlayerGameType: `${e.target.textContent.trim()}`,
                        },
                      })
                    }
                  >
                    RANDOM
                  </Button> */}
                </>
              ) : null}

              <Button
                buttonSize="btn--large"
                buttonStyle="btn--gradient"
                width="w-80"
                onClick={() => (
                  contextDispatch({ type: "SHOW_HOME_PAGE" }),
                  setShowMenu(!showMenu)
                )}
              >
                BACK
              </Button>
            </Menu>
          ) : null}
        </div>
      </div>

      <Navigation />
    </section>
  );
};
export default GameMode;

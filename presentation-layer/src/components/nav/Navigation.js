import React, { useContext } from "react";
import "./Navigation.css";
import { AppContext } from "../../utils/context";
import { alertQuit } from "../../utils/alert";
import { playSound, sound } from "../../utils/game-sound";

const Navigation = () => {
  const context = useContext(AppContext);

  const {
    initialState: {
      selectedMode,
      showHome,
      showMode,
      showSetup,
      multiPlayerGameType,
      onePlayerGameType,
      showOtherTabs,
      turnSoundOff,
    },
    contextDispatch,
  } = context;

  return (
    <section className="Navigation__container">
      <ul className="Navigation__wrapper">
        {showHome ? (
          <li onClick={() => contextDispatch({ type: "SHOW_HOME_PAGE" })}>
            Home
          </li>
        ) : null}
        {showMode ? (
          <li onClick={() => contextDispatch({ type: "SHOW_GAME_MODE_PAGE" })}>
            Mode
          </li>
        ) : null}
        {showSetup ? (
          <li
            onClick={() =>
              contextDispatch({
                type: "SHOW_GAME_SETUP_PAGE",
                payload: {
                  selectedMode: selectedMode,
                  multiPlayerGameType: multiPlayerGameType,
                  onePlayerGameType: onePlayerGameType,
                },
              })
            }
          >
            Setup
          </li>
        ) : null}
        {showOtherTabs ? (
          <>
            <li
              onClick={() => {
                contextDispatch({
                  type: "UPDATE_TRIGGERED_BY_TAB",
                  payload: { triggeredByTab: true },
                });
                context.contextDispatch({
                  type: "SHOW_SCORE_TABLE",
                  payload: { showScoreTable: true },
                });
              }}
            >
              Scores
            </li>

            <li
              onClick={() => {
                alertQuit(contextDispatch, {});
                !turnSoundOff && playSound(sound.QuitNotice);
              }}
            >
              Quit
            </li>
          </>
        ) : null}
      </ul>
    </section>
  );
};

export default Navigation;

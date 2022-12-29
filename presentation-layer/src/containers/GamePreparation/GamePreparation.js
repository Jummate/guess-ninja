import React, { useContext } from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import { AppContext } from "../../utils/context";
import { generateNumberToGuess } from "../../utils/numberToGuess";

import "./GamePreparation.css";

const GamePreparation = () => {
  const context = useContext(AppContext);
  const {
    initialState: { isOpenQuit, numOfPlayer, numOfAttempt, difficulty },
    contextDispatch,
  } = context;
  const { start, end, numberToGuess, numberArray } = generateNumberToGuess(
    numOfAttempt,
    numOfPlayer,
    difficulty
  );

  return (
    <section className="GamePrep__container">
      {isOpenQuit ? (
        <Modal
          title="Confirmation"
          onClose={() => contextDispatch({ type: "CLOSE_QUIT_MODAL" })}
        >
          <h3>Are you sure you want to quit?</h3>
          <p>
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gradient"
              onClick={() => contextDispatch({ type: "SHOW_HOME_PAGE" })}
            >
              OK
            </Button>
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gradient"
              onClick={() => contextDispatch({ type: "CLOSE_QUIT_MODAL" })}
            >
              CANCEL
            </Button>
          </p>
        </Modal>
      ) : null}

      <Header
        hOneText="Game Preparation"
        hFourText="it's about get down thick!"
        height="20"
      />

      <h2 style={{ textAlign: "center" }}>
        Timmy thinks of a number between {start} and {end}
      </h2>
      <Button
        buttonSize="btn--large"
        buttonStyle="btn--gradient"
        onClick={() =>
          contextDispatch({
            type: "SHOW_GUESS_TAKING_PAGE",
            payload: { numberToGuess, numberArray },
          })
        }
      >
        START
      </Button>

      <footer>
        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--gradient"
          onClick={() =>
            contextDispatch({
              type: "OPEN_QUIT_MODAL",
            })
          }
        >
          Quit
        </Button>
      </footer>
    </section>
  );
};

export default GamePreparation;

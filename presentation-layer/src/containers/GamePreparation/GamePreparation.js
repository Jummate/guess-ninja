import React, { useContext } from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import { AppContext } from "../../utils/context";
import { generateNumberToGuess } from "../../utils/numberToGuess";
import RobotRomeo from "../../assets/romeo-robot.webp";
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
      <div className="GamePrep__body">
        <div className="GamePrep__body-item-1">
          <img
            src={RobotRomeo}
            className="GamePrep__image"
            alt="Robot Romeo"
          />
        </div>
        <div className="GamePrep__body-item-2">
          <p>
            {" "}
            Romeo picked a number {numberToGuess} from a box containing numbers
            between{" "}
            <span
              style={{ backgroundColor: "red", color: "#fff", padding: "2px" }}
            >
              {start}
            </span>{" "}
            and{" "}
            <span
              style={{ backgroundColor: "red", color: "#fff", padding: "2px" }}
            >
              {end}
            </span>
          </p>
          <br />
          <p>What number is he holding?</p>

          <Button
            buttonSize="btn--medium"
            buttonStyle="btn--gradient"
            // width="w-20"
            onClick={() =>
              contextDispatch({
                type: "SHOW_GUESS_TAKING_PAGE",
                payload: { numberToGuess, numberArray },
              })
            }
          >
            START
          </Button>
        </div>
      </div>

      {/* <footer>
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
      </footer> */}
    </section>
  );
};

export default GamePreparation;

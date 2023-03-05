import React, { useState, useContext } from "react";
import Select from "react-select";
import "./GameSetup.css";
import Input from "../../components/input/Input";
import Navigation from "../../components/nav/Navigation";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import { AppContext } from "../../utils/context";
import { GuessGame } from "../../utils/game";
import { generateRandomDifficulty } from "../../utils/random-difficulty";
import { options } from "../../utils/difficulty-options";
import {
  game_mode,
  mode_type,
  color_type,
} from "../../utils/reusable-variables";

const GameSetup = () => {
  const context = useContext(AppContext);
  const [numOfPlayer, setNumOfPlayer] = useState("");
  const [numOfAttempt, setNumOfAttempt] = useState("");
  const [numOfGamesInSession, setNumOfGamesInSession] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  const { SINGLE, MULTI } = game_mode;
  const { SESSION, RANDOM, PROGRESSIVE } = mode_type;
  const { PRIMARY } = color_type;

  const initializeGame = () => {
    return new GuessGame();
  };

  const {
    initialState: { selectedMode, multiPlayerGameType, onePlayerGameType },
    contextDispatch,
  } = context;

  const nextPage =
    selectedMode === `${SINGLE}`
      ? "SHOW_GAME_INFO_PAGE"
      : "SHOW_PLAYER_REG_PAGE";

  const handleClick = () => {
    const newGame = initializeGame();

    selectedMode === `${SINGLE}` && newGame.addPlayer(["You"]);

    let modifiedDifficulty =
      selectedMode === `${SINGLE}` && onePlayerGameType === `${RANDOM}`
        ? generateRandomDifficulty()
        : difficulty;

    let modifiedNumOfPlayer =
      selectedMode === `${SINGLE}` && onePlayerGameType === `${PROGRESSIVE}`
        ? 1
        : numOfPlayer;

    contextDispatch({
      type: nextPage,
      payload: {
        numOfPlayer: modifiedNumOfPlayer,
        difficulty: modifiedDifficulty,
        newGame,
        numOfAttempt,
        numOfGamesInSession,
        multiPlayerGameType,
      },
    });
  };

  const handleChange = (selectedOption) => {
    setDifficulty(selectedOption.value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      cursor: "pointer",
      fontWeight: "bolder",
      backgroundColor: state.isSelected ? `${PRIMARY}` : "white",
    }),
    // control: (provided) => ({
    //   ...provided,
    //   marginTop: "5%",
    // })
  };

  return (
    <section className="GameSetup__container">
      <Header
        hOneText="Settings"
        hFourText="Every activity begins with a plan"
        mt="40"
        height="23"
      />
      <div className="GameSetup__body">
        <div className="GameSetup__wrapper">
          <form>
            {selectedMode === `${MULTI}` ? (
              <div className="GameSetup__item">
                <label>No of Players:</label>
                <Input
                  type="number"
                  value={numOfPlayer}
                  onChange={(e) => setNumOfPlayer(e.target.value)}
                />
              </div>
            ) : null}

            <div className="GameSetup__item">
              <label>No of Attempts:</label>
              <Input
                type="number"
                value={numOfAttempt}
                onChange={(e) => setNumOfAttempt(e.target.value)}
              />
            </div>

            {selectedMode === `${MULTI}` &&
            multiPlayerGameType === `${SESSION}` ? (
              <div className="GameSetup__item">
                <label>No of Games:</label>
                <Input
                  type="number"
                  value={numOfGamesInSession}
                  onChange={(e) => setNumOfGamesInSession(e.target.value)}
                />
              </div>
            ) : null}

            {selectedMode === `${SINGLE}` &&
            [`${RANDOM}`, `${PROGRESSIVE}`].includes(
              onePlayerGameType
            ) ? null : (
              <div className="GameSetup__item">
                <label>Difficulty:</label>

                <Select
                  options={options}
                  defaultValue={options[0]}
                  styles={customStyles}
                  onChange={handleChange}
                />
              </div>
            )}

            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gradient"
              onClick={handleClick}
            >
              CONTINUE
            </Button>
          </form>
        </div>
      </div>

      <Navigation />
    </section>
  );
};

export default GameSetup;

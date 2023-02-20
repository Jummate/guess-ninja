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

const GameSetup = () => {
  const context = useContext(AppContext);
  const [numOfPlayer, setNumOfPlayer] = useState("");
  const [numOfAttempt, setNumOfAttempt] = useState("");
  const [numOfGamesInSession, setNumOfGamesInSession] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  const initializeGame = () => {
    return new GuessGame();
  };

  const {
    initialState: { selectedMode, multiPlayerGameType, onePlayerGameType },
    contextDispatch,
  } = context;

  const nextPage =
    selectedMode === "Single" ? "SHOW_GAME_INFO_PAGE" : "SHOW_PLAYER_REG_PAGE";

  const handleClick = () => {
    const newGame = initializeGame();
    selectedMode === "Single" && newGame.addPlayer(["You"]);
    let modifiedDifficulty =
      selectedMode === "Single" && onePlayerGameType === "Random"
        ? generateRandomDifficulty()
        : difficulty;
    contextDispatch({
      type: nextPage,
      payload: {
        numOfPlayer,
        difficulty: modifiedDifficulty,
        newGame,
        numOfAttempt,
        numOfGamesInSession,
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
      backgroundColor: state.isSelected ? "#49cdcb" : "white",
    }),
    // control: (provided) => ({
    //   ...provided,
    //   marginTop: "5%",
    // })
  };

  return (
    <section className="GameSetup__container">
      <Header
        hOneText="Game Settings"
        hFourText="Every activity begins with a plan"
        mt="40"
        height="23"
      />
      <div className="GameSetup__body">
        <div className="GameSetup__wrapper">
          <form>
            {selectedMode === "Multi" ? (
              <div className="GameSetup__item">
                <label>Number of Players </label>
                <Input
                  type="number"
                  value={numOfPlayer}
                  onChange={(e) => setNumOfPlayer(e.target.value)}
                />
              </div>
            ) : null}

            <div className="GameSetup__item">
              <label>Number of attempts</label>
              <Input
                type="number"
                value={numOfAttempt}
                onChange={(e) => setNumOfAttempt(e.target.value)}
              />
            </div>

            {selectedMode === "Multi" && multiPlayerGameType === "Session" ? (
              <div className="GameSetup__item">
                <label>Number of games in a session</label>
                <Input
                  type="number"
                  value={numOfGamesInSession}
                  onChange={(e) => setNumOfGamesInSession(e.target.value)}
                />
              </div>
            ) : null}

            {selectedMode === "Single" &&
            ["Random", "Progressive"].includes(onePlayerGameType) ? null : (
              <div className="GameSetup__item">
                <label>Difficulty</label>

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

import React, { useState, useContext } from "react";
import "./GameSetup.css";
import Input from "../../components/input/Input";
import Navigation from "../../components/nav/Navigation";
import Button from "../../components/button/Button";
import { AppContext } from "../../utils/context";
import { GuessGame } from "../../utils/game";

const GameSetup = () => {
  const context = useContext(AppContext);
  const [numOfPlayer, setNumOfPlayer] = useState("");
  const [numOfAttempt, setNumOfAttempt] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  const initializeGame = () => {
    return new GuessGame();
  };

  const {
    initialState: { selectedMode },
    contextDispatch,
  } = context;
  const nextPage =
    selectedMode === "Single" ? "SHOW_GAME_INFO_PAGE" : "SHOW_PLAYER_REG_PAGE";

  const handleClick = () => {
    const newGame = initializeGame();
    contextDispatch({
      type: nextPage,
      payload: {
        numOfPlayer,
        difficulty,
        newGame,
        numOfAttempt,
      },
    });
  };
  return (
    <section className="GameSetup__container">
      <h1 className="GameSetup__heading">Game Setup</h1>
      <h3 className="GameSetup__text">Specify the gameplan</h3>
      <form>
        {selectedMode === "Multi" ? (
          <p className="GameSetup__item">
            <label>Number of Players</label>
            <Input
              type="number"
              value={numOfPlayer}
              onChange={(e) => setNumOfPlayer(e.target.value)}
            />
          </p>
        ) : null}

        <p className="GameSetup__item">
          <label>Preferred number of attempts</label>
          <Input
            type="number"
            value={numOfAttempt}
            onChange={(e) => setNumOfAttempt(e.target.value)}
          />
        </p>

        <p className="GameSetup__item">
          <label>Difficulty</label>
          <select
            name="difficulty"
            className="GameSetup__difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
        </p>

        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--gradient"
          onClick={handleClick}
        >
          Submit
        </Button>
      </form>

      <Navigation />
    </section>
  );
};

export default GameSetup;

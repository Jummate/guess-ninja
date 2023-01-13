import React, { useState, useContext } from "react";
import Select from "react-select";
import "./GameSetup.css";
import Input from "../../components/input/Input";
import Navigation from "../../components/nav/Navigation";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
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

  const handleChange = (selectedOption) => {
    setDifficulty(selectedOption.value);
  };
  const options = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];
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
                <label>Number of Players</label>
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

            <div className="GameSetup__item">
              <label>Difficulty</label>

              <Select
                options={options}
                defaultValue={options[0]}
                styles={customStyles}
                // value={difficulty}
                onChange={handleChange}
                // onChange={(e) => setDifficulty(e.target.value)}
              />
              {/* <select
            name="difficulty"
            className="GameSetup__difficulty"
            de
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select> */}
            </div>

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
      {/* <Footer height="7">{""}</Footer> */}

      <Navigation />
    </section>
  );
};

export default GameSetup;

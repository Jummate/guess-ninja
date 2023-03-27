import React, { useState } from "react";
// import { AppContext } from "../../utils/context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../../components/header/Header";
import Navigation from "../../components/nav/Navigation";
import SoundIcon from "../../components/SoundController";

import "./GameGuide.css";

const GameGuide = () => {
  // const context = useContext(AppContext);

  // const { contextDispatch } = context;

  const [count, setCount] = useState(1);

  return (
    <section className="GameGuide__container">
      <Header
        hOneText="Game Guide"
        mt="40"
        height="20"
        // bg={LIGHTER}
      />

      <div className="GameGuide__body">
        <div className="GameGuide__wrapper">
          {count === 1 && <h2>YOU {count}</h2>}
          {count === 2 && <h2>ARE {count}</h2>}
          {count === 3 && <h2>WELCOME {count}</h2>}
          {count === 4 && <h2>HERE {count}</h2>}
          {count === 5 && <h2>BRO {count}</h2>}
        </div>
      </div>

      <div className="GameGuide__footer">
        <div className="arrow-wrapper">
          <FaChevronLeft onClick={() => setCount((prev) => prev - 1)} />
        </div>

        <div className="arrow-wrapper">
          <FaChevronRight onClick={() => setCount((prev) => prev + 1)} />
        </div>
      </div>

      {/* <Button
        buttonSize="btn--medium"
        buttonStyle="btn--gradient"
        onClick={() =>
          contextDispatch({
            type: "SHOW_HOME_PAGE",
          })
        }
      ></Button> */}
      <Navigation />
      <SoundIcon />
    </section>
  );
};

export default GameGuide;

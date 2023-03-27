import React, { useContext } from "react";
// import { AppContext } from "../../utils/context";
// import { FaChevronLeft } from "react-icons/fa";
import Header from "../../components/header/Header";
import Navigation from "../../components/nav/Navigation";
import SoundIcon from "../../components/SoundController";

import "./GameGuide.css";

const GameGuide = () => {
  // const context = useContext(AppContext);

  // const { contextDispatch } = context;

  return (
    <section className="GameGuide__container">
      <Header
        hOneText="Game Guide"
        mt="40"
        height="20"
        // bg={LIGHTER}
      />

      <div className="GameGuide__body">
        <div className="GameGuide__wrapper"></div>
      </div>

      <div className="GameGuide__footer"></div>

      {/* <div className="back-arrow-wrapper">
        <FaChevronLeft
          onClick={() =>
            contextDispatch({
              type: "SHOW_HOME_PAGE",
            })
          }
        />
      </div> */}

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

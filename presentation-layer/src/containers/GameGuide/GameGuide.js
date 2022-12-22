import React, { useContext } from "react";
import Button from "../../components/button/Button";
import { AppContext } from "../../utils/context";
import { FaChevronLeft } from "react-icons/fa";

import "./GameGuide.css";

const GameGuide = () => {
  const context = useContext(AppContext);

  const { contextDispatch } = context;

  return (
    <section className="GameGuide_container">
      <h1 className="GameGuide__heading">This is Game Guide Page</h1>

      <div className="back-arrow-wrapper">
        <FaChevronLeft
          onClick={() =>
            contextDispatch({
              type: "SHOW_HOME_PAGE",
            })
          }
        />
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
    </section>
  );
};

export default GameGuide;

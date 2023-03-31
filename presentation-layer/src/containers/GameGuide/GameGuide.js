import React, { useState, useMemo } from "react";
// import { AppContext } from "../../utils/context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../../components/header/Header";
import Navigation from "../../components/nav/Navigation";
import SoundIcon from "../../components/SoundController";
import { contentSchema } from "../../utils/content-schema";
import Content from "../../components/ContentRenderer";

import "./GameGuide.css";

const GameGuide = () => {
  // const context = useContext(AppContext);

  // const { contextDispatch } = context;

  const [count, setCount] = useState(0);

  const memoizedData = useMemo(() => contentSchema[count], [count]);

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
          <Content data={memoizedData} />
        </div>
      </div>

      <div className="GameGuide__footer">
        <div className="arrow-wrapper">
          {count > 0 && (
            <FaChevronLeft
              onClick={() => {
                if (count >= 1) {
                  setCount((prev) => prev - 1);
                }
              }}
            />
          )}
        </div>

        <div>
          {count + 1} of {contentSchema.length}
        </div>

        <div className="arrow-wrapper">
          {count < contentSchema.length - 1 && (
            <FaChevronRight
              onClick={() => {
                if (count < contentSchema.length - 1) {
                  setCount((prev) => prev + 1);
                }
              }}
            />
          )}
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

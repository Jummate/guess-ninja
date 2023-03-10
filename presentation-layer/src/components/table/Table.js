import { React, useContext } from "react";
import { AppContext } from "../../utils/context";
import Button from "../button/Button";
import "./Table.css";
import { alertSessionEnd } from "../../utils/alert";
import { generateRandomDifficulty } from "../../utils/random-difficulty";
import {
  game_mode,
  mode_type,
  color_type,
} from "../../utils/reusable-variables";

const Table = ({ data = [], columns }) => {
  const { SINGLE, MULTI } = game_mode;
  const { SESSION, RANDOM } = mode_type;
  const { DANGER } = color_type;
  const context = useContext(AppContext);
  const {
    initialState: {
      sessionCount,
      triggeredByTab,
      numOfGamesInSession,
      selectedMode,
      multiPlayerGameType,
      onePlayerGameType,
      newGame,
    },
    contextDispatch,
  } = context;

  const { initialState } = context;
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              {columns &&
                columns.map((head) => <th key={head.header}>{head.header}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((row, index) => (
                <tr key={row.ID}>
                  <td>{index + 1}</td>
                  {columns.map((col) => {
                    return <td key={col.field}>{row[col.field]}</td>;
                  })}
                </tr>
              ))}
            <tr>
              <td
                style={{ textAlign: "right" }}
                colSpan={`${columns.length + 1}`}
              >
                <span style={{ color: `${DANGER}`, fontWeight: "bolder" }}>
                  Void
                </span>{" "}
                : {newGame.getVoidRound()}
              </td>
            </tr>
          </tbody>
        </table>
        {!data.length && (
          <p style={{ textAlign: "center" }}>No data to display</p>
        )}
      </div>
      <div className="table-button-wrapper">
        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--gradient"
          width="w-60"
          onClick={() => {
            if (!triggeredByTab) {
              if (
                selectedMode === `${SINGLE}` &&
                onePlayerGameType === `${RANDOM}`
              ) {
                contextDispatch({
                  type: "RANDOMIZE_THE_DIFFICULTY",
                  payload: { difficulty: generateRandomDifficulty() },
                });
                contextDispatch({
                  type: "SHOW_GAME_PREP_PAGE",
                });
              } else if (
                selectedMode === `${MULTI}` &&
                multiPlayerGameType === `${SESSION}` &&
                Number(numOfGamesInSession) === Number(sessionCount)
              ) {
                alertSessionEnd(initialState, contextDispatch);
              } else {
                contextDispatch({
                  type: "SET_NEW_SESSION_COUNT",
                  payload: { sessionCount: sessionCount + 1 },
                });
                contextDispatch({
                  type: "SHOW_GAME_PREP_PAGE",
                });
              }
            } else {
              contextDispatch({
                type: "SHOW_SCORE_TABLE",
                payload: { showScoreTable: false },
              });
            }
          }}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default Table;

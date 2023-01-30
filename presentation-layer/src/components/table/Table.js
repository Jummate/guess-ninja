import { React, useContext } from "react";
import { AppContext } from "../../utils/context";
import Button from "../button/Button";
import "./Table.css";

const Table = ({ data = [], columns }) => {
  const context = useContext(AppContext);
  const {
    initialState: { sessionCount },
    contextDispatch,
  } = context;
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
          onClick={() =>
            // closeFunc({
            //   type: "SHOW_SCORE_TABLE",
            //   payload: { showScoreTable: false },
            // })
            {
              contextDispatch({
                type: "SET_NEW_SESSION_COUNT",
                payload: { sessionCount: sessionCount + 1 },
              });
              contextDispatch({
                type: "SHOW_GAME_PREP_PAGE",
              });
            }
          }
        >
          CLOSE
        </Button>
      </div>
    </div>
  );
};

export default Table;

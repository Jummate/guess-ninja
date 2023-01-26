import { React } from "react";
import Button from "../button/Button";
import "./Table.css";

const Table = ({ data = [], columns }) => {
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
          // onClick={() => (
          //   contextDispatch({ type: "SHOW_HOME_PAGE" }), setShowMenu(!showMenu)
          // )}
        >
          CLOSE
        </Button>
      </div>
    </div>
  );
};

export default Table;

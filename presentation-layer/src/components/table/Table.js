import { React } from "react";
import "./Table.css";

const Table = ({ data = [], columns }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <td>S/N</td>
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
  );
};

export default Table;

import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";

function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { name, unit,Gmin, Gmax, Amin, Amax, Rmin, Rmax } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={name}
            onChange={(event) => onValUpdate(index, event)}
            name="name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={unit}
            onChange={(event) => onValUpdate(index, event)}
            name="unit"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={Rmin}
            onChange={(event) => onValUpdate(index, event)}
            name="Rmin"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={Rmax}
            onChange={(event) => onValUpdate(index, event)}
            name="Rmax"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={Amin}
            onChange={(event) => onValUpdate(index, event)}
            name="Amin"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={Amax}
            onChange={(event) => onValUpdate(index, event)}
            name="Amax"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={Gmin}
            onChange={(event) => onValUpdate(index, event)}
            name="Gmin"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={Gmax}
            onChange={(event) => onValUpdate(index, event)}
            name="Gmax"
            className="form-control"
          />
        </td>
        <td>
          <button
            className="btn btn"
            onClick={() => tableRowRemove(index)}
          >
           <MdDelete color="primary"/>
          </button>
        </td>
      </tr>
    );
  });
}
function Table() {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const data = {
      name: "",
      unit: "",
      Rmin: "",
      Rmax: "",
      Amin: "",
      Amax: "",
      Gmin: "",
      Gmax: "",
    };
    initRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };
  return (
    <>
      
      <table className="table table-striped" style={{fontSize:15}}>
        <thead style={{backgroundColor:'#555555',color:'white'}}>
          <tr>
          <th>Parameter name</th>
       <th>Unit</th>
        <th>R min</th>
        <th>R max</th>
        <th>A min</th>
        <th>A max</th>
        <th>G min</th>
        <th>G max</th>
            <th>
              <button className="btn btn" onClick={addRowTable}>
              <MdAdd color="info" sx={{fontSize:30}}/>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </>
  );
}
export default Table;
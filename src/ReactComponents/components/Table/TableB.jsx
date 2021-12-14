/* test with library, will be removed if my own table is ok*/

import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "./Table.css";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

//const rowStyle = { background: "#eaecce" };

const Table = () => {
  const rowData = JSON.parse(localStorage.getItem("employees"));
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    document.querySelector("#currentRowCount").innerHTML = 5;
  };

  const setRowData = (rowCount) => {
    gridApi.setRowData(getData(rowCount));
    document.querySelector("#currentRowCount").innerHTML = rowCount;
  };

  const cbFloatingRows = () => {
    var show = document.getElementById("floating-rows").checked;
    if (show) {
      gridApi.setPinnedTopRowData([createRow(999), createRow(998)]);
      gridApi.setPinnedBottomRowData([createRow(997), createRow(996)]);
    } else {
      gridApi.setPinnedTopRowData(null);
      gridApi.setPinnedBottomRowData(null);
    }
  };

  const setAutoHeight = () => {
    gridApi.setDomLayout("autoHeight");
    document.querySelector("#myGrid").style.height = "";
  };

  const setFixedHeight = () => {
    gridApi.setDomLayout("normal");
    document.querySelector("#myGrid").style.height = "400px";
  };
  return (
    <div>
      <div
        className="test-header"
        style={{ padding: "5px", justifyContent: "space-between" }}
      >
        <div style={{ alignItems: "start" }}>
          <button onClick={() => setRowData(0)}>0 Rows</button>
          <button onClick={() => setRowData(5)}>5 Rows</button>
          <button onClick={() => setRowData(50)}>50 Rows</button>
        </div>
        <div style={{ alignItems: "center" }}>
          <label>
            <input
              type="checkbox"
              id="floating-rows"
              onClick={() => cbFloatingRows()}
              style={{ verticalAlign: "text-top" }}
            />
            <span
              style={{
                backgroundColor: "#00e5ff",
                width: "15px",
                height: "15px",
                border: "1px solid #888",
                display: "inline-block",
                verticalAlign: "text-top",
              }}
            ></span>
            Pinned Rows
          </label>

          <button onClick={() => setAutoHeight()}>Auto Height</button>
          <button onClick={() => setFixedHeight()}>Fixed Height</button>
        </div>
        <div style={{ alignItems: "end" }}>
          Row Count = <span id="currentRowCount"></span>
        </div>
      </div>

      <div
        id="myGrid"
        style={{
          height: "100%",
          width: "100%",
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          defaultColDef={{
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            filter: true,
            resizable: true,
          }}
          rowData={getData(5)}
          statusBar={{ items: [{ component: "agAggregationComponent" }] }}
          enableRangeSelection={true}
          domLayout={"autoHeight"}
          animateRows={true}
          popupParent={document.body}
          onGridReady={onGridReady}
        >
          <AgGridColumn field="firstName" sortable={true}></AgGridColumn>
          <AgGridColumn field="lastName" sortable={true}></AgGridColumn>
          <AgGridColumn field="startDate" sortable={true}></AgGridColumn>
          <AgGridColumn field="department" sortable={true}></AgGridColumn>
          <AgGridColumn field="birthDate" sortable={true}></AgGridColumn>
          <AgGridColumn field="street" sortable={true}></AgGridColumn>
          <AgGridColumn field="State" sortable={true}></AgGridColumn>
          <AgGridColumn field="zipCode" sortable={true}></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};

export default Table;

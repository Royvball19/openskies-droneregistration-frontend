import Data from "../../Data";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import TableTypes from "../../DataTypes";
import "../../style/tableview.css";

let columns = null;

function declareType(input) {
  // declare tabletype and get route
  switch (input) {
    case "operators":
      columns = TableTypes.operators();
      return Data.getAllOperators();
    case "pilots":
      columns = TableTypes.pilots();
      return Data.getAllPilots();
    case "aircrafts":
      columns = TableTypes.aircrafts();
      return Data.getAllAircrafts();
    case "reports":
      columns = TableTypes.reports();
      return Data.getAllReports();
  }
}

export default function TableView({ match }) {
  // set state
  let [data, setData] = useState([]);

  // fetch data from backend
  useEffect(() => {
    declareType(match.params.tabletype)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (columns === null) {
    return null;
  } else {
    return (
      <div className="tableview">
        <div className="table">
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
          ></BootstrapTable>
        </div>
      </div>
    );
  }
}
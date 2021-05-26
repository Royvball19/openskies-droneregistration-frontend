import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import TableView from "../components/Tables/TableView";
import TableTypes from "../DataTypes";
import Data from "../Data";

const declareType = (input) => {
  // declare tabletype and get route
  switch (input) {
    case "operators":
      return Data.getAllOperators();
    case "pilots":
      return Data.getAllPilots();
    case "aircrafts":
      return Data.getAllAircrafts();
    case "reports":
      return Data.getAllReports();
  }
};

function declareColumns(input) {
  // declare tabletype and get route
  switch (input) {
    case "operators":
      return Data.getOperatorOptions();
    case "pilots":
      return Data.getPilotOptions();
    case "aircrafts":
      return Data.getAircraftOptions();
    case "reports":
      return Data.getReportOptions();
  }
}

export default function SearchInterfaceView({ match }) {
  // set state
  let [data, setData] = useState([]);
  let [columnsData, setColumnsData] = useState([]);

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
    declareColumns(match.params.tabletype)
      .then((response) => {
        setColumnsData(response.data.fields);
        console.log(response.data);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.tabletype]);

  let columns = [];
  for (let i = 0; i < columnsData.length; i++) {
    columns.push({
      dataField: columnsData[i].key,
      text: columnsData[i].key,
      type: columnsData[i].schema.type,
    });
  }
  console.log(columns);
  if (!columns.length) {
    return null;
  } else {
    return (
      <div>
        <Search type={match.params.tabletype} />
        <TableView columns={columns} data={data} />
      </div>
    );
  }
}

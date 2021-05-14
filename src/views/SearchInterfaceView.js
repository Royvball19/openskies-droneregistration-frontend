import React, { useEffect, useState} from "react";
import Search from "../components/Search";
import TableView from "../components/Tables/TableView";
import TableTypes from '../DataTypes';
import Data from "../Data";

let columns = null;

const declareType = (input) => {
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

export default function SearchInterfaceView({ match }) {
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
  
  return (
    <div>
      <Search />
      <TableView columns={columns} data={data}/>
    </div>
  );
}




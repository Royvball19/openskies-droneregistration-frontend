import Data from "./Data";
import TableView from "./components/Tables/TableView";
import React, { useEffect, useState } from "react";

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

export default function Test() {
  let [data, setData] = useState([]);

  useEffect(() => {
    declareColumns("aircrafts")
      .then((response) => {
        setData(response.data.fields);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let columns = [];

  var i;
  for (i = 0; i < data.length; i++) {
    columns.push({
      dataField: data[i].key,
      text: data[i].key,
    });
  }

  if (!columns.length) {
    return null;
  } else {
    return (
      <>
        <TableView columns={columns} />
      </>
    );
  }
}

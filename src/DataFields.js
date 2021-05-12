import Data from "./Data";
import React, { useEffect, useState } from "react";

export default function DataFields() {
  let bigArray = [];

  let [data, setData] = useState([]);

  useEffect(() => {
    Data.getAircraftOptions()
      .then((response) => {
        bigArray.push(response.data);
      }, [])
      .catch((error) => {
        console.log(error);
      });
    Data.getOperatorOptions()
      .then((response) => {
        bigArray.push(response.data);
      }, [])
      .catch((error) => {
        console.log(error);
      });
    Data.getPilotOptions()
      .then((response) => {
        bigArray.push(response.data);
      }, [])
      .catch((error) => {
        console.log(error);
      });
    Data.getReportOptions()
      .then((response) => {
        bigArray.push(response.data);
      }, [])
      .catch((error) => {
        console.log(error);
      });
    console.log(bigArray);
    setData(bigArray);
  }, []);

  console.log(data);

  return (
    <div>
      <h1></h1>
    </div>
  );
}

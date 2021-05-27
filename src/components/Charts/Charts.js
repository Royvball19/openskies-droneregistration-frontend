import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import "../../style/charts.css";
import Data from "../../Data";
import axios from "axios";

function Charts() {
  let [operatorData, setOperatorData] = useState({});
  let [aircraftData, setAircraftData] = useState([]);
  let [pilotData, setPilotData] = useState([]);
  let [reportData, setReportData] = useState([]);
  let [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .all([
        Data.getAllOperators(),
        Data.getAllAircrafts(),
        Data.getAllPilots(),
        Data.getAllReports(),
      ])
      .then(
        axios.spread((...responses) => {
          setOperatorData(responses[0].data.length);
          setAircraftData(responses[1].data.length);
          setPilotData(responses[2].data.length);
          setReportData(responses[3].data.length);
          setLoaded(true);
        })
      )
      .catch((errors) => {
        // react on errors.
      });
  }, [isLoaded]);

  if (isLoaded) {
    let data = [
      {
        object: "operators",
        id: "operators",
        operators: operatorData,
        value: operatorData,
      },
      {
        object: "aircrafts",
        id: "aircrafts",
        aircrafts: aircraftData,
        value: aircraftData,
      },
      {
        object: "pilots",
        id: "pilots",
        pilots: pilotData,
        value: pilotData,
      },
      {
        object: "reports",
        id: "reports",
        reports: reportData,
        value: reportData,
      },
    ];

    return (
      <div className="charts">
        <BarChart data={data} />
        <PieChart data={data} />
        <LineChart data={data} />
      </div>
    );
  } else {
    return null;
  }
}

export default Charts;

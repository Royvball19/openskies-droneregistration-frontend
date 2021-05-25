import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import "../../style/charts.css";
import Data from "../../Data";

function Charts({}) {
  let [operatorData, setOperatorData] = useState({});
  let [aircraftData, setAircraftData] = useState([]);
  let [pilotData, setPilotData] = useState([]);
  let [reportData, setReportData] = useState([]);
  let [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    Data.getAllOperators()
      .then((response) => {
        setOperatorData(response.data.length);
      }, [])
      .catch((error) => {
        console.log(error);
      });
    Data.getAllAircrafts()
      .then((response) => {
        setAircraftData(response.data.length);
      }, [])
      .catch((error) => {
        console.log(error);
      });
    Data.getAllPilots()
      .then((response) => {
        setPilotData(response.data.length);
      }, [])
      .catch((error) => {
        console.log(error);
      });
    Data.getAllReports()
      .then((response) => {
        setReportData(response.data.length);
      }, [])
      .catch((error) => {
        console.log(error);
      });
    setLoaded(true);
  }, []);

  if (isLoaded) {
    let data = [
      {
        object: "operators",
        id: "operators",
        value: operatorData,
        operators: operatorData,
      },
      {
        object: "pilots",
        id: "pilots",
        value: pilotData,
        pilots: pilotData,
      },
      {
        object: "aircrafts",
        id: "aircrafts",
        value: aircraftData,
        aircrafts: aircraftData,
      },
      {
        object: "reports",
        id: "reports",
        value: reportData,
        reports: reportData,
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

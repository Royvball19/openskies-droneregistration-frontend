import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import "../../style/charts.css";
import Data from "../../Data";

function Charts({}) {
  let [dataSet, setData] = useState([]);
  let [operatorData, setOperatorData] = useState({});
  let [aircraftData, setAircraftData] = useState([]);
  let [pilotData, setPilotData] = useState([]);
  let [reportData, setReportData] = useState([]);
  let [isLoaded, setLoaded] = useState(false);

  function addTo(value) {
    setData((prevArray) => [...prevArray, value]);
    document.getElementById(value).style.display = "none";

    if (value === "operators") {
      document.getElementById("operatorsRemove").style.display = "block";
    } else if (value === "pilots") {
      document.getElementById("pilotsRemove").style.display = "block";
    } else if (value === "aircrafts") {
      document.getElementById("aircraftsRemove").style.display = "block";
    } else if (value === "reports") {
      document.getElementById("reportsRemove").style.display = "block";
    }
  }

  function removeFrom(value) {
    document.getElementById(value + "Remove").style.display = "none";
    let arrayCopy = dataSet;
    let valueIndex = dataSet.indexOf(value);
    arrayCopy.splice(valueIndex, 1);
    setData(arrayCopy);

    console.log(dataSet);
    if (value === "operators") {
      document.getElementById("operators").style.display = "block";
    } else if (value === "pilots") {
      document.getElementById("pilots").style.display = "block";
    } else if (value === "aircrafts") {
      document.getElementById("aircrafts").style.display = "block";
    } else if (value === "reports") {
      document.getElementById("reports").style.display = "block";
    }
  }

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
        <BarChart dataSet={dataSet} data={data} />
        <PieChart dataSet={dataSet} data={data} />
        <LineChart dataSet={dataSet} data={data} />
        <div className="addButtons">
          <button id="operators" onClick={() => addTo("operators")}>
            operators +
          </button>
          <button id="pilots" onClick={() => addTo("pilots")}>
            pilots +
          </button>
          <button id="aircrafts" onClick={() => addTo("aircrafts")}>
            aircrafts +
          </button>
          <button id="reports" onClick={() => addTo("reports")}>
            reports +
          </button>
        </div>
        <div>
          <button
            className="removeButtons"
            id="operatorsRemove"
            onClick={() => removeFrom("operators")}
          >
            operators -
          </button>
          <button
            className="removeButtons"
            id="pilotsRemove"
            onClick={() => removeFrom("pilots")}
          >
            pilots -
          </button>
          <button
            className="removeButtons"
            id="aircraftsRemove"
            onClick={() => removeFrom("aircrafts")}
          >
            aircrafts -
          </button>
          <button
            className="removeButtons"
            id="reportsRemove"
            onClick={() => removeFrom("reports")}
          >
            reports -
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Charts;

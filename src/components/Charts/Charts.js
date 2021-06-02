import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import "../../style/charts.css";
import Data from "../../Data";
import axios from "axios";
import moment from "moment";

function Charts() {
  let [operatorData, setOperatorData] = useState({});
  let [aircraftData, setAircraftData] = useState([]);
  let [pilotData, setPilotData] = useState([]);
  let [reportData, setReportData] = useState([]);
  let [currentValue, setCurrentValue] = useState("reports");
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
          setOperatorData(responses[0].data);
          setAircraftData(responses[1].data);
          setPilotData(responses[2].data);
          setReportData(responses[3].data);
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
        operators: operatorData.length,
        value: operatorData.length,
      },
      {
        object: "aircrafts",
        id: "aircrafts",
        aircrafts: aircraftData.length,
        value: aircraftData.length,
      },
      {
        object: "pilots",
        id: "pilots",
        pilots: pilotData.length,
        value: pilotData.length,
      },
      {
        object: "reports",
        id: "reports",
        reports: reportData.length,
        value: reportData.length,
      },
    ];

    let dates = [];
    let formatted;

    let currentInput;
    let object;

    switch (currentValue) {
      case "pilots":
        currentInput = pilotData;
        object = "pilots";
        break;
      case "aircrafts":
        currentInput = aircraftData;
        object = "aircrafts";
        break;
      case "reports":
        currentInput = reportData;
        object = "reports";
        break;
      default:
      // code block
    }

    function retrieveReports() {
      for (let i = 0; i < currentInput.length; i++) {
        let str = currentInput[i].created_at;
        formatted = str.substr(0, 7);
        dates.push(formatted);
      }
    }

    retrieveReports();

    let currentMonths = [];

    let check = moment(moment(), "YYYY/MM/DD");
    let year = check.format("Y");
    let month = check.format("M");
    if (month.length > 0) {
      month = "0" + month;
    }
    let currentDate = year + "-" + month;
    currentMonths.push(currentDate);

    let lastMonth = month - 1;
    currentMonths.push(year + "-" + 0 + lastMonth);
    let monthBeforelastMonth = month - 2;
    currentMonths.push(year + "-" + 0 + monthBeforelastMonth);

    let currentData = [
      {
        object: object,
        currentMonth: currentMonths[0],
        currentMonthData: dates.filter((item) => item == currentMonths[0])
          .length,
        lastMonth: currentMonths[1],
        lastMonthData: dates.filter((item) => item == currentMonths[1]).length,
        beforeLastMonth: currentMonths[2],
        beforeLastMonthData: dates.filter((item) => item == currentMonths[2])
          .length,
      },
    ];

    return (
      <>
        <button onClick={() => setCurrentValue("reports")}>Reports</button>
        <button onClick={() => setCurrentValue("pilots")}>Pilots</button>
        <button onClick={() => setCurrentValue("aircrafts")}>Aircrafts</button>
        <div className="charts">
          <BarChart data={data} />
          <LineChart data={currentData} />
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default Charts;

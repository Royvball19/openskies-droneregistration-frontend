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
  let [reports, setReports] = useState([]);
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
          setPilotData(responses[2].data);
          setReportData(responses[3].data.length);
          setReports(responses[3].data);
          setLoaded(true);
        })
      )
      .catch((errors) => {
        // react on errors.
      });
  }, [isLoaded]);

  if (isLoaded) {
    // let data = [
    //   {
    //     object: "operators",
    //     id: "operators",
    //     operators: operatorData,
    //     value: operatorData,
    //   },
    //   {
    //     object: "aircrafts",
    //     id: "aircrafts",
    //     aircrafts: aircraftData,
    //     value: aircraftData,
    //   },
    //   {
    //     object: "pilots",
    //     id: "pilots",
    //     pilots: pilotData,
    //     value: pilotData,
    //   },
    //   {
    //     object: "reports",
    //     id: "reports",
    //     reports: reportData,
    //     value: reportData,
    //   },
    // ];

    let dates = [];
    let formatted;

    function retrieveReports() {
      for (let i = 0; i < pilotData.length; i++) {
        let str = pilotData[i].created_at;
        formatted = str.substr(0, 7);
        console.log(formatted);
        dates.push(formatted);
      }
    }

    retrieveReports();

    let currentMonths = [];

    var check = moment(moment(), "YYYY/MM/DD");
    var year = check.format("Y");
    var month = check.format("M");
    if (month.length > 0) {
      month = "0" + month;
    }
    let currentDate = year + "-" + month;
    currentMonths.push(currentDate);

    let lastMonth = month - 1;
    currentMonths.push(year + "-" + 0 + lastMonth);
    let monthBeforelastMonth = month - 2;
    currentMonths.push(year + "-" + 0 + monthBeforelastMonth);

    console.log(currentMonths);

    console.log(dates.filter((item) => item == currentMonths[0]).length);

    // console.log(month - 2);

    // console.log(month);

    return <div className="charts">{/* {<BarChart data={data} />} */}</div>;
  } else {
    return null;
  }
}

export default Charts;

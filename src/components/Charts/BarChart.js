import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import "../../style/charts.css";
import Data from "../../Data";

function BarChart({}) {
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

  let data = [];

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
        operators: operatorData,
      },
      {
        object: "pilots",
        pilots: pilotData,
      },
      {
        object: "aircrafts",
        aircrafts: aircraftData,
      },
      {
        object: "reports",
        reports: reportData,
      },
    ];

    return (
      <div className="chart-parent">
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
        <ResponsiveBar
          data={data}
          keys={dataSet}
          indexBy="object"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "number",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    );
  } else {
    return null;
  }
}

export default BarChart;

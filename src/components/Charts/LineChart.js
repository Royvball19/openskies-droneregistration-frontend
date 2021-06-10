import { ResponsiveLine } from "@nivo/line";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "../../style/charts.css";
import { useTranslation } from "react-i18next";

function LineChart({ operatorData, aircraftData, pilotData, reportData }) {
  let [currentValue, setCurrentValue] = useState("reports");
  useEffect(() => {}, [operatorData, aircraftData, pilotData, reportData]);

  let currentInput;
  let object;

  const { t } = useTranslation();

  // Choose input type
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
  }

  let dates = [];
  // Check how many there are in the array
  for (let i = 0; i < currentInput.length; i++) {
    let str = currentInput[i].created_at;
    let formatted = str.substr(0, 7);
    dates.push(formatted);
  }

  // Retrieve current month
  let currentMonths = [];
  const check = moment(moment(), "YYYY/MM/DD");
  let year = check.format("Y");
  let month = check.format("M");

  if (month.length > 0) {
    month = "0" + month;
  }
  if (month === "01") {
    year = year - 1;
  }

  // Define months
  const separator = "-";
  let currentDate = year + separator + month;
  currentMonths.push(currentDate);
  let lastMonth = month - 1;
  currentMonths.push(year + separator + 0 + lastMonth);
  let monthBeforelastMonth = month - 2;
  currentMonths.push(year + separator + 0 + monthBeforelastMonth);

  // Set data for chart
  let lineData = [
    {
      id: "new " + object,
      data: [
        {
          x: currentMonths[0],
          y: dates.filter((item) => item == currentMonths[0]).length,
        },
        {
          x: currentMonths[1],
          y: dates.filter((item) => item == currentMonths[1]).length,
        },
        {
          x: currentMonths[2],
          y: dates.filter((item) => item == currentMonths[2]).length,
        },
      ],
    },
  ];

  return (
    <div class="chart-parent monthly-chart">
      <ResponsiveLine
        data={lineData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: object,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(255, 255, 255, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(255, 255, 255, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
      <div className="chart-buttons">
        <button onClick={() => setCurrentValue("reports")}>
          {t("reports")}
        </button>
        <button onClick={() => setCurrentValue("pilots")}>{t("pilots")}</button>
        <button onClick={() => setCurrentValue("aircrafts")}>
          {t("aircraft")}
        </button>
      </div>
    </div>
  );
}

export default LineChart;

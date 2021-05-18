import "../../style/chartsmenu.css";
import React, { useEffect, useState } from "react";
import Charts from "./Charts";
import {
  RiBarChart2Fill,
  RiPieChartFill,
  RiLineChartFill,
} from "react-icons/ri";

export default function ChartsMenu() {
  let chartData = [];

  let [charts, setCharts] = useState([]);

  const selectChart = (data, chart) => {
    return function () {
      chartData.push(data);
      chartData.push(chart);
      setCharts(chartData);
    };
  };

  return (
    <div>
      <ul class="top-level-menu">
        <li>
          <a className="add-charts-button">
            Add Charts <RiLineChartFill className="icon" />
          </a>
          <ul class="second-level-menu">
            <li>
              <a>All Operators</a>
              <ul class="third-level-menu">
                <li>
                  <a onClick={selectChart("operators", "barchart")}>
                    Bar Chart <RiBarChart2Fill className="icon" />
                  </a>
                </li>
                <li>
                  <a onClick={selectChart("operators", "piechart")}>
                    Pie Chart <RiPieChartFill className="icon" />
                  </a>
                </li>
                <li>
                  <a onClick={selectChart("operators", "linechart")}>
                    Line Chart <RiLineChartFill className="icon" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a>All Aircrafts</a>
              <ul class="third-level-menu">
                <li>
                  <a onClick={selectChart("aircrafts", "barchart")}>
                    Bar Chart <RiBarChart2Fill className="icon" />
                  </a>
                </li>
                <li>
                  <a onClick={selectChart("aircrafts", "piechart")}>
                    Pie Chart <RiPieChartFill className="icon" />
                  </a>
                </li>
                <li>
                  <a onClick={selectChart("aircrafts", "linechart")}>
                    Line Chart <RiLineChartFill className="icon" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a>All Pilots</a>
              <ul class="third-level-menu">
                <li>
                  <a onClick={selectChart("pilots", "barchart")}>
                    Bar Chart <RiBarChart2Fill className="icon" />
                  </a>
                </li>
                <li>
                  <a onClick={selectChart("pilots", "piechart")}>
                    Pie Chart <RiPieChartFill className="icon" />
                  </a>
                </li>
                <li>
                  <a onClick={selectChart("pilots", "linechart")}>
                    Line Chart <RiLineChartFill className="icon" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <Charts charts={charts} />
    </div>
  );
}

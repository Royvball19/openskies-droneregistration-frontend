import React from "react";
import PieChart from "../Charts/PieChart";
import BarChart from "../Charts/BarChart";
import "../../style/charts.css";
import {
  RiBarChart2Fill,
  RiPieChartFill,
  RiLineChartFill,
} from "react-icons/ri";

export default function Charts() {
  return (
    <div>
      <div className="charts-container" id="charts-container">
        <button className="chart-button">
          Bar chart
          <RiBarChart2Fill className="icon chart-icon" />
        </button>
        <button className="chart-button">
          Pie chart
          <RiPieChartFill className="icon chart-icon" />
        </button>
        <button className="chart-button">
          Line chart
          <RiLineChartFill className="icon chart-icon" />
        </button>
      </div>
    </div>
  );
}

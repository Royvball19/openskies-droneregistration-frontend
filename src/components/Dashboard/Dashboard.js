import React from "react";
import Charts from "./Charts";
import "../../style/dashboard.css";
import { RiLineChartFill } from "react-icons/ri";

export default function Dashboard() {
  const openMenu = () => {
    if (document.getElementById("charts-container").style.opacity === "1") {
      document.getElementById("charts-container").style.opacity = "0";
    } else {
      document.getElementById("charts-container").style.opacity = "1";
    }
  };

  return (
    <div>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <button className="button" onClick={openMenu}>
          <div className="btn-content">
            <p>Add charts</p>
            <RiLineChartFill className="icon chart-icon" />
          </div>
        </button>
        <Charts />
      </div>
    </div>
  );
}

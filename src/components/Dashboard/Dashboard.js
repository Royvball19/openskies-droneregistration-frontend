import React from "react";
import "../../style/dashboard.css";
import BarChart from "../Charts/BarChart";

export default function Dashboard() {
  return (
    <div>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <BarChart />
      </div>
    </div>
  );
}

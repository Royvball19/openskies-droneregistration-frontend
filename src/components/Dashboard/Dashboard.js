import React from "react";
import "../../style/dashboard.css";
import Charts from "../Charts/Charts";

export default function Dashboard() {
  return (
    <div>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <Charts />
      </div>
    </div>
  );
}

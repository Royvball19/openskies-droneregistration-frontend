import React from "react";
import ChartsMenu from "./ChartsMenu";
import "../../style/dashboard.css";
import { RiLineChartFill } from "react-icons/ri";

export default function Dashboard() {
  return (
    <div>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <ChartsMenu />
      </div>
    </div>
  );
}

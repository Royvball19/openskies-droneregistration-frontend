import React, { useEffect, useState } from "react";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";

export default function Charts({ charts }) {
  console.log(charts);

  if (charts[1] === "barchart") {
    return (
      <div className="chart-div">
        <BarChart type={charts[0]} />
      </div>
    );
  } else if (charts[1] === "piechart") {
    return (
      <div className="chart-div">
        <PieChart type={charts[0]} />
      </div>
    );
  } else if (charts[1] === "linechart") {
    return <div></div>;
  } else {
    return null;
  }
}

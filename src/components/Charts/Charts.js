import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import AverageChart from "./AverageChart";
import WeatherChart from "./WeatherChart";
import "../../style/charts.css";
import Data from "../../service/Data";
import axios from "axios";
import { RiLineChartFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function Charts() {
  let [operatorData, setOperatorData] = useState({});
  let [aircraftData, setAircraftData] = useState([]);
  let [pilotData, setPilotData] = useState([]);
  let [reportData, setReportData] = useState([]);
  let [chartsStatus, setChartsStatus] = useState(false);
  let [isLoaded, setLoaded] = useState(false);

  const { t } = useTranslation();

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
          setOperatorData(responses[0].data);
          setAircraftData(responses[1].data);
          setPilotData(responses[2].data);
          setReportData(responses[3].data);
          setLoaded(true);
        })
      )
      .catch((errors) => {
        // react on errors.
      });
  }, [isLoaded, chartsStatus]);

  const showCharts = () => {
    if (chartsStatus) {
      setChartsStatus(false);
    } else if (!chartsStatus) {
      setChartsStatus(true);
    }
  };

  if (chartsStatus) {
    return (
      <>
        <button class="change-button" onClick={showCharts}>
          {t("charts")} <RiLineChartFill className="icon chart-icon" />
        </button>
        <div className="charts">
          <BarChart
            operatorData={operatorData}
            aircraftData={aircraftData}
            pilotData={pilotData}
            reportData={reportData}
          />
          <LineChart
            operatorData={operatorData}
            aircraftData={aircraftData}
            pilotData={pilotData}
            reportData={reportData}
          />
          <AverageChart operatorData={operatorData} reportData={reportData} />
        </div>
        <WeatherChart />
      </>
    );
  } else {
    return (
      <>
        <button class="change-button" onClick={showCharts}>
          {t("charts")} <RiLineChartFill className="icon chart-icon" />
        </button>
      </>
    );
  }
}

export default Charts;

import React, { useEffect, useState } from "react";
import "../../style/reportsdetails.css";
import { useTranslation } from "react-i18next";
import Data from "../../Data";
import moment from "moment";

export default function ReportDetails({ match }) {
  const { t } = useTranslation();
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(match.params);
    Data.getSingleReport(match.params.id)
      .then((response) => {
        setData(response.data);
      }, [])
      .catch((error) => {});
  }, []);

  const ReportList = () =>
    Object.entries(data).map(([key, value]) => {
      if (key === "aircraft" || key === "operator") {
        return null;
      } else if (key === "created_at" || key === "updated_at") {
        return (
          <div className="pair">
            <div className="left-key">{key}</div>
            <div className="right-value">{moment(value).calendar()}</div>
          </div>
        );
      } else {
        return (
          <div className="pair">
            <div className="left-key">{key}</div>
            <div className="right-value">{value.toString()}</div>
          </div>
        );
      }
    });

  return (
    <>
      <div className="reports container">
        <h1 className="">Report Details</h1>
        <div className="details-container">
          <ReportList />
        </div>
      </div>
    </>
  );
}

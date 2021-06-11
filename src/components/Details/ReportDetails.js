import React, { useEffect, useState } from "react";
import "../../style/reportsdetails.css";
import { useTranslation } from "react-i18next";
import Data from "../../service/Data";
import moment from "moment";

export default function ReportDetails({ match }) {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [ isLoaded, setLoaded ] = useState(false);

  useEffect(() => {
    // fetch data from backend
    Data.getSingleReport(match.params.id)
      .then((response) => {
        setData(response.data);
        setLoaded(true)
      }, [])
      .catch((error) => {});
  }, []);

  const ReportList = () =>
    Object.entries(data).map(([key, value]) => {
      // filter out nested object
      if (key === "aircraft" || key === "operator") {
        return null;
      } else if (key === "created_at" || key === "updated_at") {
        // print key value pair with date format
        return (
          <div className="pair">
            <div className="left-key">{key}</div>
            <div className="right-value">{moment(value).calendar()}</div>
          </div>
        );
      } else {
        // print all the key value pairs
        return (
          <div className="pair">
            <div className="left-key">{key}</div>
            <div className="right-value">{value}</div>
          </div>
        );
      }
    });

  return (
    <>
      <div className="reports container">
        <h1 className="">Report Details</h1>
        <div className="details-container">
          {isLoaded ? (
          <ReportList />
          ): null } 
        </div>
      </div>
    </>
  );
}

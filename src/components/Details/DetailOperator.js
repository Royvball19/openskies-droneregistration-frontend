import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../style/details.css";
import { useTranslation } from "react-i18next";
import Data from "../../Data";

function DetailOperator({ match }) {
  const { t } = useTranslation();

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(match.params)
    Data.getPrivilegedOperator( match.params.id)
      .then((response) => {
        setData(response.data)
        console.log(response.data);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="detailOperatorContainer">
      <div className="headerDiv">
        <h2 className="titleH">{t("detailsOperator")}</h2>
        <Button className="exportButton">Export</Button>
      </div>
      <div className="allDetails">
        <div className="operatorDetails">
          <div className="staticDetails">
            <h4>{t("companyName")}:</h4>
            <h4>{t("id")}:</h4>
            <br></br>
            <h4>{t("adress")}:</h4>
            <h4>{t("postalCode")}:</h4>
            <h4>{t("city")}</h4>
            <h4>{t("country")}:</h4>
            <br></br>
            <h4>{t("email")}:</h4>
            <h4>{t("operatorType")}:</h4>
            <br></br>
            <h4>{t("operatorCreatedAt")}:</h4>
            <h4>{t("lastUpdatedAt")}:</h4>
          </div>
          <div className="changingDetails">
            <h4>{data.company_name}</h4>
            <h4>{data.id}</h4>
            <br></br>
            <h4>{data.adress_line_1}</h4>
            <h4>{data.postcode}</h4>
            <h4>{data.city}</h4>
            <h4>{data.country}</h4>
            <br></br>
            <h4>{data.email}</h4>
            <h4>{data.operator_type}</h4>
            <br></br>
            <h4>{data.created_at}</h4>
            <h4>{data.updated_at}</h4>
          </div>
        </div>
        <div className="allSmallDetails">
          <div className="pilots">
            <h2>{t("pilots")}</h2>
          </div>
          <div className="aircrafts">
            <h2>{t("aircrafts")}</h2>
          </div>
          <div className="reports">
            <h2>{t("reports")}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOperator;
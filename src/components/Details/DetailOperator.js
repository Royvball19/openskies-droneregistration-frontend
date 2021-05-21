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
            <h4>{t("companyNumber")}:</h4>
            <h4>{t("id")}:</h4>
            <h4>{t("registeredAt")}:</h4>
            <br></br>
            <h4>{t("adress")}:</h4>
            <h4>{t("postalCode")}:</h4>
            <h4>{t("country")}:</h4>
            <br></br>
            <h4>{t("email")}:</h4>
            <h4>{t("phoneNumb")}:</h4>
            <br></br>
            <h4>{t("insuranceNumb")}:</h4>
            <h4>{t("vatNumb")}:</h4>
            <h4>{t("expiration")}:</h4>
            <h4>{t("operatorType")}:</h4>
            <br></br>
            <h4>{t("operatorCreatedAt")}:</h4>
            <h4>{t("lastUpdatedAt")}:</h4>
          </div>
          <div className="changingDetails">
            <h4>{data.company_name}</h4>
            <h4>23423432</h4>
            <h4>390-1023-12</h4>
            <h4>14-06-2019</h4>
            <br></br>
            <h4>Streetname 2</h4>
            <h4>9823SJ</h4>
            <h4>Switzerland</h4>
            <br></br>
            <h4>drone@starfled.com</h4>
            <h4>+31 546 34 90 45</h4>
            <br></br>
            <h4>324-324-323</h4>
            <h4>234324</h4>
            <h4>22-05-2022</h4>
            <h4>AUTH</h4>
            <br></br>
            <h4>14-06-2019</h4>
            <h4>09-06-2021</h4>
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
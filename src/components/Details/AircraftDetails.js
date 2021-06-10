import React, { useEffect, useState } from "react";
import "../../style/aircraftdetails.css";
import { useTranslation } from "react-i18next";
import Data from "../../Data";

export default function AircraftDetails({ match }) {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [operator, setOperator] = useState([]);

  useEffect(() => {
    console.log(match.params);
    Data.getSingleAircraft(match.params.id)
      .then((response) => {
        setData(response.data);
        setOperator(response.data.operator);
        console.log(response.data);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let regi_mark = data.registration_mark;

  if (data.registration_mark === null) {
    regi_mark = "No Registration";
  } else {
  }

  return (
    <>
      <h1 className="aircraftHeader">{t("aircraftDetails")}</h1>
      <div className="container-fluid aircraftDetailContainer">
        <div className="row">
          <div className="col-12 aircraftDetails">
            <div className="leftContent">
              <h4>{t("registrationMark")}</h4>
              <h4>{t("lastUpdatedAt")}</h4>
              <h4>{t("mass")}</h4>
              <h4>{t("maciNumb")}</h4>
              <h4>{t("model")}</h4>
              <h4>{t("status")}</h4>
            </div>
            <div className="rightContent">
              <h4>{regi_mark}</h4>
              <h4>{data.updated_at}</h4>
              <h4>{data.mass}</h4>
              <h4>{data.maci_number}</h4>
              <h4>{data.model}</h4>
              <h4>{data.status}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid operatorContainer">
        <div class="row">
          <div class="col-12 operatorDetails">
            <h2>{t("operator")}</h2>
            <div class="content">
              <div class="leftSection">
                <h4>{t("companyName")}</h4>
                <h4>{t("id")}</h4>
                <h4>{t("email")}</h4>
                <h4>{t("website")}</h4>
                <h4>{t("contactNumber")}</h4>
              </div>
              <div class="rightSection">
                <h4>{operator.company_name}</h4>
                <h4>{operator.id}</h4>
                <h4>{operator.email}</h4>
                <h4>{operator.website}</h4>
                <h4>{operator.phone_number}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

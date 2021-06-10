import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../style/details.css";
import { useTranslation } from "react-i18next";
import Data from "../../Data";
import CompanyLogo from "../../style/img/dummy-logo.png";
import axios from "axios";
import moment from "moment";
import { BiExport } from "react-icons/bi";
function DetailOperator({ match }) {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [variables, setVariables] = useState([]);
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    axios
      .all([
        Data.getPrivilegedOperator(match.params.id),
        Data.getPrivilegedOperatorOptions(match.params.id),
      ])
      .then(
        axios.spread((...responses) => {
          setData(responses[0].data);
          setVariables(responses[1].data.fields);
          setAddressData(responses[0].data.address);
          // use/access the results
          console.log(responses[0].data);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id]);

  return (
    <div className="detailOperatorContainer">
      <div className="headerDiv">
        <h2 className="titleH">{t("detailsOperator")}</h2>
      </div>
      <div className="container">
        <div className="allDetails row">
          <div className="operatorDetails col">
            <div className="staticDetails">
              <div className="details-container">
                <h4>{t("companyName")}</h4>
                <h4>{t("id")}</h4>
              </div>
              <div className="details-container">
                <h4>{t("adress")}</h4>
                <h4>{t("city")}</h4>
                <h4>{t("country")}</h4>
              </div>
              <div className="details-container">
                <h4>{t("email")}</h4>
                <h4>{t("website")}</h4>
                <h4>{t("operatorType")}</h4>
              </div>
              <div className="details-container">
                <h4>{t("createdAt")}</h4>
                <h4>{t("lastUpdatedAt")}</h4>
              </div>
            </div>
            <div className="changingDetails">
              <div className="details-container">
                <h4>{data.company_name}</h4>
                <h4>{data.id}</h4>
              </div>
              <div className="details-container">
                <h4>{addressData.address_line_1}</h4>
                <h4>{addressData.city}</h4>
                <h4>{data.country}</h4>
              </div>
              <div className="details-container">
                <h4>{data.email}</h4>
                <h4>{data.website}</h4>
                <h4>{data.operator_type}</h4>
              </div>
              <div className="details-container">
                <h4>{moment(data.created_at).calendar()}</h4>
                <h4>{moment(data.updated_at).calendar()}</h4>
              </div>
            </div>
          </div>
          <div className="allSmallDetails col-4">
            <div className="linked pilots">
              <h2>{t("pilots")}</h2>
            </div>
            <div className="linked aircrafts">
              <h2>{t("aircraft")}</h2>
            </div>
            <div className="linked reports">
              <h2>{t("reports")}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOperator;

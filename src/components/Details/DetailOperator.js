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
              <h4>Company name:</h4>
              <h4>ID:</h4>
            </div>

            <div className="details-container">
              <h4>Address:</h4>
              <h4>City:</h4>
              <h4>Country:</h4>
            </div>
            <div className="details-container">
              <h4>Email:</h4>
              <h4>Website:</h4>
              <h4>Operator type:</h4>
            </div>
            <div className="details-container">
              <h4>Created at:</h4>
              <h4>Updated at:</h4>
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
            <h2>{t("aircrafts")}</h2>
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

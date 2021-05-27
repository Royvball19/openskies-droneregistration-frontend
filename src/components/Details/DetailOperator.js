import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../style/details.css";
import { useTranslation } from "react-i18next";
import Data from "../../Data";
import CompanyLogo from "../../style/img/dummy-logo.png";
import axios from "axios";

function DetailOperator({ match }) {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [variables, setVariables] = useState([]);

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
          // use/access the results
          console.log(responses[0].data)
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id]);


  let columns = [];
  for (let i = 0; i < variables.length; i++) {
    columns.push({
      dataField: variables[i].key,
      text: variables[i].key,
      type: variables[i].schema.type,
    });
  }

  console.log(columns)

  return (
    <div className="detailOperatorContainer">
      <div className="headerDiv">
        <h2 className="titleH">{t("detailsOperator")}</h2>
        <Button className="exportButton">Export</Button>
      </div>
      <div className="allDetails">
        <div className="operatorDetails">
          <div className="staticDetails">
                {columns.map((column, index) => (
                    <h4>{column.text}</h4>
                ))}
          </div>
          <div className="changingDetails">
                        <h4>{data.id}</h4> 
            <h4>{data.company_name}</h4>
            <h4>{data.country}</h4>
            <h4>{data.website}</h4>
            <h4>{data.email}</h4>
            <h4>{data.operator_type}</h4>
            {/* <h4>{data.address.address_line_1} + {data.address.city}</h4> */}

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
      <div className="quoteDiv">
            <h3>"Drones are the future"</h3>
            <img src={CompanyLogo} alt="" />
      </div>
    </div>
  );
}

export default DetailOperator;
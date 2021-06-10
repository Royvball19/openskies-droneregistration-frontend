import React, { useEffect, useState } from "react";
import "../../style/pilotdetails.css";
import { useTranslation } from "react-i18next";
import Data from "../../Data";

export default function AircraftDetails({ match }) {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [privileged, setPrivileged] = useState(true);
  const [person, setPerson] = useState([]);
  const [address, setAddress] = useState([]);
  const [operator, setOperator] = useState([]);

  useEffect(() => {
    console.log(match.params);
    if (privileged === true) {
      Data.getPrivilegedPilot(match.params.id)
        .then((response) => {
          setData(response.data);
          setPerson(response.data.person);
          setAddress(response.data.address);
          setOperator(response.data.operator);
          console.log(response.data);
        }, [])
        .catch((error) => {
          console.log(error);
        });
    } else {
      Data.getSinglePilot(match.params.id)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        }, [])
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  // function to switch privileged state to true or false
  const showPrivData = () => {
    setPrivileged(!privileged);
    console.log("test");
  };

  let isActive = data.is_active;

  if (isActive) {
    isActive = "Yes";
  } else {
    isActive = "No";
  }

  // if privileged is true
  if (privileged) {
    return (
      <>
        <h1 className="pilotHeader">{t("pilotDetails")}</h1>
        <button onClick={showPrivData}>Switch data</button>
        <div className="container-fluid pilotDetailContainer">
          <div className="row">
            <div className="col-12 pilotDetails">
              <div className="leftContent">
                <h4>{t("firstName")}</h4>
                <h4>{t("lastName")}</h4>
                <h4>{t("adress")}</h4>
                <h4>{t("city")}</h4>
                <h4>{t("country")}</h4>
                <h4>{t("postalCode")}</h4>
                <h4>{t("createdAt")}</h4>
                <h4>{t("lastUpdatedAt")}</h4>
                <h4>{t("email")}</h4>
                <h4>{t("active")}</h4>
              </div>
              <div className="rightContent">
                <h4>{person.first_name}</h4>
                <h4>{person.last_name}</h4>
                <h4>{address.address_line_1}</h4>
                <h4>{address.city}</h4>
                <h4>{address.country}</h4>
                <h4>{address.postcode}</h4>
                <h4>{data.created_at}</h4>
                <h4>{data.updated_at}</h4>
                <h4>{person.email}</h4>
                <h4>{isActive}</h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    // if privileged is false
  } else {
    return (
      <>
        <h1 className="pilotHeader">{t("pilotDetails")}</h1>
        <button onClick={showPrivData}>Click to see privileged details</button>
        <div className="container-fluid pilotDetailContainer">
          <div className="row">
            <div className="col-12 pilotDetails">
              <div className="leftContent">
                <h4>{t("id")}</h4>
                <h4>{t("createdAt")}</h4>
                <h4>{t("lastUpdatedAt")}</h4>
              </div>
              <div className="rightContent">
                <h4>{data.id}</h4>
                <h4>{data.created_at}</h4>
                <h4>{data.updated_at}</h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

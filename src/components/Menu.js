import React from "react";
import "../style/menu.css";
import { IoIosCloseCircle, IoMdHome } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { VscSignOut } from "react-icons/vsc";
import CompanyLogo from "../style/img/dummy-logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import LanguageMenu from "./LanguageChanger/LanguageMenu";
import { useTranslation } from "react-i18next";

export const Menu = () => {
  const { t } = useTranslation();

  //function to close the menu from the left side
  function closeMenu() {
    document.getElementById("menuDiv").style.left = "-440px";
    document.getElementById("buttonId").style.visibility = "visible";
    document.getElementById("buttonId").style.transitionDelay = "0.55s";
  }

  return (
    <div id="menuDiv" className="menu">
      <div className="upper">
        <div className="profileInfo">
          <h2>Richard Branson</h2>
          <a className="closeButton" onClick={closeMenu}>
            <IoIosCloseCircle className="closeButton"/>
          </a>
        </div>
        <img src={CompanyLogo} alt="" />
      </div>

      <div className="dashboard">
          <Link to={{ pathname: "/" }} onClick={closeMenu}>
            <IoMdHome className="iconHome icon" />
            <h3>Dashboard</h3>
          </Link>
      </div>
   

      <div className="middle">
          <div className="searches">
            <div className="searchOperators">
              <Link
                to={{ pathname: "/tableview/" + "operators" }}
                onClick={closeMenu}
              >
                <HiOfficeBuilding className="iconOperators icon" />
                <h3>{t("menuOperators")}</h3>
              </Link>
            </div>

            <div className="searchDrones">
              <Link
                to={{ pathname: "/tableview/" + "aircrafts" }}
                onClick={closeMenu}
              >
                <GiDeliveryDrone className="iconDrones icon" />
                <h3>{t("menuAircrafts")}</h3>
              </Link>
            </div>
            <div className="searchPilots">
              <Link
                to={{ pathname: "/tableview/" + "pilots" }}
                onClick={closeMenu}
              >
                <BsFillPersonFill className="iconPilots icon" />
                <h3>{t("menuPilots")}</h3>{" "}
              </Link>
            </div>
          </div>
      </div>

      <div className="bottom">
          <div className="settings">
            <a href="#" onClick={closeMenu}>
              <FiSettings className="iconSettings icon" />
              <h3>{t("menuSettings")}</h3>
            </a>
          </div>

          <div className="signOut">
            <a href="#" onClick={closeMenu}>
              <VscSignOut className="iconSignOut icon" />
              <h3>{t("menuSignOut")}</h3>
            </a>
          </div>

          <div className="language">
            <a>
              <LanguageMenu className="world icon"/>
              <h3>{t("menuLanguage")}</h3>
            </a>
          </div>
      </div>

    </div>
    
  );
};

export default Menu;

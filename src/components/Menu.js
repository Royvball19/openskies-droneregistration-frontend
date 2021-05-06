import React, { useState } from "react";
import '../style/menu.css';
import { IoIosCloseCircle, IoMdHome } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { VscSignOut } from "react-icons/vsc";
import CompanyLogo from "../style/img/dummy-logo.png";

export const Menu = () => {
    

    return(
        <div className="menu">
            <div className="closeButton">
                <a href=""><IoIosCloseCircle /></a>
            </div>
            <div className="profileInfo">
                <h2>Richard Branson</h2>
                <img src={CompanyLogo} alt=""/>
                <div className="dashboard">
                    <IoMdHome className="iconHome" />
                    <h3>Dashboard</h3>
                </div>
                <div className="searchOperators">
                    <HiOfficeBuilding className="iconOperators"/>
                    <h3>Search all operators</h3>
                </div>
                <div className="searchDrones">
                    <GiDeliveryDrone className="iconDrones"/>
                    <h3>Search all drones</h3>
                </div>
                <div className="searchPilots">
                    <BsFillPersonFill className="iconPilots" />
                    <h3>Search all pilots</h3>
                </div>
                <div className="settings">
                    <FiSettings className="iconSettings" />
                    <h3>Settings</h3>
                </div>
                <div className="signOut">
                    <VscSignOut className="iconSignOut" />
                    <h3>Sign out</h3>
                </div>
            </div>
        </div>
    );
};

export default Menu
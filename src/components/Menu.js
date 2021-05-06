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

    const closeMenu = (e) => {
        
    }
    
    return(
        <div className="menu">
            <div className="closeButtonDiv">
                <a href="javascript:void(0)" className="closeButton" onClick={closeMenu}>
                    <IoIosCloseCircle />
                </a>
            </div>
            <div className="profileInfo">
                <h2>Richard Branson</h2>
                <img src={CompanyLogo} alt=""/>
                <div className="dashboard">
                    <a href="#">
                    <IoMdHome className="iconHome" />
                    <h3>Dashboard</h3>
                    </a>
                </div>
                <div className="searchOperators">
                    <a href="#">
                    <HiOfficeBuilding className="iconOperators"/>
                    <h3>Search all operators</h3>
                    </a>
                </div>
                <div className="searchDrones">
                    <a href="#">
                    <GiDeliveryDrone className="iconDrones"/>
                    <h3>Search all drones</h3>
                    </a>
                </div>
                <div className="searchPilots">
                    <a href="#">
                    <BsFillPersonFill className="iconPilots" />
                    <h3>Search all pilots</h3>
                    </a>
                </div>
                <div className="settings">
                    <a href="#">
                    <FiSettings className="iconSettings" />
                    <h3>Settings</h3>
                    </a>
                </div>
                <div className="signOut">
                    <a href="#">
                    <VscSignOut className="iconSignOut" />
                    <h3>Sign out</h3>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu
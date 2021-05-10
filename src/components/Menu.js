import React, { useState } from "react";
import '../style/menu.css';
import { IoIosCloseCircle, IoMdHome } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { VscSignOut } from "react-icons/vsc";
import CompanyLogo from "../style/img/dummy-logo.png";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'

export const Menu = () => {

    const history = useHistory()

    function resetHistory() {
        history.go(0)
    }

    //function to close the menu from the left side
    function closeMenu() {
        document.getElementById("menuDiv").style.left = "-440px";
        document.getElementById("buttonId").style.visibility = "visible";
        document.getElementById("buttonId").style.transitionDelay = "0.55s";
    }

    //Still need to add the links to the pages once we make them
    return (
        <div id="menuDiv" className="menu">
            <div className="closeButtonDiv">
                <a className="closeButton" onClick={closeMenu}>
                    <IoIosCloseCircle />
                </a>
            </div>
            <div className="profileInfo">
                <h2>Richard Branson</h2>
                <img src={CompanyLogo} alt="" />
                <div className="dashboard">
                    <Link to={{ pathname: '/' }} >
                        <IoMdHome className="iconHome icon" />
                        <h3>Dashboard</h3>
                    </Link>
                </div>
                <div className="searches">
                    <div className="searchOperators">
                        <Link to={{ pathname: '/tableview/' + 'operators', state: { tabletype: "operators" } }}> <HiOfficeBuilding className="iconOperators icon" />
                            <h3>Search all operators</h3></Link>
                    </div>
                    <div className="searchDrones">
                        <Link to={{ pathname: '/tableview/' + 'aircrafts', state: { tabletype: 'drones' } }}><GiDeliveryDrone className="iconDrones icon" />
                            <h3>Search all drones</h3></Link>
                    </div>
                    <div className="searchPilots">
                        <Link to={{ pathname: '/tableview/' + 'pilots', state: { tabletype: 'pilots' } }} ><BsFillPersonFill className="iconPilots icon" />
                            <h3>Search all pilots</h3> </Link>
                    </div>
                </div>
                <div className="settings">
                    <a href="#">
                        <FiSettings className="iconSettings icon" />
                        <h3>Settings</h3>
                    </a>
                </div>
                <div className="signOut">
                    <a href="#">
                        <VscSignOut className="iconSignOut icon" />
                        <h3>Sign out</h3>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu
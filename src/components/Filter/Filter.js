import React, { useState } from "react";
import '../../style/Filter.css'
import { BsSearch } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";

export const Filter = () => {

    function closeFilter() {
        document.getElementById("filter").style.right = "-400px";
    }

    return(
        <div id="filter" className="filterDiv">
            <div className="allFiltersDiv">
                <div className="Header">
                    <h2>Filter by</h2>
                    <a className="closeFilterA" onClick={closeFilter}> <BsSearch className="iconSearch"/></a>
                </div>
                <div className="pilotDiv">
                    <h3>Pilot</h3>
                    <p># ID</p>
                    <p>Aa First name</p>
                    <p>Aa Last name</p>
                    <p># Active</p>
                </div>
                <div className="operatorDiv">
                    <h3>Operator</h3>
                    <p># ID</p>
                    <p>Aa Company name</p>
                    <p>Aa Operator type</p>
                    <p># Country</p>
                    <p><AiOutlineCalendar className="iconCalander"/> Created at</p>
                </div>
                <div className="aircraftDiv">
                    <h3>Aircraft</h3>
                    <p># ID</p>
                    <p># Mass</p>
                    <p># Manufacturer</p>
                    <p># Category</p>
                    <p># Status</p>
                </div>
            </div>
        </div>
    );

}

export default Filter
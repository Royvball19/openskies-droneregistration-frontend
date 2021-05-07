import React, { useState } from "react";
import '../style/menu.css';
import { MdKeyboardArrowRight } from "react-icons/md";

export const ArrowButton = () => {
    

    function openMenu() {
        document.getElementById("menuDiv").style.left = "0px";
        document.getElementById("buttonId").style.visibility = "hidden";
    }

    return(
        <div id="buttonId" className="buttonDiv">
            <button className="arrowButton">
                <a href="javascript:void(0)" className="openButton" onClick={openMenu}><MdKeyboardArrowRight /></a>
            </button>
        </div>
    );

}

export default ArrowButton
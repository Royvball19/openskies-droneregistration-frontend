import React, { useState } from "react";
//Arrow button css made in menu.scss//
import "../style/menu.css";
import { MdKeyboardArrowRight } from "react-icons/md";

export const ArrowButton = () => {
  //Function to make the menu appear from the left side
  function openMenu() {
    document.getElementById("menuDiv").style.left = "0px";
    document.getElementById("buttonId").style.visibility = "hidden";
    document.getElementById("buttonId").style.transitionDelay = "0.01s";
  }

  return (
    <div id="buttonId" className="buttonDiv">
      <button className="arrowButton">
        <a className="openButton" onClick={openMenu}>
          <MdKeyboardArrowRight className="iconArrow icon" />
        </a>
      </button>
    </div>
  );
};

export default ArrowButton;

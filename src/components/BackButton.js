import React from "react";
import "../style/details.css";
import { IoMdUndo } from "react-icons/io";
import { useHistory } from "react-router-dom";

export const BackButton = () => {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <div className="backButtonDiv">
      <button className="backButton">
        <a className="goBack" onClick={goBack}>
          <IoMdUndo className="iconBack icon" />
        </a>
      </button>
    </div>
  );
};

export default BackButton;

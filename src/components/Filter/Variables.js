import React from "react";
import { BsArrowReturnLeft, BsSearch } from "react-icons/bs";
import DataTypes from "../../DataTypes";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

function Variables({ createFilterKey }) {
  function closeFilter() {
    document.getElementById("filter").style.right = "-400px";
  }

  const operatorsVariables = DataTypes.operators();

  function ListItems({ types }) {
    const icon = (type) => {
      if (type === "Integer") {
        return "# ";
      } else if (type === "String") {
        return "Aa ";
      } else if (type === "date") {
        return <AiOutlineCalendar />;
      }
    };
    const content = types.map((type) => (

      <li onClick={createFilterKey} data-param={type.dataField}>
        <span>{icon(type.variable)}</span>
        {type.text}
      </li>
    ));

    return <ul>{content}</ul>;
  }

  return (
    <div>
      <div className="allFiltersDiv">
        <div className="Header">
          <h2>Filter by</h2>
          <a className="closeFilterA" onClick={closeFilter}>
            {" "}
            {/* <BsSearch className="iconSearch" /> */}
            <GrClose className="iconSearch" />
          </a>
        </div>
        {/* <div className="pilotDiv">
          <h3>Pilot</h3>
          <p># ID</p>
          <p>Aa First name</p>
          <p>Aa Last name</p>
          <p># Active</p>
        </div> */}
        <div className="operatorDiv">
          <h3>Operators</h3>
          {/* <AiOutlineCalendar className="iconCalander" /> Created at */}
          <ListItems types={operatorsVariables} />
        </div>
        {/* <div className="aircraftDiv">
          <h3>Aircraft</h3>
          <p># ID</p>
          <p># Mass</p>
          <p># Manufacturer</p>
          <p># Category</p>
          <p># Status</p>
        </div> */}
      </div>
    </div>
  );
}

export default Variables;

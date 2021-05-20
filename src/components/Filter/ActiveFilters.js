import React from "react";
import { GrFormClose } from "react-icons/gr";

function ActiveFilters({ activeFilters, deleteFilter }) {
  let content = null;
  if (activeFilters.length > 0) {
    content = activeFilters.map((filter) => {
      return (
        <li className="active-filter" key={activeFilters.indexOf(filter)}>
          {Object.keys(filter)[0]} : &nbsp; <b>{Object.values(filter)[0]}</b>
          <GrFormClose
            className="delete-filter"
            onClick={() => deleteFilter(filter)}
          />
        </li>
      );
    });
  }
  return <ul className="active-filter-container">{content}</ul>;
}

export default ActiveFilters;

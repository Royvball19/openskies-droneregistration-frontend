import React, { useState } from "react";
import "../../style/Filter.css";
import Variables from "./Variables";
import Input from "./Input";
import { createFilter } from "../../custom hooks/searchfilter";

export const Filter = ({ addToQuery , columns }) => {
  const [show, setShow] = useState(true);
  const [filterKey, setFilterKey] = useState("");
  //const [filterValue, setFilterValue] = useState('');

  function closeFilter() {
    document.getElementById("filter").style.right = "-400px";
  }
  console.log(columns)
  const createFilterKey = (event) => {
    setFilterKey(event.target.dataset.param);
    goBack();
  };

  // sets value for filter key and adds it to query list
  const createFilterValue = (value, operator) => {
    let filter = createFilter(filterKey, value);
    addToQuery(filter, operator);

    // methods to return filter section visually normal
    goBack();
    closeFilter();
  };

  const goBack = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div id="filter" className="filterDiv">
      {show ? (
        <Variables createFilterKey={createFilterKey} />
      ) : (
        <Input goBack={goBack} createFilterValue={createFilterValue} />
      )}
    </div>
  );
};

export default Filter;

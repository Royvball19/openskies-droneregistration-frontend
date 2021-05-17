import React, { useState } from "react";
import "../../style/Filter.css";
import { BsArrowReturnLeft, BsSearch } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import DataTypes from "../../DataTypes";
import Variables from "./Variables";
import Input from "./Input";
import { createFilter } from "../../custom hooks/searchfilter";

export const Filter = ({ addToQuery }) => {

  const [show, setShow] = useState(true);
  const [filterKey, setFilterKey] = useState('');
  const [filterValue, setFilterValue] = useState('');

  function closeFilter() {
    document.getElementById("filter").style.right = "-400px";
  }

  const createFilterKey = (event) => {
    setFilterKey(event.target.dataset.param);
    console.log(event.target.dataset.param);
    goBack();
  };

  // sets value for filter key and adds it to query list
  const createFilterValue = (value) => {
    let filter = createFilter(filterKey, value);
    addToQuery(filter);
    goBack();
    closeFilter();
    
  }

  const goBack = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div id="filter" className="filterDiv">
      {show ? (
        <Variables createFilterKey={createFilterKey} />
      ) : (
        <Input goBack={goBack} createFilterValue={createFilterValue}/>
      )}
    </div>
  );
};

export default Filter;

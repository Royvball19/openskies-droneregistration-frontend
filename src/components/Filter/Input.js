import React, { useState } from "react";
import { optionsList } from "../../custom hooks/searchfilter";
import { BiArrowBack } from "react-icons/bi";
import { createFilter } from "../../custom hooks/searchfilter";

function Input({ goBack, createFilterValue }) {
  const [value, setValue] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");

  function CompareOptions({ type }) {
    let data;
    if (type === "Integer") {
      data = optionsList;
    } else if (type === "String") {
      data = optionsList;
    } else if (type === "date") {
      data = optionsList;
    }
    const content = data.map((item) => (
      <option value={JSON.stringify(item.value)}>{item.text}</option>
    ));
    return (
      <select
        className="operatorList"
        value={selectedOperator}
        onChange={onSelectChange}
      >
        {content}
      </select>
    );
  }

  const onSelectChange = (event) => {
    setSelectedOperator(JSON.parse(event.target.value));
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    // get operator from options
    createFilterValue(value, selectedOperator);
  };

  return (
    <div className="input-container">
      <div className="header-container">
        <div className="header-content">
          <BiArrowBack className="back-icon" onClick={goBack} />
          <h3>Search</h3>
        </div>
      </div>
      <input
        type="text"
        className="text-input"
        placeholder="enter text"
        onChange={onChange}
      />

      <CompareOptions type="String" />
      <button className="add-btn" onClick={onSubmit}>
        ADD FILTER
      </button>
    </div>
  );
}

export default Input;

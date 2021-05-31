import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Data from "../../../Data";
import DataTypes from "../../../DataTypes";

function FuseTest() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    Data.getAllOperators()
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    includeScore: true,
    threshold: 0.4,
    //isCaseSensitive: false,
    keys: keys,
  };

  const filterData = () => {
    console.log(options)
    const pattern = "Elec";
    const fuse = new Fuse(data, options);
    let result = fuse.search(pattern);
    console.log(result);
    setFilteredData(result);
  };
  ///////////////////////////////////////////

  function handleClick(event) {
    console.log(event.target.dataset.param);
    const arr = [...keys];
    arr.push(event.target.dataset.param);
    setKeys(arr);
  }

  function KeySelect({ types }) {
    const icon = (type) => {
      if (type === "Integer") {
        return "# ";
      } else if (type === "String") {
        return "Aa ";
      } else if (type === "date") {
      }
    };
    const content = types.map((type) => (
      <li onClick={handleClick} data-param={type.dataField}>
        <span>{icon(type.variable)}</span>
        {type.text}
      </li>
    ));

    return <ul>{content}</ul>;
  }

  /////////////////////////////////////////////

  return (
    <div>
      <h1>All Operators</h1>
      {filteredData.map((item) => (
        <div>{item.item.company_name}</div>
      ))}
      <div className="options">
        <h3>Operators</h3>
        <KeySelect types={DataTypes.operators()} />
        <input type="text" />
        <button onClick={filterData}>Search</button>
      </div>
    </div>
  );
}

export default FuseTest;

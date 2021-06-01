import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Data from "../../../Data";
import DataTypes from "../../../DataTypes";

const  FuseTest = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [value, setValue] = useState("");
  const [range, setRange ] = useState(0.5);
  


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
    isCaseSensitive: false,
    includeScore: true,
    threshold: range,
    ignoreLocation: true,
    //isCaseSensitive: false,
    keys: keys,
  };

  const filterData = () => {
    console.log(options)
    const pattern = value;
    const fuse = new Fuse(data, options);
    let result = fuse.search(pattern);
    console.log(result);
    console.log(pattern)
    setFilteredData(result);
  };
  ///////////////////////////////////////////

  const handleKeySelection = (event) => {
    console.log(event.target.dataset.param);
    const arr = [...keys];
    arr.push(event.target.dataset.param);
    setKeys(arr);
  }


  

  const KeySelect = ({ types }) => {
    const icon = (type) => {
      if (type === "Integer") {
        return "# ";
      } else if (type === "String") {
        return "Aa ";
      } else if (type === "date") {
      }
    };
    const content = types.map((type) => (
      <li onClick={handleKeySelection} data-param={type.dataField}>
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
        <input type="text" onChange={event => setValue(event.target.value)}/>
        <label htmlFor="range">
        <span>Threshold</span>
        <input type="range" min="0" max="100" onChange={event => setRange(event.target.value / 100 )} />
        </label>
        <button onClick={filterData}>Search</button>
      </div>
    </div>
  );
}

export default FuseTest;

import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Data from "../../../Data";
import DataTypes from "../../../DataTypes";

const  FuseTest = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [input, setInput] = useState("");
  const [range, setRange ] = useState(0.5);
  const [query, setQuery] = useState([]);
  
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

  const addToQuery = () => {
    let pattern = input;
    let option = options;
    
    let arr = [...query];
    arr.push({pattern, option})
    
    setQuery(arr)
  };

  // side effect to filter data when query changes
  useEffect( () => {
    let arr = data;
    query.map( (item) => {
      let fuse = new Fuse ( arr, item.option)
      return arr = fuse.search(item.pattern)
    })
    setFilteredData(arr)
  }, [query]);
  ///////////////////////////////////////////

  const handleKeySelection = (event) => {
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
        <input type="text" onChange={event => setInput(event.target.value)}/>
        <label htmlFor="range">
        <span>Threshold</span>
        <input type="range" min="0" max="100" onChange={event => setRange(event.target.value / 100 )} />
        </label>
        <button onClick={addToQuery}>Search</button>
      </div>
    </div>
  );
}

export default FuseTest;

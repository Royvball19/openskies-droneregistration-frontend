import React, { useState, useEffect } from "react";
import "../../style/Filter.css";
import { GrClose } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import Data from "../../Data"

export const Filter = ({ addToQuery, handleInput, 
                         handleRange, handleKeySelection, 
                         keys, resetKeys, columnsData  }) => {
                           
  const [showKeys, setShowKeys] = useState(true);
  const [showBack, setShowBack] = useState(false);
  const [options, setOptions] = useState({
    aircraft: [],
    operator: [],
    pilot: [],
  })
  const [ errorMessage ] = useState('');

  // fetching data from the backend API
  useEffect( () => {
    axios.all([Data.getAircraftOptions(),
      Data.getOperatorOptions(), Data.getPilotOptions()])
      .then(axios.spread((...responses) => {
      setOptions({
        aircraft: responses[0].data.fields,
        operator: responses[1].data.fields,
        pilot: responses[2].data.fields,  
      })
      // use/access the results 
    })).catch(error => {
      
    })
  }, [])

  const closeFilter = () => {
    document.getElementById("filter").style.right = "-400px";
    setShowKeys(true);
    resetKeys();
  }

  const handleAddFilterBtn = () => {
    closeFilter();
    setShowBack(false);
    addToQuery();
  }

  const onKeyClick = (event) => {
    setShowKeys(false);
    setShowBack(true)
    handleKeySelection(event);
  }

  const goBackFilter = () => {
    setShowBack(false);  
    setShowKeys(true);
    resetKeys();  
  }

  const KeySelect = ({ option }) => {
    const icon = (type) => {
      if (type === "number") {
        return "# ";
      } else if (type === "string") {
        return "Aa ";
      } else if (type === "date") {
      }
    };

    const content = option.map((opt) => (
      <li onClick={onKeyClick} data-param={opt.key}>
        <span>{icon(opt.schema.type)}</span>
        {opt.key}
      </li>
    ));
    return <ul>{content}</ul>;
  }

  return (
    <div id="filter" className="filterDiv">

      <div className="Header">
      { showBack ? ( 
      <BiArrowBack className="back-icon" onClick={goBackFilter}/>
      ) : null }
          <h2>Filter by</h2>
          <a className="closeFilterA" onClick={closeFilter}>
            <GrClose className="iconSearch" />
          </a>   
      </div>
      <div>
      <p>{keys}</p>
      </div>

      { showKeys ? ( 
        <div>
        <div className="keys">
          <h3>Operators</h3>
          <div className="keys-wrapper">
          <KeySelect option={options.operator} />
          </div>
          <h3>Pilots</h3>
          <div className="keys-wrapper">
          <KeySelect option={options.pilot} />
          </div>
          <h3>Aircrafts</h3>
          <div className="keys-wrapper">
          <KeySelect option={options.aircraft} />
          </div>
        </div>
      </div>
      ) : (
        <div> 
           <div className="options">
              <input placeholder="Search" type="text" onChange={handleInput} className="text-input" />
              <label htmlFor="range" className="threshold">
              <span>Exact</span>
              <input type="range" min="0" max="4" onChange={handleRange} />
              <span>Broad</span>
              </label>
            </div>
            <button className="add-btn" onClick={handleAddFilterBtn}>
              ADD FILTER
            </button>
        </div>
      ) }
    </div>
  );
};

export default Filter;

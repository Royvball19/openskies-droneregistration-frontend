import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import TableView from "../components/Tables/TableView";
import Data from "../Data";
import Filter from "../components/Filter/Filter";
import axios from "axios";
import Fuse from "fuse.js";
import AlertToast from "../components/AlertToast";

const declareType = (input) => {
  // declare tabletype and get route
  switch (input) {
    case "operators":
      return Data.getAllOperators();
    case "pilots":
      return Data.getAllPilots();
    case "aircrafts":
      return Data.getAllAircrafts();
    case "reports":
      return Data.getAllReports();
  }
};

function declareColumns(input) {
  // declare tabletype and get route
  switch (input) {
    case "operators":
      return Data.getOperatorOptions();
    case "pilots":
      return Data.getPilotOptions();
    case "aircrafts":
      return Data.getAircraftOptions();
    case "reports":
      return Data.getReportOptions();
  }
}

export default function SearchInterfaceView({ match }) {
  const [data, setData] = useState([]);
  const [filterdData, setFilteredData] = useState([]);
  const [columnsData, setColumnsData] = useState([]);
  const [query, setQuery] = useState([]);
  const [keys, setKeys] = useState([]);
  const [input, setInput] = useState("");
  const [range, setRange] = useState(0.5);
  const [searchBalkInput, setSearchBalkInput] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  // show toast on error
  const toggleShowToast = () => setShowToast(!showToast);

  // fetch data from backend
  useEffect(() => {
    axios
      .all([
        declareType(match.params.tabletype),
        declareColumns(match.params.tabletype),
      ])
      .then(
        axios.spread((...responses) => {
          setData(responses[0].data);
          setColumnsData(responses[1].data.fields);
          setLoaded(true);
          // use/access the results
        })
      )
      .catch((error) => {
        setMessage(String(error));
        setShowToast(true);
      });
  }, [match.params.tabletype]);

  // update filtered data when query changes
  useEffect(() => {
    let arr = data;
    query.map((item) => {
      let fuse = new Fuse(arr, item.option);
      arr = fuse.search(item.pattern);
      let result = [];
      arr.map((item) => {
        result.push(item.item);
      });
      arr = result;
      return arr;
    });
    setFilteredData(arr);
  }, [query]);

  // set data to filtered data to show data on startup
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // config for filter
  const options = {
    isCaseSensitive: false,
    includeScore: true,
    threshold: range,
    ignoreLocation: true,
    //isCaseSensitive: false,
    keys: keys,
  };

  // delete filter from query
  const deleteFilter = (filter) => {
    let newQuery = query.filter((item) => item !== filter);
    setQuery(newQuery);
  };

  // reset keys
  const resetKeys = () => {
    setKeys([]);
  };

  // add filter object to query
  const addToQuery = () => {
    let pattern = input;
    let option = options;
    let arr = [...query];
    arr.push({ pattern, option });
    setQuery(arr);
    resetKeys();
  };

  // handle input from filter menu
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  // handle range slider from filter menu
  const handleRange = (event) => {
    setRange(event.target.value / 5);
  };

  // set key on click from filter menu
  const handleKeySelection = (event) => {
    const arr = [...keys];
    arr.push(event.target.dataset.param);
    setKeys(arr);
  };

  // handle text input from search bar
  const handleSearchBalkInput = (event) => {
    console.log(event.target.value);
    setSearchBalkInput(event.target.value);
  };

  // special Effect to filter when search balk is used
  useEffect(() => {
    if (searchBalkInput === "") {
      setFilteredData(data);
    } else {
      const allKeys = () => {
        const arr = columnsData;
        const newArr = [];
        arr.map((item) => {
          newArr.push(item.key);
        });
        return newArr;
      };
      const broadSearch = {
        isCaseSensitive: false,
        includeScore: true,
        threshold: 0.4, // lower threshold to make search bar more strict (range 0 to 1)
        ignoreLocation: true,
        keys: allKeys(),
      };
      let arr = data;
      let fuse = new Fuse(arr, broadSearch);
      arr = fuse.search(searchBalkInput);
      let result = [];
      arr.map((item) => {
        result.push(item.item);
      });
      arr = result;
      setFilteredData(arr);
    }
  }, [searchBalkInput]);

  // define columns
  let columns = [];
  for (let i = 0; i < columnsData.length; i++) {
    console.log(columnsData);
    if (
      columnsData[i].key === "id" ||
      columnsData[i].key === "registration_mark"
    ) {
      columns.push({
        dataField: columnsData[i].key,
        text: columnsData[i].key,
        hidden: true,
      });
    } else {
      columns.push({
        dataField: columnsData[i].key,
        text: columnsData[i].key,
      });
    }
  }

  return (
    <div>
      {isLoaded ? (
        <>
          <Search
            activeFilters={query}
            deleteFilter={deleteFilter}
            handleSearchBalkInput={handleSearchBalkInput}
            type={match.params.tabletype}
          />
          <TableView
            columns={columns}
            data={filterdData}
            type={match.params.tabletype}
          />
          <Filter
            data={data}
            columns={columns}
            addToQuery={addToQuery}
            handleInput={handleInput}
            handleRange={handleRange}
            handleKeySelection={handleKeySelection}
            keys={keys}
            resetKeys={resetKeys}
            columnsData={columnsData}
            type={match.params.tabletype}
          />
        </>
      ) : null}

      {showToast ? (
        <div
          className="toast-container"
          style={{
            position: "relative",
            minWidth: "100vw",
            minHeight: "100vh",
          }}
        >
          <AlertToast
            message={message}
            showToast={showToast}
            toggleShowToast={toggleShowToast}
          />
        </div>
      ) : null}
    </div>
  );
}

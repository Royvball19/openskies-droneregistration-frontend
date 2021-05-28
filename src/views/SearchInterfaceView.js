import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import TableView from "../components/Tables/TableView";
import Data from "../Data";
import Filter from "../components/Filter/Filter";
import { createQuery, testFilter } from "../custom hooks/searchfilter";
import axios from "axios";

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
  let [data, setData] = useState([]);
  let [filterdData, setFilteredData] = useState([]);
  let [columnsData, setColumnsData] = useState([]);
  let [query, setQuery] = useState([]);
  // let [isLoading, setIsLoading] = useState(true);

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
          console.log(responses)
          // use/access the results
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.tabletype]);

  // side effect to update data when query or data changes
  useEffect(() => {
    let filterQuery = createQuery(query);
    let result = testFilter(data, filterQuery);
    setFilteredData(result);
  }, [query, data]);

  // delete filter from query
  const deleteFilter = (filter) => {
    let newQuery = query.filter((item) => item !== filter);
    setQuery(newQuery);
  };

  // define filter and filter data
  const addToQuery = (filter, operator) => {
    console.log(query);
    let filterObject = createQuery([filter, operator]);
    console.log(filterObject);

    let newQuery = [...query];
    newQuery.push(filterObject);
    setQuery(newQuery);

    //query.push(filterObject);
    console.log(query);

    console.log("----------------");
  };

  // define columns
  let columns = [];
  for (let i = 0; i < columnsData.length; i++) {
    columns.push({
      dataField: columnsData[i].key,
      text: columnsData[i].key,
      type: columnsData[i].schema.type,
    });
  }
  if (!columns.length) {
    return null;
  } else {
    return (
      <div>
        <Search
          type={match.params.tabletype}
          activeFilters={query}
          deleteFilter={deleteFilter}
          addToQuery={addToQuery}
        />
        <TableView columns={columns} data={filterdData} />
        <Filter addToQuery={addToQuery} columns={columns} />
      </div>
    );
  }
}

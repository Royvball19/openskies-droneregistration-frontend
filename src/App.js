import { useTranslation } from "react-i18next";
import Data from "./service/Data";
import Test from "./components/Test"
import React, { useState } from "react";
import Dashboard from "./components/Dashboard"
import "./style/style.css";
import TableView from "./components/Tables/TableView";
import ArrowButton from "./components/ArrowButton";
import Menu from "./components/Menu";
import Search from "./components/Search"
import Filter from "./components/Filter/Filter"
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <ArrowButton />
        <Menu />
        <Filter />
        <Route path="/tableview" component={Search} />
        <Route exact path="/tableview/:tabletype" component={TableView} />
      </div>
    </Router>
  );
}

export default App;

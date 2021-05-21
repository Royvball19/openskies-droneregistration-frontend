import { useTranslation } from "react-i18next";
import Test from "./Test";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./style/style.css";
import TableView from "./components/Tables/TableView";
import DataFields from "./DataFields";
import ArrowButton from "./components/ArrowButton";
import Menu from "./components/Menu";
import Search from "./components/Search";
import Filter from "./components/Filter/Filter";
import { HashRouter as Router, Route } from "react-router-dom";
import SearchInterfaceView from "./views/SearchInterfaceView";
import DetailOperator from "./components/Details/DetailOperator";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <ArrowButton />
        <Menu />
        <Filter />
        <Route
          exact
          path="/tableview/:tabletype"
          component={SearchInterfaceView}
        />
        <Route exact path="/details/operator/:id" component={DetailOperator} />
      </div>
    </Router>
  );
}

export default App;

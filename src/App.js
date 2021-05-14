import { useTranslation } from "react-i18next";
import Test from "./Test";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./style/style.css";
import TableView from "./components/Tables/TableView";
import DataFields from "./DataFields";
import ArrowButton from "./components/ArrowButton";
import Menu from "./components/Menu";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/tableview/:tabletype" component={TableView} />
        <Route exact path="/test" component={DataFields} />
        <Route exact path="/poep" component={Test} />
        <ArrowButton />
        <Menu />
      </div>
    </Router>
  );
}

export default App;

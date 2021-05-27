import React from "react";
import Dashboard from "./components/Dashboard";
import "./style/style.css";
import ArrowButton from "./components/ArrowButton";
import Menu from "./components/Menu";
import { HashRouter as Router, Route } from "react-router-dom";
import SearchInterfaceView from "./views/SearchInterfaceView";
import Search from "./components/Search";
import Filter from "./components/Filter/Filter";
import DetailOperator from "./components/Details/DetailOperator";

import Filter from "./components/Filter/Filter";
import { HashRouter as Router, Route } from "react-router-dom";
import SearchInterfaceView from "./views/SearchInterfaceView";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <ArrowButton />
        <Menu />
        <Route
          exact
          path="/tableview/:tabletype"
          component={SearchInterfaceView}
        />
        <Route exact path="/details/operator/:id" component={DetailOperator} />
        <Filter />
        <Route
          exact
          path="/tableview/:tabletype"
          component={SearchInterfaceView}
        />
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import "./style/style.css";
import ArrowButton from "./components/ArrowButton";
import Menu from "./components/Menu";
import { HashRouter as Router, Route } from "react-router-dom";
import SearchInterfaceView from "./views/SearchInterfaceView";
import DetailOperator from "./components/Details/DetailOperator";
import AircraftDetails from "./components/Details/AircraftDetails"
import PilotDetails from "./components/Details/PilotDetails"
import ReportDetails from "./components/Details/ReportDetails"


function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          position: "relative",
        }}
      >
        <Route exact path="/" component={Dashboard} />
        <ArrowButton />
        <Menu />
        <Route
          exact
          path="/tableview/:tabletype"
          component={SearchInterfaceView}
        />
        <Route exact path="/details/operators/:id" component={DetailOperator} />
        <Route
          exact
          path="/details/aircrafts/:id"
          component={AircraftDetails}
        />
        <Route exact path="/details/pilots/:id" component={PilotDetails} />
        <Route exact path="/details/reports/:id"
        component={ReportDetails}/>
      </div>
    </Router>
  );
}

export default App;

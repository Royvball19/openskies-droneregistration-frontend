import { useTranslation } from "react-i18next";
import Data from "./service/Data";
import Test from "./components/Test"
import React, { useState } from "react";
import ArrowButton from "./components/ArrowButton";
import Menu from "./components/Menu";
import TableView from "./components/Tables/TableView";
import { LanguageChangeText } from "./components/LanguageChanger/LanguageChange";

function App() {
  return (
    <div className="App">
      <Menu />
      <ArrowButton />
      <TableView tabletype="operators" />
    </div>
  );
}

export default App;

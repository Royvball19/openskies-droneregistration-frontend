import { useTranslation } from "react-i18next";
import Data from "./service/Data";
import Test from "./components/Test"
import React, { useState } from "react";
import Menu from "./components/Menu";
import TableView from "./components/Tables/TableView"
import { LanguageChangeText } from "./components/LanguageChanger/LanguageChange";

function App() {
  return (
    <div className="App">
      <TableView tabletype="reports" />
    </div>
  );
}

export default App;

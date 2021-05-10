import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Menu from "./components/Menu";
import TableView from "./components/Tables/TableView";
import { LanguageChangeText } from "./components/LanguageChanger/LanguageChange";

function App() {
  return (
    <div className="App">
      <TableView tabletype="operators" />
    </div>
  );
}

export default App;

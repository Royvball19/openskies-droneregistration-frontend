import { useTranslation } from "react-i18next";
import Data from "./service/Data";
import Test from "./components/Test"
import React, { useState } from "react";
import ArrowButton from "./components/ArrowButton";
import Menu from "./components/Menu";
import "./style/style.css";
import TableView from "./components/Tables/TableView";
import { LanguageChangeText } from "./components/LanguageChanger/LanguageChange";

function App() {
  return (
    <div>
      <Menu />
      <ArrowButton />
      <div>
        <TableView tabletype="operators" />
      </div>
    </div>
  );
}

export default App;

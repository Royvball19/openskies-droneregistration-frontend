import { useTranslation } from "react-i18next";
import Data from "./service/Data";
import Test from  "./components/Test"
import React, { useState } from "react";
import Button from "./components/TestExample/TextExample"
import Menu from "./components/Menu";
import ArrowButton from "./components/ArrowButton";
import { LanguageChangeText } from "./components/LanguageChanger/LanguageChange";

function App() {


  return (
    <div className="App">
      <Menu />
      <ArrowButton /> 
    </div>
  );
}

export default App

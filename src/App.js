import { useTranslation } from "react-i18next";
import Data from "./service/Data";
import Test from  "./components/Test"
import { LanguageChangeText } from "./LanguageChange";
import React, { useState } from "react";
import Button from "./components/TestExample/TextExample"
import Menu from "./components/Menu";
import { LanguageChangeText } from "./components/LanguageChanger/LanguageChange";

function App() {


  return (
    <div className="App">   
      <Menu />
      <LanguageChangeText />
      <Test />
    </div>
  );
}

export default App

import { useTranslation } from "react-i18next";
import Data from "./service/Data";
import Test from "./components/Test"
import React, { useState } from "react";
import Button from "./components/TestExample/TextExample"
import Menu from "./components/Menu";
import { LanguageChangeText } from "./components/LanguageChanger/LanguageChange";
import Search from "./components/Search"


function App() {


  return (
    <div className="App">
      <Search type="drones" />
      <LanguageChangeText />
      {/* <Test /> */}
    </div>
  );
}

export default App

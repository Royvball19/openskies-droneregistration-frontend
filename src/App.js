import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { LanguageMenu } from "./components/LanguageChanger/LanguageMenu";
import Search from "./components/Search"


function App() {

  return (
    <div className="App">
      <LanguageMenu className="language-menu"/>
      <Search type="drones" />
      {/* <Test /> */}
    </div>
  );
}

export default App

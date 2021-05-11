import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { LanguageMenu } from "./components/LanguageChanger/LanguageMenu";
import Search from "./components/Search"
import { operators, useApiRequest } from './Data';



function App() {

  const { data, error, isLoaded } = useApiRequest(operators);
  console.log(data)
  console.log(error)

  return (
    <div className="App">
      <LanguageMenu className="language-menu"/>
      <Search type="drones" />
      {/* <Test /> */}
    </div>
  );
}

export default App

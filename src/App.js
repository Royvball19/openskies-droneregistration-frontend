import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import SearchOverlay from "./components/SearchOverlay";
import Menu from "./components/Menu";
import { LanguageChangeText } from "./components/LanguageChanger/LanguageChange";

function App() {
  return (
    <div className="App">
      <SearchOverlay />
    </div>
  );
}

export default App;

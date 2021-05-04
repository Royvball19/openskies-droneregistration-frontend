import './App.css';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import { LanguageChangeText } from './LanguageChange';

function App() {

  // acces translations by declaring t
  const { t } = useTranslation();

  return (


    <div className="App">
      <h1>{t("welcome")}</h1>
      <LanguageChangeText />

    <div >
  
    </div>
  );
}

export default App;

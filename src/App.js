import "./App.css";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Button from "./components/TestExample/TextExample"
import Data from "./Data";
import { LanguageChangeText } from "./components/LanguageChanger/LanguageChange";

function App() {
  // acces translations by declaring t
  const { t } = useTranslation();
  let [responseData, setOperators] = useState([]);

  const fetchData = () => {
    Data.getAllOperators()
      .then((response) => {
        setOperators(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>{t("welcome")}</h1>
      <LanguageChangeText />

      <button onClick={fetchData}>CLICK FOR DATA</button>
    </div>
  );
}

export default App;

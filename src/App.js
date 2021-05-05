import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Button from "./components/TestExample/TextExample"
import Data from "./Data";
import Menu from "./components/Menu";
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
    
      <Menu />
    </div>
  );
}

export default App;

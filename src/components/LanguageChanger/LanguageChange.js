import { i18n } from "../../translations/i18n";
import React, { useState } from "react";

export const LanguageChangeText = () => {
  const [Language, setLanguage] = useState("en");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <button value="fr" onClick={handleOnclick}>
        frens
      </button>
      <button value="en" onClick={handleOnclick}>
        English
      </button>
      <button value="de" onClick={handleOnclick}>
        duits
      </button>
      <button value="it" onClick={handleOnclick}>
        italian
      </button>
      <button value="nl" onClick={handleOnclick}>
        nederlands
      </button>
    </div>
  );
};

import { i18n } from "../../translations/i18n";
import React, { useState } from "react";
import '../../style/langauge.css';
import Flags from 'country-flag-icons/react/3x2'
import { BiWorld } from "react-icons/bi";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { IconContext } from "react-icons/lib";


export default function LanguageMenu() {

  // set state and default language
  const [Language, setLanguage] = useState("en");
  const [showMenu, setShowMenu] = useState(false);
 
  // Change lang for app on click
  const setLanguageOnClick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  // show menu on click

  const showMenuOnClick = ( e ) => {
    e.preventDefault();
    setShowMenu(true);
  }

  // hide menu function to pass into useDetectClickOutside
  const hideMenuOnClick = () => {
    setShowMenu(false);
  }

  const Menu = () => {
    const ref = useDetectClickOutside({ onTriggered:hideMenuOnClick });
    return (
      <div className="menu-container" ref={ref}>
        <button value="fr" onClick={setLanguageOnClick}>
          <Flags.FR className="flag"/>
          Français
        </button>
        <button value="en" onClick={setLanguageOnClick}>
          <Flags.US className="flag"/>
          English
        </button>
        <button value="de" onClick={setLanguageOnClick}>
          <Flags.DE className="flag"/>
          Deutsch
        </button>
        <button value="it" onClick={setLanguageOnClick}>
          <Flags.IT className="flag"/>
           Italiano
        </button>
        <button value="nl" onClick={setLanguageOnClick}>
          <Flags.NL className="flag"/>
           Nederlands
        </button>
      </div>
    );
  }
  const style = { color: "white", fontSize: "1.5em" }
  return (
    <div className="world-parent">
      
      <BiWorld style={style} className='world-icon' onClick={showMenuOnClick}/>
      { showMenu ? <Menu className="lang-menu"/> : null }
      
    </div>
  );
};

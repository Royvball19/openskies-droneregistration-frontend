import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_FR } from './languages/fr';
import { TRANSLATIONS_EN } from "./languages/en";
import { TRANSLATIONS_DE } from "./languages/de";
import { TRANSLATIONS_IT } from "./languages/it";
import { TRANSLATIONS_NL } from './languages/nl';
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
  fallbackLng: 'en',
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     fr: {
       translation: TRANSLATIONS_FR
     },
     de: {
       translation: TRANSLATIONS_DE
     },
     it: {
       translation: TRANSLATIONS_IT
     },
     nl: {
       translation: TRANSLATIONS_NL
     }
   }
 });

 
i18n.changeLanguage("en");

export { i18n };
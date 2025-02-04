import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { dataEn } from "./en.js";
import { dataUa } from "./ua.js";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: dataEn,
    },
    ua: {
      translation: dataUa,
    },
  },
  fallbackLng: "ua",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

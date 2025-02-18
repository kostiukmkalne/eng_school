import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/Button/Button.jsx";
import "./LanguageSwitcher.scss";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsEnglish(lang === "en");
  };

  return (
    <div className="language-switcher">
      <Button
        onClick={() => changeLanguage("ua")}
        className={`lang-button ${!isEnglish ? "active" : ""}`}
      >
        UA
      </Button>
      <Button
        onClick={() => changeLanguage("en")}
        className={`lang-button ${isEnglish ? "active" : ""}`}
      >
        EN
      </Button>
    </div>
  );
};

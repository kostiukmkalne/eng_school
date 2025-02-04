import React, { useState } from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import { Navigation } from "../Navigation/Navigation";
import { Button } from "../../components/Button/Button.jsx";
import logo from "../../assets/logoBlack.svg";

export const Header = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsEnglish(lang === "en");
  };

  return (
    <header className="header">
      <a href="#header">
        <img src={logo} className="header__logo" alt="Company logo" />
      </a>

      <Navigation className="header__nav" />

      <div
        className="header__langButton"
      >
        <Button
          onClick={() => changeLanguage("ua")}
          className={`lang-button ${!isEnglish ? "active" : ""}`}
        >
          UA
        </Button>
        <Button
          onClick={() => changeLanguage("en")}
          className={`button ${isEnglish ? "active" : ""}`}
        >
          EN
        </Button>
      </div>
    </header>
  );
};

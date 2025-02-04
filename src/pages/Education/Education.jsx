import React, { useState } from "react";
import "./Education.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button.jsx";
import form from "../../assets/form.svg";
import { Individual } from "./Individual/Individual.jsx";
import { Couple } from "./Couple/Couple.jsx";
import { Group } from "./Group/Group.jsx";
import { Speaking } from "./Speaking/Speaking.jsx";
import { Corporate } from "./Corporate/Corporate.jsx";

export const Education = () => {
  const { t } = useTranslation();
  const [selectedFormat, setSelectedFormat] = useState("individual");

  const handleFormatChange = (format) => {
    setSelectedFormat(format);
  };

  const renderSelectedFormat = () => {
    switch (selectedFormat) {
      case "individual":
        return <Individual />;
      case "couple":
        return <Couple />;
      case "group":
        return <Group />;
      case "speaking":
        return <Speaking />;
      case "corporate":
        return <Corporate />;
      default:
        return null;
    }
  };

  return (
    <div className="education" id="study-forms">
      <div className="education__info">
        <div className="education__blog">
          <img src={form} className="education__blog-img" alt="form-img" />
          <h6 className="education__blog-title">{t("education.title")}</h6>
        </div>

        <div className="education__block">
          <h1 className="education__block-title">{t("education.subtitle")}</h1>
          <h1 className="education__block-title-color">
            {t("education.subtitle_middle")}
          </h1>
          <h1 className="education__block-title">
            {t("education.subtitle_end")}
          </h1>
        </div>
      </div>

      <div className="education__switch">
        <Button
          className={`education__button ${
            selectedFormat === "individual" ? "active" : ""
          }`}
          onClick={() => handleFormatChange("individual")}
        >
          {t("education.buttons.individual.text")}
        </Button>
        <Button
          className={`education__button ${
            selectedFormat === "couple" ? "active" : ""
          }`}
          onClick={() => handleFormatChange("couple")}
        >
          {t("education.buttons.couple.text")}
        </Button>
        <Button
          className={`education__button ${
            selectedFormat === "group" ? "active" : ""
          }`}
          onClick={() => handleFormatChange("group")}
        >
          {t("education.buttons.group.text")}
        </Button>
        <Button
          className={`education__button ${
            selectedFormat === "speaking" ? "active" : ""
          }`}
          onClick={() => handleFormatChange("speaking")}
        >
          {t("education.buttons.speaking.text")}
        </Button>
        <Button
          className={`education__button ${
            selectedFormat === "corporate" ? "active" : ""
          }`}
          onClick={() => handleFormatChange("corporate")}
        >
          {t("education.buttons.corporate.text")}
        </Button>
      </div>

      <div className="education__content">{renderSelectedFormat()}</div>
    </div>
  );
};

import React from "react";
import "./Phrase.scss";
import ludvic from "../../assets/phrase/ludvic.svg";
import { useTranslation } from "react-i18next";

export const Phrase = () => {
  const { t } = useTranslation();

  return (
    <div className="phrase">
      <div className="phrase__container">
        <h6 className="phrase__text">{t("phrase.quote")}</h6>
        <div className="phrase__person">
          <img src={ludvic} className="phrase__person-img" alt="Ludvig-img" />
          <div className="phrase__person-block">
            <h6 className="phrase__person-name">{t("phrase.author.name")}</h6>
            <h6 className="phrase__person-position">
              {t("phrase.author.position")}
            </h6>
          </div>
        </div>
      </div>

      <div className="phrase__main">
        <div className="phrase__main-modef">
          <h1 className="phrase__main-modef-title-color">
            {t("phrase.main_title")}
          </h1>
          <h1 className="phrase__main-modef-title">
            {t("phrase.main_title_str")}
          </h1>
        </div>
        <h1 className="phrase__main-title">{t("phrase.main_title_mid")}</h1>
        <h1 className="phrase__main-title-end-color">
          {t("phrase.main_title_end")}
        </h1>
      </div>
    </div>
  );
};

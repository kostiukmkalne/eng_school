import React from "react";
import "./Values.scss";
import goals from "../../assets/goals.svg";
import { useTranslation } from "react-i18next";

export const Values = () => {
  const { t } = useTranslation();

  const values = t("values.points", { returnObjects: true });

  return (
    <div className="values" id="about-us">
      <div className="values__header">
        <div className="values__info">
          <img src={goals} className="values__info-img" alt="made-goals" />
          <h6 className="values__info-title">{t("values.title")}</h6>
        </div>

        <div className="values__block">
          <h1 className="values__block-title">
            {t("values.subtitle")}
          </h1>
          <h1 className="values__block-title-color">
            {t("values.subtitle_end")}
          </h1>
        </div>
      </div>

      <div className="values__content">
        <div className="values__first-column">
          {renderPoint(values[0].title, values[0].description, 0)}{" "}
        </div>

        <div className="values__second-column">
          {renderPoint(values[1].title, values[1].description, 1)}{" "}
          {renderPoint(values[2].title, values[2].description, 2)}{" "}
        </div>

        <div className="values__third-column">
          {renderPoint(values[3].title, values[3].description, 3)}{" "}
          {renderPoint(values[4].title, values[4].description, 4)}{" "}
        </div>
      </div>
    </div>
  );
};

const renderPoint = (title, description, key) => (
  <div key={key} className="values__points-title">
    <h2 className="values__title">{title}</h2>
    <h6 className="values__text-description">{description}</h6>{" "}
  </div>
);

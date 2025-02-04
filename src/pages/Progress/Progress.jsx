import React from "react";
import "./Progress.scss";
import medal from "../../assets/medal.svg";
import { useTranslation } from "react-i18next";

export const Progress = () => {
  const { t } = useTranslation();

  const progressItems = t("progress.items", { returnObjects: true });

  return (
    <div className="progress">
      <div className="progress__titles">
        <div className="progress__info">
          <img src={medal} className="progress__info-img" alt="medal-img" />
          <h6 className="progress__info-title">{t("progress.main")}</h6>
        </div>

        <div className="progress__main">
          <h1 className="progress__main-title">{t("progress.subtitle")}</h1>
          <h1 className="progress__main-title-color">{t("progress.subtitle_end")}</h1>
        </div>
      </div>

      <div className="progress__columns">
        {progressItems.map(({ imgSrc, alt, title, text }, index) => (
          <div className="progress__block" key={index}>
            <div className="progress__content">
              <img src={imgSrc} className="progress__content-img" alt={alt} />
              <h5 className="progress__content-title">{title}</h5>
            </div>
            <h6 className="progress__content-text">{text}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

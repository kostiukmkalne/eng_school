import React from "react";
import "../../Education/United.scss";
import { Button } from "../../../components/Button/Button.jsx";
import { useTranslation } from "react-i18next";
import clock from "../../../assets/education/clock.svg";
import human from "../../../assets/education/human.svg";
import online from "../../../assets/education/online.svg";
import done from "../../../assets/education/done.svg";
import telPlane from "../../../assets/media/telPlane.svg";

export const Speaking = () => {
  const { t } = useTranslation();

  return (
    <div className="education__speaking">
      <div className="education__speaking-format">
        <h3 className="education__speaking-title">
          {t("education.formats.speaking.title")}
        </h3>
        <h6 className="education__speaking-subtitle">
          {t("education.formats.speaking.subtitle")}
        </h6>

        <div className="education__speaking-details">
          <div className="education__speaking-details-staff">
            <img
              src={clock}
              alt="clock-img"
              className="education__speaking-details-staff-img"
            />
            <h6>{t("education.formats.speaking.details.time")}</h6>
          </div>
          <div className="education__speaking-details-staff">
            <img
              src={human}
              alt="human-img"
              className="education__speaking-details-staff-img"
            />
            <h6>{t("education.formats.speaking.details.person")}</h6>
          </div>
          <div className="education__speaking-details-staff">
            <img
              src={online}
              alt="online-img"
              className="education__speaking-details-staff-img"
            />
            <h6>{t("education.formats.speaking.details.online")}</h6>
          </div>
        </div>

        <div className="education__speaking-price">
          <h1>{t("education.formats.speaking.price.base")}</h1>
          <div className="education__speaking-discounts">
            <h6>{t("education.formats.speaking.price.discounts.lesson_1")}</h6>
          </div>
        </div>

        <div className="education__container">
          <Button
            className="education__container-button"
            onClick={() =>
              window.open(
                "https://t.me/bot_street_english_school_bot",
                "_blank"
              )
            }
          >
            {t("telegram.text")}
            <img
              src={telPlane}
              className="education__button-img"
              alt="telegram-img"
            />
          </Button>
        </div>
      </div>

      <div className="education__speaking-benefits">
        {t("benefits.text", { returnObjects: true }).map((benefit, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <hr />}
            <div className="education__speaking-parts">
              <img src={done} alt="done-img" />
              <h5>{benefit}</h5>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

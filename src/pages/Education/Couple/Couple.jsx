import React from "react";
import "../../Education/United.scss";
import { Button } from "../../../components/Button/Button.jsx";
import { useTranslation } from "react-i18next";
import clock from "../../../assets/education/clock.svg";
import human from "../../../assets/education/human.svg";
import online from "../../../assets/education/online.svg";
import done from "../../../assets/education/done.svg";
import telPlane from "../../../assets/media/telPlane.svg";

export const Couple = () => {
  const { t } = useTranslation();

  return (
    <div className="education__couple">
      <div className="education__couple-format">
        <h3 className="education__couple-title">
          {t("education.formats.couple.title")}
        </h3>
        <h6 className="education__couple-subtitle">
          {t("education.formats.couple.subtitle")}
        </h6>

        <div className="education__couple-details">
          <div className="education__couple-details-staff">
            <img
              src={clock}
              alt="clock-img"
              className="education__couple-details-staff-img"
            />
            <h6>{t("education.formats.couple.details.time")}</h6>
          </div>
          <div className="education__couple-details-staff">
            <img
              src={human}
              alt="human-img"
              className="education__couple-details-staff-img"
            />
            <h6>{t("education.formats.couple.details.person")}</h6>
          </div>
          <div className="education__couple-details-staff">
            <img
              src={online}
              alt="online-img"
              className="education__couple-details-staff-img"
            />
            <h6>{t("education.formats.couple.details.online")}</h6>
          </div>
        </div>

        <div className="education__couple-price">
          <h1>{t("education.formats.couple.price.base")}</h1>
          <div className="education__couple-discounts">
            <h6>{t("education.formats.couple.price.discounts.lesson_1")}</h6>
            <h6>{t("education.formats.couple.price.discounts.lesson_2")}</h6>
            <h6>{t("education.formats.couple.price.discounts.lesson_3")}</h6>
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
      <div className="education__couple-benefits">
        {t("benefits.text", { returnObjects: true }).map((benefit, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <hr />}
            <div className="education__couple-parts">
              <img src={done} alt="done-img" />
              <h5>{benefit}</h5>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

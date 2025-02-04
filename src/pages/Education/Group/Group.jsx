import React from "react";
import "./Group.scss";
import { Button } from "../../../components/Button/Button.jsx";
import { useTranslation } from "react-i18next";
import clock from "../../../assets/education/clock.svg";
import human from "../../../assets/education/human.svg";
import online from "../../../assets/education/online.svg";
import done from "../../../assets/education/done.svg";
import telPlane from "../../../assets/media/telPlane.svg";

export const Group = () => {
  const { t } = useTranslation();

  return (
    <div className="education__group">
      <div className="education__group-separate">
        <div className="education__group-format">
          <h3 className="education__group-title">
            {t("education.formats.group.title")}
          </h3>
          <h6 className="education__group-subtitle">
            {t("education.formats.group.subtitle")}
          </h6>

          <div className="education__group-details">
            <div className="education__group-details-staff">
              <img
                src={clock}
                alt="clock-img"
                className="education__group-details-staff-img"
              />
              <h6>{t("education.formats.group.details.time")}</h6>
            </div>
            <div className="education__group-details-staff">
              <img
                src={human}
                alt="human-img"
                className="education__group-details-staff-img"
              />
              <h6>{t("education.formats.group.details.person")}</h6>
            </div>
            <div className="education__group-details-staff">
              <img
                src={online}
                alt="online-img"
                className="education__group-details-staff-img"
              />
              <h6>{t("education.formats.group.details.online")}</h6>
            </div>
          </div>

          <div className="education__group-price">
            <h1>{t("education.formats.group.price.base")}</h1>
            <div className="education__group-discounts">
              <h6>{t("education.formats.group.price.discounts.lesson_1")}</h6>
              <h6>{t("education.formats.group.price.discounts.lesson_2")}</h6>
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

        <div className="education__group-benefits">
          {t("benefits.text", { returnObjects: true }).map((benefit, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <hr />}
              <div className="education__group-parts">
                <img src={done} alt="done-img" />
                <h5>{benefit}</h5>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="education__group-separate">
        <div className="education__group-format">
          <h3 className="education__group-title">
            {t("education.formats.group.title2")}
          </h3>
          <h6 className="education__group-subtitle">
            {t("education.formats.group.subtitle")}
          </h6>
          <div className="education__group-details">
            <div className="education__group-details-staff">
              <img
                src={clock}
                alt="clock-img"
                className="education__group-details-staff-img"
              />
              <h6>{t("education.formats.group.details2.time2")}</h6>
            </div>
            <div className="education__group-details-staff">
              <img
                src={human}
                alt="human-img"
                className="education__group-details-staff-img"
              />
              <h6>{t("education.formats.group.details2.person2")}</h6>
            </div>
            <div className="education__group-details-staff">
              <img
                src={online}
                alt="online-img"
                className="education__group-details-staff-img"
              />
              <h6>{t("education.formats.group.details2.online2")}</h6>
            </div>
          </div>

          <div className="education__group-price">
            <h1>{t("education.formats.group.price2.base2")}</h1>
            <div className="education__group-discounts">
              <h6>
                {t("education.formats.group.price2.discounts2.lesson_12")}
              </h6>
              <h6>
                {t("education.formats.group.price2.discounts2.lesson_22")}
              </h6>
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

        <div className="education__group-benefits">
          {t("benefits.text", { returnObjects: true }).map((benefit, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <hr />}
              <div className="education__group-parts">
                <img src={done} alt="done-img" />
                <h5>{benefit}</h5>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

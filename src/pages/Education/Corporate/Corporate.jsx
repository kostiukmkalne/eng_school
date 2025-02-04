import React from "react";
import "./Corporate.scss";
import { Button } from "../../../components/Button/Button.jsx";
import { useTranslation } from "react-i18next";
import { socialMediaLinks } from "../../Media/MediaData.js";
import clock from "../../../assets/education/clock.svg";
import human from "../../../assets/education/human.svg";
import online from "../../../assets/education/online.svg";
import done from "../../../assets/education/done.svg";
import telPlane from "../../../assets/media/telPlane.svg";

export const Corporate = () => {
  const { t } = useTranslation();

  return (
    <div className="education__corporate">
      <div className="education__corporate-format">
        <h3 className="education__corporate-title">
          {t("education.formats.corporate.title")}
        </h3>
        <h6 className="education__corporate-subtitle">
          {t("education.formats.corporate.subtitle")}{" "}
        </h6>
        <div className="education__corporate-details">
          <div className="education__corporate-details-staff">
            <img
              src={clock}
              alt="clock-img"
              className="education__corporate-details-staff-img"
            />
            <h6>{t("education.formats.corporate.details.time")}</h6>{" "}
          </div>
          <div className="education__corporate-details-staff">
            <img
              src={human}
              alt="human-img"
              className="education__corporate-details-staff-img"
            />
            <h6>{t("education.formats.corporate.details.person")}</h6>{" "}
          </div>
          <div className="education__corporate-details-staff">
            <img
              src={online}
              alt="online-img"
              className="education__corporate-details-staff-img"
            />
            <h6>{t("education.formats.corporate.details.online")}</h6>{" "}
          </div>
        </div>

        <div className="education__corporate-price">
          <div className="education__corporate-text">
            <h2 className="education__corporate-title">
              {t("education.formats.corporate.message.title")}{" "}
            </h2>
            <h6 className="education__corporate-pre">
              {t("education.formats.corporate.message.pre")}{" "}
            </h6>
          </div>

          <div className="education__corporate-icon">
            {socialMediaLinks
              .filter(({ alt }) => alt !== "YouTube")
              .map(({ href, img, alt }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education__corporate-link"
                >
                  <img src={img} className="education__icon" alt={alt} />
                </a>
              ))}
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

      <div className="education__corporate-benefits">
        {t("benefits.text", { returnObjects: true }).map((benefit, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <hr />}
            <div className="education__corporate-parts">
              <img src={done} alt="done-img" />
              <h5>{benefit}</h5>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

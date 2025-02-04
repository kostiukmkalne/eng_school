import "./Banner.scss";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";
import { imgItems } from "./dataImg.js";

export const Banner = () => {
  const { t } = useTranslation();

  const handleScrollToForm = () => {
    const targetElement = document.getElementById("study-forms");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banner-page">
      <div className="banner">
        <div className="banner__titles">
          <div className="banner__client">
            <img
              src={imgItems.stars}
              className="banner__stars-img"
              alt="stars-img"
            />
            <h6 className="banner__text">
              <span className="banner__text-title">{t("banner.title")}</span>
            </h6>
          </div>

          <h1 className="banner__main-title">
            {t("banner.main_title")}
            <br />
            {t("banner.main_title_middle")}
            <br />
            <span className="banner__main-title-color">
              {t("banner.main_title_end")}
            </span>
          </h1>

          <div className="banner__explanation">
            <h6 className="banner__explanation-text-1">
              {t("banner.explanation_str")}
            </h6>
            <h6 className="banner__explanation-text-2">
              {t("banner.explanation_mid")}
            </h6>
            <h6 className="banner__explanation-text-3">
              {t("banner.explanation_end")}
            </h6>
          </div>
        </div>

        <Button
          className="banner__button"
          aria-label="banner-button"
          onClick={handleScrollToForm}
        >
          {t("banner.button")}
          <img
            src={imgItems.arrdown}
            className="banner__batton-img"
            alt="arrow-down"
          />
        </Button>
      </div>

      <div className="video">
        <video
          controls
          // autoPlay
          // muted
          className="video__size"
          src={imgItems.video}
          poster={imgItems.videoImg}
        />
      </div>
    </div>
  );
};

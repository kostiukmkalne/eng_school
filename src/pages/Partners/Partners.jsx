import "./Partners.scss";
import bag from "../../assets/bag.svg";
import { partnersData } from "./PartnersData";
import { useTranslation } from "react-i18next";

export const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className="partners">
      <div className="partners__header">
        <div className="partners__info">
          <img src={bag} className="partners__info-img" alt="bag" />
          <h6 className="partners__info-title">{t("partners.title")}</h6>
        </div>

        <div className="partners__main">
          <h1 className="partners__main-title">
            {t("partners.subtitle")}
          </h1>
          <h1 className="partners__main-title-color">
            {t("partners.subtitle_mid")}
          </h1>
          <h1 className="partners__main-title">
            {t("partners.subtitle_end")}
          </h1>
        </div>
      </div>

      <div className="partners__container">
        {partnersData.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            className="partners__company partners__company-img"
            alt={`${partner.alt} logo`}
          />
        ))}
      </div>
    </div>
  );
};

import "./Media.scss";
import logoBlock from "../../assets/logoBlock.svg";
import phone from "../../assets/phone.svg";
import { socialMediaLinks } from "./MediaData.js";
import { useTranslation } from "react-i18next";

export const Media = () => {
  const { t } = useTranslation();

  return (
    <div className="media" id="contacts">
      <div className="media__header">
        <img src={logoBlock} className="media__logo" alt="media-logo" />
        <div className="media__info">
          <img src={phone} className="media__info-img" alt="phone-img" />
          <h6 className="media__info-title">{t("media.title")}</h6>
        </div>

        <div className="media__main">
          <h1 className="media__main-title">{t("media.subtitle")}</h1>
          <h1 className="media__main-title-color">{t("media.subtitle_end")}</h1>
        </div>
      </div>

      <div className="media__social">
        {socialMediaLinks.map(({ href, img, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img src={img} className="media__social-icon" alt={alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

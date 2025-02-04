import "./Footer.scss";
import { Navigation } from "../Navigation/Navigation";
import { useTranslation } from "react-i18next";
import logoBlue from "../../assets/logoBlue.svg";
import arrUp from "../../assets/arrowUp.svg";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <a href="#footer">
        <img
          src={logoBlue}
          className="footer__logo"
          alt={t("footer.logoAlt")}
        />{" "}
      </a>

      <Navigation className="footer__nav">
        <img src={arrUp} className="footer__nav-img" alt="arrow-up" />
      </Navigation>
    </footer>
  );
};

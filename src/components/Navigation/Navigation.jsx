import { useTranslation } from "react-i18next";
import arrdown from "../../assets/arrowDown.svg";
import "./Navigation.scss";

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <ul className="nav__list">
        {t("navigation.nav", { returnObjects: true }).map(
          (
            item,
            index
          ) => (
            <li className="nav__item" key={index}>
              <a className="nav__link" href={item.href}>
                {item.label}
                {item.hasArrow !== false && (
                  <img
                    src={arrdown}
                    className="nav__arrDown"
                    alt="arrow-down"
                  />
                )}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

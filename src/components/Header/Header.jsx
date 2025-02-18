// import { useState } from "react";
// import "./Header.scss";
// import { useTranslation } from "react-i18next";
// import { Navigation } from "../Navigation/Navigation";
// import { Button } from "../../components/Button/Button.jsx";
// import { Aside } from "../Aside/Aside.jsx";

// import logo from "../../assets/logoBlack.svg";

// export const Header = () => {
//   const { i18n } = useTranslation();
//   const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     setIsEnglish(lang === "en");
//   };

//   return (
//     <header className="header">
//       <a href="#header">
//         <img src={logo} className="header__logo" alt="Company logo" />
//       </a>

//       <Aside  className="header__aside"/>
//       <Navigation className="header__nav" />

//       <div
//         className="header__langButton"
//       >
//         <Button
//           onClick={() => changeLanguage("ua")}
//           className={`lang-button ${!isEnglish ? "active" : ""}`}
//         >
//           UA
//         </Button>
//         <Button
//           onClick={() => changeLanguage("en")}
//           className={`button ${isEnglish ? "active" : ""}`}
//         >
//           EN
//         </Button>
//       </div>
//     </header>
//   );
// };

// import "./Header.scss";
// import { Navigation } from "../Navigation/Navigation";
// import { Aside } from "../Aside/Aside.jsx";
// import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher.jsx";
// import logo from "../../assets/logoBlack.svg";

// export const Header = () => {
//   return (
//     <header className="header">
//       <a href="#header">
//         <img src={logo} className="header__logo" alt="Company logo" />
//       </a>

//       <Aside className="header__aside" />
//       <Navigation className="header__nav" />

//       <LanguageSwitcher />
//     </header>
//   );
// };

import { useState, useEffect } from "react";
import "./Header.scss";
import { Navigation } from "../Navigation/Navigation";
import { Aside } from "../Aside/Aside.jsx";
import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher.jsx";
import logo from "../../assets/logoBlack.svg";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px - це точка для планшетів
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className="header">
      {isMobile ? (
        <Aside className="header__aside" />
      ) : (
        <a href="#header">
          <img src={logo} className="header__logo" alt="Company logo" />
        </a>
      )}

      <Navigation className="header__nav" />
      <LanguageSwitcher />
    </header>
  );
};


import { useState } from "react";
import { Button } from "../Button/Button";
import { Navigation } from "../Navigation/Navigation";
import burgerMenu from "../../assets/burger.svg";
import close from "../../assets/close.svg";
import logo from "../../assets/logoBlack.svg";
import "./Aside.scss";

export const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button onClick={toggleMenu} className="aside__burger">
        <img src={burgerMenu} alt="Menu" />
      </Button>

      <div className={`aside ${isOpen ? "aside--open" : ""}`}>
        <div className="aside__block">
          <div className="aside__block--header">
            <Button onClick={toggleMenu} className="aside__close">
              <img src={close} alt="Close" />
            </Button>

            <img src={logo} alt="logo" />

            
          </div>

          <Navigation className="aside__menu" />
        </div>
      </div>

      {isOpen && <div className="aside__overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

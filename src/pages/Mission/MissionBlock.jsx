import React from "react";
import './Mission.scss';
import arrDown from "../../assets/arrBlue.svg";

export const MissionBlock = ({ title, text }) => (
  <div className="mission__block">
    <h1 className="mission__title">{title}</h1>
    <div className="mission__content">
      <img src={arrDown} className="mission__img" alt="arrow-down" />
      <p className="mission__text">{text}</p>
    </div>
  </div>
);

import React from "react";

export const ProgressBlock = ({ imgSrc, alt, text }) => (
  <div className="progress__block">
    <div className="progress__block-content">
      <img src={imgSrc} className="progress__block-img" alt={alt} />
      <p className="progress__block-text">{text}</p>
    </div>
    <h6 className="progress__block-title">{alt.replace("-img", "")}</h6>
  </div>
);

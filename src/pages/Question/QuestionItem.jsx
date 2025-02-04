import React from "react";
import plus from "../../assets/question/plus.svg";
import minus from "../../assets/question/minus.svg";

export const QuestionItem = ({ item, isOpen, onClick }) => (
  <div className="question__item">
    <hr />
    <div className="question__title" onClick={onClick}>
      <h2 className="question__title-text">{item.question}</h2>
      <span>
        <img src={isOpen ? minus : plus} alt={isOpen ? "minus" : "plus"} />
      </span>
    </div>
    {isOpen && <div className="question__answer">{item.answer}</div>}
  </div>
);

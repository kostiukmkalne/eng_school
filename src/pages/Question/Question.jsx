// import React, { useState } from "react";
// import "./Question.scss";
// import { useTranslation } from "react-i18next";
// import questionMark from "../../assets/questionMark.svg";
// import plus from "../../assets/question/plus.svg";
// import minus from "../../assets/question/minus.svg";

// export const Question = () => {
//   const { t } = useTranslation();
//   const [selected, setSelected] = useState(null);

//   const toggle = (index) => {
//     setSelected(selected === index ? null : index);
//   };

//   const questions = t("question.questions", { returnObjects: true });

//   return (
//     <div className="question">
//       <div className="question__header">
//         <div className="question__info">
//           <img
//             src={questionMark}
//             className="question__info-img"
//             alt="question mark"
//           />
//           <h6 className="question__info-title">{t("question.title")}</h6>
//         </div>

//         <div className="question__main">
//           <h1 className="question__main-title-color">
//             {t("question.subtitle")}
//           </h1>
//           <h1 className="question__main-title">{t("question.subtitle_end")}</h1>
//         </div>
//       </div>

//       <div className="question__container">
//         {questions.map((item, index) => (
//           <div className="question__item" key={index}>
//             <hr className="question__item-color" />
//             <div
//               className="question__item-title"
//               onClick={() => toggle(index)}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => e.key === "Enter" && toggle(index)}
//             >
//               <h2 className="question__item-title-text">{item.question}</h2>
//               <img
//                 src={selected === index ? minus : plus}
//                 alt={selected === index ? "collapse answer" : "expand answer"}
//                 className="question__item-icon"
//               />
//             </div>
//             <div
//               className={`question__item-answer ${
//                 selected === index ? "show" : ""
//               }`}
//             >
//               {item.answer}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import "./Question.scss";
import { useTranslation } from "react-i18next";
import questionMark from "../../assets/questionMark.svg";
import plus from "../../assets/question/plus.svg";
import minus from "../../assets/question/minus.svg";

export const Question = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  const questions = t("question.questions", { returnObjects: true });

  return (
    <div className="question" id="qa">
      <div className="question__header">
        <div className="question__info">
          <img
            src={questionMark}
            className="question__info-img"
            alt="question mark"
          />
          <h6 className="question__info-title">{t("question.title")}</h6>
        </div>

        <div className="question__main">
          <h1 className="question__main-title-color">
            {t("question.subtitle")}
          </h1>
          <h1 className="question__main-title">{t("question.subtitle_end")}</h1>
        </div>
      </div>

      <div className="question__container">
        {questions.map((item, index) => (
          <div className="question__item" key={index}>
            {index > 0 && <hr className="question__item-color" />}
            <div
              className="question__item-title"
              onClick={() => toggle(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggle(index)}
            >
              <h2 className="question__item-title-text">{item.question}</h2>
              <img
                src={selected === index ? minus : plus}
                alt={selected === index ? "collapse answer" : "expand answer"}
                className="question__item-icon"
              />
            </div>
            <div
              className={`question__item-answer ${
                selected === index ? "show" : ""
              }`}
            >
              {item.answer}
            </div>
            {index === questions.length - 1 && (
              <hr className="question__item-color" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

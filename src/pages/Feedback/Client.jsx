import score from "../../assets/companies/score.svg";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();

  const column1 = t("feedback.client_feedback", { returnObjects: true }).slice(
    0,
    3
  );
  const column2 = t("feedback.client_feedback", { returnObjects: true }).slice(
    3,
    6
  );
  const column3 = t("feedback.client_feedback", { returnObjects: true }).slice(
    6,
    9
  );

  const renderFeedbackCard = (feedback, index) => (
    <div key={index} className="feedback__card">
      <h6 className="feedback__feedback">{t(feedback.text)}</h6>{" "}
      <div className="feedback__block">
        <img
          src={feedback.person.image}
          alt={feedback.person.name}
          className="feedback__block-photo"
        />
        <div className="feedback__block-cluster">
          <h6 className="feedback__block-name">{feedback.person.name}</h6>
          <h6 className="feedback__block-status">
            {t(feedback.person.status)}
          </h6>{" "}
        </div>
        <img src={score} alt="score" className="feedback__block-rate" />
      </div>
    </div>
  );

  return (
    <div className="feedback__clients">
      <div className="feedback__column">
        {column1.map((feedback, index) => renderFeedbackCard(feedback, index))}
      </div>

      <div className="feedback__column">
        {column2.map((feedback, index) => renderFeedbackCard(feedback, index))}
      </div>

      <div className="feedback__column">
        {column3.map((feedback, index) => renderFeedbackCard(feedback, index))}
      </div>
    </div>
  );
};

export default Clients;

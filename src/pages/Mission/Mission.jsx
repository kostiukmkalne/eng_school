import { MissionBlock } from "./MissionBlock";
import { useTranslation } from "react-i18next";

export const Mission = () => {
  const { t } = useTranslation();

  return (
    <div className="mission">
      <MissionBlock
        title={t("mission.title")}
        text={t("mission.text")}
      />
      <MissionBlock
        title={t("mission.vision_title")}
        text={t("mission.vision_text")}
      />
    </div>
  );
};

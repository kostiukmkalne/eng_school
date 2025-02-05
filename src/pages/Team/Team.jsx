import "./Team.scss";
import palms from "../../assets/palms.svg";
import { useTranslation } from "react-i18next";
import { images } from "./TeamImg.js";

export const Team = () => {
  const { t } = useTranslation();

  return (
    <div className="team">
      <div className="team__titles">
        <div className="team__blog">
          <img src={palms} className="team__blog-img" alt="palm-img" />
          <h6 className="team__blog-title">{t("team.title")}</h6>
        </div>

        <div className="team__main-block">
          <h1 className="team__main-block-title">{t("team.subtitle")}</h1>
          <h1 className="team__main-block-title-color">
            {t("team.subtitle_end")}
          </h1>
        </div>
      </div>

      <div className="team__photos">
        <div className="team__column">
          <div className="team__photo">
            <img
              src={images.hands.src}
              alt="hands-img"
              className="team__photo-1"
            />
          </div>
          <div className="team__photo">
            <img
              src={images.group.src}
              alt="group-img"
              className="team__photo-2"
            />
          </div>
        </div>

        <div className="team__column">
          <div className="team__photo">
            <img
              src={images.person.src}
              alt="person-img"
              className="team__photo-3"
            />
          </div>
          <div className="team__photo">
            <img
              src={images.book.src}
              alt="book-img"
              className="team__photo-4"
            />
          </div>
        </div>

        <div className="team__column">
          <div className="team__photo">
            <img
              src={images.phone.src}
              alt="phoneimg"
              className="team__photo-5"
            />
          </div>
          <div className="team__photo">
            <img
              src={images.lucy.src}
              alt="lucy-img"
              className="team__photo-6"
            />
          </div>
          <div className="team__photo">
            <a
              href="https://www.instagram.com/street_english_school_online?igsh=MTZqNmhmNmh0MWUxcQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={images.insta.src}
                alt="instagram-img"
                className="team__photo-7"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

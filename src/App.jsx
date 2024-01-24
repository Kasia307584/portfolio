import { useTranslation } from "react-i18next";
import "./i18n";
import { Card, Card2 } from "./compenents/Card";
import ProjectGallery from "./compenents/ProjectGallery";
import { Suspense } from "react";

const lngs = {
  en: "English",
  fr: "Français",
};

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Suspense fallback="loading">
      <div className="bg-dark bg-gradient">
        <div
          className="btn-group"
          role="group"
          aria-label="Language buttons"
          style={{
            padding: "20px",
            position: "absolute",
            right: "0px",
            top: "0px",
          }}
        >
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              type="button"
              className="btn btn-outline-warning"
            >
              {lngs[lng]}
            </button>
          ))}
        </div>
        <div style={{ padding: "50px" }}>
          {t("presentation.title")}
          <Card
            title={t("presentation.title")}
            photo="/photo_katarzyna.jpg"
            description={t("presentation.description")}
          />
          <Card2
            title={t("technologies.title")}
            description={t("technologies.description")}
          />
          <ProjectGallery
            title={t("projects.title")}
            description={t("projects.description")}
          />
        </div>
      </div>
    </Suspense>
  );
}

export default App;

import { useTranslation } from "react-i18next";
import "./i18n";
import { Card, Card2 } from "./compenents/Card";
import ProjectGallery from "./compenents/ProjectGallery";
import { Suspense } from "react";
import Menu from "./compenents/Menu";

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <div className="bg-dark bg-gradient">
        <Menu />
        <div>
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

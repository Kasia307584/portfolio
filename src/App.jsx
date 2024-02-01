import { useTranslation } from "react-i18next";
import "./i18n";
import SectionPresentation from "./compenents/SectionPresentation";
import SectionSkills from "./compenents/SectionSkills";
import ProjectGallery from "./compenents/ProjectGallery";
import Header from "./compenents/Header";
import { Suspense } from "react";
import Menu from "./compenents/Menu";

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <div className="bg-dark bg-gradient">
        <Menu />
        <Header />
        <div>
          <SectionPresentation
            title={t("presentation.title")}
            photo="/photo_katarzyna.jpg"
            description={t("presentation.description")}
          />
          <SectionSkills
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

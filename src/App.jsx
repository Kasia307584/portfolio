import { useTranslation } from "react-i18next";
import "./i18n";
import SectionPresentation from "./compenents/SectionPresentation";
import SectionSkills from "./compenents/SectionSkills";
import ProjectGallery from "./compenents/ProjectGallery";
import Header from "./compenents/Header";
import { Suspense } from "react";
import Menu from "./compenents/Menu";
import Footer from "./compenents/Footer";

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <Menu />
      <Header />
      <div className="text-bg-dark text-center">
        <SectionPresentation
          photo="/photo_katarzyna.jpg"
          description={t("presentation.description")}
        />
        <SectionSkills title={t("technologies.title")} />
        <ProjectGallery title={t("projects.title")} />
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;

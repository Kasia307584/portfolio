import { useTranslation } from "react-i18next";
import i18n from "./lang/i18n";
import { Card, Card2, Card3 } from "./compenents/Card";

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
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
          <button
            type="button"
            onClick={() => changeLanguage("fr")}
            className="btn btn-outline-warning"
          >
            français
          </button>
          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className="btn btn-outline-warning"
          >
            english
          </button>
        </div>
        <div style={{ padding: "50px" }}>
          <Card
            title={t("presentation.title")}
            photo="/photo_katarzyna.jpg"
            description={t("presentation.description")}
          />
          <Card2
            title={t("technologies.title")}
            description={t("technologies.description")}
          />
          <Card3
            title={t("projects.title")}
            description={t("projects.description")}
          >
            <Card
              title="Project 1"
              photo="/photo_katarzyna.jpg"
              description="This is my first project"
            />
          </Card3>
        </div>
      </div>
    </>
  );
}

export default App;

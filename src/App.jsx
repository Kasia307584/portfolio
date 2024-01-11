import { useTranslation } from "react-i18next";
import i18n from "./lang/i18n";
import Card from "./compenents/Card";

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
            title={t("title")}
            photo="/photo_katarzyna.jpg"
            description={t("description")}
          />
          <Card
            title={t("title")}
            photo="/photo_katarzyna.jpg"
            description={t("description")}
          />
          <Card
            title={t("title")}
            photo="/photo_katarzyna.jpg"
            description={t("description")}
          />
        </div>
      </div>
    </>
  );
}

export default App;

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
      <button type="button" onClick={() => changeLanguage("fr")}>
        français
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        english
      </button>
      <Card
        text={t("title")}
        photo="/photo_katarzyna.jpg"
        description={t("description")}
      />
    </>
  );
}

export default App;

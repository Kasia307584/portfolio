import { useTranslation } from "react-i18next";
import i18n from "./lang/i18n";

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
      <h2>{t("title")}</h2>
    </>
  );
}

export default App;

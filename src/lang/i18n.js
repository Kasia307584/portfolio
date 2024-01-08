import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./locals/fr";
import en from "./locals/en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        ...en,
      },
    },
    fr: {
      translations: {
        ...fr,
      },
    },
  },
  lng: "en",
  fallbackLng: ["en", "fr"],
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

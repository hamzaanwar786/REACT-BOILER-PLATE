import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@/assets/locales/en/translations.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translations: translationEN,
    },
  },
  lng: "en",
});

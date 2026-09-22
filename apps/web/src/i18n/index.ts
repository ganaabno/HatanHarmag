import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import mn from "./locales/mn.json";

export const supportedLanguages = ["mn", "en"] as const;
export type AppLanguage = (typeof supportedLanguages)[number];

void i18n.use(initReactI18next).init({
  resources: { mn: { translation: mn }, en: { translation: en } },
  lng: "mn",
  fallbackLng: "mn",
  supportedLngs: supportedLanguages,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export function isAppLanguage(value: string | null): value is AppLanguage {
  return value === "mn" || value === "en";
}

export default i18n;

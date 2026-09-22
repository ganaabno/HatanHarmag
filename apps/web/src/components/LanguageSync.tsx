import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { isAppLanguage } from "../i18n";

const storageKey = "hatan-harmag-language";

export function LanguageSync() {
  const { i18n } = useTranslation();

  useEffect(() => {
    let cancelled = false;
    const sync = (language: string) => {
      const normalized = language.startsWith("en") ? "en" : "mn";
      const translate = i18n.getFixedT(normalized);
      document.documentElement.lang = normalized;
      document.title = translate("seo.title");
      document.querySelector('meta[name="description"]')?.setAttribute("content", translate("seo.description"));
      window.localStorage.setItem(storageKey, normalized);
    };
    i18n.on("languageChanged", sync);
    const saved = window.localStorage.getItem(storageKey);
    sync(i18n.language);

    const restoreSavedLanguage = () => {
      if (!cancelled && isAppLanguage(saved) && saved !== i18n.language) {
        void i18n.changeLanguage(saved);
      }
    };
    if (document.readyState === "complete") window.requestAnimationFrame(restoreSavedLanguage);
    else window.addEventListener("load", restoreSavedLanguage, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", restoreSavedLanguage);
      i18n.off("languageChanged", sync);
    };
  }, [i18n]);

  return null;
}

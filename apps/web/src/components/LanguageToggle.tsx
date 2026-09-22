import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "mn";
  return (
    <div className="language-toggle" role="group" aria-label={t("common.language")}>
      {(["mn", "en"] as const).map((option) => (
        <button key={option} type="button" aria-pressed={language === option} onClick={() => void i18n.changeLanguage(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

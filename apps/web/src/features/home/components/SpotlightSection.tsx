import { useTranslation } from "react-i18next";
import pack from "../../../assets/brand/sergeenee-pack-sharp.webp";
import { Reveal } from "./motion";

export function SpotlightSection() {
  const { t } = useTranslation();

  const nutrition = [
    [t("sergeenee.energy"), "12.57 kcal"],
    [t("sergeenee.carbs"), "2.67 g"],
    [t("sergeenee.fiber"), "1.04 g"],
    [t("sergeenee.protein"), "0.39 g"],
    [t("sergeenee.fat"), "0.04 g"],
  ] as const;

  return (
    <section className="spotlight">
      <div className="shell spotlight__grid">
        <Reveal className="spotlight__visual">
          <img src={pack} alt={t("sergeenee.alt")} loading="lazy" />
        </Reveal>

        <div className="spotlight__copy">
          <Reveal>
            <p className="eyebrow eyebrow--night">{t("sergeenee.label")}</p>
            <h2 className="display display--night">
              <span>{t("sergeenee.title1")}</span>
              <em>{t("sergeenee.title2")}</em>
            </h2>
            <p className="spotlight__body">{t("sergeenee.body")}</p>
            <p className="spotlight__ingredients">{t("sergeenee.ingredients")}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="nutrition">
              <span className="nutrition__title">{t("sergeenee.per100")}</span>
              {nutrition.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

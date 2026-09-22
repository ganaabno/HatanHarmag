import { useTranslation } from "react-i18next";
import berries from "../../../assets/brand/harmag-berries.jpg";
import { CountUp } from "./CountUp";
import { Reveal } from "./motion";

export function WhySection() {
  const { t } = useTranslation();

  const stats = [
    { value: "2012", unit: t("why.unit1"), label: t("why.fact1") },
    { value: "7/10", unit: t("why.unit2"), label: t("why.fact2") },
    { value: "60,000", unit: t("why.unit3"), label: t("why.fact3") },
    { value: "40+", unit: t("why.unit4"), label: t("why.fact4") },
  ];

  return (
    <section className="why">
      <div className="shell why__grid">
        <Reveal className="why__visual">
          <img src={berries} alt={t("hero.alt")} loading="lazy" />
          <p className="script-note why__script">{t("why.script")}</p>
        </Reveal>

        <div>
          <Reveal>
            {/* No eyebrow here: the page banner above already carries it. */}
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4.2vw, 3.3rem)" }}>
              {t("why.title")}
            </h2>
          </Reveal>

          <div className="stat-grid">
            {stats.map((stat, index) => (
              <Reveal className="stat" key={stat.value} delay={index * 0.09}>
                <CountUp value={stat.value} />
                <span className="stat__unit">{stat.unit}</span>
                <p>{stat.label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="why__note">{t("why.note")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

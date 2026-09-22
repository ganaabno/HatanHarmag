import { Leaf, ShieldCheck, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal } from "./motion";

export function ChainSection() {
  const { t } = useTranslation();

  const steps = [
    { icon: ShieldCheck, title: t("chain.oneTitle"), copy: t("chain.oneCopy") },
    { icon: Sprout, title: t("chain.twoTitle"), copy: t("chain.twoCopy") },
    { icon: Leaf, title: t("chain.threeTitle"), copy: t("chain.threeCopy") },
  ];

  return (
    <section className="chain">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <div className="section-head__title">
              <p className="eyebrow">{t("chain.label")}</p>
              <h2 className="display">{t("chain.title")}</h2>
            </div>
            <p className="section-head__aside lede">{t("chain.aside")}</p>
          </div>
        </Reveal>

        <ul className="chain__list">
          {steps.map(({ icon: Icon, title, copy }, index) => (
            <Reveal as="li" className="chain__item" key={title} delay={index * 0.12}>
              <span className="chain__disc">
                <Icon aria-hidden="true" />
              </span>
              <span className="chain__step">— 0{index + 1} —</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

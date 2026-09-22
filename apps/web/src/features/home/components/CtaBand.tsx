import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import backdrop from "../../../assets/brand/gobi-harmag-hero.webp";
import { Reveal } from "./motion";

export function CtaBand() {
  const { t } = useTranslation();

  return (
    <section className="cta-band">
      <img src={backdrop} alt={t("cta.alt")} loading="lazy" />
      <div className="shell cta-band__inner">
        <Reveal>
          <Leaf className="cta-band__leaf" aria-hidden="true" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display display--night">
            <span>{t("cta.title1")}</span>
            <em>{t("cta.title2")}</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p>{t("cta.body")}</p>
          <Link className="btn btn--light" to="/contact">
            {t("cta.button")}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

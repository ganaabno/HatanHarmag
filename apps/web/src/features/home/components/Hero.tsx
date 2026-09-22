import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Globe2, Leaf, Sprout } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../../../assets/brand/gobi-harmag-hero.webp";

/**
 * The hero deliberately avoids the motion-based `Reveal`: motion serialises
 * `opacity: 0` into the SSR markup, which leaves the first screen blank until
 * hydration. The CSS `.rise` animation runs from first paint instead, and the
 * parallax below only enhances an already-visible image.
 */
export function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const markers = [
    { icon: Leaf, label: t("hero.marker1") },
    { icon: Sprout, label: t("hero.marker2") },
    { icon: Globe2, label: t("hero.marker3") },
  ];

  return (
    <section className="hero">
      <div className="shell hero__grid" ref={ref}>
        <div className="hero__copy">
          <div className="rise">
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1 className="display">
              <span>{t("hero.title1")}</span>
              <em>{t("hero.title2")}</em>
            </h1>
            <p className="hero__body lede">{t("hero.body")}</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/products">
                {t("hero.cta")}
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="btn btn--ghost" to="/story">
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>

          <ul className="hero__markers rise" style={{ animationDelay: "140ms" }}>
            {markers.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual rise" style={{ animationDelay: "90ms" }}>
          <div className="hero__frame">
            <motion.img
              src={heroImage}
              alt={t("hero.alt")}
              fetchPriority="high"
              style={reduceMotion ? undefined : { y: imageY, scale: 1.08 }}
            />
            <p className="script-note hero__script">{t("hero.script")}</p>
          </div>
          <div className="hero__chip">
            <strong>{t("hero.chipValue")}</strong>
            <span>{t("hero.chipLabel")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

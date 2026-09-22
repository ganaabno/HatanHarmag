import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import berries from "../../../assets/brand/harmag-berries.jpg";
import field from "../../../assets/brand/gobi-field.jpg";
import nursery from "../../../assets/brand/nursery.jpg";
import pack from "../../../assets/brand/sergeenee-pack-sharp.webp";
import { Reveal } from "./motion";

type ProductCard = {
  name: string;
  kind: string;
  copy: string;
  image: string;
  alt: string;
  to: "/" | "/story" | "/products" | "/sergeenee" | "/impact" | "/contact";
  badge?: string;
  pack?: boolean;
  soft?: boolean;
};

/** `headless` drops the section heading on pages that already have a banner. */
export function ProductsSection({ headless = false }: { headless?: boolean }) {
  const { t } = useTranslation();

  const products: ProductCard[] = [
    {
      name: t("explorer.twoName"),
      kind: t("explorer.twoKind"),
      copy: t("explorer.twoCopy"),
      image: pack,
      alt: t("sergeenee.alt"),
      to: "/sergeenee",
      badge: t("products.badgeFlagship"),
      pack: true,
    },
    {
      name: t("explorer.threeName"),
      kind: t("explorer.threeKind"),
      copy: t("explorer.threeCopy"),
      image: berries,
      alt: t("hero.alt"),
      to: "/story",
    },
    {
      name: t("explorer.fourName"),
      kind: t("explorer.fourKind"),
      copy: t("explorer.fourCopy"),
      image: nursery,
      alt: t("explorer.fourName"),
      to: "/impact",
    },
    {
      name: t("explorer.fiveName"),
      kind: t("explorer.fiveKind"),
      copy: t("explorer.fiveCopy"),
      image: field,
      alt: t("why.alt"),
      to: "/impact",
      badge: t("products.badgeProject"),
      soft: true,
    },
  ];

  return (
    <section className={`products ${headless ? "products--headless" : ""}`}>
      <div className="shell">
        {!headless && (
          <Reveal>
            <div className="section-head">
              <div className="section-head__title">
                <p className="eyebrow">{t("products.label")}</p>
                <h2 className="display">{t("products.title")}</h2>
              </div>
              <div className="section-head__aside">
                <p className="lede" style={{ marginTop: 0, marginBottom: "1.1rem", fontSize: ".92rem" }}>
                  {t("products.aside")}
                </p>
                <Link className="arrow-link" to="/products">
                  {t("products.more")}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        )}

        <div className="product-grid">
          {products.map((product, index) => (
            <Reveal as="article" className="product-card" key={product.name} delay={index * 0.09}>
              <Link to={product.to} aria-label={product.name} style={{ display: "contents" }}>
                <div className={`product-card__media ${product.pack ? "product-card__media--pack" : ""}`}>
                  {product.badge && (
                    <span className={`product-card__badge ${product.soft ? "product-card__badge--soft" : ""}`}>
                      {product.badge}
                    </span>
                  )}
                  <img src={product.image} alt={product.alt} loading="lazy" />
                </div>
                <div className="product-card__body">
                  <span className="product-card__kind">{product.kind}</span>
                  <h3>{product.name}</h3>
                  <p>{product.copy}</p>
                  <div className="product-card__foot">
                    <span>{t("products.more")}</span>
                    <span className="icon-btn"><ArrowUpRight aria-hidden="true" /></span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

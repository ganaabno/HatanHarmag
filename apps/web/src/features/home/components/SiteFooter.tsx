import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/brand/hatan-harmag-logo-web.webp";
import { LanguageToggle } from "../../../components/LanguageToggle";

// lucide-react no longer ships brand marks, so the three social glyphs are inline.
function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.63c-.29-.04-1.27-.13-2.41-.13-2.38 0-4.02 1.46-4.02 4.13V9.9H7.5V13h2.77v8z" />
    </svg>
  );
}

function YoutubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.2" y="5.2" width="19.6" height="13.6" rx="4.2" />
      <path d="M10.3 9.2 15.1 12l-4.8 2.8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

// TODO: replace the "#" hrefs and the contact address with Hatan Harmag's real
// social profiles and email once they are confirmed.
const SOCIALS = [
  { icon: InstagramGlyph, label: "Instagram", href: "#" },
  { icon: FacebookGlyph, label: "Facebook", href: "#" },
  { icon: YoutubeGlyph, label: "YouTube", href: "#" },
];

export function SiteFooter() {
  const { t } = useTranslation();
  const [subscribed, setSubscribed] = useState(false);

  const links = [
    { label: t("pages.home"), to: "/" },
    { label: t("nav.story"), to: "/story" },
    { label: t("nav.products"), to: "/products" },
    { label: t("nav.sergeenee"), to: "/sergeenee" },
  ] as const;

  const company = [
    { label: t("nav.impact"), to: "/impact" },
    { label: t("footer.gobiburd"), to: "/impact" },
    { label: t("footer.research"), to: "/story" },
    { label: t("nav.contact"), to: "/contact" },
  ] as const;

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="footer-brand">
          <Link className="brand-mark" to="/" aria-label={t("common.brandHome")}>
            <img src={logo} alt="" aria-hidden="true" />
            <span>
              <strong>Hatan Harmag</strong>
              <small>{t("common.tagline")}</small>
            </span>
          </Link>
          <p>{t("footer.blurb")}</p>
          <ul className="footer-social">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a href={href} aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>{t("footer.linksTitle")}</h2>
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2>{t("footer.companyTitle")}</h2>
          <ul className="footer-links">
            {company.map((link) => (
              <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="newsletter">
          <h2>{t("footer.newsletterTitle")}</h2>
          <p>{t("footer.newsletterBody")}</p>
          {/* Local-only for now — wire `onSubmit` to a real mailing-list endpoint. */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribed(true);
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">{t("footer.placeholder")}</label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={t("footer.placeholder")}
            />
            <button type="submit">{t("footer.subscribe")}</button>
          </form>
          <p className="newsletter__status" role="status">{subscribed ? t("footer.thanks") : ""}</p>

          <ul className="footer-contact">
            <li>
              <MapPin aria-hidden="true" />
              {t("footer.address")}
            </li>
            <li>
              <Mail aria-hidden="true" />
              <a href="mailto:info@hatanharmag.mn">info@hatanharmag.mn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell footer-base">
        <span>{t("footer.rights")}</span>
        <ul>
          <li><Link to="/story">{t("footer.privacy")}</Link></li>
          <li><Link to="/story">{t("footer.terms")}</Link></li>
        </ul>
        <LanguageToggle />
      </div>
    </footer>
  );
}

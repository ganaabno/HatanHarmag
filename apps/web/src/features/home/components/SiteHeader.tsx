import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/brand/hatan-harmag-logo-web.webp";
import { LanguageToggle } from "../../../components/LanguageToggle";

export function SiteHeader() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 40, restDelta: 0.001 });

  const links = [
    { label: t("pages.home"), to: "/" },
    { label: t("nav.story"), to: "/story" },
    { label: t("nav.products"), to: "/products" },
    { label: t("nav.sergeenee"), to: "/sergeenee" },
    { label: t("nav.impact"), to: "/impact" },
    { label: t("nav.contact"), to: "/contact" },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="shell site-header__inner">
        <Link className="brand-mark" to="/" aria-label={t("common.brandHome")}>
          <img src={logo} alt="" aria-hidden="true" />
          <span>
            <strong>Hatan Harmag</strong>
            <small>{t("common.tagline")}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label={t("nav.primary")}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "is-active" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-utility">
          <LanguageToggle />
        </div>

        <button
          className="menu-trigger"
          type="button"
          aria-label={open ? t("nav.menuClose") : t("nav.menuOpen")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label={t("nav.mobile")}
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "is-active" }}
                onClick={() => setOpen(false)}
              >
                <small>0{index + 1}</small>
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    </header>
  );
}

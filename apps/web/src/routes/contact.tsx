import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PageBanner } from "../features/home/components/PageBanner";
import { Reveal } from "../features/home/components/motion";

function ContactPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const details = [
    { icon: MapPin, label: t("contactPage.addressLabel"), value: t("footer.address") },
    { icon: Mail, label: t("contactPage.emailLabel"), value: "info@hatanharmag.mn", href: "mailto:info@hatanharmag.mn" },
    { icon: Clock, label: t("contactPage.hoursLabel"), value: t("contactPage.hours") },
  ];

  return (
    <>
      <PageBanner
        eyebrow={t("pages.contactEyebrow")}
        title={t("pages.contactTitle")}
        lead={t("pages.contactLead")}
      />

      <section className="contact">
        <div className="shell contact__grid">
          <Reveal className="contact__details">
            <h2>{t("contactPage.detailsTitle")}</h2>
            <ul>
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <span className="contact__icon"><Icon aria-hidden="true" /></span>
                  <span>
                    <small>{label}</small>
                    {href ? <a href={href}>{value}</a> : value}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="contact__form" delay={0.08}>
            <h2>{t("contactPage.formTitle")}</h2>
            {/* Local-only for now — wire `onSubmit` to a real form endpoint. */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <label htmlFor="contact-name">{t("contactPage.name")}</label>
              <input id="contact-name" name="name" required autoComplete="name" placeholder={t("contactPage.namePlaceholder")} />

              <label htmlFor="contact-email">{t("contactPage.email")}</label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder={t("contactPage.emailPlaceholder")} />

              <label htmlFor="contact-message">{t("contactPage.message")}</label>
              <textarea id="contact-message" name="message" rows={5} required placeholder={t("contactPage.messagePlaceholder")} />

              <button className="btn btn--primary" type="submit">{t("contactPage.send")}</button>
            </form>
            <p className="contact__status" role="status">{sent ? t("contactPage.sent") : ""}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export const Route = createFileRoute("/contact")({ component: ContactPage });

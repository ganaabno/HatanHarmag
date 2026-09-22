import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import berries from "../assets/brand/harmag-berries.jpg";
import { ChainSection } from "../features/home/components/ChainSection";
import { CtaBand } from "../features/home/components/CtaBand";
import { PageBanner } from "../features/home/components/PageBanner";
import { Reveal } from "../features/home/components/motion";

function StoryPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageBanner eyebrow={t("pages.storyEyebrow")} title={t("pages.storyTitle")} lead={t("pages.storyLead")} />

      <section className="split">
        <div className="shell split__grid">
          <Reveal className="split__visual">
            <figure>
              <img src={berries} alt={t("hero.alt")} />
              <figcaption>{t("story.caption")}</figcaption>
            </figure>
          </Reveal>
          <Reveal className="split__copy" delay={0.08}>
            <h2 className="display">{t("story.bodyTitle")}</h2>
            <p>{t("story.body1")}</p>
            <p>{t("story.body2")}</p>
          </Reveal>
        </div>
      </section>

      <ChainSection />
      <CtaBand />
    </>
  );
}

export const Route = createFileRoute("/story")({ component: StoryPage });

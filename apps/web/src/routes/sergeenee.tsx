import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CtaBand } from "../features/home/components/CtaBand";
import { PageBanner } from "../features/home/components/PageBanner";
import { SpotlightSection } from "../features/home/components/SpotlightSection";

function SergeeneePage() {
  const { t } = useTranslation();

  return (
    <>
      <PageBanner
        eyebrow={t("pages.sergeeneeEyebrow")}
        title={t("pages.sergeeneeTitle")}
        lead={t("pages.sergeeneeLead")}
      />
      <SpotlightSection />
      <CtaBand />
    </>
  );
}

export const Route = createFileRoute("/sergeenee")({ component: SergeeneePage });

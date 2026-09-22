import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CtaBand } from "../features/home/components/CtaBand";
import { PageBanner } from "../features/home/components/PageBanner";
import { WhySection } from "../features/home/components/WhySection";

function ImpactPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageBanner
        eyebrow={t("pages.impactEyebrow")}
        title={t("pages.impactTitle")}
        lead={t("pages.impactLead")}
      />
      <WhySection />
      <CtaBand />
    </>
  );
}

export const Route = createFileRoute("/impact")({ component: ImpactPage });

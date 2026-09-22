import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CtaBand } from "../features/home/components/CtaBand";
import { PageBanner } from "../features/home/components/PageBanner";
import { ProductsSection } from "../features/home/components/ProductsSection";

function ProductsPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageBanner
        eyebrow={t("pages.productsEyebrow")}
        title={t("pages.productsTitle")}
        lead={t("pages.productsLead")}
      />
      <ProductsSection headless />
      <CtaBand />
    </>
  );
}

export const Route = createFileRoute("/products")({ component: ProductsPage });

import { createFileRoute } from "@tanstack/react-router";
import { ChainSection } from "../features/home/components/ChainSection";
import { CtaBand } from "../features/home/components/CtaBand";
import { Hero } from "../features/home/components/Hero";
import { Marquee } from "../features/home/components/Marquee";
import { ProductsSection } from "../features/home/components/ProductsSection";
import { SpotlightSection } from "../features/home/components/SpotlightSection";

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ChainSection />
      <ProductsSection />
      <SpotlightSection />
      <CtaBand />
    </>
  );
}

export const Route = createFileRoute("/")({ component: HomePage });

import { HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LanguageSync } from "./LanguageSync";

export function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="mn">
      <head><HeadContent /></head>
      <body><LanguageSync />{children}<Scripts /></body>
    </html>
  );
}

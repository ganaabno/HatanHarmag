import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Every route is static marketing content — no loaders, no server functions —
// so the whole site is prerendered to HTML at build time. That makes the output
// a plain static directory (`dist/client`), which any static host can serve.
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true },
      pages: [
        { path: "/" },
        { path: "/story" },
        { path: "/products" },
        { path: "/sergeenee" },
        { path: "/impact" },
        { path: "/contact" },
      ],
    }),
    tailwindcss(),
    viteReact(),
  ],
});

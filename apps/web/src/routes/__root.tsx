import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { RootDocument } from "../components/RootDocument";
import { SiteFooter } from "../features/home/components/SiteFooter";
import { SiteHeader } from "../features/home/components/SiteHeader";
import appCss from "../styles.css?url";

function RootLayout() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Хатан Хармаг — Говийн генетик нөөц, эрүүл хүнс, ногоон хөгжлийн амин хэлхээ." },
      { name: "theme-color", content: "#f7f6f1" },
      { title: "Хатан Хармаг — Говийн амин хэлхээ" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: () => (
    <div className="not-found">
      <span>404</span>
      <h1>Энэ мөр Говьд хүрэхгүй байна.</h1>
      <Link className="btn btn--primary" to="/">Нүүр рүү буцах</Link>
    </div>
  ),
});

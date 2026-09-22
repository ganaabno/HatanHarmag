/** Shared masthead for every inner page. */
export function PageBanner({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="page-banner">
      <div className="shell page-banner__inner rise">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display">{title}</h1>
        <p className="page-banner__lead lede">{lead}</p>
      </div>
    </section>
  );
}

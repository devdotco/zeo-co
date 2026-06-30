import Breadcrumbs from "./Breadcrumbs";

interface PageHeroProps {
  breadcrumbs?: Array<{ label: string; href?: string }>;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  compact?: boolean;
}

export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  children,
  compact,
}: PageHeroProps) {
  return (
    <section className={`pt-24 ${compact ? "pb-10" : "pb-14"} border-b border-[#e5e5e5] bg-[#ffffff]`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && (
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0f0f0f] mb-4 max-w-3xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#737373] text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}

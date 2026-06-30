import Link from "next/link";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co";

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href ? `${siteUrl}${item.href}` : siteUrl,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#6b7e69]">
        <Link href="/" className="hover:text-[#9aaa98] transition-colors">
          Home
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40">
              <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-[#9aaa98] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#9aaa98]">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}

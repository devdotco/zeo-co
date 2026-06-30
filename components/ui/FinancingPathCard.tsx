import Link from "next/link";

interface FinancingPathCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  href: string;
  highlight?: boolean;
}

export default function FinancingPathCard({
  icon,
  title,
  description,
  tags,
  href,
  highlight,
}: FinancingPathCardProps) {
  return (
    <Link
      href={href}
      className={`group block rounded-xl border p-5 transition-all hover:border-[#0f0f0f]/50 hover:bg-[#f5f5f5] ${
        highlight
          ? "border-[#0f0f0f]/30 bg-[#f5f5f5]"
          : "border-[#e5e5e5] bg-[#f5f5f5]"
      }`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f] group-hover:border-[#0f0f0f]/40">
        {icon}
      </div>
      <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">{title}</h3>
      <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

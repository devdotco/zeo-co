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
      className={`group block rounded-xl border p-5 transition-all hover:border-[#22c55e]/50 hover:bg-[#0f2a14] ${
        highlight
          ? "border-[#22c55e]/30 bg-[#0f2a14]"
          : "border-[#1e2620] bg-[#111512]"
      }`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a0d0b] border border-[#1e2620] text-[#22c55e] group-hover:border-[#22c55e]/40">
        {icon}
      </div>
      <h3 className="font-semibold text-[#eef2ec] mb-2 text-[0.9375rem]">{title}</h3>
      <p className="text-sm text-[#6b7e69] leading-relaxed mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#1e2620] text-[#6b7e69]">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

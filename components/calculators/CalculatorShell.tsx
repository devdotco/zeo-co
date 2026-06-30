"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";

interface CalculatorShellProps {
  title: string;
  description: string;
  children: ReactNode;
  relatedCalcs?: Array<{ label: string; href: string }>;
  disclaimerType?: "general" | "sba" | "mca" | "acquisition" | "factoring" | "private";
}

export default function CalculatorShell({
  title,
  description,
  children,
  relatedCalcs,
  disclaimerType = "general",
}: CalculatorShellProps) {
  return (
    <div className="max-w-4xl mx-auto px-5 lg:px-8 pt-24 pb-8">
      <div className="mb-6">
        <p className="text-xs text-[#a3a3a3] mb-2">Results are estimates only — not offers, commitments, or guaranteed terms.</p>
      </div>

      <div className="rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] overflow-hidden">
        <div className="px-6 py-5 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <h1 className="text-base font-semibold text-[#0f0f0f]">{title}</h1>
          </div>
          <p className="text-sm text-[#a3a3a3]">{description}</p>
        </div>

        <div className="p-6">{children}</div>
      </div>

      <div className="mt-5">
        <ProductDisclaimer type={disclaimerType} />
      </div>

      {relatedCalcs && relatedCalcs.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">Related Calculators</p>
          <div className="flex flex-wrap gap-2">
            {relatedCalcs.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="text-xs px-3 py-1.5 rounded-lg border border-[#e5e5e5] text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Shared input components for calculators ───────────────────────────────────

export function CalcInput({
  label,
  id,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
  note,
}: {
  label: string;
  id: string;
  value: number | string;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  note?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-[#737373] mb-1.5">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#a3a3a3]">{prefix}</span>
        )}
        <input
          id={id}
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step ?? 1}
          className={`w-full bg-[#ffffff] border border-[#e5e5e5] rounded-lg py-2.5 text-sm text-[#0f0f0f] tabular-nums focus:outline-none focus:border-[#0f0f0f] transition-colors ${prefix ? "pl-7" : "pl-3"} ${suffix ? "pr-12" : "pr-3"}`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#a3a3a3]">{suffix}</span>
        )}
      </div>
      {note && <p className="text-[0.625rem] text-[#a3a3a3] mt-1">{note}</p>}
    </div>
  );
}

export function CalcResult({
  label,
  value,
  highlight,
  note,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  note?: string;
}) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "border-[#0f0f0f]/30 bg-[#f5f5f5]" : "border-[#e5e5e5] bg-[#ffffff]"}`}>
      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">{label}</p>
      <p className={`text-xl font-semibold tabular-nums ${highlight ? "text-[#0f0f0f]" : "text-[#0f0f0f]"}`}>{value}</p>
      {note && <p className="text-[0.625rem] text-[#a3a3a3] mt-1.5">{note}</p>}
    </div>
  );
}

export function fmt(n: number, style: "currency" | "percent" | "number" = "currency"): string {
  if (!isFinite(n)) return "—";
  if (style === "currency") return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  if (style === "percent") return `${n.toFixed(2)}%`;
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}

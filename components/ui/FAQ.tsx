"use client";

import { useState } from "react";
import JsonLd, { faqSchema } from "@/components/seo/JsonLd";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
  includeSchema = true,
}: {
  items: FAQItem[];
  title?: string;
  includeSchema?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      {includeSchema && <JsonLd data={faqSchema(items)} />}
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-8">{title}</h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="border border-[#e5e5e5] rounded-xl overflow-hidden">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#f5f5f5] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-sm font-medium text-[#0f0f0f]">{item.q}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 text-[#0f0f0f] transition-transform ${open === i ? "rotate-180" : ""}`}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-[#737373] leading-relaxed border-t border-[#e5e5e5]">
                  <p className="pt-3">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

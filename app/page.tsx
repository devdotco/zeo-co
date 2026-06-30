import type { Metadata } from "next";
import Link from "next/link";
import MultiStepFinancingForm from "@/components/forms/MultiStepFinancingForm";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import MetricCard from "@/components/ui/MetricCard";

export const metadata: Metadata = {
  title: "ZEO.co — Business Financing Matched to How Your Company Makes Money",
  description:
    "Compare SBA loans, working capital, invoice factoring, equipment financing, private lending, acquisition financing, and other commercial financing options through one guided intake. Not a bank or lender.",
};

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function FactoringIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 7H9M5 10H7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M13 10l2.5 2.5M13 15l2.5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function EquipmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="5" cy="13" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M3 13V7l3-3h6l3 3v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AcquisitionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="5" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="10" y="5" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M8 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PrivateCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L15 5v5c0 3.5-2.5 6-6 7C3.5 16 1 13.5 1 10V5L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

function CREIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="7" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 7V5h8v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M9 3V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function FranchiseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2l2 4h4l-3 2.5 1 4L9 10l-4 2.5 1-4L3 6h4L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Section: How It Works ─────────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    { n: "01", title: "Need", desc: "Tell us what you need funding for, how much, and your basic business profile." },
    { n: "02", title: "Match", desc: "ZEO evaluates your profile against applicable financing structures and paths." },
    { n: "03", title: "Prequalify", desc: "Based on your profile, ZEO identifies potential financing paths that may be relevant." },
    { n: "04", title: "Package", desc: "We help you understand what documents and information are typically required." },
    { n: "05", title: "Apply", desc: "Your profile is shared with relevant third-party providers where permitted." },
    { n: "06", title: "Fund", desc: "Approval, terms, and funding decisions are made by the applicable provider." },
  ];

  return (
    <section className="py-20 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="mb-12">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Process</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0f0f0f] mb-3">One intake. Multiple capital paths.</h2>
          <p className="text-[#737373] max-w-xl">
            ZEO is not a lender. It&apos;s a financing decision engine that evaluates your situation against the full range of commercial financing structures.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(100%+8px)] w-4 h-px border-t border-dashed border-[#e5e5e5] z-10" />
              )}
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-[#0f0f0f] mb-2 block">{s.n}</span>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{s.title}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section: Financing Options Grid ──────────────────────────────────────────

function FinancingOptionsGrid() {
  const products = [
    {
      icon: <SBAIcon />,
      title: "SBA Loans",
      description: "Government-backed loans for eligible small businesses. 7(a) and 504 programs for real estate, equipment, working capital, and acquisitions.",
      tags: ["7(a) & 504", "Up to $5M+", "10–25 yr terms"],
      href: "/sba-loans",
    },
    {
      icon: <WorkingCapitalIcon />,
      title: "Working Capital Loans",
      description: "Short- to medium-term financing to cover operating gaps, seasonal needs, or growth-stage expenses.",
      tags: ["$50K–$5M", "Flexible use", "6–36 mo terms"],
      href: "/working-capital",
    },
    {
      icon: <FactoringIcon />,
      title: "Invoice Factoring",
      description: "Advance on outstanding invoices. Common for B2B businesses with net-30 to net-90 payment terms.",
      tags: ["A/R-based", "No debt added", "Fast funding"],
      href: "/factoring/invoice-factoring",
      highlight: true,
    },
    {
      icon: <EquipmentIcon />,
      title: "Equipment Financing",
      description: "Finance or lease machinery, vehicles, technology, or other equipment with the asset as collateral.",
      tags: ["Asset-secured", "Preserves cash", "Section 179"],
      href: "/equipment-financing",
    },
    {
      icon: <AcquisitionIcon />,
      title: "Acquisition Financing",
      description: "Finance the purchase of an existing business. Commonly structured with SBA 7(a), seller notes, and equity injection.",
      tags: ["SBA 7(a)", "Seller notes", "DSCR-based"],
      href: "/acquisition-financing",
    },
    {
      icon: <PrivateCreditIcon />,
      title: "Private Business Loans",
      description: "Non-bank financing from private lenders. Often used when traditional bank criteria are not met.",
      tags: ["Asset-based", "Higher rates", "Faster close"],
      href: "/private-lending",
    },
    {
      icon: <CREIcon />,
      title: "Commercial Real Estate",
      description: "CRE purchase, refinance, or development. Including owner-occupied and investment property.",
      tags: ["SBA 504", "DSCR-based", "Long-term"],
      href: "/commercial-real-estate-loans",
    },
    {
      icon: <FranchiseIcon />,
      title: "Franchise Financing",
      description: "Financing for franchise acquisition, buildout, and working capital. SBA programs often apply.",
      tags: ["Franchise-ready", "SBA eligible", "Buildout"],
      href: "/franchise-financing",
    },
  ];

  return (
    <section className="py-20 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Financing Options</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f0f0f]">Commercial financing products</h2>
          </div>
          <Link href="/financing" className="hidden md:block text-sm text-[#0f0f0f] hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <FinancingPathCard key={p.href} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section: Factoring Migration ──────────────────────────────────────────────

function FactoringSection() {
  return (
    <section className="py-20 border-t border-[#e5e5e5] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Factoring</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f0f0f] mb-4">
              Deep factoring expertise, now part of ZEO
            </h2>
            <p className="text-[#737373] leading-relaxed mb-5">
              Invoice factoring allows B2B businesses to convert outstanding invoices into immediate working capital — without taking on traditional debt. The factoring experience from Factoring.io is now fully integrated into ZEO&apos;s financing platform.
            </p>
            <p className="text-[#737373] leading-relaxed mb-6">
              Trucking, staffing, healthcare, manufacturing, oilfield, construction, agriculture, and government contractors each have specific factoring requirements. ZEO evaluates your industry and receivable structure to identify relevant factoring options.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/factoring" className="px-4 py-2 rounded-lg bg-[#0f0f0f] text-white text-sm font-semibold hover:bg-[#333333] transition-colors">
                Explore Factoring
              </Link>
              <Link href="/calculators/invoice-factoring-calculator" className="px-4 py-2 rounded-lg border border-[#e5e5e5] text-sm text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors">
                Factoring Calculator
              </Link>
            </div>
          </div>

          {/* Waterfall visual */}
          <div className="space-y-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">Invoice Factoring Waterfall</p>
            {[
              { label: "Invoice Face Value", value: "$100,000", color: "bg-[#0f0f0f]", pct: 100 },
              { label: "Initial Advance (85%)", value: "$85,000", color: "bg-[#333333]", pct: 85 },
              { label: "Reserve (15%)", value: "$15,000", color: "bg-[#e5e5e5]", pct: 15 },
              { label: "Factoring Fee (~2%)", value: "−$2,000", color: "bg-[#f5f5f5]", pct: 20 },
              { label: "Reserve Release", value: "$13,000", color: "bg-[#f5f5f5]", pct: 13 },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <div className="w-32 flex-shrink-0">
                  <div className="h-6 rounded-sm" style={{ width: `${row.pct}%`, background: row.color === "bg-[#0f0f0f]" ? "#0f0f0f" : row.color === "bg-[#333333]" ? "#333333" : row.color === "bg-[#e5e5e5]" ? "#e5e5e5" : row.color === "bg-[#f5f5f5]" ? "#f5f5f5" : "#f5f5f5" }} />
                </div>
                <span className="text-xs text-[#737373] flex-1">{row.label}</span>
                <span className="text-xs font-medium tabular-nums text-[#0f0f0f]">{row.value}</span>
              </div>
            ))}
            <p className="text-[0.65rem] text-[#a3a3a3] mt-2">Illustrative example only. Actual rates, advance percentages, fees, and structures vary by factor and account.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section: Acquisition Financing ───────────────────────────────────────────

function AcquisitionSection() {
  return (
    <section className="py-20 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Acquisition Financing</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">Financing the purchase of an existing business</h2>
            <p className="text-[#737373] leading-relaxed mb-4">
              Business acquisitions typically involve a combination of financing structures: SBA 7(a) loans, seller notes, buyer equity injection, and sometimes mezzanine or private credit. DSCR — debt service coverage ratio — is the primary underwriting metric.
            </p>
            <p className="text-[#737373] leading-relaxed mb-6">
              ZEO helps buyers evaluate acquisition financing options based on purchase price, EBITDA/SDE, down payment capacity, and target debt service coverage.
            </p>
            <Link href="/acquisition-financing" className="text-sm text-[#0f0f0f] hover:underline">
              Acquisition financing overview →
            </Link>
          </div>

          {/* Sources & Uses */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] overflow-hidden">
            <div className="px-5 py-3 border-b border-[#e5e5e5]">
              <p className="text-xs font-semibold text-[#a3a3a3]">Illustrative Sources & Uses — $1.5M Acquisition</p>
            </div>
            <table className="table-zeo">
              <thead>
                <tr><th>Source / Use</th><th>Amount</th><th>%</th></tr>
              </thead>
              <tbody>
                <tr><td className="text-[#0f0f0f] font-medium">SBA 7(a) Loan</td><td>$1,050,000</td><td>70%</td></tr>
                <tr><td>Seller Note</td><td>$225,000</td><td>15%</td></tr>
                <tr><td>Buyer Equity Injection</td><td>$225,000</td><td>15%</td></tr>
                <tr className="font-semibold"><td className="text-[#0f0f0f]">Total Sources</td><td className="text-[#0f0f0f]">$1,500,000</td><td className="text-[#0f0f0f]">100%</td></tr>
              </tbody>
            </table>
            <p className="px-5 pb-4 pt-2 text-[0.65rem] text-[#a3a3a3]">
              Illustrative only. Actual structure, amounts, and eligibility depend on lender underwriting, SBA rules, and business financials. Use the{" "}
              <Link href="/calculators/business-acquisition-loan-calculator" className="text-[#0f0f0f] hover:underline">
                acquisition calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section: Calculators ──────────────────────────────────────────────────────

function CalculatorsSection() {
  const calcs = [
    { label: "Business Loan Calculator", href: "/calculators/business-loan-calculator", desc: "Monthly payment, total interest, amortization" },
    { label: "SBA 7(a) Calculator", href: "/calculators/sba-7a-loan-calculator", desc: "Payment, DSCR, sources & uses" },
    { label: "DSCR Calculator", href: "/calculators/dscr-calculator", desc: "Coverage ratio, max debt service" },
    { label: "Invoice Factoring Calculator", href: "/calculators/invoice-factoring-calculator", desc: "Advance, fees, net proceeds" },
    { label: "Acquisition Loan Calculator", href: "/calculators/business-acquisition-loan-calculator", desc: "DSCR, buyer cash flow, max price" },
    { label: "MCA APR Calculator", href: "/calculators/mca-apr-calculator", desc: "Implied APR, effective cost" },
  ];

  return (
    <section className="py-20 border-t border-[#e5e5e5] bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Calculators</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">Financial modeling tools</h2>
            <p className="text-[#737373] text-sm mt-2">Estimate payments, DSCR, cost of capital, and more. Results are estimates, not offers.</p>
          </div>
          <Link href="/calculators" className="hidden md:block text-sm text-[#0f0f0f] hover:underline">
            All 14 calculators →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {calcs.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5 hover:border-[#0f0f0f]/40 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <p className="text-sm font-semibold text-[#0f0f0f] group-hover:text-[#333333] transition-colors">{c.label}</p>
              </div>
              <p className="text-xs text-[#a3a3a3]">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section: Industries ───────────────────────────────────────────────────────

function IndustriesSection() {
  const industries = [
    "Healthcare", "Construction", "Trucking & Logistics", "Manufacturing",
    "Staffing", "Professional Services", "Restaurants", "Retail / Ecommerce",
    "Agriculture", "Oil & Gas", "Government Contractors", "Franchises",
  ];

  return (
    <section className="py-20 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="mb-10">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Industries</p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f]">Industry-specific financing</h2>
          <p className="text-[#737373] text-sm mt-2">Financing requirements vary significantly by industry. ZEO evaluates industry-specific factors.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {industries.map((ind) => {
            const slug = ind.toLowerCase().replace(/ & /g, "-").replace(/ \/ /g, "-").replace(/ /g, "-").replace(/\//g, "-");
            return (
              <Link
                key={ind}
                href={`/industries/${slug}`}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3 text-sm text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f]/40 transition-all"
              >
                {ind}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Section: Documents ────────────────────────────────────────────────────────

function DocumentsSection() {
  const docs = [
    { cat: "Financial Statements", items: ["2–3 years business tax returns", "Year-to-date P&L", "Current balance sheet", "3–6 months bank statements"] },
    { cat: "Business Documents", items: ["Articles of incorporation", "Business license", "Ownership structure", "Operating agreement"] },
    { cat: "For Acquisitions", items: ["Seller tax returns (3 yrs)", "CIM or business summary", "Asset/liability schedule", "Lease agreements"] },
    { cat: "For Factoring", items: ["Accounts receivable aging", "Sample invoices", "Customer list", "UCC search results"] },
  ];

  return (
    <section className="py-20 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="mb-10">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Preparation</p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f]">Common documents required for business financing</h2>
          <p className="text-[#737373] text-sm mt-2 max-w-xl">
            Requirements vary by product, lender, and business profile. This is a general reference.{" "}
            <Link href="/resources/documents-needed" className="text-[#0f0f0f] hover:underline">Full document guide →</Link>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {docs.map((d) => (
            <div key={d.cat} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <p className="text-xs font-semibold text-[#0f0f0f] mb-3">{d.cat}</p>
              <ul className="space-y-2">
                {d.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#a3a3a3]">
                    <svg className="w-3 h-3 text-[#0f0f0f] mt-0.5 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section: Comparison ───────────────────────────────────────────────────────

function ComparisonSection() {
  return (
    <section className="py-20 border-t border-[#e5e5e5] bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="mb-10">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Comparison</p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f]">Commercial financing at a glance</h2>
          <p className="text-[#737373] text-sm mt-2">General overview only. Actual terms vary significantly by applicant, lender, and product.</p>
        </div>
        <ComparisonTable
          highlightCol="SBA 7(a)"
          columns={["SBA 7(a)", "Factoring", "Equipment", "Working Capital", "Private Credit"]}
          rows={[
            { feature: "Typical range", "SBA 7(a)": "$50K–$5M+", Factoring: "$10K–$5M+", Equipment: "$10K–$5M+", "Working Capital": "$5K–$500K", "Private Credit": "$250K–$50M+" },
            { feature: "Collateral", "SBA 7(a)": "Business + PG", Factoring: "A/R only", Equipment: "Equipment", "Working Capital": "Varies", "Private Credit": "Asset-based" },
            { feature: "Speed", "SBA 7(a)": "30–90 days", Factoring: "1–5 days", Equipment: "2–10 days", "Working Capital": "1–10 days", "Private Credit": "7–30 days" },
            { feature: "Credit requirement", "SBA 7(a)": "650+ typical", Factoring: "Customer credit", Equipment: "600+", "Working Capital": "550+", "Private Credit": "Varies" },
            { feature: "Time in business", "SBA 7(a)": "2+ years", Factoring: "Any w/ invoices", Equipment: "1+ years", "Working Capital": "6+ months", "Private Credit": "Varies" },
          ]}
        />
        <p className="text-[0.65rem] text-[#a3a3a3] mt-3">
          All figures are general estimates. ZEO.co does not guarantee rates, terms, or approval. Third-party providers set their own underwriting criteria.
        </p>
      </div>
    </section>
  );
}

// ── Section: Compliance ───────────────────────────────────────────────────────

function ComplianceSection() {
  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Not a lender",
              desc: "ZEO.co is not a bank, lender, mortgage broker, loan broker, underwriter, or financial advisor. ZEO does not make loans or credit decisions.",
              href: "/terms-of-service",
            },
            {
              title: "Third-party providers",
              desc: "All financing is offered by participating third-party providers subject to their own underwriting, approval, pricing, and legal requirements.",
              href: "/privacy-policy",
            },
            {
              title: "State availability",
              desc: "Products and services may not be available in all states. California residents should review our state-specific disclosures.",
              href: "/state-disclosures",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.title}</p>
              <p className="text-xs text-[#a3a3a3] leading-relaxed mb-3">{item.desc}</p>
              <Link href={item.href} className="text-xs text-[#0f0f0f] hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Homepage FAQ ──────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Is ZEO.co a lender or loan broker?",
    a: "No. ZEO.co is not a bank, lender, mortgage broker, loan broker, underwriter, or financial advisor. ZEO helps business owners evaluate potential financing options and may share their profile with third-party providers where permitted by law.",
  },
  {
    q: "What types of businesses can use ZEO?",
    a: "ZEO is designed for commercial business financing inquiries. We do not assist with consumer loans, residential mortgages, personal loans, student loans, or credit repair.",
  },
  {
    q: "Does submitting the form guarantee financing?",
    a: "No. Submitting an intake form does not guarantee approval, funding, specific rates, or loan amounts. All financing decisions are made by the applicable third-party provider based on their own underwriting criteria.",
  },
  {
    q: "What happens to my information after I submit?",
    a: "Your information may be used to evaluate potential financing options and may be shared with third-party financing providers, brokers, lenders, and service providers where permitted by law. Please review our Privacy Policy for details.",
  },
  {
    q: "Is ZEO available in California?",
    a: "ZEO.co may refer California business inquiries to licensed or exempt third-party providers. ZEO is not licensed under the California Financing Law unless expressly stated. Review our California Disclosures for more information.",
  },
  {
    q: "How does invoice factoring work with ZEO?",
    a: "ZEO evaluates your accounts receivable profile, invoice volume, and business type to identify relevant factoring options. The actual factoring arrangement is between you and the third-party factoring company, subject to their own underwriting, fees, and contract terms.",
  },
];

// ── Hero Section ──────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center border-b border-[#e5e5e5] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0f0f0f" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#ffffff]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0f0f0f] rounded-full blur-[180px] opacity-[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] text-xs text-[#0f0f0f] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f] animate-pulse" />
              Commercial financing · Not a lender
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#0f0f0f] mb-5 leading-tight tracking-tight">
              Business financing matched to how your company actually makes money.
            </h1>
            <p className="text-[#737373] text-lg leading-relaxed mb-8 max-w-lg">
              Compare SBA loans, working capital, invoice factoring, equipment financing, private lending, acquisition financing, and other commercial financing options through one guided intake.
            </p>

            {/* Dashboard metrics */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <MetricCard label="Products" value="20+" note="Financing structures" />
              <MetricCard label="Calculators" value="14" note="Free modeling tools" />
              <MetricCard label="Industries" value="15+" note="Sector coverage" highlight />
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#intake-form"
                className="px-6 py-3 rounded-xl bg-[#0f0f0f] text-white font-semibold hover:bg-[#333333] transition-colors"
              >
                Find Financing
              </Link>
              <Link
                href="/financing"
                className="px-6 py-3 rounded-xl border border-[#e5e5e5] text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors"
              >
                Explore Financing Options
              </Link>
            </div>
          </div>

          {/* Right: Multi-step form */}
          <div id="intake-form" className="rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l2 4h4l-3 2.5 1 4L8 9l-4 2.5 1-4L2 5h4L8 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm font-semibold text-[#0f0f0f]">Financing Match Intake</p>
              <span className="ml-auto text-[0.625rem] text-[#a3a3a3] bg-[#e5e5e5] px-2 py-0.5 rounded-full">Not an application</span>
            </div>
            <MultiStepFinancingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FinancingOptionsGrid />
      <ComparisonSection />
      <FactoringSection />
      <AcquisitionSection />
      <CalculatorsSection />
      <IndustriesSection />
      <DocumentsSection />
      <ComplianceSection />
      <FAQ items={faqItems} />
      <CTASection
        headline="Ready to evaluate your financing options?"
        subtext="Submit a brief intake and ZEO will review the best potential paths for your business. Not a loan application. Not a commitment."
      />
    </>
  );
}

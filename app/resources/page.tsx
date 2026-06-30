import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Business Financing Resources | ZEO.co",
  description:
    "Guides, calculators, and educational content covering SBA loans, working capital, invoice factoring, equipment financing, acquisition loans, and more. Not a bank or lender.",
  path: "/resources",
  keywords: [
    "business financing guides",
    "SBA loan guide",
    "working capital resources",
    "invoice factoring explained",
    "business loan calculator",
    "equipment financing guide",
    "acquisition financing resources",
    "commercial financing education",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 3h5.5C9.88 3 11 4.12 11 5.5V15H3V3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M15 3H9.5C8.12 3 7 4.12 7 5.5V15h8V3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="5.5" y="4.5" width="7" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="6" cy="10" r="0.8" fill="currentColor"/>
      <circle cx="9" cy="10" r="0.8" fill="currentColor"/>
      <circle cx="12" cy="10" r="0.8" fill="currentColor"/>
      <circle cx="6" cy="13" r="0.8" fill="currentColor"/>
      <circle cx="9" cy="13" r="0.8" fill="currentColor"/>
      <circle cx="12" cy="13" r="0.8" fill="currentColor"/>
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 7h8M5 10h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1 transition-transform group-hover:translate-x-0.5">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const guides = [
  {
    slug: "sba-loans",
    title: "SBA Loans: Programs, Eligibility & What to Expect",
    description:
      "A practical overview of the SBA 7(a) and 504 programs — how they work, what lenders look for, typical timelines, and situations where SBA financing may be a potential fit.",
    tag: "SBA",
    readTime: "12 min",
    href: "/sba-loans",
  },
  {
    slug: "invoice-factoring",
    title: "Invoice Factoring Explained: How Businesses Access Cash from Receivables",
    description:
      "Covers the mechanics of factoring, the difference between recourse and non-recourse arrangements, advance rates, fees, and industries where factoring is commonly used.",
    tag: "Factoring",
    readTime: "9 min",
    href: "/factoring",
  },
  {
    slug: "working-capital",
    title: "Working Capital Financing: Options Across the Spectrum",
    description:
      "From business lines of credit to revenue-based financing, this guide maps the working capital landscape by use case, repayment structure, and business profile.",
    tag: "Working Capital",
    readTime: "10 min",
    href: "/working-capital",
  },
  {
    slug: "equipment-financing",
    title: "Equipment Financing & Leasing: Structures, Terms & Decision Factors",
    description:
      "Explains equipment loans versus leases, how collateral affects pricing, residual value considerations, and which equipment types are commonly financed.",
    tag: "Equipment",
    readTime: "8 min",
    href: "/equipment-financing",
  },
  {
    slug: "business-acquisition",
    title: "Financing a Business Acquisition: SBA, Seller Notes & Private Debt",
    description:
      "Walks through the layered capital structures often used in acquisitions: SBA 7(a) as the senior tranche, seller note conventions, equity injection requirements, and DSCR thresholds.",
    tag: "Acquisition",
    readTime: "14 min",
    href: "/acquisition-financing",
  },
  {
    slug: "mca",
    title: "Merchant Cash Advances: How They Work and What to Know",
    description:
      "Explains daily and weekly holdback structures, factor rates versus APR, reconciliation rights, and situations where the cost profile may or may not align with a business's cash flow.",
    tag: "MCA",
    readTime: "7 min",
    href: "/merchant-cash-advance",
  },
  {
    slug: "private-lending",
    title: "Private & Hard-Money Business Lending: Speed, Collateral & Cost",
    description:
      "Covers asset-backed private credit, bridge financing, and hard-money structures — what collateral is typically required, how LTV drives pricing, and where these products fit in the capital stack.",
    tag: "Private Credit",
    readTime: "9 min",
    href: "/private-lending",
  },
  {
    slug: "commercial-real-estate",
    title: "Commercial Real Estate Loans: Owner-Occupied vs. Investment",
    description:
      "Distinguishes owner-occupied CRE financing (including SBA 504) from investment property loans, covering DSCR requirements, LTV limits, amortization, and typical lender types.",
    tag: "CRE",
    readTime: "11 min",
    href: "/commercial-real-estate-loans",
  },
];

const calculators = [
  { title: "Business Loan Calculator", href: "/calculators/business-loan-calculator" },
  { title: "SBA 7(a) Loan Calculator", href: "/calculators/sba-7a-loan-calculator" },
  { title: "SBA 504 Loan Calculator", href: "/calculators/sba-504-loan-calculator" },
  { title: "SBA Loan Calculator", href: "/calculators/sba-loan-calculator" },
  { title: "Equipment Financing Calculator", href: "/calculators/equipment-financing-calculator" },
  { title: "Invoice Factoring Calculator", href: "/calculators/invoice-factoring-calculator" },
  { title: "MCA APR Calculator", href: "/calculators/mca-apr-calculator" },
  { title: "DSCR Calculator", href: "/calculators/dscr-calculator" },
  { title: "Line of Credit Calculator", href: "/calculators/line-of-credit-calculator" },
  { title: "Working Capital Calculator", href: "/calculators/working-capital-calculator" },
  { title: "Loan Comparison Calculator", href: "/calculators/loan-comparison-calculator" },
  { title: "Business Loan Affordability Calculator", href: "/calculators/business-loan-affordability-calculator" },
  { title: "Business Acquisition Loan Calculator", href: "/calculators/business-acquisition-loan-calculator" },
  { title: "Business Debt Refinance Calculator", href: "/calculators/business-debt-refinance-calculator" },
];

const tagColors: Record<string, string> = {
  SBA: "text-[#0f0f0f] bg-[#0f0f0f]/10 border-[#0f0f0f]/20",
  Factoring: "text-[#60a5fa] bg-[#60a5fa]/10 border-[#60a5fa]/20",
  "Working Capital": "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/20",
  Equipment: "text-[#fb923c] bg-[#fb923c]/10 border-[#fb923c]/20",
  Acquisition: "text-[#34d399] bg-[#34d399]/10 border-[#34d399]/20",
  MCA: "text-[#f472b6] bg-[#f472b6]/10 border-[#f472b6]/20",
  "Private Credit": "text-[#94a3b8] bg-[#94a3b8]/10 border-[#94a3b8]/20",
  CRE: "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/20",
};

const faqItems = [
  {
    q: "Does ZEO.co provide loans or make lending decisions?",
    a: "No. ZEO.co is not a bank, lender, or loan broker. We provide educational content, tools, and a guided intake process that may connect businesses with third-party financing providers. All financing decisions, terms, and approvals are made by those providers, subject to their own underwriting criteria.",
  },
  {
    q: "Are calculator results binding or guaranteed?",
    a: "Calculator outputs are estimates based on the inputs you provide. They are not offers, commitments, or guarantees of any financing terms. Actual rates, fees, and terms depend on lender underwriting, business financials, collateral, credit history, and other factors.",
  },
  {
    q: "How do I know which financing type is right for my business?",
    a: "There is no universal answer. The best potential fit depends on your business's revenue model, cash flow timing, collateral, credit profile, use of proceeds, and urgency. Our guides are designed to help you understand the tradeoffs across product types before you apply.",
  },
  {
    q: "What information will I need when I apply?",
    a: "Requirements vary by product and lender. Generally, lenders review business tax returns, bank statements, profit and loss statements, and personal financial information for ownership with significant equity. SBA and acquisition financing typically require more documentation than shorter-term working capital products.",
  },
  {
    q: "What does 'subject to underwriting' mean?",
    a: "It means that any financing offer is conditional on the lender's review of your financials, credit, collateral, and other factors. Preliminary estimates or quotes are not final offers until underwriting is complete and the lender has issued a formal commitment.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Business Financing Resources",
    description:
      "Guides, calculators, and educational content covering SBA loans, working capital, invoice factoring, equipment financing, acquisition loans, and more.",
    url: "https://zeo.co/resources",
    publisher: {
      "@type": "Organization",
      name: "ZEO.co",
      url: "https://zeo.co",
    },
  };

  return (
    <>
      <JsonLd data={collectionSchema} />

      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Knowledge Base"
        title="Business Financing Resources"
        subtitle="Plain-language guides, interactive calculators, and reference material covering the full spectrum of commercial financing — written to help business owners understand the options before they apply."
      />

      {/* ── Metrics strip ───────────────────────────────────────────────────── */}
      <section className="border-b border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard label="Financing Guides" value="8" note="In-depth product explanations" />
            <MetricCard label="Calculators" value="14" note="Free, no login required" />
            <MetricCard label="Financing Types Covered" value="12+" note="From SBA to private credit" />
            <MetricCard label="Avg. Read Time" value="10" unit="min" note="Per guide" highlight />
          </div>
        </div>
      </section>

      {/* ── Guides grid ─────────────────────────────────────────────────────── */}
      <section className="bg-[#ffffff] py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">
                <BookIcon /> <span className="inline-block align-middle ml-1">Financing Guides</span>
              </p>
              <h2 className="text-xl font-semibold text-[#0f0f0f]">8 Product Guides</h2>
              <p className="text-sm text-[#a3a3a3] mt-1 max-w-lg">
                Each guide covers how the product works, what lenders typically evaluate, and situations where it may or may not be a potential fit for your business.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.href}
                className="group flex flex-col rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5 transition-all hover:border-[#0f0f0f]/40 hover:bg-[#0f1a10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f0f0f]/60"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex text-[0.6rem] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded-md border ${tagColors[guide.tag] ?? "text-[#a3a3a3] bg-[#e5e5e5] border-[#e5e5e5]"}`}
                  >
                    {guide.tag}
                  </span>
                  <span className="text-[0.65rem] text-[#a3a3a3] tabular-nums whitespace-nowrap">{guide.readTime} read</span>
                </div>
                <h3 className="text-[0.875rem] font-semibold text-[#0f0f0f] leading-snug mb-2 group-hover:text-white transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed flex-1">
                  {guide.description}
                </p>
                <div className="flex items-center gap-1 mt-4 text-xs font-medium text-[#0f0f0f] group-hover:text-[#333333] transition-colors">
                  Read guide <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calculators section ──────────────────────────────────────────────── */}
      <section className="bg-[#ffffff] py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">
              <CalcIcon /> <span className="inline-block align-middle ml-1">Calculators & Tools</span>
            </p>
            <h2 className="text-xl font-semibold text-[#0f0f0f]">14 Free Calculators</h2>
            <p className="text-sm text-[#a3a3a3] mt-1 max-w-xl">
              Estimate payments, compare products, assess debt service coverage, and model acquisition financing — all in-browser, no account required. Results are estimates only and not offers or guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-6">
            {calculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="group flex items-center gap-3 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3 text-sm text-[#737373] transition-all hover:border-[#e5e5e5] hover:bg-[#161a15] hover:text-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f0f0f]/60"
              >
                <span className="flex-shrink-0 text-[#0f0f0f] opacity-60 group-hover:opacity-100 transition-opacity">
                  <ChevronRight />
                </span>
                <span className="leading-snug">{calc.title}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/calculators"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#0f0f0f] hover:text-[#333333] transition-colors"
          >
            View all calculators <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ── Blog section ────────────────────────────────────────────────────── */}
      <section className="bg-[#ffffff] py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-[#e5e5e5] bg-[#ffffff] text-[#0f0f0f]">
              <BlogIcon />
            </div>
            <div className="flex-1">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-1">Blog</p>
              <h2 className="text-lg font-semibold text-[#0f0f0f] mb-1">ZEO.co Financing Blog</h2>
              <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-2xl">
                In-depth articles on financing trends, lender criteria, deal structures, and market conditions affecting business owners seeking commercial capital. Updated regularly with practical content — not product pitches.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-[#e5e5e5] text-sm font-medium text-[#737373] hover:text-[#333333] hover:border-[#0f0f0f]/40 transition-all whitespace-nowrap"
              >
                Browse articles <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── How ZEO Works ───────────────────────────────────────────────────── */}
      <section className="bg-[#ffffff] py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">About ZEO</p>
            <h2 className="text-xl font-semibold text-[#0f0f0f] max-w-xl">
              What ZEO.co Is — and What It Is Not
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <p className="text-sm text-[#737373] leading-relaxed">
                ZEO.co is a commercial financing education and referral platform. We are not a bank, lender, or loan broker. We do not make credit decisions, set interest rates, or guarantee approval for any financing product. Every financing offer you may receive through ZEO comes from a third-party provider with its own underwriting standards.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                Our guides, calculators, and content are designed to help business owners understand the financing landscape before they speak with a lender. Understanding what lenders look for — DSCR thresholds, time-in-business requirements, collateral expectations, documentation — can help you enter the process more prepared and better positioned to evaluate any offers you may receive.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                Our intake process asks about your business, use of proceeds, and financial profile so we can surface the financing types that may be a potential fit — rather than sending every business to the same product. Businesses that complete intake do not receive unsolicited calls from multiple lenders; ZEO reviews the profile first and connects you only with relevant providers.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                Financing is subject to underwriting, lender approval, and the terms of each provider's specific program. Nothing on this site constitutes a commitment to lend, an offer of financing, or a guarantee of any rate or term. Use the guides and calculators to inform your thinking, then apply to understand what you may actually qualify for.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { label: "ZEO is", items: ["A financing education platform", "A guided intake and matching resource", "A directory of financing types and products", "A calculator and estimation toolkit"] },
                { label: "ZEO is not", items: ["A bank or lender", "A loan broker or licensed advisor", "An SBA-authorized lender", "A guarantor of any financing terms"] },
              ].map((col) => (
                <div key={col.label} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">{col.label}</p>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#737373]">
                        <span className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full border border-[#e5e5e5] bg-[#ffffff] flex items-center justify-center">
                          <span className={`w-1.5 h-1.5 rounded-full ${col.label === "ZEO is" ? "bg-[#0f0f0f]" : "bg-[#a3a3a3]"}`} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <FAQ
        title="Common Questions About ZEO's Resources"
        items={faqItems}
      />

      {/* ── Disclaimer ──────────────────────────────────────────────────────── */}
      <section className="bg-[#ffffff] pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to evaluate your financing options?"
        subtext="Submit a brief intake and ZEO will review which financing types may be a potential fit — subject to underwriting by third-party providers."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Explore Financing Types"
        secondaryHref="/financing"
      />
    </>
  );
}

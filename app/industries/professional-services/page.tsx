import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Professional Services Financing | ZEO.co",
  description:
    "Financing options for law firms, consulting practices, accounting firms, and other professional services businesses. Explore SBA loans, working capital, equipment financing, and more — subject to underwriting by third-party lenders.",
  path: "/industries/professional-services",
  keywords: [
    "professional services financing",
    "law firm financing",
    "consulting firm business loan",
    "accounting firm working capital",
    "professional services SBA loan",
    "small business loan professional services",
    "business line of credit professional services",
    "equipment financing professional services",
    "professional services cash flow",
    "billing cycle financing",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="6" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6V4.5C6 3.67 6.67 3 7.5 3h3C11.33 3 12 3.67 12 4.5V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 10h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 5.5V9l2.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 13l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6h2.5v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2v14M12.5 5.5C12.5 4.12 10.88 3 9 3S5.5 4.12 5.5 5.5C5.5 7.5 9 8 9 8s3.5.5 3.5 2.5C12.5 11.88 10.88 13 9 13s-3.5-1.12-3.5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 2v1.5M9 14.5V16M16 9h-1.5M3.5 9H2M13.95 4.05l-1.06 1.06M5.11 12.89l-1.06 1.06M13.95 13.95l-1.06-1.06M5.11 5.11L4.05 4.05"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 15c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="13" cy="6" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M16 15c0-2.21-1.34-4-3-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="7" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 16v-4h6v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 7V4.5C5 3.12 6.79 2 9 2s4 1.12 4 2.5V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Industries", href: "/industries" },
  { label: "Professional Services Financing" },
];

const typicalMetrics = [
  {
    label: "SBA 7(a) Max",
    value: "$5M",
    note: "For acquisitions, working capital, and equipment",
  },
  {
    label: "Credit Score Threshold",
    value: "650+",
    note: "Typical minimum for SBA and bank products",
    highlight: true,
  },
  {
    label: "Working Capital Terms",
    value: "1–5 yr",
    note: "Varies by lender, revenue profile, and product type",
  },
  {
    label: "Time in Business",
    value: "2+ yr",
    note: "Common requirement; some lenders consider 12 months",
  },
];

const comparisonColumns = ["SBA 7(a)", "Business Line of Credit", "Working Capital Loan"];
const comparisonRows = [
  {
    feature: "Typical Use",
    "SBA 7(a)": "Practice acquisition, build-out, long-term capital",
    "Business Line of Credit": "Payroll gaps, client receivables, short-term needs",
    "Working Capital Loan": "Operating expenses, hiring, marketing",
  },
  {
    feature: "Repayment Terms",
    "SBA 7(a)": "Up to 10 yr (working capital)",
    "Business Line of Credit": "Revolving; due on demand or annual renewal",
    "Working Capital Loan": "3 months–5 years",
  },
  {
    feature: "Collateral",
    "SBA 7(a)": "Often required; personal guarantee required",
    "Business Line of Credit": "Varies; often unsecured for smaller amounts",
    "Working Capital Loan": "Varies by lender and loan size",
  },
  {
    feature: "Approval Timeline",
    "SBA 7(a)": "Weeks to months",
    "Business Line of Credit": "Days to weeks",
    "Working Capital Loan": "Days to weeks",
  },
  {
    feature: "Documentation",
    "SBA 7(a)": "Extensive; 2–3 years tax returns required",
    "Business Line of Credit": "Moderate; bank statements, revenue history",
    "Working Capital Loan": "Moderate; revenue and cash flow focus",
  },
];

const financingPaths = [
  {
    icon: <BriefcaseIcon />,
    title: "SBA 7(a) Loans",
    description:
      "Government-backed financing that may suit practice acquisitions, office build-outs, and longer-term capital needs. Longer terms and potentially lower down payments than conventional alternatives — subject to SBA eligibility and lender underwriting.",
    tags: ["Acquisitions", "Long-term", "Lower Down Payment"],
    href: "/sba-loans",
    highlight: true,
  },
  {
    icon: <TrendingIcon />,
    title: "Business Line of Credit",
    description:
      "A revolving facility that lets you draw and repay as needed — well-suited to covering payroll during slow billing months or bridging gaps between client invoices and payments received.",
    tags: ["Revolving", "Flexible Draw", "Short-term"],
    href: "/business-line-of-credit",
  },
  {
    icon: <DollarIcon />,
    title: "Working Capital Loans",
    description:
      "Term loans focused on operational cash needs — hiring staff, expanding service capacity, or handling uneven revenue months. Approval timelines tend to be faster than SBA programs.",
    tags: ["Operations", "Hiring", "Cash Flow"],
    href: "/working-capital",
  },
  {
    icon: <GearIcon />,
    title: "Equipment Financing",
    description:
      "Dedicated financing for software, hardware, medical devices, diagnostic equipment, or office technology. The financed asset typically serves as collateral, which can simplify approval for newer firms.",
    tags: ["Technology", "Medical Devices", "Office Build-out"],
    href: "/equipment-financing",
  },
];

const faqItems = [
  {
    q: "Do professional services firms qualify for SBA loans?",
    a: "Many professional services businesses — including law firms, accounting practices, consulting firms, and healthcare practices — may be eligible for SBA 7(a) loans, subject to SBA program rules and individual lender underwriting. The SBA excludes certain professional services businesses engaged in lending, speculation, or specific regulated activities, so eligibility should be confirmed for your specific practice type. Most participating lenders also look for at least two years of operating history, documented revenue, and personal credit of 650 or higher for all 20%-plus owners.",
  },
  {
    q: "How do lenders evaluate cash flow for professional services firms?",
    a: "Professional services lenders typically look at net income from business tax returns, owner distributions, and the business's Debt Service Coverage Ratio (DSCR) — commonly a minimum of 1.25x. Because service businesses often have variable monthly revenue tied to client billing cycles, retainer arrangements, project milestones, or seasonal demand, lenders may average revenue over 12–24 months rather than rely on a single peak period. Consistent collections — not just billed amounts — matter most. Businesses with documented retainer revenue or multi-year client contracts may be viewed more favorably.",
  },
  {
    q: "What are the most common financing needs for professional services businesses?",
    a: "The most frequently cited financing needs in professional services include: bridging cash flow gaps caused by slow-paying clients or extended billing cycles; funding the acquisition of an existing practice or book of business; hiring and onboarding key staff ahead of revenue materializing; investing in technology platforms, practice management software, or specialized equipment; and building out or renovating office space. Each use case maps differently to available financing products — working capital and lines of credit suit shorter-term gaps, while SBA loans and term loans are better positioned for acquisitions or capital projects.",
  },
  {
    q: "Can a solo practitioner or small firm access business financing?",
    a: "Sole proprietors and small firms with only a few employees may qualify for financing, though the range of available products and loan sizes is often narrower than for larger practices. Key factors include documented personal income and business revenue, personal credit history, time in practice, and the business structure (sole proprietor, LLC, S-Corp, partnership). Lenders will often evaluate the owner's personal financial picture closely for smaller professional services operations. Products like business lines of credit and working capital loans may be more accessible than large SBA loans for early-stage solo practices.",
  },
  {
    q: "Are accounts receivable from client invoices ever used to access financing?",
    a: "In some cases, yes. Invoice financing and accounts receivable-based credit facilities allow businesses to borrow against outstanding client invoices rather than waiting for payment. This can be useful for firms with long payment terms — particularly in government contracting, healthcare billing, or enterprise consulting. Factoring (selling receivables outright) is a separate but related product. Both are subject to underwriting by third-party providers and involve fees and contractual terms that should be reviewed carefully. Whether either is available to your firm depends on invoice quality, client creditworthiness, and lender appetite.",
  },
];

// ── Page Component ─────────────────────────────────────────────────────────────

export default function ProfessionalServicesPage() {
  return (
    <main className="bg-[#0a0d0b] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industry"
        title="Professional Services Financing"
        subtitle="Law firms, consulting practices, accounting firms, and other professional services businesses face distinct cash flow dynamics — long billing cycles, project-based revenue, and front-loaded staffing costs. Explore financing options that may be worth evaluating, subject to underwriting by third-party lenders."
      />

      {/* 2 — Key financing challenges */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Industry Challenges</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Why professional services firms seek outside capital</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              Professional services businesses are often profitable on paper but cash-constrained in practice. Several structural characteristics of service-based revenue models create recurring financing needs — independent of business quality or growth trajectory.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <ClockIcon />,
                heading: "Extended billing and collection cycles",
                body: "Net-30, net-60, or longer payment terms are common in consulting, legal, and B2B professional services. Revenue is earned before it is collected, creating a persistent gap between work performed and cash in the bank. This gap widens as a firm grows and takes on larger clients or longer engagements.",
              },
              {
                icon: <PeopleIcon />,
                heading: "Headcount costs precede revenue",
                body: "Hiring a new associate, consultant, or specialist involves immediate salary and benefits obligations — often months before the new hire generates billable revenue at full capacity. Firms investing in growth frequently carry a payroll cost that temporarily outpaces incoming cash flow.",
              },
              {
                icon: <BriefcaseIcon />,
                heading: "Practice acquisitions and book-of-business purchases",
                body: "Acquiring an existing client book, merging with another practice, or buying out a retiring partner requires upfront capital that is rarely available from operating cash flow alone. These transitions are common in legal, accounting, and advisory sectors but require structured financing.",
              },
              {
                icon: <GearIcon />,
                heading: "Technology and infrastructure investment",
                body: "Practice management software, specialized legal or financial platforms, cybersecurity infrastructure, and office build-outs represent meaningful capital outlays. Modern professional services firms often require significant tech investment to remain competitive — costs that may not return value immediately.",
              },
              {
                icon: <TrendingIcon />,
                heading: "Seasonal or project-driven revenue variability",
                body: "Tax practices face Q1 surges. Litigation firms experience uneven cash flow tied to case timelines. Project consultants may see revenue concentrated around contract deliverables. These patterns create months where expenses outpace collections even for healthy firms.",
              },
              {
                icon: <BuildingIcon />,
                heading: "Office lease obligations and build-out costs",
                body: "Professional services firms often maintain client-facing office space with associated long-term lease obligations. Moving, expanding, or building out a new office involves upfront tenant improvement costs that can exceed what operating cash flow can absorb in a short window.",
              },
            ].map((item) => (
              <div key={item.heading} className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a0d0b] border border-[#1e2620] text-[#22c55e]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#eef2ec] mb-1.5">{item.heading}</p>
                    <p className="text-sm text-[#6b7e69] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Financing products */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Financing Options</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Products that may be relevant for professional services firms</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              No single product fits every situation. The right financing path depends on your use case, timeline, revenue profile, and credit position. The options below represent the most commonly evaluated structures for professional services businesses — each subject to underwriting by third-party providers.
            </p>
          </div>

          {/* Narrative intro before cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="text-sm text-[#9aaa98] leading-relaxed space-y-4">
              <p>
                For firms with longer time horizons — acquiring a practice, building out permanent office space, or funding a multi-year growth plan — SBA 7(a) loans may offer favorable repayment terms compared to shorter-duration alternatives. The tradeoff is a more extensive documentation and underwriting process that can span several weeks to months.
              </p>
              <p>
                For firms managing shorter-term cash flow gaps tied to billing cycles, seasonal slowdowns, or near-term hiring needs, a business line of credit or working capital loan may be a more practical fit. These products typically move faster and require less documentation, though terms and costs vary considerably by lender.
              </p>
            </div>
            <div className="text-sm text-[#9aaa98] leading-relaxed space-y-4">
              <p>
                Equipment financing — covering everything from diagnostic devices in a medical practice to enterprise software licenses or specialized hardware — often uses the financed asset as collateral. This can make approval more accessible for firms that might not qualify for unsecured credit at comparable amounts.
              </p>
              <p>
                Firms with significant outstanding client receivables may also find invoice-based financing worth evaluating, particularly if clients carry strong credit but pay on extended terms. This approach allows the business to access cash tied up in unpaid invoices without waiting on collections. All receivables-based products are subject to underwriting by third-party providers.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {financingPaths.map((card) => (
              <FinancingPathCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                tags={card.tags}
                href={card.href}
                highlight={card.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Typical requirements */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Lender Requirements</p>
            <h2 className="text-2xl font-semibold text-white mb-3">What lenders typically look for in professional services</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              Requirements vary by product, lender, loan size, and the individual business. The following reflects what many lenders evaluate when underwriting professional services financing. Meeting these thresholds does not guarantee approval — all financing is subject to underwriting, and lender criteria differ.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {typicalMetrics.map((m) => (
              <MetricCard key={m.label} label={m.label} value={m.value} note={m.note} highlight={m.highlight} />
            ))}
          </div>

          {/* Requirements detail */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                label: "Revenue Documentation",
                detail: "Most lenders require two to three years of business and personal tax returns, along with year-to-date profit and loss statements. For professional services firms, lenders pay close attention to owner compensation, distributions, and add-backs that affect reported income.",
              },
              {
                label: "Debt Service Coverage",
                detail: "Lenders typically look for a DSCR of 1.25x or higher — meaning the business generates at least $1.25 in net income for every $1.00 of annual debt obligation including the new financing. Firms with high owner distributions relative to retained earnings should be prepared to address this in underwriting.",
              },
              {
                label: "Personal Credit History",
                detail: "For most small professional services firms, the owner's personal credit profile is a primary underwriting input. Scores below 650 materially narrow the range of available products. Derogatory items, recent judgments, or outstanding tax liens require explanation and may affect eligibility.",
              },
              {
                label: "Business Structure and Standing",
                detail: "Lenders will verify that the business entity is in good standing with the state, licensed to practice in its jurisdiction, and has no outstanding regulatory actions. Professional service businesses with active malpractice claims or licensing disputes may face additional scrutiny.",
              },
              {
                label: "Client Concentration",
                detail: "Underwriters for professional services firms often assess client concentration risk. A firm deriving 60–80% of revenue from a single client presents a different risk profile than one with a diversified client base. Documented multi-year retainer agreements can partially offset this concern.",
              },
              {
                label: "Collateral and Personal Guarantee",
                detail: "Many lenders — particularly for SBA loans — will require a personal guarantee from all owners with 20% or greater equity. For larger loan amounts, business assets and personal real estate may serve as collateral. Smaller working capital loans and lines of credit may be available on an unsecured basis depending on revenue and creditworthiness.",
              },
            ].map((req) => (
              <div key={req.label} className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#22c55e] mb-2">{req.label}</p>
                <p className="text-sm text-[#9aaa98] leading-relaxed">{req.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Product Comparison</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Common financing structures side by side</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              A high-level comparison of the most commonly evaluated products for professional services firms. All terms are illustrative — actual terms depend on lender, borrower profile, and market conditions at time of application.
            </p>
          </div>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
          <p className="text-xs text-[#6b7e69] mt-4">
            Informational only. Actual terms, eligibility, and availability are set by individual third-party lenders and subject to change. Not an offer or commitment to lend.
          </p>
        </div>
      </section>

      {/* 5 — FAQ */}
      <FAQ
        items={faqItems}
        title="Professional Services Financing FAQs"
      />

      {/* 6 — CTA */}
      <CTASection
        headline="Explore financing options for your practice"
        subtext="Submit a brief intake and ZEO will review potential financing paths for your professional services business. All financing is subject to underwriting and approval by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing Options"
        secondaryHref="/financing"
      />

      {/* 7 — Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="general" />
      </div>

    </main>
  );
}

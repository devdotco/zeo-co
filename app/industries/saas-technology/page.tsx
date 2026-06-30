import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import ComparisonTable from "@/components/ui/ComparisonTable";

export const metadata: Metadata = buildMetadata({
  title: "SaaS and Technology Financing | ZEO.co",
  description:
    "Explore financing paths that may fit SaaS companies, software studios, and technology businesses — from SBA loans to revenue-based financing and working capital lines.",
  path: "/industries/saas-technology",
  keywords: [
    "SaaS financing",
    "software company loans",
    "technology business financing",
    "revenue-based financing SaaS",
    "SBA loans for tech companies",
    "working capital for software companies",
    "ARR-backed financing",
    "startup equipment financing",
  ],
});

const breadcrumbs = [
  { label: "Industries", href: "/industries" },
  { label: "SaaS and Technology Financing" },
];

const challenges = [
  {
    heading: "Revenue is recurring but capital needs are upfront",
    body: "SaaS and software businesses often collect monthly or annual subscription fees while bearing significant upfront costs in engineering, sales infrastructure, and customer acquisition. That mismatch between cash receipt timing and spending obligations can create structural working capital strain even in a growing business.",
  },
  {
    heading: "Traditional lenders struggle to value intangible assets",
    body: "Software, proprietary code, customer contracts, and intellectual property do not show up on a balance sheet the way equipment or real estate does. Lenders underwriting from a collateral-first perspective may undervalue the business or decline entirely, leaving technology companies underserved by conventional credit products.",
  },
  {
    heading: "High customer acquisition cost before payback",
    body: "A SaaS company may spend six to eighteen months of subscription revenue acquiring a single customer before reaching payback. Scaling sales and marketing ahead of collections creates a persistent need for growth capital that outpaces what retained earnings can supply.",
  },
  {
    heading: "Infrastructure and tooling scale with headcount",
    body: "Cloud infrastructure, developer tooling, cybersecurity platforms, and SaaS vendor costs grow alongside the team. Technology businesses rarely carry heavy equipment, but their recurring software and infrastructure spend can be substantial and is not easily deferred.",
  },
];

const products = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 5V4a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 10h2l1 2 2-4 1 2h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "SBA 7(a) Loans",
    description:
      "SBA 7(a) financing may be a potential fit for software companies with demonstrated revenue history looking to fund team expansion, leasehold improvements, or debt refinancing. Loan amounts up to $5 million with longer repayment windows can reduce monthly cash flow pressure. Subject to SBA eligibility, lender underwriting, and approval.",
    tags: ["Team expansion", "Office build-out", "Refinancing"],
    href: "/financing/sba-loans",
    highlight: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 14l3-3 3 3 3-5 3 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Revenue-Based Financing",
    description:
      "Some lenders offer capital against a percentage of future revenue, structured to align repayment with business performance. For SaaS companies with predictable monthly recurring revenue, this may be a fit — though effective costs vary widely and all terms are subject to third-party lender underwriting.",
    tags: ["ARR-backed", "Flexible repayment", "Growth capital"],
    href: "/financing/working-capital",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 8h14M8 8v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Equipment and Hardware Financing",
    description:
      "Technology businesses that maintain on-premise server infrastructure, specialized workstations, or network hardware may use equipment financing to spread those capital costs over time. The asset typically serves as collateral, which may make approval more accessible than unsecured credit. Subject to lender review and approval.",
    tags: ["Servers", "Workstations", "Network hardware"],
    href: "/financing/equipment",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Working Capital Lines",
    description:
      "Revolving credit facilities may help bridge the gap between signing enterprise contracts and collecting payment, fund a hiring sprint ahead of a product launch, or smooth out quarterly seasonality in subscription renewals. Availability and terms are subject to lender underwriting and creditworthiness assessment.",
    tags: ["Cash flow", "Payroll gaps", "Contract-to-cash lag"],
    href: "/financing/working-capital",
  },
];

const comparisonRows = [
  {
    feature: "Typical loan amount",
    "SBA 7(a)": "Up to $5M",
    "Revenue-Based": "Varies by ARR",
    "Equipment Financing": "$10K – $2M+",
    "Working Capital Line": "$25K – $500K",
  },
  {
    feature: "Collateral",
    "SBA 7(a)": "Business assets / PG",
    "Revenue-Based": "Future revenue",
    "Equipment Financing": "Equipment itself",
    "Working Capital Line": "Varies by lender",
  },
  {
    feature: "Best use",
    "SBA 7(a)": "Expansion, refinancing",
    "Revenue-Based": "Sales and marketing growth",
    "Equipment Financing": "Hardware and infrastructure",
    "Working Capital Line": "Payroll, contract-to-cash",
  },
  {
    feature: "Time to funding",
    "SBA 7(a)": "30 – 90 days",
    "Revenue-Based": "5 – 15 days",
    "Equipment Financing": "3 – 10 days",
    "Working Capital Line": "5 – 21 days",
  },
  {
    feature: "Credit sensitivity",
    "SBA 7(a)": "Higher",
    "Revenue-Based": "Revenue-focused",
    "Equipment Financing": "Moderate",
    "Working Capital Line": "Moderate–High",
  },
];

const requirements = [
  {
    label: "Time in operation",
    detail:
      "Most lenders prefer at least 2 years of operating history. Earlier-stage software companies may qualify with certain lenders if they can demonstrate strong recurring revenue growth, low churn, and a clear path to profitability — though options narrow and terms tend to be less favorable.",
  },
  {
    label: "Annual recurring revenue",
    detail:
      "For SaaS businesses, lenders oriented toward technology often focus on ARR as a key underwriting metric alongside traditional financial statements. Being able to document MRR, growth rate, and net revenue retention strengthens the profile.",
  },
  {
    label: "Revenue documentation",
    detail:
      "Lenders typically request 2 to 3 years of business tax returns, year-to-date profit and loss statements, and bank statements. SaaS companies may also be asked to provide subscription billing records or payment processor exports to substantiate recurring revenue.",
  },
  {
    label: "Personal credit",
    detail:
      "Owner FICO scores factor into underwriting for SBA loans and most working capital lines. Some revenue-based financing lenders place more weight on business revenue metrics, though personal credit still plays a role in most products.",
  },
  {
    label: "Churn and customer concentration",
    detail:
      "High customer churn or heavy revenue concentration in a small number of accounts can raise lender concern about revenue stability. Documenting strong net revenue retention and a diversified customer base supports the financing profile.",
  },
  {
    label: "Debt service coverage",
    detail:
      "Lenders evaluate whether business cash flow can service proposed debt obligations. Technology companies that are pre-profitability may face more limited options; those generating consistent operating cash flow are generally better positioned across most financing products.",
  },
];

const faqItems = [
  {
    q: "Can a pre-revenue or early-stage SaaS company qualify for business financing?",
    a: "Traditional lenders — including SBA-approved lenders — typically require demonstrated revenue and operating history before underwriting a loan. Pre-revenue or very early-stage software companies are generally not strong candidates for conventional financing. Some specialty lenders focus on growth-stage SaaS, but their products often carry higher effective costs and more restrictive terms. If your company is still building initial revenue, explore whether equity funding, grants, or accelerator programs may be a better fit before pursuing debt.",
  },
  {
    q: "How does revenue-based financing work for SaaS companies?",
    a: "Revenue-based financing (RBF) provides a lump sum of capital in exchange for a fixed percentage of future gross revenue until a specified repayment amount is reached. For SaaS companies with predictable MRR, repayment scales down during low-revenue months and up when revenue is stronger. Effective annual costs vary significantly across providers — always calculate the total repayment amount and effective cost before accepting any offer, and compare it against other available options. All terms are set by third-party providers and subject to underwriting.",
  },
  {
    q: "Does ZEO.co work with venture-backed technology companies?",
    a: "ZEO.co is not a lender — it is an educational and referral platform connecting businesses with third-party financing providers. Some lenders in the technology space do work with VC-backed companies, though venture backing can sometimes complicate underwriting if the business is not yet cash-flow positive. Lenders will typically review the full financial picture including existing debt obligations, investor agreements, and any covenants that might affect their position.",
  },
  {
    q: "What financial documents should a SaaS company prepare before applying?",
    a: "At minimum, prepare 2 to 3 years of business tax returns, year-to-date profit and loss statements, recent business bank statements, and a balance sheet. For revenue-based financing, export your billing or payment processor history to substantiate ARR figures. If you have enterprise contracts, lenders may want to see executed agreements. Preparing these ahead of time shortens the underwriting timeline and avoids delays mid-process.",
  },
  {
    q: "Can a software company finance the purchase of another company or product?",
    a: "Acquisition financing for technology companies — including software acqui-hires, product acquisitions, and full company buyouts — is possible through SBA 7(a) loans for eligible transactions, as well as through certain private credit structures. The feasibility depends on the target's revenue, the buyer's financial profile, available collateral, and deal structure. SBA 7(a) financing has been used for SaaS acquisitions, but underwriting criteria and eligibility vary. ZEO.co does not provide acquisition advisory services.",
  },
];

export default function SaaSTechnologyFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industry"
        title="SaaS and Technology Financing"
        subtitle="Software companies, SaaS platforms, and technology service businesses operate on fundamentally different financial dynamics than asset-heavy industries. Explore financing structures third-party lenders may offer to technology operators — all subject to underwriting, eligibility, and approval."
      />

      {/* Key financing challenges */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Financing Challenges
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2 max-w-2xl">
            Why technology financing is distinct
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-10 leading-relaxed">
            The economics of software and SaaS businesses — recurring revenue, intangible assets, high upfront investment — create cash flow patterns that general-purpose lenders may not be designed to evaluate.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {challenges.map((item) => (
              <div
                key={item.heading}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] mt-2" aria-hidden="true" />
                  <h3 className="font-semibold text-[#0f0f0f] text-[0.9375rem] leading-snug">
                    {item.heading}
                  </h3>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed pl-4">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing products */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Financing Paths
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2 max-w-2xl">
            Products that may be a fit for SaaS and technology
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-10 leading-relaxed">
            Different technology business models and growth stages call for different capital structures. These represent paths that third-party lenders may offer — all subject to individual underwriting, eligibility, and approval.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <FinancingPathCard
                key={product.title}
                icon={product.icon}
                title={product.title}
                description={product.description}
                tags={product.tags}
                href={product.href}
                highlight={product.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Product Comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Financing structures at a glance
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-8 leading-relaxed">
            General ranges only. Actual terms are set by third-party lenders and subject to underwriting.
          </p>
          <ComparisonTable
            columns={["SBA 7(a)", "Revenue-Based", "Equipment Financing", "Working Capital Line"]}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Industry Context
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Scale of the technology financing landscape
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-8 leading-relaxed">
            Reference figures illustrating common benchmarks in SaaS and technology financing. Individual business performance and eligibility vary.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              label="Typical SaaS CAC payback"
              value="6–18"
              unit="months"
              note="Time before a new customer's subscription revenue recovers acquisition cost. Varies by segment and ACV."
            />
            <MetricCard
              label="SBA 7(a) max loan"
              value="$5M"
              note="For eligible businesses; subject to SBA program rules and lender approval."
              highlight
            />
            <MetricCard
              label="Typical ARR multiple (RBF)"
              value="15–40%"
              note="Revenue-based lenders often advance a fraction of ARR. Effective costs vary — review total repayment carefully."
            />
            <MetricCard
              label="Contract-to-cash lag (enterprise)"
              value="30–90"
              unit="days"
              note="Time between contract signing and first payment receipt for annual or multi-year enterprise SaaS deals."
            />
          </div>
        </div>
      </section>

      {/* Lender requirements */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Lender Requirements
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              What lenders typically look for in technology businesses
            </h2>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              These are representative criteria drawn from common lender practices in the technology sector. Specific requirements vary by product, lender, loan size, and individual business profile. Preparing documentation ahead of any application can significantly reduce the time to a financing decision.
            </p>
            <dl className="space-y-0 divide-y divide-[#e5e5e5] border border-[#e5e5e5] rounded-xl overflow-hidden">
              {requirements.map((req) => (
                <div key={req.label} className="flex flex-col sm:flex-row sm:gap-6 px-5 py-4 bg-[#f5f5f5]">
                  <dt className="text-sm font-semibold text-[#0f0f0f] sm:w-52 shrink-0 mb-1 sm:mb-0">
                    {req.label}
                  </dt>
                  <dd className="text-sm text-[#a3a3a3] leading-relaxed">{req.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="SaaS and Technology Financing — Common Questions"
      />

      {/* CTA */}
      <CTASection
        headline="Explore financing options for your technology business"
        subtext="Submit a brief intake and ZEO will identify financing paths that may be a potential fit for your SaaS or technology company — subject to underwriting and third-party approval."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Browse All Financing"
        secondaryHref="/financing"
      />

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

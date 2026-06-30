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
  title: "Private Credit Guide | ZEO.co",
  description:
    "A comprehensive guide to private credit for business owners: how private lenders differ from banks, what deal structures look like, typical terms, underwriting criteria, and which businesses may qualify — subject to third-party underwriting and approval.",
  path: "/resources/private-credit-guide",
  keywords: [
    "private credit",
    "private lending",
    "direct lending",
    "private debt",
    "non-bank lending",
    "mezzanine financing",
    "unitranche loan",
    "subordinated debt",
    "business financing",
    "middle market lending",
    "private credit funds",
    "alternative lending",
  ],
});

// ── Icons ──────────────────────────────────────────────────────────────────────

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="5" width="14" height="11" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 16V9h6v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 5V3h8v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 2v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L16 5.5L9 9L2 5.5L9 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M2 9L9 12.5L16 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12.5L9 16L16 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 13l4-4 3 3 5-6 2 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6h2v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2L3 5v4.5C3 13.09 5.64 15.9 9 17c3.36-1.1 6-3.91 6-7.5V5L9 2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M6.5 9l1.5 1.5L11.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Capital Stack Step ─────────────────────────────────────────────────────────

function StackLayer({
  label,
  detail,
  position,
  accent,
}: {
  label: string;
  detail: string;
  position: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 rounded-lg border px-4 py-3 ${
        accent
          ? "border-[#0f0f0f]/30 bg-[#f5f5f5]"
          : "border-[#e5e5e5] bg-[#f5f5f5]"
      }`}
    >
      <span
        className={`flex-shrink-0 text-[0.6rem] font-semibold uppercase tracking-widest mt-0.5 w-16 ${
          accent ? "text-[#0f0f0f]" : "text-[#a3a3a3]"
        }`}
      >
        {position}
      </span>
      <div>
        <p className={`text-sm font-semibold mb-0.5 ${accent ? "text-[#0f0f0f]" : "text-[#0f0f0f]"}`}>
          {label}
        </p>
        <p className="text-xs text-[#a3a3a3] leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

// ── Comparison data ────────────────────────────────────────────────────────────

const comparisonColumns = ["Private Credit", "Bank Term Loan", "SBA 7(a) Loan"];
const comparisonRows = [
  {
    feature: "Typical approval timeline",
    "Private Credit": "2–6 weeks",
    "Bank Term Loan": "6–12 weeks",
    "SBA 7(a) Loan": "30–90 days",
  },
  {
    feature: "Collateral flexibility",
    "Private Credit": "High — cash flow & enterprise value weighted",
    "Bank Term Loan": "Moderate — hard asset preference",
    "SBA 7(a) Loan": "Required when available",
  },
  {
    feature: "Typical loan size range",
    "Private Credit": "$1M–$100M+",
    "Bank Term Loan": "$500K–$50M",
    "SBA 7(a) Loan": "Up to $5M",
  },
  {
    feature: "Rate structure",
    "Private Credit": "Floating or fixed; generally higher",
    "Bank Term Loan": "Floating or fixed; generally lower",
    "SBA 7(a) Loan": "Prime-based with SBA cap",
  },
  {
    feature: "Covenant intensity",
    "Private Credit": "Moderate — financial maintenance covenants common",
    "Bank Term Loan": "Strict — multiple financial covenants",
    "SBA 7(a) Loan": "Lender-defined, SBA program rules apply",
  },
  {
    feature: "Prepayment flexibility",
    "Private Credit": "Varies — call protection common in early years",
    "Bank Term Loan": "Often allows prepayment with penalty",
    "SBA 7(a) Loan": "Prepayment premium for first 3 years",
  },
  {
    feature: "Leverage tolerance",
    "Private Credit": "Higher — 3–6x EBITDA not uncommon",
    "Bank Term Loan": "Conservative — typically 2–3x",
    "SBA 7(a) Loan": "Subject to SBA eligibility and DSCR",
  },
];

// ── Private credit product types ──────────────────────────────────────────────

const productTypes = [
  {
    icon: <BuildingIcon />,
    title: "Direct Lending",
    description:
      "Senior secured term loans originated directly by non-bank lenders — private credit funds, BDCs, and specialty finance companies. The most common form of private credit for middle-market businesses. Typically floating-rate with SOFR-based pricing and principal amortization.",
    tags: ["Senior secured", "Floating rate", "Middle market", "SOFR-based"],
    href: "/financing",
  },
  {
    icon: <LayersIcon />,
    title: "Unitranche Financing",
    description:
      "A single blended facility that combines what would traditionally be senior and junior debt into one instrument with one lender group. Simplifies the capital structure and reduces negotiation complexity. Pricing sits between traditional senior and mezzanine rates.",
    tags: ["Single facility", "Blended rate", "Simplified structure", "One lender group"],
    href: "/financing",
  },
  {
    icon: <TrendingIcon />,
    title: "Mezzanine Debt",
    description:
      "Subordinated debt that sits below senior secured debt in the capital stack but above equity. Carries higher yield to compensate for junior position. Often used alongside senior debt for acquisitions, recapitalizations, or growth capital when senior capacity is fully utilized.",
    tags: ["Subordinated", "Higher yield", "PIK option", "Warrant coverage possible"],
    href: "/financing",
  },
  {
    icon: <ShieldIcon />,
    title: "Second Lien & Junior Secured",
    description:
      "A second lien on the same collateral package as the first lien senior lender, subordinate in repayment priority. Offers more downside protection than unsecured mezzanine while accepting lower seniority than the senior facility. Common in leveraged buyout structures.",
    tags: ["Second lien", "Junior secured", "LBO structures", "Collateral subordination"],
    href: "/financing",
  },
];

// ── FAQ data ───────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What is private credit and how does it differ from a bank loan?",
    a: "Private credit refers to lending provided by non-bank institutions — private credit funds, business development companies (BDCs), insurance company credit arms, and specialty finance firms — rather than regulated banks. Private lenders are not subject to the same capital requirements and regulatory constraints as banks, which can allow them to underwrite higher-leverage transactions, move faster through approval, and structure deals with greater flexibility. The tradeoff is typically higher interest rates compared to what a well-qualified borrower might obtain from a bank. Both bank loans and private credit are subject to the lender's own underwriting criteria, and approval is never guaranteed.",
  },
  {
    q: "What size businesses typically access private credit?",
    a: "Private credit spans a wide range of business sizes. At the smaller end, specialty lenders and BDCs may engage with businesses generating $2M–$5M in EBITDA seeking financing in the $3M–$15M range. The core middle market — companies with $5M–$50M in EBITDA — has historically been the largest segment of private credit activity. Large-cap private credit ($100M+ facilities) competes directly with broadly syndicated leveraged loan markets. The right access point depends on the business's financial profile, industry, purpose of financing, and existing capital structure.",
  },
  {
    q: "What do private lenders typically underwrite against?",
    a: "Most private credit transactions center on EBITDA (earnings before interest, taxes, depreciation, and amortization) as the primary measure of debt service capacity. Lenders assess leverage multiples — total debt as a multiple of EBITDA — alongside interest coverage ratios and projected free cash flow. While hard asset collateral (real estate, equipment, receivables) is still relevant, private credit lenders often place significant weight on enterprise value and cash flow durability rather than requiring full hard asset coverage for every dollar lent. Industry, customer concentration, revenue quality, and management track record are also evaluated. All terms are subject to the lender's underwriting.",
  },
  {
    q: "What is PIK interest and why does it appear in private credit deals?",
    a: "PIK stands for payment-in-kind. Rather than requiring current cash interest payments, PIK interest accrues and is added to the outstanding principal balance, compounding over time and paid at maturity or on exit. PIK structures are used when a borrower's near-term cash flow is constrained — such as during a growth investment phase or post-acquisition integration — and both borrower and lender prefer to preserve cash for operations. PIK increases the total cost of the loan significantly because interest compounds, so businesses should model the total cost carefully before accepting PIK provisions.",
  },
  {
    q: "Are personal guarantees required for private credit?",
    a: "Personal guarantee requirements vary by lender, deal size, and transaction structure. For smaller private credit facilities and sponsor-less deals, personal guarantees from operating owners are common. In sponsored transactions — where a private equity firm is the equity holder — personal guarantees from the PE sponsor are generally not provided; recourse is limited to the business entity and its assets. Whether a guarantee is required is subject to negotiation and the lender's underwriting judgment. Businesses should consult legal counsel before executing any guarantee.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function PrivateCreditGuidePage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <PageHero
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Private Credit Guide" },
        ]}
        eyebrow="Guide"
        title="Private Credit Guide"
        subtitle="Private credit — lending outside the regulated banking system — has grown into one of the largest segments of the global credit market. This guide covers how it works, what deal structures look like, and the factors that may determine whether a business qualifies, subject to third-party underwriting."
      />

      {/* ── Metrics strip ─────────────────────────────────────────────────── */}
      <section className="border-b border-[#e5e5e5] py-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical deal size"
              value="$1M–$100M+"
              note="Varies widely by lender and borrower EBITDA profile"
            />
            <MetricCard
              label="Approval timeline"
              value="2–6"
              unit="weeks"
              note="Faster than most bank processes; varies by complexity"
            />
            <MetricCard
              label="Leverage tolerance"
              value="3–6x"
              unit="EBITDA"
              note="Private lenders often accept higher leverage than banks"
              highlight
            />
            <MetricCard
              label="Typical rate premium"
              value="2–5%"
              unit="over bank rates"
              note="Higher yield reflects flexibility, speed, and leverage tolerance"
            />
          </div>
        </div>
      </section>

      {/* ── What is private credit ────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                The Basics
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
                What private credit is — and what it is not
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-4">
                Private credit encompasses any loan or debt instrument originated by a non-bank lender and held on that lender's balance sheet rather than syndicated into a public market. Unlike a broadly syndicated loan that trades among institutional investors, a private credit facility is typically negotiated directly between borrower and lender — a bilateral or club arrangement with customized terms.
              </p>
              <p className="text-[#737373] text-sm leading-relaxed">
                The private credit market grew substantially after the 2008 financial crisis as regulatory constraints reduced banks' appetite for leveraged and middle-market lending. Private credit funds, business development companies (BDCs), insurance company credit arms, and family office lenders stepped into that space. Today, private credit is often the primary path for middle-market businesses — those too large for standard bank credit but too small or complex for public bond markets — seeking meaningful amounts of term debt capital.
              </p>
            </div>

            {/* Capital stack diagram */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-5">
                Typical capital stack (senior to junior)
              </p>
              <div className="space-y-2">
                <StackLayer
                  position="Senior"
                  label="First Lien Senior Secured Debt"
                  detail="Highest priority in repayment. Lowest yield. Often provided by banks or direct lenders."
                />
                <StackLayer
                  position="2nd Lien"
                  label="Second Lien / Junior Secured"
                  detail="Subordinate to first lien but secured by same collateral. Higher yield than senior."
                  accent
                />
                <StackLayer
                  position="Mezz"
                  label="Mezzanine / Subordinated Debt"
                  detail="Unsecured or lightly secured. Often includes PIK option or warrant coverage."
                  accent
                />
                <StackLayer
                  position="Equity"
                  label="Equity (Sponsor or Owner)"
                  detail="Last in repayment priority. Absorbs losses before any debt is impaired."
                />
              </div>
              <p className="text-[0.65rem] text-[#a3a3a3] mt-4">
                Private credit lenders operate across multiple layers of this stack. Unitranche structures collapse senior and junior layers into a single facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How private credit underwriting works ────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6 text-sm text-[#737373] leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-[#0f0f0f] mb-3">
                  How private lenders underwrite deals
                </h2>
                <p>
                  Private credit underwriting is primarily a cash flow exercise. While banks often require hard asset coverage — real estate, equipment, inventory that can be liquidated to repay the loan — private lenders typically underwrite on the basis of EBITDA, free cash flow, and the enterprise value of the business. The central question is: does this business generate enough cash flow to service its debt, and is that cash flow durable enough to support the loan through a realistic range of scenarios?
                </p>
                <p className="mt-3">
                  Leverage multiples — total debt expressed as a multiple of trailing twelve-month or projected EBITDA — are the primary sizing constraint. A lender comfortable at 4.5x EBITDA on a $10M EBITDA business may be willing to extend up to $45M in total debt, distributed across the capital stack. Interest coverage ratios (EBITDA divided by total interest expense) and debt service coverage ratios (free cash flow divided by debt service) are secondary tests that confirm the business can service the resulting interest burden without undue stress.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0f0f0f] mb-3">
                  What private lenders look for beyond the numbers
                </h2>
                <p>
                  Quantitative criteria are necessary but not sufficient. Private lenders also form a qualitative view of the business before committing capital. Revenue quality — whether revenue is recurring, contracted, or transactional — directly influences how much credit a lender will extend. A business with 70% of revenue under multi-year contracts will generally support more leverage than one with equivalent revenue on a transactional, spot-price basis.
                </p>
                <p className="mt-3">
                  Customer concentration is another key factor. If a significant share of revenue — commonly more than 20–25% — is attributable to a single customer, lenders will want to understand the depth of that relationship, whether it is contractually secured, the customer's credit quality, and what the business's revenue profile would look like if that customer were lost. High concentration does not automatically disqualify a deal but it does affect how a lender structures protections and sizes the facility.
                </p>
                <p className="mt-3">
                  Management experience and continuity matter significantly in sponsor-less private credit. In a private equity-backed deal, the PE firm provides institutional oversight and governance. In an owner-operated business, the lender's underwriting of the management team — their experience navigating downturns, operational track record, and depth of the bench below the owner — becomes a central part of credit judgment. This is particularly relevant in succession scenarios, where a new ownership team is acquiring a business and the prior owner is exiting.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0f0f0f] mb-3">
                  Covenants, reporting, and lender rights
                </h2>
                <p>
                  Private credit facilities typically include financial maintenance covenants — requirements to maintain minimum financial ratios on an ongoing basis, measured quarterly. Common covenants include a maximum leverage ratio (total debt / EBITDA must remain below a specified multiple), a minimum interest coverage ratio, and in some cases a minimum liquidity or cash balance covenant. Covenant violation — a "covenant breach" — gives the lender the right to accelerate the loan or impose fees, though lenders often prefer to negotiate a waiver or amendment rather than immediately enforce.
                </p>
                <p className="mt-3">
                  Reporting obligations are another routine feature. Borrowers typically must deliver monthly or quarterly financial statements, annual audited accounts, and a compliance certificate confirming no covenant breaches. The level of reporting required reflects the lender's ongoing monitoring of credit quality. Some facilities also include information rights giving the lender access to management, board materials, or operational data. Understanding the full scope of ongoing obligations before signing is important, as these commitments create recurring administrative demands on management.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0f0f0f] mb-3">
                  Common uses for private credit
                </h2>
                <p>
                  Private credit is deployed across a wide range of business situations. Acquisition financing — funding the purchase of another business, either by a private equity buyer or a founder acquiring a competitor — is one of the most common uses. Growth capital for companies that have outgrown traditional bank credit and need meaningful term debt to fund expansion, new locations, or equipment is another major category. Recapitalizations, where an existing business owner takes on debt to return capital to themselves while retaining ownership, are frequently structured with private credit when the leverage required exceeds what a bank will provide.
                </p>
                <p className="mt-3">
                  Refinancing is also a common entry point. A business with an existing bank credit facility approaching its maturity date — or one whose growth has caused it to breach bank covenants — may find private credit a viable path to refinancing on terms that accommodate the current capital structure. In situations where a business needs to move quickly to fund an acquisition or resolve a time-sensitive situation, private credit's compressed timeline relative to bank or SBA processes can itself be a decisive factor.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                  Factors that may support private credit eligibility
                </p>
                <ul className="space-y-3">
                  {[
                    "$2M+ in EBITDA with consistent operating history",
                    "Recurring or contracted revenue base",
                    "Clear debt service capacity at proposed leverage levels",
                    "Low to moderate customer concentration",
                    "Defensible market position and experienced management team",
                    "Clear use of proceeds tied to value creation or cash flow improvement",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#737373] leading-relaxed">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-[#0f0f0f]">
                        <path d="M3 7l2.5 2.5L11 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                  Factors that may complicate or limit access
                </p>
                <ul className="space-y-3">
                  {[
                    "Highly cyclical or volatile EBITDA history",
                    "Heavy customer concentration in a single client",
                    "Declining revenue trend without a credible recovery thesis",
                    "Incomplete financial reporting or lack of audited statements",
                    "Existing covenant breaches or pending litigation",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#a3a3a3] leading-relaxed">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-[#a3a3a3]">
                        <path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] p-5">
                <p className="text-xs font-semibold text-[#0f0f0f] mb-2">Exploring private credit options?</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-4">
                  ZEO reviews business financing profiles and may identify potential third-party private credit paths, subject to underwriting and approval. Not a guarantee of terms or funding.
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f0f0f] hover:text-[#0f0f0f] transition-colors"
                >
                  Start your intake <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Private credit product types ─────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Deal Structures
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
            Major forms of private credit
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            Private credit is not a single product. Lenders operate across different parts of the capital stack with distinct risk profiles, pricing, and structural features. Understanding the landscape helps identify which instrument may align with a given business situation.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {productTypes.map((card, i) => (
              <FinancingPathCard key={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Comparison
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
            Private credit vs. bank and SBA alternatives
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            The right debt structure depends on business size, leverage required, collateral availability, and timeline constraints. This table reflects general market characteristics — individual lender terms vary significantly and are subject to underwriting.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Private Credit"
          />
          <p className="text-xs text-[#a3a3a3] mt-4">
            All ranges are general market observations and are not offers, commitments, or guaranteed terms. Actual terms are subject to underwriting and approval by third-party providers.
          </p>
        </div>
      </section>

      {/* ── Related financing options ─────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Related Options
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-6">
            Adjacent financing structures to consider
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Acquisition Financing",
                description:
                  "Debt used to fund a business acquisition — often a blend of senior secured term debt, seller notes, and equity. Private credit is a common source of acquisition financing for businesses too large for SBA programs.",
                href: "/acquisition-financing",
              },
              {
                label: "Asset-Based Lending",
                description:
                  "A revolving credit facility secured by accounts receivable, inventory, and equipment. Asset-based lenders advance against a borrowing base rather than EBITDA multiples — useful when a business has strong assets but variable earnings.",
                href: "/asset-based-lending",
              },
              {
                label: "Business Term Loans",
                description:
                  "Fixed-term installment loans for working capital, equipment, or expansion. Smaller deal sizes than most private credit, but a natural starting point for businesses building toward the thresholds private credit requires.",
                href: "/business-term-loans",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5 hover:border-[#0f0f0f]/40 hover:bg-[#f5f5f5] transition-all"
              >
                <p className="font-semibold text-[#0f0f0f] text-sm mb-2 group-hover:text-[#0f0f0f] transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-3">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQ
        items={faqItems}
        title="Frequently Asked Questions About Private Credit"
      />

      {/* ── Disclaimer ────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-10">
        <ProductDisclaimer type="private" />
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Evaluate whether private credit may be a fit for your business"
        subtext="Submit a brief intake describing your business profile, financing need, and use of proceeds. ZEO will review potential private credit paths subject to third-party underwriting and approval."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing"
        secondaryHref="/financing"
      />
    </div>
  );
}

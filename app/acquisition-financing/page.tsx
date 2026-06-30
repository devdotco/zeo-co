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
  title: "Business Acquisition Financing | ZEO.co",
  description:
    "Explore financing options for acquiring an existing business. Learn how acquisition financing works, typical requirements, common structures, and how to evaluate whether it may be a fit — subject to lender underwriting and approval.",
  path: "/acquisition-financing",
  keywords: [
    "business acquisition financing",
    "buy a business loan",
    "acquisition loan",
    "SBA 7a acquisition",
    "business purchase financing",
    "seller note",
    "acquisition financing requirements",
    "business acquisition funding",
    "buying an existing business",
    "acquisition debt financing",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function HandshakeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M2 11l2.5-2.5L7 11l2.5-2.5 2.5 2L14 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 5.5L13 3l3 3-1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 16l4-4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 13l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6h2.5v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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

function DollarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2v14M12.5 5.5C12.5 4.12 10.88 3 9 3S5.5 4.12 5.5 5.5C5.5 7.5 9 8 9 8s3.5.5 3.5 2.5C12.5 11.88 10.88 13 9 13s-3.5-1.12-3.5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

// ── Static data ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Financing Options", href: "/financing" },
  { label: "Business Acquisition Financing" },
];

const typicalMetrics = [
  {
    label: "Typical Loan Range",
    value: "$250K",
    unit: "– $5M+",
    note: "Varies widely by deal size, structure, and lender",
  },
  {
    label: "Equity Injection",
    value: "10–30%",
    note: "Buyer contribution often required; varies by lender and program",
    highlight: true,
  },
  {
    label: "Repayment Term",
    value: "7–10 yr",
    note: "SBA 7(a) commonly used; terms vary by structure",
  },
  {
    label: "Min. Credit (Typical)",
    value: "650+",
    note: "Personal FICO; many lenders prefer 680–700+",
  },
];

const comparisonColumns = ["SBA 7(a)", "Conventional Bank", "Private Credit"];
const comparisonRows = [
  {
    feature: "Government Backing",
    "SBA 7(a)": "Up to 85% guarantee",
    "Conventional Bank": "None",
    "Private Credit": "None",
  },
  {
    feature: "Goodwill Coverage",
    "SBA 7(a)": "Generally eligible",
    "Conventional Bank": "Limited or none",
    "Private Credit": "Varies by lender",
  },
  {
    feature: "Typical Term",
    "SBA 7(a)": "Up to 10 years",
    "Conventional Bank": "3–7 years",
    "Private Credit": "1–5 years",
  },
  {
    feature: "Down Payment",
    "SBA 7(a)": "10–20%+",
    "Conventional Bank": "20–30%+",
    "Private Credit": "Varies",
  },
  {
    feature: "Underwriting Speed",
    "SBA 7(a)": "Weeks to months",
    "Conventional Bank": "Weeks to months",
    "Private Credit": "Often faster",
  },
  {
    feature: "Personal Guarantee",
    "SBA 7(a)": "Required (20%+ owners)",
    "Conventional Bank": "Typically required",
    "Private Credit": "Often required",
  },
];

const alternativePaths = [
  {
    icon: <ShieldIcon />,
    title: "SBA Loans",
    description:
      "SBA 7(a) loans are among the most commonly used vehicles for business acquisitions, covering goodwill and working capital under one structure. Subject to SBA eligibility and lender underwriting.",
    tags: ["Government-backed", "Up to $5M", "Longer Terms"],
    href: "/sba-loans",
  },
  {
    icon: <ChartIcon />,
    title: "Business Term Loans",
    description:
      "Conventional term financing from banks and non-bank lenders. Underwriting is typically faster than SBA, though goodwill financing availability varies significantly by lender.",
    tags: ["Conventional", "Flexible", "Faster Close"],
    href: "/business-term-loans",
  },
  {
    icon: <DollarIcon />,
    title: "Working Capital",
    description:
      "Post-acquisition, businesses often need working capital to stabilize and grow. A separate working capital facility may supplement acquisition debt.",
    tags: ["Post-Acquisition", "Operations", "Liquidity"],
    href: "/working-capital",
  },
  {
    icon: <BuildingIcon />,
    title: "Commercial Real Estate",
    description:
      "When the acquisition includes real property, a dedicated CRE loan or SBA 504 structure may be layered alongside acquisition financing.",
    tags: ["Property", "CRE", "504"],
    href: "/commercial-real-estate-loans",
  },
];

const faqItems = [
  {
    q: "Can I finance the purchase of an existing business, including goodwill?",
    a: "Many lenders, particularly SBA 7(a) participating lenders, will consider financing business acquisitions that include goodwill — the portion of the purchase price attributable to intangible value such as customer relationships, brand, and workforce. Conventional lenders tend to be more restrictive about goodwill coverage, often limiting financing to tangible assets. Eligibility, the amount that can be financed, and the required buyer equity contribution vary by lender, loan program, and the specifics of the deal.",
  },
  {
    q: "How much do I need to put down to buy a business?",
    a: "Equity injection requirements vary by lender and structure. Under the SBA 7(a) program, buyers typically need to contribute 10–20% or more of the purchase price, depending on the strength of the deal and the lender's requirements. Some transactions require the seller to carry a portion of the price as a seller note, which may satisfy part of the equity requirement in certain structures. Your specific equity requirement will be determined during underwriting.",
  },
  {
    q: "What role does a seller note play in acquisition financing?",
    a: "A seller note — also called seller financing or seller carryback — is an arrangement where the seller accepts a portion of the purchase price as a promissory note rather than cash at closing. Seller notes are common in business acquisitions and are often viewed favorably by lenders because they signal seller confidence in the business's future performance. The seller note is typically subordinated to the senior lender's debt. Terms, including interest rate and repayment schedule, are negotiated between buyer and seller.",
  },
  {
    q: "What documents are typically required for acquisition financing?",
    a: "Lenders evaluating acquisition financing typically require a meaningful documentation package covering both the buyer and the target business. This commonly includes the purchase agreement or letter of intent, three years of historical tax returns and financial statements for the target business, year-to-date financials, the buyer's personal financial statement, two to three years of personal tax returns for all 20%+ owners, a business plan or acquisition rationale, and a business valuation or appraisal in some cases. Completeness and quality of documentation materially affects the underwriting timeline.",
  },
  {
    q: "How long does acquisition financing typically take to close?",
    a: "Timelines vary considerably based on the financing structure, lender type, documentation readiness, deal complexity, and whether SBA or conventional financing is being pursued. SBA 7(a) processes generally take several weeks to a few months from initial application through funding. Transactions involving real estate, environmental assessments, or complex business structures may take longer. Having complete documentation prepared before application submission can reduce back-and-forth and compress the timeline.",
  },
];

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AcquisitionFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Financing"
        title="Business Acquisition Financing"
        subtitle="Financing the purchase of an existing business involves multiple structures, equity requirements, and underwriting factors. Learn how acquisition financing generally works and what lenders typically evaluate — subject to underwriting and approval by third-party providers."
      />

      {/* 2 — Who it is for */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Who It May Suit</p>
            <h2 className="text-2xl font-semibold text-white mb-3">A potential fit for qualified buyers with a defined target</h2>
            <p className="text-[#737373] leading-relaxed">
              Acquisition financing is not a standard off-the-shelf product. Lenders evaluate both the buyer's financial profile and the business being acquired. Buyers who tend to be stronger candidates typically share several characteristics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                heading: "Buyers with relevant industry experience",
                body: "Lenders often place significant weight on whether the buyer has operated or managed a similar business. Relevant industry background reduces perceived transition risk and is frequently a factor in underwriting decisions, particularly when the business's value is closely tied to operations.",
              },
              {
                heading: "Businesses with documented, consistent cash flow",
                body: "Lenders assess whether the target business generates sufficient cash flow to service the acquisition debt after the transaction closes. This is typically expressed as Debt Service Coverage Ratio (DSCR). Businesses with three or more years of clean tax returns and steady revenue are in a better position than those with volatile or declining financials.",
              },
              {
                heading: "Buyers who can meet equity injection requirements",
                body: "Acquisition financing generally requires the buyer to contribute meaningful equity — often 10–30% of the purchase price depending on structure and lender. Buyers who have verified liquidity and can demonstrate the source of their equity contribution move through underwriting more smoothly.",
              },
              {
                heading: "Deals with a clear, defensible valuation",
                body: "Lenders need to underwrite to a supportable purchase price. Acquisitions with clean financials, an independent business valuation, and a logical pricing rationale are easier to finance than deals where the price is difficult to defend relative to historical earnings.",
              },
            ].map((item) => (
              <div key={item.heading} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border border-[#0f0f0f]/40 bg-[#0f0f0f]/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0f0f0f] mb-1.5">{item.heading}</p>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — How it works */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Process Overview</p>
            <h2 className="text-2xl font-semibold text-white mb-3">How acquisition financing generally works</h2>
            <p className="text-[#737373] leading-relaxed">
              Business acquisition financing involves more moving parts than most other loan types. The lender is underwriting both the buyer and the business being purchased, and the deal structure itself — purchase price, equity, seller note, asset allocation — directly affects what can be financed and on what terms.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-[19px] top-6 bottom-6 w-px bg-[#e5e5e5]" aria-hidden="true" />
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Identify the business and negotiate a letter of intent",
                  body: "Before approaching lenders, buyers typically execute a letter of intent (LOI) with the seller that outlines the proposed purchase price, structure, and key terms. The LOI is non-binding in most cases but gives lenders a concrete deal to evaluate. Having a signed LOI before beginning the financing process generally accelerates the timeline.",
                },
                {
                  step: "2",
                  title: "Gather target business financials and due diligence materials",
                  body: "Lenders will require historical financial statements and tax returns for the business being acquired — typically three years of both. Quality of earnings, revenue trends, customer concentration, ownership structure, existing debt, and any contingent liabilities are all factors lenders review during underwriting. Independent due diligence, including a business valuation, is often advisable regardless of lender requirements.",
                },
                {
                  step: "3",
                  title: "Select a financing structure and identify lender options",
                  body: "The most common structures for business acquisitions include SBA 7(a) loans (which can finance goodwill), conventional bank term loans (which typically avoid or limit goodwill), and private credit. Seller notes are often layered in alongside senior debt. The right structure depends on deal size, buyer profile, business type, and timeline requirements.",
                },
                {
                  step: "4",
                  title: "Submit the loan application and support documentation",
                  body: "A complete acquisition financing application typically includes the purchase agreement or LOI, three years of target business financial statements and tax returns, buyer personal financial statements and tax returns, a business plan or acquisition rationale, and documentation of the buyer's equity injection source. Incomplete packages materially slow underwriting.",
                },
                {
                  step: "5",
                  title: "Underwriting, approval, and closing",
                  body: "The lender underwrites the deal — evaluating the target's DSCR, the buyer's creditworthiness, collateral, and deal structure. For SBA loans, the guarantee application is also submitted. Upon approval, the parties move to closing, which includes finalizing the purchase agreement, executing loan documents, and funding. For deals involving real estate, a formal title process is also required.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 md:gap-6">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full border border-[#e5e5e5] bg-[#ffffff] flex items-center justify-center">
                    <span className="text-xs font-semibold text-[#0f0f0f] tabular-nums">{item.step}</span>
                  </div>
                  <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4 flex-1">
                    <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{item.title}</p>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Common use cases */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Common Use Cases</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Scenarios where acquisition financing is commonly evaluated</h2>
            <p className="text-[#737373] leading-relaxed">
              Business acquisitions take many forms. These are among the more common scenarios where buyers seek third-party financing to fund part or all of the purchase price — each subject to the specific deal terms, lender requirements, and buyer profile.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <HandshakeIcon />,
                title: "Owner-Operated Business Purchases",
                body: "Buying an established, owner-operated business — a franchise, a service company, a retail location — where the buyer intends to take an active management role. SBA 7(a) is commonly considered for these transactions given its goodwill coverage and longer terms.",
              },
              {
                icon: <ChartIcon />,
                title: "Management Buyouts (MBO)",
                body: "An existing management team purchases the business from the current owner. Lenders view MBOs favorably when the team has deep operational knowledge of the business, reducing transition risk and strengthening the case for continued cash flow performance.",
              },
              {
                icon: <BuildingIcon />,
                title: "Franchise Acquisitions",
                body: "Purchasing an existing franchise unit from a current franchisee. Franchise acquisitions have established brand value and operational frameworks that lenders can underwrite to. Franchise disclosure documents and the franchisor's approval process are typically part of the diligence package.",
              },
              {
                icon: <GearIcon />,
                title: "Industry Roll-Up and Add-On Acquisitions",
                body: "An existing business acquires a competitor or complementary company to expand market share, capabilities, or geography. These transactions require the acquiring entity to demonstrate ability to service combined debt, and lenders often scrutinize integration assumptions in the financial projections.",
              },
              {
                icon: <DocumentIcon />,
                title: "Professional Practice Acquisitions",
                body: "Dental practices, medical groups, accounting firms, law firms, and other licensed professional practices are commonly transacted using acquisition financing. Valuations are often tied to recurring revenue and patient or client relationships rather than hard assets.",
              },
              {
                icon: <DollarIcon />,
                title: "Partial Equity / Succession Buyouts",
                body: "A partial buyout where a co-owner or successor acquires an ownership stake from a retiring partner. Deal structures can be complex, often involving seller notes and earnout provisions. Financing eligibility depends on the business's ability to service the new debt independently of the departing owner's contribution.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.title}</p>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Typical requirements & metrics */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Typical Requirements</p>
            <h2 className="text-2xl font-semibold text-white mb-3">What lenders generally evaluate</h2>
            <p className="text-[#737373] leading-relaxed">
              Acquisition financing underwriting is more complex than a standard business loan because lenders are evaluating two parties simultaneously — the buyer and the business being acquired. The following reflects what lenders commonly assess, not a guarantee of eligibility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {typicalMetrics.map((m) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                unit={m.unit}
                note={m.note}
                highlight={m.highlight}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Buyer Personal Credit",
                detail: "Most lenders require a personal FICO score of 650 or higher from all 20%+ owners, with many preferring 680–700+. Personal credit history, including recent derogatory marks, outstanding judgments, or prior bankruptcies, is reviewed alongside the business case.",
              },
              {
                label: "Target Business Cash Flow",
                detail: "Lenders calculate whether the target business generates sufficient net operating income to cover the proposed debt service, typically requiring a DSCR of 1.25x or higher. Three years of historical tax returns are the primary evidence base. Addbacks and adjustments to stated income are scrutinized.",
              },
              {
                label: "Buyer Equity Injection",
                detail: "Buyers are expected to contribute a meaningful portion of the purchase price from their own funds. For SBA 7(a) acquisitions, this is typically 10–20% or more. Lenders will verify the source of funds — gifted money, borrowed funds, or proceeds from asset sales may be treated differently than seasoned savings or investments.",
              },
              {
                label: "Business Valuation",
                detail: "The purchase price must be supportable relative to the business's earnings. Lenders may require an independent business valuation or appraisal, particularly for deals above certain size thresholds or when goodwill represents a significant portion of the purchase price.",
              },
              {
                label: "Seller Note (if applicable)",
                detail: "Many acquisition structures include a seller note, where the seller defers a portion of the purchase price as subordinated debt. Lenders generally view seller notes favorably as a signal of seller confidence, but the note is typically subject to standby provisions during the early years of the new debt.",
              },
              {
                label: "Collateral and Personal Guarantee",
                detail: "Collateral availability is assessed, including business assets of both the acquiring entity and the target. All owners with 20% or greater stake are typically required to personally guarantee the debt. Personal real estate may be taken as collateral when business assets are insufficient to fully secure the loan.",
              },
            ].map((req) => (
              <div key={req.label} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-2">{req.label}</p>
                <p className="text-sm text-[#737373] leading-relaxed">{req.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Cost discussion */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Understanding Cost</p>
              <h2 className="text-2xl font-semibold text-white mb-4">What determines the total cost of acquisition financing</h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Acquisition financing cost cannot be predicted in advance — it depends on the financing structure, lender, deal size, buyer creditworthiness, and market conditions at the time of the transaction. Quoting specific rates without underwriting a real deal would not reflect what any particular buyer might actually encounter.
                </p>
                <p>
                  For SBA 7(a) acquisitions, rates are negotiated between the borrower and lender subject to SBA maximum caps tied to the prime rate. SBA guarantee fees, which are assessed on the guaranteed portion of the loan, add to total cost and vary by loan size and maturity. Buyers should also budget for third-party costs including the business valuation, legal fees for purchase agreement review, and any environmental or real estate appraisal costs.
                </p>
                <p>
                  Conventional bank acquisition loans often carry lower fees than SBA products but may require larger down payments or limit goodwill coverage. Private credit lenders may offer faster timelines at higher cost. The optimal structure depends on what the buyer values most — rate, speed, goodwill coverage, or down payment minimization.
                </p>
                <p>
                  Total cost should be evaluated on an all-in basis: interest rate plus fees plus equity deployed plus opportunity cost of the buyer's time through the process. A lower stated rate with a larger required down payment may not be cheaper on a risk-adjusted basis than a higher-rate SBA structure with a smaller equity requirement.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">Typical Cost Factors</p>
              {[
                { factor: "Interest rate", note: "Varies by structure, lender, market conditions, and buyer profile. SBA 7(a) rates are capped relative to prime; conventional and private credit rates vary independently." },
                { factor: "SBA guarantee fee", note: "Assessed on the guaranteed portion for SBA loans. Amount depends on loan size, maturity, and the current SBA fee schedule, which is subject to change." },
                { factor: "Lender origination fees", note: "Charged by the participating lender. Varies by institution, deal complexity, and loan size." },
                { factor: "Business valuation cost", note: "Independent valuations are commonly required or strongly advisable. Costs vary by business size and methodology." },
                { factor: "Legal and professional fees", note: "Purchase agreement review, entity formation, and closing legal costs are buyer-side expenses outside of the loan itself." },
                { factor: "Equity injection", note: "Not a fee, but a meaningful cash commitment that affects the buyer's total capital deployed and return on investment." },
              ].map((item) => (
                <div key={item.factor} className="flex gap-3 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]/60 flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-sm font-medium text-[#0f0f0f]">{item.factor}</p>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Pros and cons */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Tradeoffs</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Weighing acquisition financing against your situation</h2>
            <p className="text-[#737373] leading-relaxed">
              Debt financing for an acquisition amplifies both the upside and the risk. Going in with a clear view of the tradeoffs helps buyers structure deals more responsibly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-4">Potential Advantages</p>
              <div className="space-y-3">
                {[
                  "Preserves buyer liquidity — financing part of the purchase price rather than deploying all equity upfront keeps capital available for working capital and post-close operations.",
                  "Enables access to larger, more established businesses than a buyer could acquire with cash alone, potentially accelerating wealth-building timelines.",
                  "SBA 7(a) loans can cover goodwill, which conventional lenders often will not — broadening the universe of financeable acquisition targets.",
                  "Longer repayment terms available through SBA programs may reduce monthly debt service burden relative to shorter-term conventional financing.",
                  "A seller note in the capital structure aligns seller incentives with buyer success and may provide recourse if there are material misrepresentations in the sale.",
                  "Acquiring an established business typically means buying existing cash flow, customers, and operations rather than building from scratch.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 text-sm">
                    <svg className="flex-shrink-0 w-4 h-4 text-[#0f0f0f] mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[#737373] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">Potential Drawbacks</p>
              <div className="space-y-3">
                {[
                  "Personal guarantees are typically required from all 20%+ owners, exposing personal assets if the business fails to service the debt post-acquisition.",
                  "Acquisition financing processes are complex and time-consuming — often taking months from LOI to close, during which the deal can fall apart for financial or non-financial reasons.",
                  "DSCR requirements mean the business must generate sufficient cash flow to service debt — a business that barely covers costs may not be financeable at the buyer's target price.",
                  "If the target business underperforms post-close, the buyer still owes the full debt obligation, creating downside risk that did not exist in a cash transaction.",
                  "Documentation requirements are substantial. Sellers who are unwilling to provide clean financials or cooperate with due diligence can delay or derail financing.",
                  "Rate and fee costs vary — without a specific offer in hand, buyers cannot know in advance what the true cost of financing will be until underwriting is complete.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 text-sm">
                    <svg className="flex-shrink-0 w-4 h-4 text-[#a3a3a3] mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <p className="text-[#737373] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Comparison table */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Structure Comparison</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Acquisition financing structures at a glance</h2>
            <p className="text-[#737373] leading-relaxed">
              A high-level comparison of common acquisition financing structures. The right structure depends on deal specifics, buyer profile, and lender availability. All financing is subject to underwriting and approval.
            </p>
          </div>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
          <p className="text-xs text-[#a3a3a3] mt-4">
            This table is for general informational purposes only. Actual terms, eligibility, and availability vary by lender, deal structure, and market conditions. Subject to change without notice.
          </p>
        </div>
      </section>

      {/* 9 — Alternatives */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Alternatives</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Related financing paths to consider</h2>
            <p className="text-[#737373] leading-relaxed">
              Acquisition financing rarely exists in isolation. Depending on the deal structure and the buyer's needs before and after closing, other financing products may be relevant alongside or following the primary acquisition loan.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {alternativePaths.map((card) => (
              <FinancingPathCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                tags={card.tags}
                href={card.href}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/financing"
              className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#0f0f0f] transition-colors"
            >
              View all financing options
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 9b — Calculator link */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1.5">Tools</p>
              <p className="text-base font-semibold text-[#0f0f0f] mb-1">Model your acquisition debt service</p>
              <p className="text-sm text-[#a3a3a3]">
                Use the loan payment calculator to estimate monthly obligations at different loan amounts, terms, and rate assumptions. Results are estimates only — not offers or commitments.
              </p>
            </div>
            <Link
              href="/calculators/loan-payment"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#0f0f0f]/40 text-[#0f0f0f] text-sm font-medium hover:bg-[#0f0f0f]/10 transition-colors whitespace-nowrap"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <FAQ
        items={faqItems}
        title="Acquisition Financing FAQs"
      />

      {/* 11 — CTA */}
      <CTASection
        headline="Explore whether acquisition financing may be a fit"
        subtext="Submit a brief intake and ZEO will review your situation against potential acquisition financing paths. Subject to underwriting and approval by third-party lenders."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare All Options"
        secondaryHref="/financing"
      />

      {/* 12 — Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="acquisition" />
      </div>

    </main>
  );
}

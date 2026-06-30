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
  title: "Government Contractor Financing | ZEO.co",
  description:
    "Explore financing options for government contractors — invoice factoring, SBA loans, working capital, and equipment financing. Learn what lenders evaluate and which paths may be a potential fit for federal, state, and local contract work. Subject to underwriting by third-party providers.",
  path: "/industries/government-contractors",
  keywords: [
    "government contractor financing",
    "federal contractor loans",
    "contract financing",
    "invoice factoring for government contractors",
    "SBA loans for government contractors",
    "government contract working capital",
    "defense contractor financing",
    "mobilization financing",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function ContractIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 12l1.5 1.5L14 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FactoringIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 12h3M11 12h1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 6v1.25L7.5 8l1.5 1 1.5.75L9 11.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EquipmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="11" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 11V7l4-4 4 4v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7.5" y="11" width="3" height="4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9h12M3 5.5h8M3 12.5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="14" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function CertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2L11 7h5l-4 3 1.5 5L9 12.5 5.5 15 7 10 3 7h5L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Industries", href: "/industries" },
  { label: "Government Contractor Financing" },
];

const FAQ_ITEMS = [
  {
    q: "Can government contractors use invoice factoring if their contracts are with federal agencies?",
    a: "Yes, government contract receivables are among the most factorable in any industry — the federal government is considered an exceptionally creditworthy obligor. However, the process has specific legal requirements. The Assignment of Claims Act governs the assignment of federal receivables and requires proper notice to the contracting agency and the disbursing office. Factoring companies that specialize in government receivables are familiar with this process. Contractors should work with a factor that has direct experience with federal assignments and should review all agreements with qualified counsel before signing. State and local government receivables have their own assignment rules, which vary by jurisdiction.",
  },
  {
    q: "What is mobilization financing and why do government contractors need it?",
    a: "Mobilization financing addresses the gap between when a contract is awarded and when the contractor has sufficient cash on hand to begin work. Winning a federal contract often requires immediate spending on labor hiring, equipment, materials, and subcontractors — frequently weeks or months before the first government payment arrives. Some lenders and factors offer advances specifically against awarded-but-not-yet-billed contract value to cover these startup costs. Approval depends on the contract itself, the awarding agency, contractor creditworthiness, and lender-specific criteria. Not all lenders offer mobilization financing, and terms vary significantly.",
  },
  {
    q: "How does an SBA 8(a) certification or small business set-aside status affect financing options?",
    a: "Federal small business certifications — including 8(a), HUBZone, WOSB, SDVOSB, and others — do not directly improve your financing terms with private lenders. However, holding these designations often means access to set-aside contracts that provide more predictable, steady revenue, which lenders view favorably when evaluating creditworthiness. Some SBA loan programs, including certain SBA 7(a) products, may have features relevant to certified businesses — but those programs are subject to SBA rules, lender underwriting, and eligibility requirements. ZEO.co is not the SBA, an SBA lender, or a government agency.",
  },
  {
    q: "What documents do lenders typically want from a government contractor?",
    a: "Lenders commonly request two to three years of business tax returns, recent profit and loss statements, business bank statements (typically 3–6 months), and personal financial statements for business owners. For government-contractor-specific underwriting, lenders also frequently ask for copies of active contracts or task orders, your DUNS/UEI number or SAM.gov registration, any existing subcontracting agreements, and accounts receivable aging broken out by contracting agency. Having these organized before approaching a lender generally reduces processing time.",
  },
  {
    q: "Are there financing options for contractors still in the proposal or base-year phase?",
    a: "Financing options are more limited for contractors who have not yet received a contract award. Most factoring and receivables-based financing requires an actual, funded contract with billing rights. Some lenders will consider working capital or term loan structures for contractors with a strong track record and active pipeline, but approval is not guaranteed and terms will vary. The most financeable position is a contractor with at least one active, funded contract generating invoiceable milestones. Contractors actively pursuing awards may benefit from establishing a banking or lender relationship before the award rather than after.",
  },
];

const COMPARISON_COLUMNS = ["Invoice Factoring", "SBA 7(a) Loan", "Working Capital Loan", "Equipment Financing"];

const COMPARISON_ROWS = [
  {
    feature: "Primary use",
    "Invoice Factoring": "Bridge payment lag on billed invoices",
    "SBA 7(a) Loan": "Equipment, WC, real estate, refinancing",
    "Working Capital Loan": "Payroll, subcontractors, operating costs",
    "Equipment Financing": "Vehicles, tools, specialized equipment",
  },
  {
    feature: "Collateral",
    "Invoice Factoring": "Government receivables assigned to factor",
    "SBA 7(a) Loan": "Business assets, personal guarantee",
    "Working Capital Loan": "Varies; may be unsecured",
    "Equipment Financing": "The financed asset",
  },
  {
    feature: "Repayment",
    "Invoice Factoring": "Deducted when government pays",
    "SBA 7(a) Loan": "Fixed monthly payments",
    "Working Capital Loan": "Fixed schedule or revenue-based",
    "Equipment Financing": "Fixed monthly payments",
  },
  {
    feature: "Speed to funding",
    "Invoice Factoring": "Often 1–3 business days once set up",
    "SBA 7(a) Loan": "Weeks to months",
    "Working Capital Loan": "Days to weeks",
    "Equipment Financing": "Days to weeks",
  },
  {
    feature: "Key requirement",
    "Invoice Factoring": "Active billed invoice on funded contract",
    "SBA 7(a) Loan": "SBA eligibility, lender underwriting",
    "Working Capital Loan": "Revenue history and credit profile",
    "Equipment Financing": "Asset quote, credit profile",
  },
  {
    feature: "Best for",
    "Invoice Factoring": "Contractors with slow-paying agencies",
    "SBA 7(a) Loan": "Larger, longer-term capital needs",
    "Working Capital Loan": "Covering gaps between contract payments",
    "Equipment Financing": "Acquiring contract-specific assets",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GovernmentContractorFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Industry"
        title="Government Contractor Financing"
        subtitle="Federal, state, and local government contracts often come with long payment cycles, mobilization costs, and cash flow gaps that conventional business financing doesn't address well. Understanding which financing structures are built around contract receivables is the starting point."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Factoring advance rate"
              value="80 – 95%"
              note="Of invoice face value; government receivables often advance at higher rates"
              highlight
            />
            <MetricCard
              label="Federal payment terms"
              value="Net 30"
              note="Prompt Payment Act standard; actual timing varies by agency and invoice approval"
            />
            <MetricCard
              label="SBA 7(a) max loan"
              value="$5M"
              note="Government program; subject to SBA rules and lender underwriting"
            />
            <MetricCard
              label="Common contract lag"
              value="30 – 90 days"
              note="From invoice submission to receipt of funds, depending on agency and process"
            />
          </div>
        </div>
      </section>

      {/* ── Industry challenges ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Industry context
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                Why government contracting creates distinct financing challenges
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Government contracts are widely regarded as among the safest receivables a
                business can hold — the obligor is a sovereign entity with taxing authority.
                Yet that safety comes paired with structural payment delays, bureaucratic
                approval cycles, and compliance requirements that create real cash flow
                pressure for contractors of all sizes.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                A federal contractor may win a multi-million-dollar task order, mobilize
                personnel and equipment immediately, and not receive the first payment for
                60 days or more. For small businesses operating on thin working capital, this
                gap is often the single largest operational risk — separate from anything
                having to do with performance or competition.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm">
                Financing structures designed for this industry — particularly contract
                receivables factoring and mobilization financing — exist precisely because
                standard bank products are often poorly calibrated to the government
                contracting payment cycle.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Payment delays and the invoice approval cycle",
                  body: "Even under the Prompt Payment Act, which requires federal agencies to pay invoices within 30 days, the practical timeline from invoice submission to receipt of funds often runs longer. Invoice approval may require multiple internal reviews, contracting officer sign-off, and disbursement processing — each adding days or weeks. For contractors who need to make payroll or pay subcontractors in the interim, this gap requires a financing solution.",
                },
                {
                  heading: "Mobilization costs before the first payment",
                  body: "Federal and state contracts frequently require contractors to hire staff, acquire equipment, establish site infrastructure, and begin performance before any invoice can be submitted. These upfront costs can be substantial — and they must typically be funded out of existing cash reserves or external financing, since the contract itself does not generate receivables until work is performed and invoiced.",
                },
                {
                  heading: "Subcontractor and supplier obligations",
                  body: "Prime contractors are often required to flow down payment terms to subcontractors within specific timeframes — sometimes within 7 to 14 days of receiving government payment. This compresses the prime's available float and can create a need for financing even when the government pays on time.",
                },
                {
                  heading: "Contract modifications and stop-work orders",
                  body: "Government contracts can be unilaterally modified, suspended, or terminated for the convenience of the government with limited advance notice. These events create uncertainty in revenue projections and can leave contractors holding costs incurred on work that has been paused or cancelled — a risk profile that some lenders weigh carefully when underwriting.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                >
                  <h3 className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{item.heading}</h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Financing products ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Relevant financing structures
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3 text-balance">
            Products commonly used by government contractors
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            The right structure depends on your contract type, payment cycle, credit profile, and
            what the capital is needed for. All financing is subject to underwriting by
            third-party providers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<FactoringIcon />}
              title="Government Contract Factoring"
              description="Sell outstanding invoices on funded government contracts to a factoring company for an immediate advance. The factor collects directly from the agency. Designed specifically for the federal payment cycle."
              tags={["Federal receivables", "Cash flow", "Assignment of Claims"]}
              href="/factoring"
              highlight
            />
            <FinancingPathCard
              icon={<CapitalIcon />}
              title="Working Capital Loans"
              description="Short-to-medium-term financing for payroll, subcontractors, materials, and operating costs while awaiting government payment. May also cover mobilization expenses at the start of a new contract."
              tags={["Payroll", "Mobilization", "Operating costs"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loans"
              description="Government-backed term loans that may be used for working capital, equipment, real estate, or refinancing. Longer terms and structured repayment — the documentation requirements are significant."
              tags={["SBA", "Long-term", "Multi-purpose"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<EquipmentIcon />}
              title="Equipment Financing"
              description="Financing for vehicles, specialized tools, IT infrastructure, or other assets required to perform on a specific contract. The equipment typically serves as collateral."
              tags={["Vehicles", "IT assets", "Asset-secured"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Line of Credit"
              description="A revolving facility you draw from and repay as contracts pay out. Useful for contractors managing multiple simultaneous contracts with staggered billing cycles."
              tags={["Revolving", "Multi-contract", "Draw as needed"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<CertIcon />}
              title="SBA 8(a) & Set-Aside Programs"
              description="Federal small business certification programs — 8(a), HUBZone, WOSB, SDVOSB — don't directly provide financing, but qualify contractors for set-aside contracts that lenders may view more favorably."
              tags={["8(a)", "HUBZone", "Set-aside"]}
              href="/sba-loans"
            />
          </div>
        </div>
      </section>

      {/* ── Typical requirements ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Lender criteria
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                What lenders typically evaluate for government contractors
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                These are general benchmarks drawn from common lender practices in the
                government contracting sector. Each provider sets its own criteria. Meeting
                these thresholds does not guarantee approval — requirements differ
                significantly by product type, contract size, and lender.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Active, funded contract",
                    value: "Executed award with billing rights",
                    note: "Most factoring and receivables-based financing requires a fully executed contract with an active period of performance — not a pending award or proposal",
                  },
                  {
                    label: "SAM.gov registration",
                    value: "Current registration required for federal work",
                    note: "Lenders and factors working with federal contractors typically verify active SAM.gov registration as part of due diligence",
                  },
                  {
                    label: "Personal credit score",
                    value: "620+ for most products; 680+ for SBA",
                    note: "Government factoring lenders may weight contract quality more heavily than personal credit for receivables advances",
                  },
                  {
                    label: "Time in business",
                    value: "2+ years preferred for term loans",
                    note: "Some factoring arrangements may be available to newer contractors with strong contracts; term loan and SBA requirements are typically stricter",
                  },
                  {
                    label: "Annual revenue",
                    value: "Often $150K – $300K minimum for lenders",
                    note: "For factoring, the contract size and obligor (the government agency) matter more than historical revenue in many cases",
                  },
                  {
                    label: "Financial documentation",
                    value: "Tax returns, P&L, bank statements, contract copies",
                    note: "Lenders typically request 2–3 years of business tax returns plus copies of active contracts, task orders, and an accounts receivable aging by agency",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                  >
                    <div className="flex-shrink-0 mt-[7px] h-1.5 w-1.5 rounded-full bg-[#0f0f0f]" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{req.label}</p>
                      <p className="text-sm text-[#737373] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Preparing your application ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Preparation
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                How government contractors can strengthen a financing application
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                Contractors who present clear contract documentation and organized financials
                typically move through lender underwriting more efficiently. These are general
                considerations — not a guarantee of any outcome.
              </p>
              <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Have complete contract documentation ready.</span>{" "}
                  Lenders and factors will want the full executed contract or task order,
                  including the period of performance, contract value, payment terms, and the
                  identity of the contracting officer. IDIQ vehicles and blanket purchase
                  agreements require task order documentation showing funded work — not just
                  the vehicle ceiling.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Understand the Assignment of Claims requirements.</span>{" "}
                  For federal factoring, proper assignment of receivables under the Assignment
                  of Claims Act requires written notice to the contracting agency and the
                  disbursing office, often on specific forms. Factoring companies experienced
                  in federal work will guide this process, but understanding it in advance
                  helps set realistic timelines.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Maintain clean, separated business finances.</span>{" "}
                  Lenders want business bank statements that reflect contract-related activity —
                  not commingled personal and business transactions. If your entity is a sole
                  proprietorship or single-member LLC, establishing a dedicated business
                  account before seeking financing is strongly advisable.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Document your receivables aging by agency.</span>{" "}
                  A clear breakdown of outstanding invoices — by agency, invoice date, and
                  amount — gives lenders and factors the visibility they need to assess
                  collateral quality. Know which invoices are pending approval, which are
                  approved and awaiting disbursement, and which are in dispute.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Establish lender relationships before you need capital.</span>{" "}
                  Government contractors who approach lenders in the middle of a cash flow
                  crisis are at a structural disadvantage. Building a relationship — or at
                  minimum completing a factoring facility setup — before mobilization costs
                  hit gives you more options and better timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Side-by-side comparison
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3 text-balance">
            Government contractor financing structures at a glance
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            General structural differences between common products used by government
            contractors. Actual terms depend on the lender, your contract profile, and your
            specific situation.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Invoice Factoring"
          />
        </div>
      </section>

      {/* ── Industry-specific notes ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Government contractor consideration
              </p>
              <h3 className="text-lg font-semibold text-[#0f0f0f] mb-3 text-balance">
                Why government receivables are often easier to factor than commercial ones
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-3">
                In traditional invoice factoring, the factor's primary underwriting concern is
                whether the debtor — the party who owes the invoice — will actually pay.
                When that debtor is the U.S. federal government or a state government entity,
                the credit risk profile is fundamentally different from a commercial customer.
                Government entities have strong payment obligations and generally do not
                default in the conventional sense.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                This is why government contract factoring advance rates can run higher than
                commercial factoring rates, and why factors may be willing to work with
                contractors who have limited credit history if their contracts are with
                creditworthy agencies. The legal requirements for assigning government
                receivables are different from commercial assignments — a specialized factor
                is important. Review all agreements with qualified counsel.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Government contractor consideration
              </p>
              <h3 className="text-lg font-semibold text-[#0f0f0f] mb-3 text-balance">
                IDIQ vehicles, BPAs, and the funded task order distinction
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-3">
                Many government contractors operate under Indefinite Delivery, Indefinite
                Quantity contracts or Blanket Purchase Agreements — vehicles that authorize
                work up to a ceiling value but do not themselves fund any specific work.
                Financing against an IDIQ ceiling that has no funded task orders is generally
                not possible; lenders and factors require funded task orders with an executed
                period of performance and invoiceable milestones.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                When presenting your contract portfolio to a prospective lender or factor, the
                relevant document is the funded task order or delivery order — not the base
                IDIQ vehicle. Contractors who understand this distinction tend to move through
                underwriting more efficiently and avoid miscommunication about what is
                actually financeable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={FAQ_ITEMS}
        title="Government Contractor Financing — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Explore financing options for your government contracting business"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit based on your contracts and situation. Subject to underwriting by third-party providers. Results are not guaranteed."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Browse All Financing Options"
        secondaryHref="/financing"
      />

      {/* ── Disclaimer ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

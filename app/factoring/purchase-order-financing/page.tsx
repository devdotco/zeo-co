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
  title: "Purchase Order Financing via Factoring | ZEO.co",
  description:
    "Learn how PO financing through factoring works — advance structures, reserve cycles, invoice criteria, typical fee ranges, and how to evaluate whether it may be a fit. Subject to underwriting by third-party providers.",
  path: "/factoring/purchase-order-financing",
  keywords: [
    "purchase order financing",
    "PO financing",
    "PO factoring",
    "purchase order funding",
    "PO finance for small business",
    "purchase order financing requirements",
    "purchase order financing rates",
    "invoice factoring purchase orders",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function PurchaseOrderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8 12.5h2M7 14h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function FactoringIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v2.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SupplyChainIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="7" y="3" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="13" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8h2M11 8h2M9 7V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 5h14l-1.5 7H3.5L2 5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 5V4a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ManufacturingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 14V8l4-3v3l4-3v3l4-3v8H2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <rect x="6" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ABLIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Factoring", href: "/factoring" },
  { label: "Purchase Order Financing" },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is the difference between PO financing and invoice factoring?",
    a: "Invoice factoring involves selling receivables — invoices you have already issued for goods or services delivered — to a factor at a discount in exchange for an advance. Purchase order financing addresses a step earlier in the cycle: it provides capital to help you fulfill a large customer order before the goods ship and before you can issue an invoice. In practice, many PO financing programs are structured in tandem with invoice factoring: a factor may advance funds against the purchase order itself, and once the order is fulfilled and an invoice is generated, it transitions into a standard factoring facility. The combined approach is sometimes called 'PO to pay' or 'supply chain financing.'",
  },
  {
    q: "What types of businesses most commonly use PO financing through factoring?",
    a: "PO financing is most frequently used by product-based businesses — distributors, wholesalers, importers, and manufacturers — that receive large orders from creditworthy customers (retailers, government agencies, healthcare systems) but lack the working capital to purchase raw materials or finished inventory from suppliers. Staffing firms filling large government or enterprise contracts are another common user, as are specialty manufacturers receiving first-of-a-kind or unusually large contracts. The product must be identifiable, tangible, and deliverable to a confirmed buyer in most programs.",
  },
  {
    q: "Does my business need to have existing factoring in place to access PO financing?",
    a: "Not always, but many lenders that offer PO financing prefer that the resulting invoices flow through a factoring arrangement they control. This is because their primary risk is repayment — which depends on the buyer paying the invoice once fulfilled. When they also hold the receivable, they have a direct path to repayment. Some specialty PO finance lenders operate independently of a factoring arrangement, but these programs are less common and may have different fee structures or documentation requirements. Discussing how repayment is structured is essential before entering any PO financing agreement.",
  },
  {
    q: "Can a startup or early-stage business use PO financing?",
    a: "PO financing is generally more accessible to early-stage businesses than traditional bank credit because lenders focus heavily on the creditworthiness of the end customer — the company that issued the purchase order — rather than solely on the borrowing business's credit history or time in business. A startup with a confirmed, large order from a nationally recognized retailer or government agency may qualify even if it has limited operating history. That said, underwriting standards vary by provider, and lenders will still evaluate the business's ability to fulfill the order, supplier relationships, and deal structure. Subject to each lender's own criteria.",
  },
  {
    q: "What fees should I expect with PO financing, and how are they structured?",
    a: "PO financing fees are typically quoted as a percentage of the purchase order value or the advance amount, charged over a defined period — commonly per week or per month. Because PO financing bridges the gap between ordering from a supplier and invoicing the buyer, the total duration can run anywhere from a few weeks to several months depending on supplier lead times and buyer payment terms. The cumulative fee across that period is what you should focus on, not the per-period rate in isolation. Some programs also charge additional fees for due diligence, document review, or wire transfers. Request a full fee schedule and a worked example of a deal similar to yours before committing. ZEO.co does not set or guarantee rates — all terms are set by third-party providers subject to underwriting.",
  },
];

// ── Comparison data ───────────────────────────────────────────────────────────

const COMPARISON_COLUMNS = ["PO Financing", "Invoice Factoring", "Working Capital Loan"];

const COMPARISON_ROWS = [
  {
    feature: "When in the cycle",
    "PO Financing": "Before goods ship",
    "Invoice Factoring": "After invoice is issued",
    "Working Capital Loan": "Anytime",
  },
  {
    feature: "What is funded",
    "PO Financing": "Supplier payment / production costs",
    "Invoice Factoring": "Outstanding receivables",
    "Working Capital Loan": "Cash — flexible use",
  },
  {
    feature: "Collateral",
    "PO Financing": "The PO + resulting invoice",
    "Invoice Factoring": "The invoice / receivable",
    "Working Capital Loan": "Varies by lender",
  },
  {
    feature: "Buyer creditworthiness matters",
    "PO Financing": "Yes — heavily",
    "Invoice Factoring": "Yes — drives approval",
    "Working Capital Loan": "Less direct",
  },
  {
    feature: "Advance rate (typical range)",
    "PO Financing": "Up to 70–90% of PO value",
    "Invoice Factoring": "70–90% of invoice face value",
    "Working Capital Loan": "Varies by product",
  },
  {
    feature: "Best for",
    "PO Financing": "Large orders, inventory-based businesses",
    "Invoice Factoring": "B2B with outstanding receivables",
    "Working Capital Loan": "Flexible cash needs",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PurchaseOrderFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Factoring"
        title="PO Financing via Factoring"
        subtitle="Purchase order financing provides capital to fund supplier payments before goods ship and an invoice can be issued. When structured through a factoring arrangement, the resulting receivable transitions directly into a factor-held advance. Subject to lender underwriting and third-party approval."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical advance rate"
              value="70 – 90%"
              note="Of purchase order or invoice value — subject to underwriting"
            />
            <MetricCard
              label="Common fee structure"
              value="1 – 5%"
              unit="per 30 days"
              note="Total fees depend on duration and deal size"
            />
            <MetricCard
              label="Minimum PO size"
              value="$50K+"
              note="Many programs require larger orders; varies by lender"
              highlight
            />
            <MetricCard
              label="Funding timeline"
              value="3 – 10 days"
              note="After documentation is complete and buyer verified"
            />
          </div>
        </div>
      </section>

      {/* ── What is it / Who uses it ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                What it is
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                Financing the gap between receiving an order and issuing an invoice
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Purchase order financing addresses one of the most common cash flow gaps
                in product-based businesses: you have a confirmed, creditworthy customer
                who wants to buy — but you need capital now to pay your supplier or
                manufacturer before you can ship and bill.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Traditional invoice factoring operates after a sale is complete and an
                invoice has been issued. PO financing steps in earlier, using the purchase
                order itself as the basis for advancing funds. Once the order is fulfilled
                and a verified invoice is generated, many programs seamlessly transition
                that receivable into a factoring arrangement — the factor pays the
                supplier directly, receives the invoice, advances the seller a portion
                of its face value, and collects from the end buyer when the invoice comes due.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm">
                This structure is not available from every factoring company, and it
                carries additional complexity and cost compared to standard invoice
                factoring. It may be worth evaluating when a specific order is large
                enough that fulfilling it would otherwise require depleting working
                capital reserves or turning away business entirely.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Distributors and wholesalers",
                  body:
                    "Businesses that source finished goods from manufacturers or overseas suppliers and resell to retailers, healthcare systems, or government agencies often face large capital requirements with 30–90 day supplier payment windows. PO financing can bridge that gap when a confirmed order justifies the cost.",
                },
                {
                  heading: "Importers filling domestic orders",
                  body:
                    "Importers who source internationally frequently face long lead times — production, shipping, and customs — during which capital is tied up before any revenue is recognized. When an end customer has issued a firm purchase order, that document may support a financing arrangement with a lender familiar with import cycles.",
                },
                {
                  heading: "Manufacturers landing large contracts",
                  body:
                    "A small or mid-sized manufacturer that wins a major contract — a retail chain, government bid, or institutional buyer — may need to buy raw materials, tooling, or additional capacity to fulfill it. PO financing may allow them to accept contracts that would otherwise exceed their working capital.",
                },
                {
                  heading: "Staffing and services firms",
                  body:
                    "While PO financing is primarily used for product businesses, some specialty lenders extend comparable structures to staffing firms with confirmed government or enterprise contracts — effectively bridging the gap between service delivery and invoice payment.",
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

      {/* ── Advance / reserve cycle ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            How the cycle works
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            From purchase order to reserve release
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            PO financing through a factoring arrangement typically follows a structured
            sequence. Each lender structures deals differently — this reflects common
            practice, not a guarantee of how any specific provider operates.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {[
              {
                step: "1",
                title: "Buyer issues PO",
                body:
                  "A creditworthy end customer issues a confirmed purchase order to your business for a specific quantity of goods at a specified price.",
              },
              {
                step: "2",
                title: "Submit to factor",
                body:
                  "You submit the PO, supplier invoice or proforma, and buyer information to the factor or PO lender for underwriting review.",
              },
              {
                step: "3",
                title: "Buyer credit verified",
                body:
                  "The lender evaluates the end buyer's creditworthiness — not just yours. Approval depends heavily on whether the buyer is likely to pay.",
              },
              {
                step: "4",
                title: "Supplier paid directly",
                body:
                  "If approved, the lender pays your supplier directly — often by wire or letter of credit — so goods can be produced and shipped.",
              },
              {
                step: "5",
                title: "Goods ship, invoice issued",
                body:
                  "Once goods are delivered and accepted, you issue an invoice to the buyer. That invoice is typically assigned to or purchased by the factor.",
              },
              {
                step: "6",
                title: "Buyer pays, reserve released",
                body:
                  "The buyer pays the factor directly. The factor deducts fees and the advance, then releases any reserve balance to your business.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <span className="inline-block text-[0.65rem] font-semibold tabular-nums text-[#0f0f0f] bg-[#f5f5f5] border border-[#0f0f0f]/20 rounded-md px-2 py-0.5 mb-3">
                  Step {s.step}
                </span>
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{s.title}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#a3a3a3] mt-6 max-w-3xl leading-relaxed">
            The reserve is the portion of the invoice value held back by the factor after
            the initial advance. It is released — minus fees — once the buyer pays in full.
            Fees accrue from the date of the advance to the date of buyer payment, which
            is why the total cost is sensitive to how quickly your buyer pays.
          </p>
        </div>
      </section>

      {/* ── Requirements and invoice criteria ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Requirements
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                What lenders generally evaluate
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                PO financing underwriting focuses differently from traditional credit —
                the end buyer's payment history and creditworthiness often carry more
                weight than the borrowing business's credit score. These are general
                benchmarks, not guarantees.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "End buyer profile",
                    value: "Creditworthy, established business or government entity",
                    note: "Most lenders require the buyer to be a recognized commercial entity — retailers, distributors, healthcare systems, or government agencies with verifiable payment history",
                  },
                  {
                    label: "Purchase order type",
                    value: "Confirmed, assignable, non-cancelable preferred",
                    note: "Verbal or conditional orders are generally not eligible; lenders want written, firm POs from the buyer",
                  },
                  {
                    label: "Gross margin on the deal",
                    value: "Typically 15–20%+ minimum",
                    note: "Lenders need the deal to generate enough margin to cover fees and leave you with net profit — thin-margin deals may not qualify",
                  },
                  {
                    label: "Product type",
                    value: "Tangible, finished goods with identifiable delivery",
                    note: "Most PO financing programs do not cover services, software, or projects where delivery is ambiguous",
                  },
                  {
                    label: "Your time in business",
                    value: "Less critical than for traditional credit",
                    note: "Some programs work with relatively new businesses when the buyer is strong and the deal structure is clean",
                  },
                  {
                    label: "Documentation",
                    value: "PO, supplier quote, prior financials, bank statements",
                    note: "Larger transactions require more thorough diligence; be prepared to share buyer contact information for credit verification",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{req.label}</p>
                      <p className="text-sm text-[#737373] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Invoice criteria ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Invoice criteria
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                What makes an invoice eligible for the factoring component
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                Once goods are shipped and an invoice is generated, that invoice typically
                enters a factoring arrangement. Factorable invoices generally must meet
                these criteria — though each provider sets its own standards.
              </p>
              <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Unconditional obligation to pay.</span>{" "}
                  The invoice must reflect goods that have been delivered and accepted
                  without dispute. Invoices subject to return rights, offset claims,
                  or ongoing disputes are typically ineligible until the issue is resolved.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">No pre-existing liens on receivables.</span>{" "}
                  If another lender holds a blanket UCC lien on your receivables, the
                  factor will typically require that lien to be subordinated or released
                  before purchasing the invoice. This is one of the first things a factor
                  checks.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Net 30 to Net 90 payment terms.</span>{" "}
                  Most factors prefer invoices with standard commercial payment terms.
                  Invoices with very extended terms (Net 120+) may be subject to higher
                  fees or excluded, as fees accrue until the buyer pays.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">B2B or B2G only.</span>{" "}
                  Factoring — and by extension PO financing — applies to commercial and
                  government receivables. Consumer invoices are generally not eligible,
                  and healthcare receivables are handled under separate specialty programs.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Accurate buyer information.</span>{" "}
                  Invoices must include complete and accurate buyer contact information
                  so the factor can send a notice of assignment to the buyer and arrange
                  direct payment. Discrepancies between the PO buyer and the invoice
                  counterparty will delay or prevent funding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advance rates and fees ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Advance rates and fee ranges
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Understanding cost — without promises
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            ZEO.co does not quote, set, or guarantee financing rates. The figures below
            reflect commonly published ranges observed in the market. Actual terms are
            set by third-party providers subject to their own underwriting. All terms
            are subject to change and are not offers or commitments.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                PO advance rate
              </p>
              <p className="text-2xl font-semibold text-[#0f0f0f] tabular-nums mb-2">
                Up to 70 – 90%
              </p>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Percentage of the purchase order value the lender may advance to pay
                your supplier. The remainder is withheld until the invoice is paid by
                the buyer. Actual rate depends on buyer quality, deal margin, and
                supplier payment terms.
              </p>
            </div>
            <div className="rounded-xl border border-[#0f0f0f]/30 bg-[#f5f5f5] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                PO financing fee (common range)
              </p>
              <p className="text-2xl font-semibold text-[#0f0f0f] tabular-nums mb-2">
                1 – 5% <span className="text-sm font-normal text-[#a3a3a3]">per 30 days</span>
              </p>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Fees typically accrue on the outstanding advance balance from funding
                date to buyer payment. A deal that takes 60 days from supplier payment
                to buyer settlement will accrue fees across both periods. Evaluate the
                total annualized cost, not just the per-period rate.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Reserve release
              </p>
              <p className="text-2xl font-semibold text-[#0f0f0f] tabular-nums mb-2">
                On buyer payment
              </p>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                The reserve — the portion of the invoice not advanced upfront — is
                returned to you after the buyer pays, minus any fees that accrued
                during the financing period. Early buyer payment reduces total fee cost.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              <span className="text-[#737373] font-medium">Worked illustration (not an offer):</span>{" "}
              A business receives a $500,000 PO from a national retailer. A lender advances
              85% ($425,000) directly to the supplier. The goods ship in 30 days; the buyer
              pays the invoice in 60 days. At a 3% per-30-day fee on the $425,000 outstanding
              balance, fees total approximately $25,500 across the two periods. The business
              receives the $75,000 reserve minus fees upon buyer payment, netting roughly
              $49,500 in reserve. This illustration is hypothetical and does not represent
              any specific lender's terms. Actual fees, advance rates, and timelines will vary.
            </p>
          </div>
        </div>
      </section>

      {/* ── Benefits and limitations ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Weighing your options
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-8 text-balance">
            Potential benefits and limitations of PO financing through factoring
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Potential benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "Enables acceptance of large orders that would otherwise be declined due to insufficient working capital.",
                  "Approval is driven primarily by the end buyer's credit — making it more accessible for newer businesses with thin credit histories.",
                  "No dilution of equity — PO financing is structured as a commercial financing arrangement, not an investment.",
                  "Supplier is paid directly by the lender, which can strengthen your supplier relationships by ensuring timely payment.",
                  "When paired with factoring, the entire order-to-cash cycle can be financed through a single provider with a streamlined process.",
                  "May scale with order volume — as your buyer relationships and order sizes grow, the financing facility may be able to grow with them.",
                ].map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg
                      className="flex-shrink-0 mt-0.5 text-[#0f0f0f]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 7.5l3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#a3a3a3] uppercase tracking-wide mb-4">
                Potential limitations
              </h3>
              <ul className="space-y-3">
                {[
                  "Higher effective cost compared to traditional bank lines of credit — fees accrue across the full fulfillment and payment cycle.",
                  "Only applicable to product-based, tangible-goods businesses in most standard programs; services and software are typically excluded.",
                  "Requires a creditworthy end buyer — businesses that sell to small, unverified, or consumer buyers generally cannot use this structure.",
                  "The buyer must be notified of the assignment and pay the factor directly, which some buyer relationships do not accommodate.",
                  "Thin-margin deals may not cover the fees — lenders often look for 15–20%+ gross margin as a floor to ensure viability.",
                  "Approval is not guaranteed; existing UCC liens on receivables or prior factoring arrangements may need to be resolved first.",
                  "Complex deal structures can extend due diligence timelines, and funding is not instantaneous — plan for 3–10 business days after documentation is complete.",
                ].map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg
                      className="flex-shrink-0 mt-0.5 text-[#a3a3a3]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 3l8 8M11 3l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry use cases ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Common use cases
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Industries and deal types where PO financing is commonly evaluated
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            These are illustrative examples of business types that commonly explore PO
            financing. Eligibility depends on each individual deal and lender criteria.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<RetailIcon />}
              title="Consumer Goods Distributors"
              description="Distributors fulfilling large retail chain orders — seasonal apparel, home goods, electronics accessories — that require significant upfront supplier payments before revenue is recognized."
              tags={["Retail", "Distribution", "Seasonal orders"]}
              href="/factoring/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<SupplyChainIcon />}
              title="Import and Wholesale"
              description="Importers sourcing internationally who carry lead times of 45–120 days before domestic delivery. Confirmed domestic purchase orders can support financing that covers overseas production and shipping."
              tags={["Import", "Wholesale", "International supply"]}
              href="/factoring/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<ManufacturingIcon />}
              title="Contract Manufacturers"
              description="Manufacturers winning first-time or unusually large contracts who need to procure raw materials, additional labor, or tooling ahead of production — before any invoice can be issued."
              tags={["Manufacturing", "Contract production", "Raw materials"]}
              href="/factoring/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<PurchaseOrderIcon />}
              title="Government Contractors"
              description="Businesses fulfilling federal, state, or municipal contracts face long payment cycles. The creditworthiness of a government buyer is generally considered strong, which can support PO financing applications."
              tags={["Government", "Federal contracts", "B2G"]}
              href="/factoring/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<InvoiceIcon />}
              title="Medical Supply and PPE"
              description="Medical distributors and suppliers filling hospital system or government agency orders for equipment, consumables, or PPE often use PO financing to fund large, time-sensitive procurement."
              tags={["Medical supply", "Healthcare", "PPE"]}
              href="/factoring/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<FactoringIcon />}
              title="Technology Hardware Resellers"
              description="VARs and technology resellers placing bulk orders with hardware vendors to fulfill enterprise or institutional customer contracts may qualify when the end buyer has verifiable payment history."
              tags={["Technology", "VAR", "Hardware"]}
              href="/factoring/purchase-order-financing"
            />
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Structure comparison
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            PO financing vs. invoice factoring vs. working capital
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            This table summarizes general structural differences. Actual terms depend
            on the lender, your deal, and your business profile.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="PO Financing"
          />
        </div>
      </section>

      {/* ── Alternatives to consider ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Alternatives to consider
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Other financing paths that may address similar needs
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            PO financing is one tool for a specific scenario. Depending on your
            business model, existing credit history, and the nature of the capital
            need, one of these alternatives may be a better potential fit.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<InvoiceIcon />}
              title="Invoice Factoring"
              description="If you have already shipped goods and issued invoices, standard invoice factoring may address your cash flow gap at lower fees than PO financing — and without the complexity of a pre-shipment structure."
              tags={["Factoring", "Receivables", "Post-delivery"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={<ABLIcon />}
              title="Asset-Based Lending"
              description="ABL facilities can advance against a pool of receivables, inventory, and equipment. If your business has recurring order flow and meaningful inventory, an ABL line may offer more flexibility than a deal-by-deal PO structure."
              tags={["ABL", "Inventory", "Revolving line"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<WorkingCapitalIcon />}
              title="Business Line of Credit"
              description="For businesses with established revenue and banking history, a revolving line of credit may provide capital on demand without deal-specific underwriting or the cost structure of factoring-based PO programs."
              tags={["Line of credit", "Revolving", "Flexible use"]}
              href="/business-line-of-credit"
            />
          </div>
        </div>
      </section>

      {/* ── Calculator link ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1">
                Calculator
              </p>
              <h3 className="text-lg font-semibold text-[#0f0f0f] mb-1">
                Estimate invoice factoring costs
              </h3>
              <p className="text-sm text-[#a3a3a3] max-w-md">
                Use our invoice factoring calculator to model how advance rates and fee
                structures affect net proceeds. Results are illustrative estimates only —
                not an offer or commitment from any lender.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-[#0f0f0f]/30 text-[#0f0f0f] text-sm font-semibold hover:bg-[#f5f5f5] hover:border-[#0f0f0f]/60 transition-colors whitespace-nowrap"
            >
              Open Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={FAQ_ITEMS}
        title="Purchase Order Financing — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Evaluate whether PO financing may fit your next large order"
        subtext="Submit a brief intake and ZEO will review which factoring and PO financing paths may be a potential fit for your business and deal. Subject to underwriting by third-party providers."
        primaryLabel="Start Application"
        primaryHref="/apply"
        secondaryLabel="Browse Factoring Options"
        secondaryHref="/factoring"
      />

      {/* ── Disclaimer ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="factoring" />
      </div>
    </main>
  );
}

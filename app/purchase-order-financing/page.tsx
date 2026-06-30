import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Purchase Order Financing | ZEO.co",
  description:
    "Learn how purchase order financing works for businesses — typical structures, requirements, costs, and how to evaluate whether it may be a fit for your situation. Subject to underwriting by third-party providers.",
  path: "/purchase-order-financing",
  keywords: [
    "purchase order financing",
    "PO financing",
    "purchase order funding",
    "PO funding for small business",
    "purchase order financing requirements",
    "purchase order financing rates",
    "inventory financing",
    "supplier financing",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function OrderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SupplierIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 13V7l4-4h6l4 4v6H2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <rect x="7" y="9" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 5h14l-1.5 6H3.5L2 5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M6 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 3l1-2h8l1 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 2.5C9 2.5 6.5 5 6.5 9s2.5 6.5 2.5 6.5M9 2.5C9 2.5 11.5 5 11.5 9s-2.5 6.5-2.5 6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 9h13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 13l4-4 3 2 4-5 3 2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 5h3v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SeasonalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 2v2M9 14v2M2 9h2M14 9h2M4.22 4.22l1.42 1.42M12.36 12.36l1.42 1.42M4.22 13.78l1.42-1.42M12.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FactoringIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 12h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SBAIcon() {
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
      <path
        d="M3 9a6 6 0 0 1 12 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M3 9a6 6 0 0 0 12 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M9 6v3l1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Financing Options", href: "/financing" },
  { label: "Purchase Order Financing" },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is the difference between purchase order financing and invoice factoring?",
    a: "Purchase order financing addresses the gap before a product is shipped — a provider pays your supplier so you can fulfill an order you have already received from a buyer. Invoice factoring, by contrast, addresses the gap after goods have been shipped and invoiced — you sell or pledge the outstanding invoice to receive cash before the buyer pays. They are different tools for different points in the order cycle. Some businesses use both: PO financing to fund production, then factoring to accelerate collection after delivery.",
  },
  {
    q: "Do I need good credit to qualify for purchase order financing?",
    a: "PO financing providers evaluate the transaction structure as much as your own credit. Because repayment depends on the creditworthiness of the end buyer — not just the borrower — some providers will work with businesses that have limited credit history if the purchase order is from a financially strong, established buyer. That said, each provider sets its own criteria, and approval is subject to underwriting. Your business's credit history may still be a factor in the provider's decision.",
  },
  {
    q: "What percentage of the purchase order value can typically be funded?",
    a: "Advance rates vary by provider and transaction, but many PO financing arrangements fund 70–100% of the supplier's cost to produce or source the goods, rather than the full face value of the purchase order. The specific advance rate depends on the buyer's creditworthiness, the nature of the goods, supplier risk, and the provider's own underwriting criteria. These figures are general benchmarks, not guarantees.",
  },
  {
    q: "What types of businesses are not a good fit for purchase order financing?",
    a: "PO financing generally does not work for service-based businesses, since there is no physical inventory or goods changing hands. It also tends not to apply when the underlying buyer is a consumer (retail) rather than a creditworthy commercial or institutional buyer, when orders are very small (many providers have minimum thresholds), or when the goods involve complex manufacturing risk the provider is unwilling to assume. Some providers will not fund orders where the supplier and borrower are related parties.",
  },
  {
    q: "How does repayment work for purchase order financing?",
    a: "In most structures, the PO financing provider pays the supplier directly and holds a claim against the receivable generated when you deliver the goods and invoice your buyer. When the buyer pays the invoice, the provider is repaid from those proceeds, and you receive any remaining balance after fees. Some providers work alongside an invoice factoring arrangement, where the factoring company pays out the PO financier and then waits for the buyer to pay the invoice. The exact mechanics vary by provider and deal structure.",
  },
];

// ── Comparison data ───────────────────────────────────────────────────────────

const COMPARISON_COLUMNS = ["PO Financing", "Invoice Factoring", "Business Line of Credit"];

const COMPARISON_ROWS = [
  {
    feature: "When it applies",
    "PO Financing": "Before goods are shipped",
    "Invoice Factoring": "After goods are invoiced",
    "Business Line of Credit": "Any time (revolving)",
  },
  {
    feature: "Collateral",
    "PO Financing": "The purchase order / goods",
    "Invoice Factoring": "Outstanding invoices",
    "Business Line of Credit": "Varies; may be unsecured",
  },
  {
    feature: "Repaid by",
    "PO Financing": "Buyer payment on delivery",
    "Invoice Factoring": "Buyer payment on invoice",
    "Business Line of Credit": "Borrower draws/repayments",
  },
  {
    feature: "Cost structure",
    "PO Financing": "Fees on funded amount",
    "Invoice Factoring": "Discount rate on invoices",
    "Business Line of Credit": "Interest on drawn balance",
  },
  {
    feature: "Best for",
    "PO Financing": "Large orders, capital gap at fulfillment",
    "Invoice Factoring": "Accelerating collections on B2B invoices",
    "Business Line of Credit": "Flexible, recurring short-term needs",
  },
  {
    feature: "Credit focus",
    "PO Financing": "Buyer creditworthiness emphasized",
    "Invoice Factoring": "Buyer creditworthiness emphasized",
    "Business Line of Credit": "Borrower creditworthiness",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PurchaseOrderFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Financing Options", url: "https://zeo.co/financing" },
          { name: "Purchase Order Financing", url: "https://zeo.co/purchase-order-financing" },
        ])}
      />

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Financing"
        title="Purchase Order Financing"
        subtitle="A funding structure designed to help businesses fulfill large or unexpected orders when they lack the working capital to pay suppliers upfront. Subject to lender underwriting and third-party approval."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical advance rates"
              value="70 – 100%"
              note="Of supplier cost; subject to underwriting"
            />
            <MetricCard
              label="Common funding amounts"
              value="$50K – $5M+"
              note="Varies by provider and order size"
            />
            <MetricCard
              label="Funding timeline"
              value="3 – 10 days"
              note="After approval; deal-dependent"
              highlight
            />
            <MetricCard
              label="Typical fee range"
              value="1.5 – 6% / mo"
              note="Actual fees set by third-party provider"
            />
          </div>
        </div>
      </section>

      {/* ── Who it is for ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Who it may fit
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Businesses that win orders they cannot currently afford to fulfill
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm">
                Purchase order financing is designed for a specific problem: a confirmed order
                exists, the buyer is creditworthy, but the seller does not have the cash on
                hand to pay suppliers, manufacturers, or distributors before shipment. If your
                business regularly extends credit to buyers and has capital tied up in
                inventory production cycles, PO financing may be worth evaluating as one
                potential path.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Product resellers and distributors",
                  body:
                    "Companies that source finished goods from suppliers and sell to retailers, wholesalers, or institutional buyers often face a cash gap between paying the supplier and collecting from the buyer. PO financing can bridge that gap when a large or time-sensitive order arrives.",
                },
                {
                  heading: "Manufacturers with large confirmed orders",
                  body:
                    "A manufacturer that lands a significant contract — a big-box retailer, government agency, or enterprise client — may need to purchase raw materials or components before any revenue from the order is received. PO financing can fund that production cycle.",
                },
                {
                  heading: "Importers and international traders",
                  body:
                    "Businesses sourcing goods from overseas suppliers often face extended lead times and must pay suppliers weeks or months before goods arrive and can be delivered to buyers. PO financing structures are commonly used in import/export contexts.",
                },
                {
                  heading: "Seasonal businesses managing demand spikes",
                  body:
                    "A business that experiences concentrated demand in a short window — holiday goods, back-to-school products, or seasonal apparel — may need to fund a large inventory build-up well before cash flow from sales materializes.",
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

      {/* ── How it works ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            How it works
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8 text-balance">
            The PO financing cycle, step by step
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                step: "1",
                title: "You receive a confirmed purchase order",
                body:
                  "Your buyer — a creditworthy retailer, distributor, or institution — places a verifiable order. The PO must be confirmed and assignable for most providers to consider it.",
              },
              {
                step: "2",
                title: "Submit the order for review",
                body:
                  "You apply with the PO financier, providing the purchase order, buyer details, supplier invoices or quotes, and your business financials. The provider evaluates your buyer's credit, not just yours.",
              },
              {
                step: "3",
                title: "Provider pays your supplier",
                body:
                  "If approved, the financing provider pays your supplier directly — either fully or partially — so goods can be produced or sourced. You are not typically writing a check yourself.",
              },
              {
                step: "4",
                title: "Goods are delivered to your buyer",
                body:
                  "Once production is complete and goods are shipped, you deliver to your buyer and issue an invoice. Title to the goods and the resulting receivable are often assigned to or controlled by the provider.",
              },
              {
                step: "5",
                title: "Buyer pays; provider is repaid",
                body:
                  "Your buyer pays the invoice. The provider recovers its advance plus fees from those proceeds. You receive the remaining balance. Fees accrue for the time the capital was deployed.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <span className="inline-block text-[0.65rem] font-semibold tabular-nums text-[#0f0f0f] bg-[#0f2a14] border border-[#0f0f0f]/20 rounded-md px-2 py-0.5 mb-3">
                  Step {s.step}
                </span>
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{s.title}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common use cases ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Common use cases
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8 text-balance">
            Industries and scenarios where PO financing commonly applies
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<RetailIcon />}
              title="Consumer Goods and Retail Supply"
              description="Wholesalers and brands supplying major retail chains often face large inventory requirements with net-30 to net-90 payment terms. PO financing bridges the cash gap between production and payment."
              tags={["Wholesale", "Retail supply", "Consumer goods"]}
              href="/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<GlobeIcon />}
              title="Import and International Trade"
              description="Importers sourcing from overseas manufacturers frequently must pay factories in full before goods are loaded. PO financing can fund those upfront supplier payments against confirmed domestic buyer orders."
              tags={["Import", "Global trade", "Supplier payment"]}
              href="/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<SupplierIcon />}
              title="Government and Institutional Contracts"
              description="Small businesses awarded contracts with government agencies, school districts, or large institutions may lack the capital to fulfill the order. The creditworthiness of these buyers often makes PO financing more accessible."
              tags={["Government", "Institutional", "Contract fulfillment"]}
              href="/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<GrowthIcon />}
              title="Rapid Growth and New Large Accounts"
              description="A business that wins its largest customer to date — or lands multiple major accounts simultaneously — may suddenly need more capital than its existing cash flow can support. PO financing scales with order volume."
              tags={["Growth", "New accounts", "Scale"]}
              href="/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<SeasonalIcon />}
              title="Seasonal Inventory Build-Up"
              description="Businesses that must stock inventory for a concentrated selling season — holiday, back-to-school, or event-driven categories — can use PO financing to fund the inventory build before revenue arrives."
              tags={["Seasonal", "Inventory", "Holiday goods"]}
              href="/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<OrderIcon />}
              title="Specialty Manufacturing on Order"
              description="Manufacturers who produce custom goods to order — apparel, promotional products, specialty packaging, or industrial components — can use PO financing to fund raw material purchases tied to confirmed orders."
              tags={["Custom manufacturing", "Make-to-order", "Raw materials"]}
              href="/purchase-order-financing"
            />
          </div>
        </div>
      </section>

      {/* ── Typical requirements ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Typical requirements
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                What PO financing providers generally evaluate
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                PO financing is more transaction-centric than most lending products. Providers
                often weight the strength of the underlying purchase order and buyer credit as
                heavily as your own business financials. That said, meeting general benchmarks
                does not guarantee approval — each provider sets its own criteria.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Confirmed, assignable purchase order",
                    value: "Required in virtually all structures",
                    note: "The PO must come from a creditworthy buyer and be verifiable. Verbal or informal commitments typically do not qualify.",
                  },
                  {
                    label: "Buyer creditworthiness",
                    value: "Established commercial or institutional buyer preferred",
                    note: "Because repayment flows through the buyer's payment, providers closely scrutinize the buyer's payment history and financial standing.",
                  },
                  {
                    label: "Gross margin on the order",
                    value: "Often 15–30%+ minimum",
                    note: "PO financing fees must leave the borrower with meaningful profit after repayment. Razor-thin margin orders are often not fundable.",
                  },
                  {
                    label: "Minimum order size",
                    value: "Often $50K or higher",
                    note: "Many PO financing providers set minimums due to transaction costs. Some specialize in smaller deals; ask about thresholds.",
                  },
                  {
                    label: "Business type",
                    value: "Product-based (not service-based)",
                    note: "PO financing requires physical goods changing hands. Pure service businesses do not typically qualify.",
                  },
                  {
                    label: "Personal credit and business history",
                    value: "Reviewed; varies by provider",
                    note: "Some providers accept weaker borrower credit if the buyer is strong. Others maintain minimum thresholds for both.",
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

            {/* ── Cost discussion ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Understanding cost
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                How PO financing fees are typically structured
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                ZEO.co does not quote, set, or guarantee financing rates. Actual costs depend
                on the factors below and the specific terms offered by a third-party provider
                after underwriting your transaction.
              </p>
              <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Fee structure vs. interest rate.</span>{" "}
                  Unlike a traditional loan, most PO financing is priced as a flat percentage
                  fee per month (or per 30-day period) on the funded amount, not as an annual
                  interest rate. A 3% monthly fee on a 90-day transaction can equate to a
                  substantial annualized cost — always model the total fees against the gross
                  margin on the specific order before proceeding.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Funding duration.</span>{" "}
                  Fees accrue for the time capital is deployed — from supplier payment until
                  your buyer pays the invoice. If your buyer pays in 30 days, costs are lower
                  than if they pay in 90. Longer buyer payment terms or delays in delivery
                  increase the cost of the transaction.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Advance rate and deal structure.</span>{" "}
                  Some providers fund 100% of supplier costs; others fund a lower percentage
                  and require you to contribute the remainder. A lower advance rate reduces
                  provider risk and may result in better pricing, but requires more capital
                  from your side.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Buyer and supplier risk.</span>{" "}
                  Providers offering funds against a large, publicly traded retailer with
                  predictable payment behavior typically price differently than those funding
                  orders from a smaller or less established buyer. Supplier concentration,
                  geography, and production risk also factor in.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Additional fees.</span>{" "}
                  Watch for due diligence fees, documentation fees, and wire/transfer costs,
                  which may be charged on top of the base financing fee. Always request a
                  complete fee schedule and a total-cost illustration before signing any
                  agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pros and cons ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Weighing your options
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8 text-balance">
            Potential advantages and drawbacks
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Potential advantages
              </h3>
              <ul className="space-y-3">
                {[
                  "Enables businesses to accept and fulfill orders that would otherwise exceed their available working capital.",
                  "Approval often depends more on the buyer's creditworthiness than the borrower's — potentially accessible to newer or lower-credit businesses with strong customers.",
                  "No long-term debt obligation — the financing is transaction-specific and repaid when the buyer pays the invoice.",
                  "Can scale with order size, making it a flexible tool for businesses with lumpy or rapidly growing order volumes.",
                  "Preserves existing credit lines and bank relationships for other uses.",
                  "May allow a growing business to accept a transformational contract it could not otherwise fund.",
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
                Potential drawbacks
              </h3>
              <ul className="space-y-3">
                {[
                  "Cost can be high relative to traditional financing, particularly when expressed as an annualized rate. Margins on the underlying order must be sufficient to absorb fees.",
                  "Only works for product-based businesses with verifiable purchase orders — not applicable to service businesses.",
                  "The provider typically controls the payment flow, meaning your buyer may need to be notified and directed to pay a new account.",
                  "If your buyer delays payment or disputes the invoice, fees continue to accrue — extending your effective cost.",
                  "Approval is not guaranteed. Providers may decline deals if the buyer, supplier, or goods do not meet their criteria.",
                  "Complex deal structures may require legal documentation, supplier agreements, and UCC filings that add administrative burden.",
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

      {/* ── Comparison table ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Structure comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-6 text-balance">
            PO financing vs. invoice factoring vs. line of credit
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            These three tools are often confused or conflated. The comparison below highlights
            key structural differences. Actual terms vary by provider and transaction.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="PO Financing"
          />
        </div>
      </section>

      {/* ── Alternatives ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Alternatives to consider
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            Other financing paths that may be relevant
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Purchase order financing is one option among many. Depending on your business
            profile, order cadence, and how capital-intensive your operations are, one of
            these alternatives may be a better potential fit — or a useful complement.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <FinancingPathCard
              icon={<FactoringIcon />}
              title="Invoice Factoring"
              description="Sell or pledge outstanding invoices to receive cash before your buyer pays. Complements PO financing well for businesses managing both ends of the order cycle."
              tags={["Receivables", "Post-shipment", "B2B invoices"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Line of Credit"
              description="A revolving credit facility you draw against as needed. More flexible than PO financing but typically requires stronger business credit and does not scale automatically with order size."
              tags={["Revolving", "Flexible use", "Draw and repay"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loans"
              description="SBA-backed term loans can fund working capital needs at potentially longer terms. Better suited to ongoing capital needs than individual transaction financing."
              tags={["SBA", "Government-backed", "Working capital"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<WorkingCapitalIcon />}
              title="Working Capital Loans"
              description="Short-term cash-based financing not tied to a specific order. May be a fit for businesses that need general liquidity rather than transaction-specific funding."
              tags={["Short-term", "Cash", "General use"]}
              href="/working-capital"
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
              <h3 className="text-lg font-semibold text-white mb-1">
                Estimate PO financing cost on an order
              </h3>
              <p className="text-sm text-[#a3a3a3] max-w-md">
                Run a rough cost illustration based on order size, expected funding duration,
                and a sample fee rate. Results are illustrative only — not a quote or
                commitment from any lender or provider.
              </p>
            </div>
            <Link
              href="/calculators/purchase-order-financing"
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-[#0f0f0f]/30 text-[#0f0f0f] text-sm font-semibold hover:bg-[#0f2a14] hover:border-[#0f0f0f]/60 transition-colors whitespace-nowrap"
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
        headline="Explore purchase order financing options for your business"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit for your situation. Subject to underwriting by third-party providers. Results are not guaranteed."
        primaryLabel="Start Application"
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

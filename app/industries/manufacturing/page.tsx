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
  title: "Manufacturing Financing | ZEO.co",
  description:
    "Explore financing options for manufacturers — SBA loans, equipment financing, invoice factoring, and working capital lines. Learn what lenders evaluate for manufacturing businesses, typical requirements, and which structures may be a fit, subject to underwriting.",
  path: "/industries/manufacturing",
  keywords: [
    "manufacturing financing",
    "equipment financing manufacturers",
    "SBA loan manufacturing",
    "invoice factoring manufacturing",
    "working capital manufacturing",
    "manufacturing business loans",
    "asset-based lending manufacturing",
    "machinery financing",
    "production financing",
    "manufacturer line of credit",
  ],
});

// ── Icons ──────────────────────────────────────────────────────────────────────

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M3.7 14.3l1.4-1.4M12.9 5.1l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EquipmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="6" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6V4.5a3 3 0 0 1 6 0V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 10v2M7 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3 7h12M3 7V6l6-3 6 3v1M5 7v7M9 7v7M13 7v7M3 14h12"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h12M3 5.5h8M3 12.5h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="14" cy="9" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ABLIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="11" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="7.5" y="7.5" width="5" height="8.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="13" y="4" width="3" height="12" rx="1" stroke="currentColor" strokeWidth="1.3" />
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

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-[#0f0f0f]">
      <path d="M3 7l2.5 2.5L11 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-[#a3a3a3]">
      <path d="M7 2L1.5 12h11L7 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M7 6v3M7 10.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// ── Financing paths ────────────────────────────────────────────────────────────

const financingPaths = [
  {
    icon: <SBAIcon />,
    title: "SBA 7(a) Loans",
    description:
      "Long-term, lower-rate financing backed by an SBA guarantee. Manufacturers may use 7(a) proceeds for equipment, real estate, working capital, or business acquisition. Loan amounts up to $5 million; terms vary by use of proceeds. Subject to SBA eligibility and lender underwriting.",
    tags: ["Up to $5M", "10–25 year terms", "Collateral required", "Owner-occupied RE eligible"],
    href: "/sba-loans",
    highlight: true,
  },
  {
    icon: <EquipmentIcon />,
    title: "Equipment Financing",
    description:
      "Loans or leases structured specifically around machinery, CNC equipment, presses, conveyors, and other production assets. The equipment itself typically serves as primary collateral, which can make approval more accessible for businesses with limited credit history. SBA 504 is a common structure for larger capital purchases.",
    tags: ["Equipment as collateral", "Fixed-rate options", "SBA 504 eligible", "New & used assets"],
    href: "/equipment-financing",
  },
  {
    icon: <InvoiceIcon />,
    title: "Invoice Factoring / A/R Financing",
    description:
      "Manufacturers billing on net-30 to net-90 terms to distributors, OEMs, or commercial buyers carry significant working capital tied up in receivables. Factoring converts those invoices to immediate cash. Approval is based largely on the creditworthiness of the business's customers, not the manufacturer.",
    tags: ["70–90% advance", "B2B invoices", "No new debt", "Customer credit-based"],
    href: "/factoring",
  },
  {
    icon: <LineOfCreditIcon />,
    title: "Business Line of Credit",
    description:
      "A revolving draw facility for managing seasonal production cycles, raw material purchases, and payroll during ramp periods. Draws are repaid and re-borrowed as needed. Available through banks, credit unions, and alternative lenders; terms and eligibility vary significantly by provider.",
    tags: ["Revolving access", "Seasonal flexibility", "Working capital", "Pay-as-used interest"],
    href: "/business-line-of-credit",
  },
  {
    icon: <ABLIcon />,
    title: "Asset-Based Lending",
    description:
      "A revolving credit facility secured by a borrowing base of accounts receivable and inventory. Well-suited for manufacturers with substantial inventory holdings and consistent receivables. Lender conducts field exams and monthly borrowing base certificates; availability fluctuates with collateral values.",
    tags: ["A/R + inventory", "Borrowing base", "Field exams", "$1M+ facilities"],
    href: "/asset-based-lending",
  },
  {
    icon: <GearIcon />,
    title: "Working Capital Loans",
    description:
      "Shorter-term financing for bridging production cycles, purchasing raw materials ahead of a large order, or covering overhead during slow months. May be structured as term loans or revenue-based facilities. Terms and cost vary widely — review total repayment carefully before accepting any offer.",
    tags: ["Short-term", "Fast funding", "Revenue-based options", "Subject to underwriting"],
    href: "/working-capital-loans",
  },
];

// ── Comparison table ───────────────────────────────────────────────────────────

const comparisonColumns = ["SBA 7(a)", "Equipment Loan", "A/R Factoring", "ABL Line"];
const comparisonRows = [
  {
    feature: "Primary use",
    "SBA 7(a)": "Multi-purpose",
    "Equipment Loan": "Specific machinery",
    "A/R Factoring": "Receivables acceleration",
    "ABL Line": "Ongoing working capital",
  },
  {
    feature: "Approval basis",
    "SBA 7(a)": "Business credit & cash flow",
    "Equipment Loan": "Asset value + business credit",
    "A/R Factoring": "Customer creditworthiness",
    "ABL Line": "Collateral pool + financials",
  },
  {
    feature: "Typical term",
    "SBA 7(a)": "5–25 years",
    "Equipment Loan": "3–7 years",
    "A/R Factoring": "Ongoing facility",
    "ABL Line": "12-month revolving",
  },
  {
    feature: "Collateral",
    "SBA 7(a)": "Business assets + personal guarantee",
    "Equipment Loan": "Equipment financed",
    "A/R Factoring": "Receivables assigned",
    "ABL Line": "A/R and inventory",
  },
  {
    feature: "Typical funding speed",
    "SBA 7(a)": "30–90 days",
    "Equipment Loan": "1–3 weeks",
    "A/R Factoring": "1–3 business days",
    "ABL Line": "2–6 weeks (initial setup)",
  },
  {
    feature: "Best fit when",
    "SBA 7(a)": "Expanding capacity or buying RE",
    "Equipment Loan": "Upgrading specific machinery",
    "A/R Factoring": "Cash tied up in invoices",
    "ABL Line": "Fluctuating inventory cycles",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What financing options are most commonly considered by manufacturers?",
    a: "Manufacturing businesses often evaluate a mix of structures depending on what they need capital for. SBA 7(a) and 504 loans are frequently used for equipment purchases, facility expansions, and real estate acquisition, given their longer terms and government-backed guarantee structure. Equipment-specific financing — secured by the machinery being purchased — is common for CNC machines, presses, and production lines. Invoice factoring and asset-based lending are widely used to manage working capital tied up in receivables and inventory. The right structure depends on the business's revenue, collateral base, credit profile, and how quickly funds are needed — all factors subject to third-party underwriting.",
  },
  {
    q: "How do lenders evaluate a manufacturing business differently from a service business?",
    a: "Manufacturers typically carry more tangible assets — equipment, inventory, real property — which can serve as collateral in ways that service businesses cannot offer. Lenders evaluating manufacturers pay close attention to equipment age and condition, inventory composition and turnover, concentration among customers and suppliers, gross margins relative to industry benchmarks, and the stability of production capacity. Environmental factors and regulatory compliance can also surface during due diligence. Businesses with high customer concentration — for example, a single OEM representing more than 30–40% of revenue — may face additional scrutiny, as the loss of that relationship would materially affect debt service coverage.",
  },
  {
    q: "Can a manufacturer use SBA financing to buy equipment or expand a facility?",
    a: "Manufacturers may potentially qualify for SBA 7(a) or 504 financing for equipment purchases, leasehold improvements, owner-occupied real estate, and general working capital needs, subject to SBA eligibility requirements and lender underwriting. The SBA 504 program is specifically designed for fixed-asset acquisition — including heavy equipment and real property — and typically involves a lender contributing a portion of the financing alongside a Certified Development Company (CDC). ZEO.co is not the SBA, an SBA lender, or a government agency. Eligibility, terms, and availability are determined by participating lenders.",
  },
  {
    q: "How does invoice factoring work for a manufacturer billing distributors or OEMs?",
    a: "Manufacturers that sell on net-30 to net-90 terms to distributors, wholesale buyers, or original equipment manufacturers often have significant cash tied up waiting for payment. Factoring allows the manufacturer to sell those outstanding invoices to a third-party factoring company in exchange for an advance — typically 70–90% of the invoice face value — within 1–3 business days. The factor then collects directly from the customer. Because approval is based primarily on the creditworthiness of the manufacturer's customers rather than the manufacturer itself, this structure may be accessible to businesses that would not qualify for traditional bank credit. The manufacturer receives the remaining reserve balance, minus the factor's discount fee, once the customer pays.",
  },
  {
    q: "What does debt service coverage ratio (DSCR) mean for a manufacturing loan application?",
    a: "Debt service coverage ratio measures a business's ability to meet its debt obligations from operating income. Lenders typically calculate DSCR by dividing net operating income by total annual debt service — principal and interest on all outstanding obligations, including the proposed new financing. A DSCR below 1.0x means the business does not generate sufficient cash flow to cover its debt payments from operations. Most conventional lenders and SBA lenders look for a minimum DSCR of 1.20x to 1.25x on a historical basis. Manufacturers with seasonal revenue patterns may present DSCR on a rolling or annualized basis — lenders vary in how they treat seasonality, depreciation add-backs, and owner compensation adjustments.",
  },
];

// ── Lender requirement items ───────────────────────────────────────────────────

const lenderRequirements = [
  {
    label: "Time in business",
    detail: "Most conventional lenders look for 2+ years of operating history with auditable financials. SBA programs may accept less, subject to owner experience.",
  },
  {
    label: "Revenue and DSCR",
    detail: "Lenders evaluate whether operating cash flow covers proposed debt service — typically 1.20x–1.25x DSCR minimum, though requirements vary by program and lender.",
  },
  {
    label: "Equipment appraisals",
    detail: "For equipment-secured financing, the age, condition, and orderly liquidation value of machinery affects advance rates and terms offered.",
  },
  {
    label: "Accounts receivable aging",
    detail: "For factoring or ABL, lenders review A/R aging schedules — concentration among customers, dilution rates, and proportion of current vs. past-due invoices matter.",
  },
  {
    label: "Inventory composition",
    detail: "ABL lenders assess inventory quality: raw materials, WIP, and finished goods are valued differently. Perishable, specialized, or slow-moving inventory reduces borrowing base.",
  },
  {
    label: "Environmental compliance",
    detail: "Manufacturers operating facilities may face lender inquiries about environmental liabilities, regulatory permits, and compliance status — especially for real estate-secured loans.",
  },
  {
    label: "Customer concentration",
    detail: "High dependence on a single customer or OEM relationship is a common underwriting concern. Lenders may limit proceeds or apply stress scenarios to concentration risk.",
  },
  {
    label: "Personal guarantee",
    detail: "Most small business lenders require a personal guarantee from owners with 20%+ equity. SBA guaranty does not eliminate the personal guarantee requirement.",
  },
];

// ── Financing challenges ───────────────────────────────────────────────────────

const challenges = [
  {
    title: "Long production-to-payment cycles",
    body: "Manufacturers often carry costs for raw materials, labor, and overhead well before finished goods ship and invoices are paid. Net-60 or net-90 payment terms from distributors and OEMs create persistent gaps between cash out and cash in.",
  },
  {
    title: "Capital-intensive equipment needs",
    body: "CNC machines, injection molding equipment, stamping presses, and industrial conveyors represent major capital outlays. Replacing aging machinery or expanding production capacity can require hundreds of thousands to millions of dollars in a single transaction.",
  },
  {
    title: "Inventory carrying costs",
    body: "Seasonal demand patterns, bulk material purchasing, and just-in-case inventory buffers tie up working capital in warehouses. The cash locked in raw materials and finished goods inventory can be significant relative to a manufacturer's liquid assets.",
  },
  {
    title: "Customer and supplier concentration",
    body: "Many manufacturers depend on a small number of customers for a majority of revenue, or on specific suppliers for critical inputs. This concentration can complicate lender underwriting and represents real business risk if a relationship changes.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <PageHero
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Manufacturing Financing" },
        ]}
        eyebrow="Industry"
        title="Manufacturing Financing"
        subtitle="Manufacturing businesses face a distinct capital structure: heavy equipment, long payment cycles, and working capital tied up in inventory and receivables. Explore financing structures that may be a fit, subject to underwriting by third-party providers."
      />

      {/* ── Key metrics ──────────────────────────────────────────────────────── */}
      <section className="border-b border-[#e5e5e5] py-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="SBA 7(a) max loan"
              value="$5M"
              note="Multi-purpose; terms vary by use of proceeds and lender"
            />
            <MetricCard
              label="Equipment advance rate"
              value="80–100"
              unit="% of asset value"
              note="Varies by equipment type, age, and lender policy"
            />
            <MetricCard
              label="A/R factoring advance"
              value="70–90"
              unit="% of invoice"
              note="Based on customer creditworthiness; reserve released on payment"
              highlight
            />
            <MetricCard
              label="Typical DSCR floor"
              value="1.20–1.25x"
              note="Minimum debt service coverage most lenders require; varies by program"
            />
          </div>
        </div>
      </section>

      {/* ── Financing challenges ──────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Industry Context
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2 text-balance">
            Key financing challenges in manufacturing
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            Understanding the structural cash flow dynamics of manufacturing helps clarify which financing structures are most relevant — and why the same approach that works for a service business may not fit a manufacturer.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <h3 className="font-semibold text-[#0f0f0f] text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy ─────────────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8 text-sm text-[#737373] leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Why manufacturing financing is structurally different
                </h2>
                <p>
                  The financial profile of a manufacturing operation differs from most service or retail businesses in ways that matter to lenders. Manufacturers typically carry substantial fixed assets — machinery, tooling, production equipment — that can serve as collateral but also represent concentrated depreciation. They hold inventory at multiple stages: raw materials purchased before production begins, work-in-process that has absorbed labor and overhead but is not yet a sellable product, and finished goods awaiting shipment or buyer acceptance.
                </p>
                <p className="mt-3">
                  This asset structure creates real financing opportunities. Equipment-secured loans can fund machinery upgrades without requiring unsecured credit. Asset-based lending facilities can draw on both receivables and inventory simultaneously. Invoice factoring can convert slow-paying distributor accounts into immediate working capital. But it also creates underwriting complexity: lenders must evaluate asset age and condition, inventory liquidity, and the real-world marketability of specialized equipment in a forced-sale scenario.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Working capital timing: the production-to-payment gap
                </h2>
                <p>
                  A manufacturer buys raw materials, runs production, inspects and ships finished goods, invoices the customer, and then waits. A net-60 payment term from a distributor means that cash paid for materials in week one might not return as revenue until week ten or beyond. During that period, the business continues to pay wages, utilities, insurance, and lease costs. This structural mismatch between cash outflows and inflows is not a sign of business failure — it is a normal feature of manufacturing operations — but it requires deliberate working capital management.
                </p>
                <p className="mt-3">
                  Factoring and asset-based lending exist specifically to address this timing gap. Rather than waiting for customers to pay, a manufacturer can monetize the receivable immediately. The cost — the factor&apos;s discount fee or the ABL line&apos;s interest — is the price of bridging the gap. Whether that cost is justified depends on what the capital enables: taking on a larger order, maintaining payroll through a slow quarter, or simply not carrying a supplier payable past its discount window.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Equipment financing: new capacity vs. replacement
                </h2>
                <p>
                  Equipment financing decisions in manufacturing typically fall into two categories: replacing aging or obsolete machinery to maintain current production, and adding new capacity to serve additional demand. Both may be financeable, but lenders evaluate them differently. Replacement purchases are generally easier to underwrite — existing revenue streams demonstrate debt service capacity, and the existing collateral pool supports the transaction. Capacity expansion tied to a new customer relationship or a projected ramp-up involves more uncertainty, and lenders may want to see purchase orders, letters of intent, or historical relationships with the buyers who are driving the expansion.
                </p>
                <p className="mt-3">
                  SBA 504 financing is widely used for significant fixed-asset purchases in manufacturing. Under this structure, a conventional lender typically provides 50% of the project cost, a Certified Development Company (CDC) provides up to 40% through an SBA-guaranteed debenture, and the borrower contributes at least 10% as a down payment. Terms on the CDC portion are fixed for 10 or 25 years, which provides rate certainty on a major portion of the financing. SBA 504 is subject to SBA program requirements and lender approval — ZEO.co is not the SBA or an SBA lender.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Navigating customer concentration and supply chain risk
                </h2>
                <p>
                  Many small and mid-size manufacturers operate as suppliers to one or a few large customers — an OEM, a national distributor, or a major retailer. This concentration can create underwriting friction. If a single customer represents 40–50% or more of annual revenue, lenders may ask hard questions about what happens if that relationship changes. Some lenders apply a stress scenario where that customer is removed entirely; if the remaining business cannot cover debt service, the loan may be declined or structured with more restrictive covenants.
                </p>
                <p className="mt-3">
                  Supplier concentration carries similar risk. A manufacturer dependent on a single overseas supplier for a critical raw material may face lender questions about supply chain resilience, particularly after the disruptions of recent years. Demonstrating diversification, alternative sourcing arrangements, or contractual protections with key customers and suppliers can strengthen a financing application.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                  Signals lenders look for
                </p>
                <ul className="space-y-3">
                  {[
                    "Consistent revenue with identifiable customer base",
                    "DSCR of 1.20x+ on historical financials",
                    "Equipment with verifiable appraised value",
                    "Clean A/R aging — limited past-due concentration",
                    "Inventory that is sellable, not slow-moving or specialized",
                    "2+ years operating history with tax returns",
                    "Owners able to provide personal guarantee",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#737373] leading-relaxed">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                  Common underwriting concerns
                </p>
                <ul className="space-y-3">
                  {[
                    "Customer concentration above 40–50% of revenue",
                    "Equipment that is highly specialized or illiquid",
                    "Inventory with slow turnover or WIP-heavy composition",
                    "Environmental liabilities on owned real estate",
                    "Existing blanket lien that cannot be subordinated",
                    "Negative DSCR or declining revenue trend",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#a3a3a3] leading-relaxed">
                      <AlertIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] p-5">
                <p className="text-xs font-semibold text-[#0f0f0f] mb-2">
                  Not sure which structure fits?
                </p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-4">
                  Submit a brief intake describing your financing need, revenue, and asset base. ZEO will review potential paths subject to third-party underwriting.
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f0f0f] hover:text-[#0f0f0f] transition-colors"
                >
                  Get started <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Financing path cards ──────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Financing Structures
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Products manufacturers commonly consider
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            No single financing structure fits every manufacturing operation. The right path depends on what the capital is for, the business&apos;s asset base, and its credit and revenue profile — all subject to third-party underwriting.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {financingPaths.map((card) => (
              <FinancingPathCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Lender requirements ───────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            What Lenders Evaluate
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Typical requirements for manufacturing financing
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            Requirements vary by lender, program, and loan type. The items below reflect common criteria across conventional bank, SBA, and alternative lender underwriting for manufacturing businesses — not a guarantee of eligibility.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {lenderRequirements.map((req) => (
              <div
                key={req.label}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">
                  {req.label}
                </p>
                <p className="text-xs text-[#737373] leading-relaxed">{req.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Manufacturing financing structures side by side
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            This is a general reference — actual terms from third-party providers will vary. Subject to underwriting and approval.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are general market observations and are not offers, commitments, or guaranteed terms. ZEO.co is not a lender.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <FAQ
        items={faqItems}
        title="Frequently Asked Questions: Manufacturing Financing"
      />

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Evaluate financing options for your manufacturing business"
        subtext="Submit a brief intake describing your capital need, revenue, and asset base. ZEO will review potential financing paths with third-party providers, subject to underwriting and approval."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing"
        secondaryHref="/financing"
      />

      {/* ── Disclaimer ────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-12">
        <ProductDisclaimer type="general" />
      </div>
    </div>
  );
}

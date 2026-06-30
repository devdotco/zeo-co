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
  title: "Invoice Factoring and A/R Financing | ZEO.co",
  description:
    "Explore invoice factoring, spot factoring, government receivables, and non-recourse structures. Learn how accounts receivable financing works, typical advance rates, fee structures, and which businesses may qualify — subject to underwriting by third-party providers.",
  path: "/factoring",
  keywords: [
    "invoice factoring",
    "accounts receivable financing",
    "AR financing",
    "spot factoring",
    "non-recourse factoring",
    "recourse factoring",
    "government invoice factoring",
    "construction factoring",
    "staffing factoring",
    "freight factoring",
    "invoice advance rate",
    "factoring reserve account",
  ],
});

// ── Icons ──────────────────────────────────────────────────────────────────────

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SpotIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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

function GovIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 7h12M3 7V6l6-3 6 3v1M5 7v7M9 7v7M13 7v7M3 14h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M1.5 12.5h1m11 0h1.5M1.5 5h10v7.5H1.5V5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 7.5h3l2 2.5v2.5h-5V7.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4.5" cy="13" r="1.25" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13.5" cy="13" r="1.25" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 15c0-2.76 2.46-5 5.5-5s5.5 2.24 5.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 4.5a2.5 2.5 0 0 1 0 5M16.5 15c0-2.2-1.4-4.06-3.5-4.75" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

// ── Waterfall Step ─────────────────────────────────────────────────────────────

function WaterfallStep({
  step,
  label,
  detail,
  accent,
  isLast,
}: {
  step: string;
  label: string;
  detail: string;
  accent?: boolean;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-xs font-semibold tabular-nums ${
            accent
              ? "border-[#0f0f0f]/50 bg-[#f5f5f5] text-[#0f0f0f]"
              : "border-[#e5e5e5] bg-[#f5f5f5] text-[#737373]"
          }`}
        >
          {step}
        </div>
        {!isLast && <div className="mt-1 w-px flex-1 bg-[#e5e5e5]" />}
      </div>
      <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
        <p className={`text-sm font-semibold mb-0.5 ${accent ? "text-[#0f0f0f]" : "text-[#0f0f0f]"}`}>
          {label}
        </p>
        <p className="text-sm text-[#a3a3a3] leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

// ── Subpage Types ──────────────────────────────────────────────────────────────

const factoringTypes = [
  {
    icon: <InvoiceIcon />,
    title: "Standard Invoice Factoring",
    description:
      "Sell outstanding B2B invoices to a factoring company in exchange for an immediate advance, typically 70–90% of face value. The factor collects from your customer directly. Best suited for businesses with strong receivables but cash flow gaps between invoice and payment.",
    tags: ["B2B invoices", "70–90% advance", "30–120 day terms", "Ongoing facility"],
    href: "/factoring/invoice-factoring",
  },
  {
    icon: <SpotIcon />,
    title: "Spot Factoring",
    description:
      "Factor individual invoices on a one-off basis rather than committing to a full facility. Useful when a business needs liquidity on a specific receivable without ongoing obligations. May carry higher per-invoice fees than contract factoring arrangements.",
    tags: ["Single invoice", "No long-term contract", "Flexible", "Higher fee rate"],
    href: "/factoring/spot-factoring",
  },
  {
    icon: <ShieldIcon />,
    title: "Non-Recourse Factoring",
    description:
      "In non-recourse structures, the factor assumes credit risk if an approved customer becomes insolvent and cannot pay. Protects the seller from bad debt losses on covered invoices. Typically requires the factor to approve each debtor and may carry a higher discount rate than recourse factoring.",
    tags: ["Credit risk transfer", "Insolvency protection", "Debtor approval", "Higher fees"],
    href: "/factoring/non-recourse-factoring",
  },
  {
    icon: <GovIcon />,
    title: "Government Receivables Factoring",
    description:
      "Factoring invoices owed by federal, state, or municipal agencies. Requires compliance with the Assignment of Claims Act for federal receivables. Factors specializing in government A/R understand the longer payment cycles common in public-sector contracting.",
    tags: ["Federal & state", "Assignment of Claims Act", "Longer cycles", "Compliance focus"],
    href: "/factoring/government-factoring",
  },
  {
    icon: <TruckIcon />,
    title: "Freight & Transportation Factoring",
    description:
      "Specialized factoring for trucking carriers, freight brokers, and logistics operators. Factors in this space often provide fuel advances, same-day funding, and back-office support including invoice processing. Quick-pay programs from brokers may compete directly.",
    tags: ["Carriers & brokers", "Same-day funding", "Fuel advances", "Back-office support"],
    href: "/factoring/freight-factoring",
  },
  {
    icon: <UsersIcon />,
    title: "Staffing & Payroll Factoring",
    description:
      "Staffing agencies face a persistent mismatch: payroll is due weekly, but client invoices may not clear for 30–60 days. Factoring bridges that gap. Some staffing factors offer payroll funding as a bundled service alongside receivables financing.",
    tags: ["Weekly payroll gap", "Client invoices", "30–60 day cycles", "Bundled payroll"],
    href: "/factoring/staffing-factoring",
  },
];

// ── Comparison data ────────────────────────────────────────────────────────────

const comparisonColumns = ["Invoice Factoring", "Business Line of Credit", "MCA"];
const comparisonRows = [
  {
    feature: "Primary basis for approval",
    "Invoice Factoring": "Customer credit quality",
    "Business Line of Credit": "Business creditworthiness",
    MCA: "Revenue volume & history",
  },
  {
    feature: "Typical speed to funding",
    "Invoice Factoring": "1–3 business days",
    "Business Line of Credit": "1–4 weeks",
    MCA: "24–72 hours",
  },
  {
    feature: "Repayment structure",
    "Invoice Factoring": "Customer pays factor",
    "Business Line of Credit": "Monthly draws & repayments",
    MCA: "Daily/weekly remittance",
  },
  {
    feature: "Typical advance on collateral",
    "Invoice Factoring": "70–90% of invoice face",
    "Business Line of Credit": "Varies by lender",
    MCA: "Based on future revenue",
  },
  {
    feature: "Impact on customer relationship",
    "Invoice Factoring": "Factor may contact customer",
    "Business Line of Credit": "No customer contact",
    MCA: "No customer contact",
  },
  {
    feature: "Best fit for",
    "Invoice Factoring": "B2B with slow-paying clients",
    "Business Line of Credit": "Established businesses",
    MCA: "High-volume retail/service",
  },
];

// ── FAQ data ───────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What is invoice factoring and how does it differ from a loan?",
    a: "Invoice factoring is the sale of accounts receivable to a third party (the factor) at a discount. Unlike a loan, the business is not borrowing against the invoice — it is selling it. The factor advances a percentage of the invoice face value, collects directly from the customer, and remits the remaining reserve minus fees. Because approval is based largely on the creditworthiness of the business's customers rather than the business itself, factoring is often accessible to companies that may not qualify for traditional bank financing.",
  },
  {
    q: "What is a reserve account and when is it released?",
    a: "When a factor purchases an invoice, it does not advance 100% of the face value immediately. The portion withheld — typically 10–30% — is held in a reserve account. This reserve serves as a buffer against disputes, short payments, and credit losses. Once the customer pays the invoice in full, the factor releases the reserve balance minus its discount fee back to the business. Some factors hold reserves on a rolling basis across the entire facility rather than per-invoice.",
  },
  {
    q: "What is the difference between recourse and non-recourse factoring?",
    a: "In recourse factoring, if the customer does not pay the invoice (for any reason), the business must buy back the receivable from the factor. The business retains the credit risk. In non-recourse factoring, the factor absorbs the loss if a pre-approved customer becomes insolvent and cannot pay. Non-recourse coverage typically does not apply to disputes, short payments, or slow payment — only to insolvency of the debtor. Non-recourse arrangements generally carry higher fees to compensate for the credit risk assumed by the factor.",
  },
  {
    q: "Will my customers know I am using a factoring company?",
    a: "In most factoring arrangements, the factor notifies your customers directly — either by including their remittance address on the invoice or by sending a notice of assignment. This is called notification factoring. Undisclosed or confidential factoring, where the customer is unaware of the assignment, exists but is less common and may not be available for all industries or credit profiles. Businesses should evaluate the potential impact on customer relationships before entering a factoring facility.",
  },
  {
    q: "What types of businesses use invoice factoring?",
    a: "Factoring is most common in industries with long payment cycles, reliable B2B customers, and a recurring need for working capital: staffing and temporary employment agencies, freight carriers and logistics providers, government contractors, professional services firms, construction subcontractors, and wholesale distributors. Factoring is generally not available for consumer invoices (B2C), partially completed work, or invoices that are already pledged as collateral to another lender.",
  },
  {
    q: "How are factoring fees structured?",
    a: "Factoring fees are typically quoted as a discount rate applied to the invoice face value, often expressed as a flat percentage per 30-day period the invoice remains outstanding. A 1.5% monthly discount rate on a $100,000 invoice that pays in 45 days would result in approximately $2,250 in fees. Some factors charge a flat one-time fee rather than a time-based rate. Additional fees may include origination, due diligence, ACH, monthly minimum volume, and termination fees. Reviewing the full fee schedule before signing is important because headline rates do not always reflect the total cost of the facility.",
  },
  {
    q: "Does factoring require a long-term contract?",
    a: "Traditional factoring facilities often involve a contract committing the business to factor a minimum monthly volume for a set term, typically 12–24 months, with an early termination fee. Spot factoring — factoring individual invoices without a long-term commitment — is available from some providers but may carry higher per-invoice fees. Businesses that anticipate only occasional factoring needs may prefer spot arrangements despite the higher cost.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function FactoringPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <PageHero
        breadcrumbs={[{ label: "Factoring", href: "/factoring" }]}
        eyebrow="Accounts Receivable Financing"
        title="Invoice Factoring"
        subtitle="Convert outstanding invoices into immediate working capital. Factoring is not a loan — it is the sale of receivables to a third-party factor that advances funds against your customers' payment obligations, subject to underwriting and approval."
      />

      {/* ── Metrics strip ─────────────────────────────────────────────────── */}
      <section className="border-b border-[#e5e5e5] py-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical advance rate"
              value="70–90"
              unit="% of invoice"
              note="Remainder held in reserve, released on customer payment"
            />
            <MetricCard
              label="Funding speed"
              value="1–3"
              unit="business days"
              note="After initial setup; repeat draws can be same-day"
            />
            <MetricCard
              label="Typical discount rate"
              value="1–4"
              unit="% / 30 days"
              note="Varies by industry, invoice volume, and customer credit"
              highlight
            />
            <MetricCard
              label="Invoice term range"
              value="30–120"
              unit="day invoices"
              note="Longer terms may incur additional fees after initial period"
            />
          </div>
        </div>
      </section>

      {/* ── What factoring is ─────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                How It Works
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                The advance, reserve, and fee cycle
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-4">
                Factoring operates in a predictable cycle tied to when your customers pay their invoices. Understanding the three components — the advance, the reserve, and the discount fee — is essential to evaluating whether factoring makes financial sense for your business at a given invoice volume and customer payment pace.
              </p>
              <p className="text-[#737373] text-sm leading-relaxed">
                The factor&apos;s primary underwriting concern is the creditworthiness of your customers, not your business&apos;s credit history. This makes factoring potentially accessible to early-stage or credit-impaired businesses that have verifiable receivables from established commercial or government clients, subject to the factor&apos;s own approval process.
              </p>
            </div>

            {/* Waterfall diagram */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-6">
                Invoice lifecycle
              </p>
              <WaterfallStep
                step="1"
                label="Invoice issued to customer"
                detail="Your business delivers goods or services and issues a net-30 to net-120 invoice to a commercial or government customer."
              />
              <WaterfallStep
                step="2"
                label="Invoice sold to factor"
                detail="You assign the receivable to the factoring company. The factor verifies the invoice and confirms the debtor's eligibility."
              />
              <WaterfallStep
                step="3"
                label="Advance funded (70–90%)"
                detail="The factor advances the agreed percentage of the invoice face value — typically within 1–3 business days of verification."
                accent
              />
              <WaterfallStep
                step="4"
                label="Customer pays factor directly"
                detail="The factor notifies your customer of the assignment. Payment is remitted to the factor, not to your business."
              />
              <WaterfallStep
                step="5"
                label="Reserve released minus fee"
                detail="Once the customer pays in full, the factor releases the held reserve balance minus its discount fee."
                accent
                isLast
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Substantive body copy ──────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6 text-sm text-[#737373] leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Why businesses use invoice factoring
                </h2>
                <p>
                  Cash flow gaps between delivering work and receiving payment are one of the most common operational challenges for B2B businesses. A staffing agency might pay employees weekly while waiting 45 days for client invoices to clear. A freight carrier might deliver a load on Monday and not see payment for 30 to 60 days. A government contractor might complete a project and navigate a 90-day payment cycle before funds arrive from a federal agency. In each case, the business has earned the revenue — the lag is entirely in the collection cycle.
                </p>
                <p className="mt-3">
                  Invoice factoring addresses this by effectively accelerating the cash embedded in those receivables. Rather than waiting for the customer to pay, the business sells the invoice to a factor and receives most of that value immediately. The tradeoff is cost: the factor&apos;s discount fee represents the price of accessing that liquidity sooner. Whether that cost is justified depends on the alternative — whether the business would forgo growth opportunities, miss payroll, or accumulate short-term debt at a higher effective rate while waiting.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  What factors evaluate during underwriting
                </h2>
                <p>
                  Because factoring is collateral-based financing, the underwriting process looks substantially different from a bank loan application. The factor&apos;s primary question is: will your customers pay? Factors evaluate the credit profile of your debtors — the companies that owe you money — rather than your own credit score or balance sheet. This creates an opportunity for businesses with relatively young operating histories or imperfect credit to access working capital, provided their customer base includes creditworthy commercial or government entities.
                </p>
                <p className="mt-3">
                  Factors also scrutinize invoice quality. Invoices must represent completed work with no outstanding disputes, returns, or set-offs. Progress billing on incomplete contracts is typically ineligible. Invoices with extended terms beyond what the factor is willing to fund may be declined or carry additional fees. Cross-aging provisions — which assess whether a significant portion of a debtor&apos;s total outstanding balance is past due — can affect advance rates across the entire debtor relationship, not just individual overdue invoices.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Key contract terms to understand before signing
                </h2>
                <p>
                  Factoring agreements are commercial contracts with significant obligations. Most traditional factoring facilities include a minimum monthly volume commitment — meaning the business must factor a floor amount of invoices each month whether or not it has sufficient receivables. Falling below minimums triggers fees. Early termination provisions can result in substantial penalties if the business attempts to exit the facility before the term ends.
                </p>
                <p className="mt-3">
                  Notification requirements and the handling of disputes deserve careful attention. If a customer disputes an invoice, the factor may charge the invoice back to the business even in a non-recourse arrangement — most non-recourse protections cover only insolvency, not disputes or slow payment. Understanding which events trigger a chargeback, how disputes are handled, and what recourse the factor has against the business in various scenarios is essential before committing to a facility. Businesses are encouraged to have a qualified attorney review any factoring agreement before signing.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Industries and use cases where factoring is commonly considered
                </h2>
                <p>
                  Factoring is most prevalent in industries where B2B payment terms are long, customer credit is generally reliable, and cash flow timing is structurally mismatched with operating costs. Freight and transportation companies factor to bridge the gap between delivery and broker or shipper payment. Staffing firms factor to fund payroll while awaiting client invoice settlement. Government contractors factor to navigate extended payment cycles from federal, state, and local agencies, often leveraging the Assignment of Claims Act to give the factor a secure interest in public funds. Construction subcontractors factor to sustain operations while waiting for draws from general contractors. Professional services firms and wholesale distributors also commonly explore factoring when their customer base consists of creditworthy businesses with predictable, if slow, payment behavior.
                </p>
                <p className="mt-3">
                  Factoring is generally not available for B2C invoices, consumer receivables, or services that have not been fully performed. It is also typically unavailable for invoices already pledged to another lender as collateral. Businesses with an existing revolving credit facility secured by accounts receivable may need to address those prior liens before a factoring arrangement can be structured.
                </p>
              </div>
            </div>

            {/* Sidebar: quick eligibility signals */}
            <div className="space-y-4">
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                  Signals that factoring may be a potential fit
                </p>
                <ul className="space-y-3">
                  {[
                    "B2B or government customers with verifiable credit",
                    "Outstanding invoices with net-30 to net-120 terms",
                    "Cash flow gaps tied to payment cycle, not revenue shortfall",
                    "Completed services or delivered goods — no disputed invoices",
                    "No prior liens on A/R that cannot be subordinated or released",
                    "Sufficient monthly invoice volume to meet factor minimums",
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
                  Signals that factoring may not be the right path
                </p>
                <ul className="space-y-3">
                  {[
                    "Consumer (B2C) invoices — most factors require B2B or government debtors",
                    "Invoices for partially completed work or in active dispute",
                    "Existing blanket lien on A/R that the lender will not release",
                    "Customers with poor credit or slow payment track records",
                    "Invoice volume too low to meet factor minimums cost-effectively",
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
                <p className="text-xs font-semibold text-[#0f0f0f] mb-2">Not sure where to start?</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-4">
                  Submit a brief intake and ZEO will review your receivables profile against factoring providers who may be a fit, subject to underwriting.
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

      {/* ── Factoring type cards ──────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Factoring Types
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Explore the factoring landscape
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            Invoice factoring is not a single product. Structure, recourse treatment, industry specialization, and contract terms vary significantly across providers and factoring types.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {factoringTypes.map((card) => (
              <FinancingPathCard key={card.href} {...card} />
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
          <h2 className="text-2xl font-semibold text-white mb-2">
            Factoring vs. other working capital options
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            The right working capital tool depends on your revenue profile, customer base, and how quickly you need funds. This is a general reference — individual terms from third-party providers will vary.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Invoice Factoring"
          />
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges and characteristics shown are general market observations and are not offers or guaranteed terms. Actual terms are subject to underwriting by third-party providers.
          </p>
        </div>
      </section>

      {/* ── Related financing ─────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Related Options
          </p>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Adjacent financing structures to consider
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Asset-Based Lending",
                description:
                  "Revolving credit secured by A/R and inventory. Broader collateral base than factoring; business retains collection. Subject to borrowing base certificates and field exams.",
                href: "/asset-based-lending",
              },
              {
                label: "Purchase Order Financing",
                description:
                  "Funding against purchase orders before goods are produced or delivered. Complements factoring when the production gap precedes the invoice gap.",
                href: "/purchase-order-financing",
              },
              {
                label: "Business Line of Credit",
                description:
                  "Revolving draw facility based on business creditworthiness rather than specific receivables. Customer relationships are not affected; approval criteria differ significantly.",
                href: "/business-line-of-credit",
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
        title="Frequently Asked Questions About Invoice Factoring"
      />

      {/* ── Disclaimer ────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-10">
        <ProductDisclaimer type="factoring" />
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Evaluate whether factoring may be a fit for your business"
        subtext="Submit a brief intake describing your receivables volume, customer base, and cash flow needs. ZEO will review potential factoring paths subject to third-party underwriting and approval."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing"
        secondaryHref="/financing"
      />
    </div>
  );
}

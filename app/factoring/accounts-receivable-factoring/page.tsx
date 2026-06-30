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
  title: "Accounts Receivable Factoring | ZEO.co",
  description:
    "Learn how accounts receivable factoring works — how the advance and reserve cycle functions, which businesses may qualify, and what factors influence fees. Subject to third-party provider underwriting.",
  path: "/factoring/accounts-receivable-factoring",
  keywords: [
    "accounts receivable factoring",
    "invoice factoring",
    "AR factoring",
    "factoring company",
    "receivables financing",
    "factoring advance rate",
    "factoring fees",
    "B2B invoice factoring",
    "recourse factoring",
    "non-recourse factoring",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="14" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 6h8M5 9h6M5 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function StaffingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 4h9v7H2zM11 7h3l2 2v4h-5V7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="5" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ConstructionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 15h14M4 15V8l5-4 5 4v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="11" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function MfgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 14V8l4-3v3l4-3v3l4-3v8H2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <rect x="6" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function GovIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 7h14M3 7V15M15 7V15M2 15h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 2L2 7h14L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <rect x="6" y="10" width="2.5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9.5" y="10" width="2.5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ABLIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 12h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LineIcon() {
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

// ── Static data ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Factoring", href: "/factoring" },
  { label: "Accounts Receivable Factoring" },
];

const FAQ_ITEMS = [
  {
    q: "What types of invoices are typically eligible for accounts receivable factoring?",
    a: "Factors generally accept invoices billed to creditworthy commercial or government entities for goods or services that have already been delivered and accepted. The key eligibility criteria are that the invoice must represent a completed transaction — not a progress billing, a contract advance, or a disputed amount. Invoices billed to consumers (B2C) are typically not eligible. Debtors with poor credit histories, invoices past 90 days outstanding, and any amounts subject to dilution disputes are commonly excluded. Individual factors set their own eligibility rules, and the specifics vary considerably.",
  },
  {
    q: "What is the difference between recourse and non-recourse factoring?",
    a: "In a recourse factoring arrangement, if your customer (the invoice debtor) does not pay within a set period — often 90 days — the factor can charge the unpaid invoice back to your reserve or require you to buy it back. The credit risk on the debtor stays with you. In a non-recourse arrangement, the factor absorbs the loss if the debtor fails to pay due to insolvency — not because of a dispute or a billing error, which are still typically your responsibility. Non-recourse factoring generally costs more because the factor is taking on that default risk. Which structure is available depends on the factor and the creditworthiness of your specific customer base.",
  },
  {
    q: "Will my customers know I am using a factoring company?",
    a: "In most traditional factoring arrangements, yes. The factor typically sends a Notice of Assignment to your customers directing them to remit payment to the factor rather than to you. This is called notification factoring, and it is standard practice. Some specialty programs offer non-notification or confidential factoring, where the factor collects under your name, but these programs typically require a stronger business profile and may carry different pricing. Before entering a factoring agreement, consider how your customers might respond to a change in payment instructions — most commercial customers are familiar with factoring, particularly in industries like staffing, trucking, and construction.",
  },
  {
    q: "How are factoring fees structured, and what is the all-in cost?",
    a: "Factoring fees are typically quoted as a discount rate applied to the face value of the invoice — for example, 1.5% to 3% for a 30-day period, sometimes structured in weekly increments after an initial period. The total cost depends on how long your customers take to pay: a fee quoted at 1.5% for 30 days is effectively much higher on an annualized basis if your customers routinely pay in 60 or 75 days. Additional charges can include origination fees, monthly minimum volume fees, lockbox or wire fees, and termination fees. Evaluate the total cost over your actual average payment cycle, not just the headline rate. ZEO.co does not quote rates — actual terms are set by third-party factoring providers subject to underwriting.",
  },
  {
    q: "Can a startup or early-stage business use accounts receivable factoring?",
    a: "Factoring is one of the more accessible financing structures for newer businesses precisely because the primary underwriting focus is on the creditworthiness of your customers — the invoice debtors — rather than your own financial history. A business with six months of operations that invoices Fortune 500 companies may qualify where it would not for a bank line of credit. That said, factors still review your business, assess credit risk, and set terms based on the overall picture. Time in business, invoice volume, customer diversity, and the factor's own risk appetite all influence whether and on what terms you may qualify. Approval is not guaranteed.",
  },
];

const COMPARISON_COLUMNS = ["AR Factoring", "Asset-Based Lending", "Business Line of Credit"];

const COMPARISON_ROWS = [
  {
    feature: "Funding basis",
    "AR Factoring": "Invoice quality / debtor credit",
    "Asset-Based Lending": "Collateral value (AR + inventory)",
    "Business Line of Credit": "Business cash flow & credit",
  },
  {
    feature: "Ownership of invoices",
    "AR Factoring": "Sold outright to factor",
    "Asset-Based Lending": "Pledged as collateral; you retain",
    "Business Line of Credit": "Not applicable",
  },
  {
    feature: "Customer collection",
    "AR Factoring": "Factor collects from customers",
    "Asset-Based Lending": "You collect; remit to lender",
    "Business Line of Credit": "You collect directly",
  },
  {
    feature: "Customer notification",
    "AR Factoring": "Typically required",
    "Asset-Based Lending": "Usually not required",
    "Business Line of Credit": "Not required",
  },
  {
    feature: "Typical advance",
    "AR Factoring": "70 – 95% of invoice face value",
    "Asset-Based Lending": "70 – 85% of eligible AR",
    "Business Line of Credit": "Credit limit set at close",
  },
  {
    feature: "Minimum time in business",
    "AR Factoring": "Often 3 – 6 months",
    "Asset-Based Lending": "Often 2+ years",
    "Business Line of Credit": "Often 1 – 2 years",
  },
  {
    feature: "Minimum facility size",
    "AR Factoring": "$10K – $50K+ (varies widely)",
    "Asset-Based Lending": "Often $1M+",
    "Business Line of Credit": "$25K – $250K+",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AccountsReceivableFactoringPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Factoring", url: "https://zeo.co/factoring" },
          { name: "Accounts Receivable Factoring", url: "https://zeo.co/factoring/accounts-receivable-factoring" },
        ])}
      />

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Factoring"
        title="Accounts Receivable Factoring"
        subtitle="Convert outstanding B2B invoices into immediate working capital by selling them to a third-party factor. The factor advances most of the invoice value upfront, then collects from your customers directly. Subject to third-party provider underwriting and approval."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical advance rate"
              value="70 – 95%"
              note="Of eligible invoice face value; varies by debtor credit and industry"
            />
            <MetricCard
              label="Reserve released"
              value="Balance less fees"
              note="Paid to you after customer remits to the factor"
            />
            <MetricCard
              label="Factoring fee range"
              value="1 – 5%"
              unit="per 30 days"
              note="Total cost depends on how long customers take to pay; not a guaranteed rate"
              highlight
            />
            <MetricCard
              label="Minimum time in business"
              value="3 – 6 mo"
              note="Many factors focus on debtor credit over borrower history; varies by program"
            />
          </div>
        </div>
      </section>

      {/* ── What it is / who uses it ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                What it is
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Liquidity tied directly to the invoices your business already generates
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Accounts receivable factoring is a financing arrangement in which a business sells
                its outstanding B2B invoices to a third-party factoring company at a discount in
                exchange for immediate cash. Rather than waiting 30, 60, or 90 days for customers
                to pay, the business receives a large portion of the invoice value upfront — giving
                it working capital to cover payroll, restock inventory, or fund operations while the
                collection cycle runs its course.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Unlike a traditional loan, factoring is not structured as debt in every case —
                you are selling an asset (the receivable) rather than borrowing against it.
                The factor collects directly from your customers and remits the remaining balance to
                you, less its fees, once the invoice is paid. This distinction matters for how the
                arrangement appears on your balance sheet, though factoring agreements often
                include UCC filings and other contractual obligations that should be reviewed
                carefully with qualified legal and financial counsel.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm">
                Factoring is not a fit for every business. It works best when you invoice
                creditworthy commercial or government customers on net terms, have a predictable
                volume of receivables, and need liquidity faster than your payment cycle delivers it.
                ZEO.co is not a factoring company. If your profile may be a fit, ZEO can help
                connect you with third-party providers — terms and approval are subject to their
                underwriting.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "B2B companies with long payment terms",
                  body:
                    "If your customers pay on Net 30, 45, or 60 terms, your cash flow lags behind your revenue. Factoring closes that gap immediately, converting an aging report into usable working capital without waiting for the payment cycle to complete.",
                },
                {
                  heading: "Businesses that cannot yet qualify for bank credit",
                  body:
                    "Because factoring underwriters focus primarily on the creditworthiness of your invoice debtors rather than your own financial history, businesses with limited operating history, thin margins, or uneven cash flow may qualify where they would be declined for a conventional line of credit.",
                },
                {
                  heading: "Companies in high-volume, low-margin industries",
                  body:
                    "Staffing agencies, freight carriers, and distributors often operate with thin margins and high invoice volumes. Factoring provides a scalable cash flow mechanism that grows automatically as invoice volume grows — without requiring periodic renegotiation of a credit line.",
                },
                {
                  heading: "Rapidly growing businesses outpacing their cash position",
                  body:
                    "A business winning major new contracts faces a common paradox: more revenue, but more cash tied up in receivables. Factoring allows that business to deploy the cash from new contracts immediately rather than funding growth from a shrinking cash position while waiting for collections.",
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

      {/* ── How the advance / reserve cycle works ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            How it works
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2 text-balance">
            The advance and reserve cycle
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Every factoring transaction moves through the same basic cycle. Understanding each
            stage helps you evaluate the true cost and structure of any agreement.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                step: "1",
                title: "Submit invoices",
                body:
                  "You deliver goods or services to your commercial customer and issue an invoice. You then submit that invoice — along with supporting documentation such as purchase orders or proof of delivery — to the factoring company for review and purchase.",
              },
              {
                step: "2",
                title: "Factor verifies and approves",
                body:
                  "The factor evaluates the invoice for eligibility: is the work completed, is the debtor creditworthy, are there disputes or offsets, and does the invoice meet program criteria? Verification may include contacting your customer directly to confirm the amount is owed and undisputed.",
              },
              {
                step: "3",
                title: "Advance paid to you",
                body:
                  "Upon approval, the factor wires you an advance — typically 70% to 95% of the invoice face value — often within one to two business days. The remaining balance (the reserve) is held by the factor until your customer pays.",
              },
              {
                step: "4",
                title: "Customer pays the factor",
                body:
                  "A Notice of Assignment is sent to your customer directing them to remit payment directly to the factor rather than to you. The factor manages collections. Your customer relationship continues, but the payment goes to the factor.",
              },
              {
                step: "5",
                title: "Reserve released less fees",
                body:
                  "Once your customer pays the invoice in full, the factor deducts its factoring fee and any other applicable charges from the reserve, then remits the remaining balance to you. The cycle is then complete for that invoice.",
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

      {/* ── Requirements and invoice criteria ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Eligibility
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Requirements and invoice criteria
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                The standards below reflect common patterns across factoring programs. Individual
                providers set their own criteria, and meeting general thresholds does not
                guarantee approval from any specific factor.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Invoice type",
                    value: "Commercial or government B2B invoices only",
                    note: "Invoices must be for goods or services already delivered and accepted. Consumer (B2C) invoices are not eligible. Progress billings, retainages, and contract deposits are commonly excluded.",
                  },
                  {
                    label: "Invoice age",
                    value: "Typically under 90 days outstanding",
                    note: "Invoices past 90 days from invoice date are often considered ineligible. Some factors use 60-day or 120-day limits. Cross-aging provisions may also restrict eligibility if a large portion of a customer's invoices are past due.",
                  },
                  {
                    label: "Debtor credit",
                    value: "Creditworthy commercial or government customers",
                    note: "Factors focus heavily on the financial strength of your customers. Invoices owed by well-capitalized companies or government agencies are the most attractive. Invoices owed by financially distressed debtors may be declined or carry lower advance rates.",
                  },
                  {
                    label: "Invoice disputes",
                    value: "Invoice must be undisputed",
                    note: "Any amount subject to a billing dispute, credit memo, offset, or potential chargeback is typically excluded. The factor may verify with your customer before funding.",
                  },
                  {
                    label: "Customer concentration",
                    value: "Concentration limits often apply",
                    note: "Many factors apply concentration limits — for example, they may not advance against more than 20–25% of your total portfolio owed by a single customer. High concentration may reduce eligible volumes even if individual invoices are strong.",
                  },
                  {
                    label: "UCC and existing liens",
                    value: "First-position rights on receivables typically required",
                    note: "The factor will typically file a UCC-1 financing statement to secure its interest in the receivables. Existing lenders with blanket liens may need to subordinate or consent. Review this carefully before executing an agreement.",
                  },
                  {
                    label: "Time in business",
                    value: "Often 3 – 6 months; varies by factor",
                    note: "Some factoring programs accept startups with as little as three months of operations. Others require one year or more. The debtor's credit history often matters more than the borrower's.",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                  >
                    <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0f0f0f]" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{req.label}</p>
                      <p className="text-sm text-[#737373] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Common use cases ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Common use cases
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Industries that commonly use AR factoring
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                Factoring is particularly common in industries with predictable B2B invoice volumes
                and creditworthy commercial customers. The following sectors represent common
                factoring use cases — this is not exhaustive.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <FinancingPathCard
                  icon={<StaffingIcon />}
                  title="Staffing and Workforce Solutions"
                  description="Staffing agencies fund weekly payroll before client invoices are collected. Factoring against the receivables float has been a structural feature of staffing finance for decades."
                  tags={["Payroll funding", "Weekly cycles", "B2B"]}
                  href="/factoring/accounts-receivable-factoring"
                />
                <FinancingPathCard
                  icon={<TruckIcon />}
                  title="Trucking and Freight"
                  description="Owner-operators and small carriers invoice brokers and shippers on standard payment terms. Freight factoring — often with same-day funding — is one of the most active factoring markets."
                  tags={["Same-day funding", "Freight brokers", "Owner-operators"]}
                  href="/factoring/accounts-receivable-factoring"
                />
                <FinancingPathCard
                  icon={<ConstructionIcon />}
                  title="Construction and Specialty Contractors"
                  description="Subcontractors waiting on payment from general contractors or owners use factoring to bridge the gap between completed work and collected revenue."
                  tags={["Subcontractors", "Progress billing", "GC payment terms"]}
                  href="/factoring/accounts-receivable-factoring"
                />
                <FinancingPathCard
                  icon={<MfgIcon />}
                  title="Manufacturing and Distribution"
                  description="Manufacturers and distributors selling to retailers or industrial buyers on extended terms can factor receivables to fund input costs and working capital before collections arrive."
                  tags={["B2B invoices", "Net 45-60", "Inventory cycle"]}
                  href="/factoring/accounts-receivable-factoring"
                />
                <FinancingPathCard
                  icon={<GovIcon />}
                  title="Government Contractors"
                  description="Businesses invoicing federal, state, or local agencies benefit from the high debtor credit quality — government receivables can be among the most attractive collateral for a factoring program."
                  tags={["Federal contracts", "High debtor credit", "Slow payers"]}
                  href="/factoring/accounts-receivable-factoring"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advance rates and fee ranges ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Pricing overview
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2 text-balance">
            Advance rates and fee ranges
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            ZEO.co does not set, quote, or guarantee factoring rates. The information below
            describes how factoring pricing is generally structured to help you evaluate any
            offer. Actual terms are set by third-party factors based on your specific profile.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-[#0f0f0f]">How advance rates work</h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                The advance is the percentage of the invoice face value the factor pays you
                immediately when it purchases the invoice. Common advance rates range from
                70% to 95%, though the specific figure depends on the factor, your industry,
                the creditworthiness of the specific debtor, and the overall quality of your
                receivables portfolio.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                Higher-credit debtors — large corporations, government agencies — typically
                support higher advance rates because the factor's risk of non-payment is lower.
                Concentrated portfolios (where one or two customers represent most of your
                volume) or industries with higher dispute rates may see lower advances.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                The reserve is simply the difference between the invoice face value and the
                advance. It is held by the factor until your customer pays and is then returned
                to you after the factor deducts its fees and any other charges.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-[#0f0f0f]">How factoring fees are typically structured</h3>
              <div className="space-y-3">
                {[
                  {
                    label: "Flat discount rate",
                    body: "The most common structure: a fixed percentage of the invoice face value charged for a set period (e.g., 2% for the first 30 days). Additional fees may apply if the invoice remains unpaid beyond that period — often in weekly or 10-day increments.",
                  },
                  {
                    label: "Variable rate based on days outstanding",
                    body: "Some factors charge a base rate for the first period and a lower incremental rate for each additional period until the invoice is paid. The total fee depends entirely on how quickly your customer pays.",
                  },
                  {
                    label: "Additional fees to evaluate",
                    body: "Origination or setup fees, monthly minimum volume fees, ACH or wire fees, and early termination fees are common. Review the full fee schedule — not just the factoring rate — before signing any agreement.",
                  },
                  {
                    label: "Effective annual cost",
                    body: "A 2% flat fee for 30 days equates to roughly 24% on an annualized basis. If your customers take 60 days to pay and you are charged for each period, the effective cost compounds. Evaluate total cost over your actual average collection cycle.",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
                    <p className="text-sm font-medium text-[#0f0f0f] mb-1.5">{item.label}</p>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits and limitations ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Weighing your options
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8 text-balance">
            Potential advantages and limitations of AR factoring
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Potential advantages
              </h3>
              <ul className="space-y-3">
                {[
                  "Can provide funding within one to two business days of invoice submission, substantially faster than most bank lending processes.",
                  "Underwriting focuses primarily on your customers' creditworthiness — newer businesses or those with limited credit history may qualify.",
                  "Funding scales automatically with your invoice volume. As your business grows and generates more receivables, available funding grows with it.",
                  "Outsources the collection process to the factor, which can reduce administrative overhead around accounts receivable management.",
                  "Does not create traditional debt in all structures — selling an asset rather than borrowing may affect how the transaction appears on your balance sheet.",
                  "Accessible in many industries and for a wide range of business sizes, from early-stage companies to established mid-market businesses.",
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
                  "Factoring fees, when annualized over your average collection cycle, are often higher than bank credit lines or SBA-backed financing.",
                  "In notification factoring — the standard arrangement — your customers are directed to pay the factor, which may change the dynamic of those relationships.",
                  "The factor typically files a UCC-1 lien on your receivables, which can complicate other financing arrangements and should be reviewed with counsel.",
                  "In recourse factoring, you bear the risk if your customer does not pay — the factor can charge the unpaid invoice back to your account or reserve.",
                  "Not suitable for consumer invoices, disputed invoices, or receivables from financially distressed customers.",
                  "Approval, advance rates, and terms are not guaranteed and depend on the specific factor and your customer base.",
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
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            AR factoring vs. asset-based lending vs. business line of credit
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            These three structures all involve receivables in some form but differ significantly
            in how they work, who they suit, and what they cost. Actual terms vary by provider
            and are not guaranteed.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="AR Factoring"
          />
        </div>
      </section>

      {/* ── Alternatives to consider ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Related financing paths
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            Other options that may be relevant
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Factoring may be the right starting point for your business, or one of these
            alternatives may be a better potential fit depending on your profile, size, and goals.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<ABLIcon />}
              title="Asset-Based Lending"
              description="Borrow against your receivables and inventory as collateral — you keep the customer relationship and collect payments yourself. Typically suited to larger businesses with $1M+ in eligible assets."
              tags={["Revolving", "You collect", "Larger businesses"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<InvoiceIcon />}
              title="Spot Factoring"
              description="Factor individual invoices on an as-needed basis rather than committing to a full factoring program. More flexible but often more expensive per invoice — may suit businesses with occasional cash flow gaps."
              tags={["No commitment", "Single invoices", "Flexible"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={<LineIcon />}
              title="Business Line of Credit"
              description="A revolving credit line underwritten on your business's overall cash flow and credit. No customer notification required and not tied to specific invoices — but typically requires a stronger operating history."
              tags={["No notification", "Cash-flow based", "Revolving"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Working Capital"
              description="SBA-backed term loans or lines of credit that can be used for working capital. Longer terms and potentially more favorable pricing for qualifying businesses, though the process is documentation-intensive."
              tags={["SBA-backed", "Longer terms", "Documentation-heavy"]}
              href="/sba-loans"
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
                Estimate your factoring proceeds
              </h3>
              <p className="text-sm text-[#a3a3a3] max-w-md">
                Use our invoice factoring calculator to model how advance rates and fee structures
                translate to net proceeds for a given invoice. Estimates are illustrative only —
                not an offer or commitment from any factoring provider.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
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
        title="Accounts Receivable Factoring — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Evaluate factoring options for your business"
        subtext="Submit a brief intake and ZEO will review which factoring programs may be a potential fit based on your invoice volume, customer base, and business profile. Subject to underwriting by third-party providers."
        primaryLabel="Start Application"
        primaryHref="/apply"
        secondaryLabel="Explore All Factoring Options"
        secondaryHref="/factoring"
      />

      {/* ── Disclaimer ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="factoring" />
      </div>
    </main>
  );
}

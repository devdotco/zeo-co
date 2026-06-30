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
  title: "Payroll Funding via Invoice Factoring | ZEO.co",
  description:
    "Learn how payroll funding through invoice factoring works, who may qualify, how the advance and reserve cycle operates, and what invoice criteria and fee ranges to expect. Subject to underwriting by third-party providers.",
  path: "/factoring/payroll-funding",
  keywords: [
    "payroll funding",
    "payroll factoring",
    "invoice factoring payroll",
    "staffing payroll financing",
    "same day payroll funding",
    "staffing company factoring",
    "payroll bridge financing",
    "payroll cash flow solution",
    "B2B invoice payroll",
    "factoring for staffing agencies",
  ],
});

// ── Constants ─────────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Factoring", href: "/factoring" },
  { label: "Payroll Funding" },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function PayrollIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8h4M5 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="13" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h4M6 12h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function StaffingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 14c0-2.209 1.791-4 4-4M16 14c0-2.209-1.791-4-4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 10a3 3 0 013 3v1H6v-1a3 3 0 013-3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function ContractIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M6 12l1.5 1.5L11 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FactoringIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LOCIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Comparison data ───────────────────────────────────────────────────────────

const comparisonColumns = ["Payroll Factoring", "Business LOC", "Bank Term Loan", "MCA"];

const comparisonRows = [
  {
    feature: "Collateral",
    "Payroll Factoring": "Invoices / receivables",
    "Business LOC": "Assets or unsecured",
    "Bank Term Loan": "Business assets + PG",
    MCA: "Future receivables",
  },
  {
    feature: "Funding speed",
    "Payroll Factoring": "24 – 48 hrs (ongoing)",
    "Business LOC": "3 – 10 days initial",
    "Bank Term Loan": "2 – 6 weeks",
    MCA: "1 – 3 days",
  },
  {
    feature: "Typical advance",
    "Payroll Factoring": "80% – 95% of invoice",
    "Business LOC": "Up to approved limit",
    "Bank Term Loan": "Lump sum at close",
    MCA: "% of monthly revenue",
  },
  {
    feature: "Repayment source",
    "Payroll Factoring": "Client pays factor directly",
    "Business LOC": "Borrower makes payments",
    "Bank Term Loan": "Fixed monthly payments",
    MCA: "Daily/weekly holdback",
  },
  {
    feature: "Min. credit (typical)",
    "Payroll Factoring": "Not primary — invoice quality matters",
    "Business LOC": "600+",
    "Bank Term Loan": "650+",
    MCA: "500+",
  },
  {
    feature: "Scales with revenue",
    "Payroll Factoring": "Yes — limit grows with invoices",
    "Business LOC": "Fixed limit at approval",
    "Bank Term Loan": "No — fixed amount",
    MCA: "Partially",
  },
  {
    feature: "Best for",
    "Payroll Factoring": "Staffing, services, B2B payroll gaps",
    "Business LOC": "Recurring operating needs",
    "Bank Term Loan": "One-time capital projects",
    MCA: "Short-term, limited credit options",
  },
];

// ── FAQ data ──────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "How does payroll factoring differ from a regular business loan for covering payroll?",
    a: "Payroll factoring converts outstanding invoices into immediate working capital — the factor advances a percentage of the invoice face value, and repayment occurs when your client pays the invoice directly to the factor. A traditional loan, by contrast, is debt that you repay on a fixed schedule regardless of whether your clients have paid you. Because payroll factoring is tied to your receivables rather than your credit profile, it may be accessible to businesses that do not yet meet conventional loan requirements. That said, factoring involves fees, contractual obligations (including UCC filings and in some cases notification to your clients), and a reserve structure — review all terms carefully.",
  },
  {
    q: "Which industries most commonly use payroll factoring?",
    a: "Staffing agencies and temporary workforce firms are among the most frequent users, since they pay employees weekly or bi-weekly but may wait 30–90 days for client payment. Other common users include healthcare staffing, professional employer organizations (PEOs), construction subcontractors, trucking carriers, government contractors, IT services firms, and janitorial or commercial cleaning companies. The common thread is a gap between labor delivery (and the payroll cost that triggers) and client payment terms.",
  },
  {
    q: "What makes an invoice eligible for payroll factoring?",
    a: "Factors typically require that invoices be: (1) issued to creditworthy commercial or government clients — not consumers, (2) for services already delivered (not future work), (3) free of encumbrances, liens, or prior assignments to another lender, and (4) not disputed, offset, or subject to chargeback rights by the debtor. The creditworthiness of your client matters significantly — factors underwrite the invoice debtor, not just you. Invoices to clients with poor payment histories or shaky finances may be declined or advanced at a lower rate.",
  },
  {
    q: "What is a reserve account and when do I receive those funds?",
    a: "When a factor advances funds on an invoice, they typically advance a percentage (the advance rate) upfront — often 80–95% — and hold the remainder in a reserve account. The reserve protects the factor against invoice disputes, dilutions, or client non-payment. Once your client pays the invoice in full, the factor releases the reserve balance to you, minus their factoring fee. If you are on recourse factoring and the client does not pay, you may be required to repurchase the invoice or have the reserve applied against the shortfall.",
  },
  {
    q: "Can a staffing company use payroll factoring even if it has outstanding tax liabilities or prior credit issues?",
    a: "Potentially, but it depends on the factor's specific guidelines and the nature of the liability. Many factors can work with businesses that have credit blemishes, since their underwriting weighs invoice quality and client creditworthiness heavily. However, outstanding federal or state tax liens, IRS levies, or active UCC filings by another secured lender may complicate the process — these can create competing claims on receivables. Some factors specialize in distressed or turnaround situations and may still consider the account. Eligibility is determined by the third-party factor at underwriting; ZEO does not make credit decisions.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PayrollFundingPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Factoring"
        title="Payroll Funding"
        subtitle="Invoice factoring used specifically to cover payroll obligations before client payments arrive. Commonly used by staffing agencies, contractors, and service businesses that pay employees on weekly or bi-weekly cycles while waiting 30–90 days for client remittance."
      />

      {/* What it is / who uses it */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                What It Is
              </p>
              <h2 className="text-2xl font-semibold text-white leading-snug">
                Turning outstanding invoices into same-week payroll
              </h2>
              <p className="text-[#9aaa98] text-sm mt-4 leading-relaxed">
                Payroll funding through factoring addresses a structural cash flow problem common in service and staffing businesses: labor costs are incurred and must be paid now, but client payment terms push revenue collection out 30, 60, or even 90 days. Factoring bridges that gap by allowing a business to sell its outstanding invoices to a third-party factor in exchange for an immediate cash advance.
              </p>
              <p className="text-[#9aaa98] text-sm mt-3 leading-relaxed">
                Unlike a line of credit or term loan, payroll factoring is not debt in the traditional sense — it is the sale or assignment of a receivable. The factor takes on collection responsibility (in most arrangements) and is repaid directly by your client. Your business receives the remaining reserve balance, minus the factor's fee, once the invoice is paid. This structure means the financing scales naturally with your revenue: as you generate more invoices, more capital becomes available.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Staffing and temporary workforce firms",
                  desc: "The most common use case. Staffing agencies pay W-2 employees weekly or bi-weekly but typically invoice clients on net-30 to net-60 terms. Payroll factoring eliminates the cash flow deficit created by this mismatch, allowing firms to take on more placements without depleting operating reserves.",
                },
                {
                  title: "Government and commercial contractors",
                  desc: "Construction subcontractors, IT services firms, and government contractors often face payment timelines of 45–90 days. Labor is the primary cost, and payroll cannot wait. Factoring on verified government or prime contractor invoices is a well-established funding method in these sectors.",
                },
                {
                  title: "Healthcare staffing organizations",
                  desc: "Traveling nurses, per diem staff, and locum tenens providers are paid on short cycles, but insurance reimbursements and hospital billing cycles can stretch 60–120 days. Healthcare-specific factors are familiar with HIPAA-adjacent documentation requirements and the unique debtor mix in this segment.",
                },
                {
                  title: "Professional and business services",
                  desc: "Consulting firms, managed services providers, janitorial companies, and similar B2B service businesses with recurring commercial clients and documented monthly invoices are often well-suited to factoring — particularly when the client roster is composed of creditworthy, established organizations.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#1e2620] bg-[#111512] p-5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mb-3" />
                  <p className="text-sm font-semibold text-[#eef2ec] mb-2">{item.title}</p>
                  <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How the advance / reserve cycle works */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            The advance and reserve cycle
          </h2>
          <p className="text-[#9aaa98] text-sm mb-10 max-w-2xl leading-relaxed">
            Payroll factoring follows a repeatable cycle. Understanding each stage helps you evaluate what to expect from a factoring arrangement and how cash actually flows between your business, the factor, and your clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                label: "Invoice submission",
                desc: "After services are delivered and invoiced to your client, you submit the invoice to the factor — typically via an online portal. The factor verifies that the invoice is valid, undisputed, and that the debtor (your client) is creditworthy.",
              },
              {
                step: "02",
                label: "Advance funded",
                desc: "The factor advances a percentage of the invoice face value — the advance rate — directly to your business account, often within 24–48 hours. This is the capital used to fund payroll before your client pays.",
              },
              {
                step: "03",
                label: "Reserve held",
                desc: "The remaining percentage of the invoice (the reserve) is held by the factor. This buffer protects them against invoice disputes, partial payments, or dilutions from your client.",
              },
              {
                step: "04",
                label: "Client pays factor",
                desc: "Your client remits payment on the invoice to the factor's lockbox or account. In a notification arrangement, your client is made aware that the invoice has been assigned. In a non-notification arrangement, this may not be disclosed.",
              },
              {
                step: "05",
                label: "Reserve released minus fee",
                desc: "Once your client pays in full, the factor releases the reserve balance to your business, minus their factoring fee. The net effect: you received the advance at submission and the reserve upon client payment, less the total cost of factoring.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-5"
              >
                <p className="text-[0.65rem] font-semibold tabular-nums tracking-[0.08em] text-[#22c55e] mb-3">
                  {item.step}
                </p>
                <p className="text-sm font-semibold text-[#eef2ec] mb-2 leading-snug">
                  {item.label}
                </p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and invoice criteria */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Eligibility
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Requirements and invoice criteria
          </h2>
          <p className="text-[#9aaa98] text-sm mb-8 max-w-2xl leading-relaxed">
            Payroll factoring underwriting focuses more on invoice quality and client creditworthiness than on the business owner's personal credit. General criteria below — actual requirements are set by the third-party factor at underwriting and vary by provider.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            <MetricCard
              label="Time in Business"
              value="3+ mo"
              note="Some factors work with newer businesses if invoices are verified"
            />
            <MetricCard
              label="Client Type"
              value="B2B / Gov"
              note="Invoices must be to commercial or government debtors, not consumers"
            />
            <MetricCard
              label="Invoice Status"
              value="Earned"
              note="Services must be delivered — no advance billing or progress invoices (typically)"
            />
            <MetricCard
              label="Typical Min. Invoice"
              value="$500+"
              note="Some factors have higher minimums; varies by program"
            />
            <MetricCard
              label="Monthly Volume"
              value="$10K+"
              note="Minimum monthly invoice volume required by many factors"
            />
            <MetricCard
              label="Funding Speed"
              value="24–48 hr"
              note="After initial setup; first funding may take 3–5 business days"
              highlight
            />
          </div>

          {/* Invoice criteria detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
              <p className="text-xs font-semibold text-[#eef2ec] mb-3">Invoice must generally meet these criteria</p>
              <ul className="space-y-2">
                {[
                  "Issued to a creditworthy commercial or government entity (not a consumer)",
                  "Represents services fully delivered — not work-in-progress or future deliverables",
                  "Free of any prior assignment, lien, or pledge to another lender",
                  "Not subject to active dispute, setoff, chargeback, or contractual deduction rights",
                  "Supported by proof of delivery or a signed timesheet/work order",
                  "Payable on terms the factor accepts — typically net-15 to net-90",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#6b7e69] leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-[#22c55e]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
              <p className="text-xs font-semibold text-[#eef2ec] mb-3">Business-level criteria factors commonly review</p>
              <ul className="space-y-2">
                {[
                  "Accounts receivable aging report — concentration and days-outstanding distribution",
                  "Client roster quality: who are the debtors and what is their payment history",
                  "Existing liens or UCC filings on receivables — must be released or subordinated",
                  "No active federal or state tax levies on receivables (may vary by factor)",
                  "Clean corporate documentation — valid entity in good standing",
                  "Personal guarantee of owners — commonly required, especially for recourse factoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#6b7e69] leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-[#22c55e]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advance rates and fee ranges */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Cost Structure
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                Advance rates and fee ranges
              </h2>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-4">
                Payroll factoring costs are typically quoted as a factoring rate — expressed as a percentage of the invoice face value — charged for each period (often each 30-day increment) that the invoice remains outstanding. ZEO does not guarantee specific rates or terms. All pricing is set by the third-party factor at underwriting based on invoice quality, client creditworthiness, volume, and industry.
              </p>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-4">
                Advance rates for payroll factoring tend to be relatively high compared to other factoring product types — often 85–95% of invoice face value — because the underlying invoices are typically to creditworthy employers (staffing clients) with predictable payment behavior. Lower-quality debtor rosters or industries with higher dispute rates may see lower advance rates.
              </p>
              <p className="text-[#9aaa98] text-sm leading-relaxed">
                When evaluating a factoring proposal, focus on the total effective cost over your expected collection timeline — not just the stated rate. An invoice that pays in 20 days has a lower total factoring cost than one that pays in 60 days, even at the same daily or periodic rate. Also review the full fee schedule: origination fees, wire fees, minimum volume requirements, and termination clauses can materially affect total cost.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Advance rate (typical range)",
                  value: "80% – 95%",
                  desc: "The percentage of invoice face value funded at submission. Higher advance rates are common with strong debtor rosters. Lower rates may apply to higher-risk industries or new clients.",
                },
                {
                  label: "Factoring fee (per 30-day period)",
                  value: "1% – 5%",
                  desc: "Charged as a percentage of the invoice amount for each 30-day period (or portion thereof) the invoice is outstanding. Fees compound if the invoice pays slowly. Total cost depends heavily on client payment behavior.",
                },
                {
                  label: "Reserve release timeline",
                  value: "Upon client payment",
                  desc: "The reserve (the portion not advanced) is released after your client pays the invoice in full, minus the factoring fee. Reserves are not held indefinitely — most factors set a maximum outstanding period.",
                },
                {
                  label: "Setup / origination fee",
                  value: "Varies",
                  desc: "Some factors charge a one-time onboarding fee to cover due diligence, credit checks on your client roster, UCC filing, and account setup. Others waive this. Confirm upfront.",
                },
                {
                  label: "Wire / ACH fees",
                  value: "Varies",
                  desc: "Per-transfer fees may apply each time the factor sends you an advance or releases a reserve. These add up quickly if you are submitting invoices daily or weekly.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] px-5 py-4"
                >
                  <div className="flex items-start justify-between gap-4 mb-1.5">
                    <p className="text-sm font-semibold text-[#eef2ec]">{item.label}</p>
                    <span className="flex-shrink-0 text-sm font-semibold tabular-nums text-[#22c55e]">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
                </div>
              ))}
              <p className="text-[0.65rem] text-[#6b7e69] pt-1">
                All ranges are general market observations. ZEO.co does not guarantee rates, advance percentages, or approval. Subject to underwriting by third-party providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and limitations */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Trade-offs
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Benefits and limitations to consider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefits */}
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded-full border border-[#22c55e]/40 bg-[#0f2a14] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 2.5" stroke="#22c55e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#eef2ec]">Potential benefits</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Converts outstanding invoices into same-week cash — payroll obligations can be met without waiting for client remittance",
                  "Scales with your revenue: as invoices grow, available funding grows proportionally without reapplying for a larger limit",
                  "Underwriting is based primarily on invoice quality and client creditworthiness — not solely on the business owner's credit score",
                  "No fixed repayment schedule; repayment occurs automatically when your client pays — reducing cash flow pressure",
                  "Can enable a business to take on larger contracts or staffing engagements it could not otherwise fund",
                  "Many factors specialize in payroll-driven industries (staffing, construction, healthcare) and understand the operating context",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#9aaa98] leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-[#22c55e]">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Limitations */}
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded-full border border-[#6b7e69]/40 bg-[#111512] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2.5 7.5l5-5M7.5 7.5l-5-5" stroke="#9aaa98" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#eef2ec]">Limitations to be aware of</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Factoring fees, compounded over slow-paying invoices, can result in a higher effective annual cost than traditional debt financing",
                  "Notification factoring requires your clients to redirect payments to the factor — some clients are sensitive to or contractually restricted from accepting this",
                  "UCC-1 financing statements are typically filed against your receivables, which can complicate other borrowing or relationships with future lenders",
                  "Recourse factoring arrangements require you to repurchase or replace invoices that your client does not pay — creating contingent liability",
                  "Factoring is a relationship with ongoing contractual obligations, minimums, and potentially term commitments — it is not as simple as drawing on a credit line",
                  "Does not build business credit history in the same way a term loan or line of credit with a bank would",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#9aaa98] leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-[#6b7e69]">−</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Payroll factoring vs. other payroll funding structures
          </h2>
          <p className="text-[#9aaa98] text-sm mb-8 max-w-2xl leading-relaxed">
            General overview only. Actual terms vary significantly by lender, borrower profile, and product. Not offers or commitments. Subject to underwriting.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Payroll Factoring"
          />
          <p className="text-[0.65rem] text-[#6b7e69] mt-3">
            All figures are general market observations. ZEO.co does not guarantee rates, terms, or approval. Third-party providers set their own criteria.
          </p>
        </div>
      </section>

      {/* Related factoring structures */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Related Options
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Other structures that may address similar needs
          </h2>
          <p className="text-[#9aaa98] text-sm mb-8 max-w-2xl leading-relaxed">
            Payroll factoring is one approach to closing the gap between labor delivery and client payment. Depending on your situation, these alternatives may be worth evaluating alongside or instead of factoring.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<InvoiceIcon />}
              title="Invoice Factoring"
              description="Broader invoice factoring programs not limited to payroll purposes. May suit businesses with diverse receivable types across multiple client categories."
              tags={["All invoice types", "B2B", "Receivables-based"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={<FactoringIcon />}
              title="Spot Factoring"
              description="Factor individual invoices on a one-time basis without entering a long-term factoring agreement. Useful for businesses with occasional, not ongoing, cash flow gaps."
              tags={["Single invoices", "No contract", "Flexible"]}
              href="/factoring/spot-factoring"
            />
            <FinancingPathCard
              icon={<LOCIcon />}
              title="Business Line of Credit"
              description="A revolving credit facility that can be drawn to cover payroll and repaid as receivables come in. Keeps client relationships intact since no invoice assignment is required."
              tags={["Revolving", "No assignment", "$10K–$500K"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<StaffingIcon />}
              title="Asset-Based Lending"
              description="A revolving credit line secured by accounts receivable and inventory. Better suited to larger businesses with significant receivable volume and established operating history."
              tags={["A/R secured", "Revolving", "$500K+"]}
              href="/asset-based-lending"
            />
          </div>
        </div>
      </section>

      {/* Calculator link */}
      <section className="py-10 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-1">
                Calculator
              </p>
              <p className="text-sm font-semibold text-[#eef2ec]">
                Estimate the cost of invoice factoring for payroll
              </p>
              <p className="text-xs text-[#6b7e69] mt-1">
                Model total factoring cost across different advance rates, fee percentages, and invoice payment timelines. Estimates only — not a commitment or offer.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#1e2620] text-sm text-[#9aaa98] hover:text-white hover:border-[#22c55e] transition-colors whitespace-nowrap"
            >
              Open Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Payroll Funding FAQ"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Evaluate whether payroll factoring may fit your business"
        subtext="Submit a brief intake and ZEO will review factoring and other financing structures that may be relevant to your profile. All financing subject to underwriting and approval by third-party providers."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Explore Factoring Options"
        secondaryHref="/factoring"
      />

      {/* Disclaimer */}
      <section className="pb-12 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-8">
          <ProductDisclaimer type="factoring" />
        </div>
      </section>
    </>
  );
}

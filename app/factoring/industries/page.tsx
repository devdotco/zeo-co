import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Invoice Factoring by Industry | ZEO.co",
  description:
    "Explore how invoice factoring works across freight, staffing, construction, healthcare, government contracting, and other industries. Learn typical advance rates, fee structures, and invoice criteria by sector — subject to underwriting by third-party providers.",
  path: "/factoring/industries",
  keywords: [
    "invoice factoring by industry",
    "freight factoring",
    "staffing factoring",
    "construction factoring",
    "healthcare factoring",
    "government contract factoring",
    "manufacturing factoring",
    "oil and gas factoring",
    "factoring advance rates",
    "B2B invoice factoring",
    "accounts receivable financing by industry",
  ],
});

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Factoring", href: "/factoring" },
  { label: "Industries" },
];

// ── Arrow icon ────────────────────────────────────────────────────────────────

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className}>
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Industry icons ─────────────────────────────────────────────────────────────

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M1.5 12.5h1m11 0h1.5M1.5 5h10v7.5H1.5V5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 7.5h3l2 2.5v2.5h-5V7.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4.5" cy="13" r="1.25" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13.5" cy="13" r="1.25" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M1.5 15c0-2.76 2.46-5 5.5-5s5.5 2.24 5.5 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M12 4.5a2.5 2.5 0 0 1 0 5M16.5 15c0-2.2-1.4-4.06-3.5-4.75"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HardhatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3.5 10.5h11M9 3.5v4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M5 7.5C5 5.57 6.79 4 9 4s4 1.57 4 3.5v3H5v-3z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M3.5 10.5v1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function HeartPulseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M2 9.5h2.5l1.5-3 2 5.5 2-8 2 5.5h4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GovIcon() {
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

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 2v1.5M9 14.5V16M2 9h1.5M14.5 9H16M4.1 4.1l1.06 1.06M12.84 12.84l1.06 1.06M4.1 13.9l1.06-1.06M12.84 5.16l1.06-1.06"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2c0 3-3 4-3 7a3 3 0 0 0 6 0c0-3-3-4-3-7zM6.5 13c-.5-.5-1.5-1.5-1.5-3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarehouseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M2 7.5L9 3l7 4.5V16H2V7.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M7 16v-5h4v5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

// ── Industry data ─────────────────────────────────────────────────────────────

const industries = [
  {
    icon: <TruckIcon />,
    title: "Freight & Transportation",
    description:
      "Carriers and freight brokers deliver today but may wait 30–60 days for broker or shipper payment while fuel and operating costs are immediate. Factoring is deeply established in this sector, with many factors offering same-day funding, fuel advance programs, and dedicated back-office support for carriers.",
    tags: ["Same-day funding", "Fuel advances", "Carriers & brokers", "NOA to shippers"],
    href: "/factoring/freight-factoring",
  },
  {
    icon: <UsersIcon />,
    title: "Staffing & Workforce",
    description:
      "Staffing firms run a structurally difficult cash cycle: payroll is due weekly or bi-weekly, while client invoices may not settle for 30–60 days. Factoring bridges this recurring gap. Some staffing-focused factors bundle payroll funding as part of the facility, reducing the need for separate payroll financing.",
    tags: ["Weekly payroll gap", "Contract workforce", "Temp & perm staffing", "Bundled payroll"],
    href: "/factoring/staffing-factoring",
  },
  {
    icon: <HardhatIcon />,
    title: "Construction & Subcontracting",
    description:
      "Subcontractors frequently wait for draw requests from general contractors, which may have their own payment delays from the project owner. Factoring construction receivables requires careful attention to retainage provisions, conditional lien waivers, and whether the invoice represents completed, undisputed work — not work in progress.",
    tags: ["Subcontractor invoices", "No retainage", "Completed work only", "Lien waiver review"],
    href: "/factoring/construction-factoring",
  },
  {
    icon: <HeartPulseIcon />,
    title: "Healthcare & Medical",
    description:
      "Medical billing involves extended reimbursement cycles from insurers and government payers. Specialized healthcare factoring — sometimes called medical receivables financing — focuses on verified claims from commercial insurers or managed care organizations. Medicare and Medicaid receivables face additional assignment restrictions and require specialized expertise.",
    tags: ["Commercial payers", "Insurance cycles", "Verified claims", "Medical billing"],
    href: "/factoring/healthcare-factoring",
  },
  {
    icon: <GovIcon />,
    title: "Government Contracting",
    description:
      "Federal, state, and municipal agencies are reliable payers but operate on extended cycles that can stretch 45–90 days or longer. Factoring government receivables requires compliance with the Assignment of Claims Act for federal invoices. Factors specializing in government A/R understand contractor-specific documentation and Notice of Assignment procedures.",
    tags: ["Federal & state", "Assignment of Claims Act", "Longer cycles", "NOA filing"],
    href: "/factoring/government-factoring",
  },
  {
    icon: <GearIcon />,
    title: "Manufacturing & Distribution",
    description:
      "Manufacturers shipping goods to large retailers or distributors frequently extend net-60 to net-90 payment terms to remain competitive, while their own raw material and labor costs are due much sooner. Factoring can allow manufacturers to take on larger purchase orders without being constrained by the working capital tied up in receivables.",
    tags: ["Net-60 to net-90", "Retailer invoices", "Wholesale B2B", "OEM suppliers"],
    href: "/factoring/manufacturing-factoring",
  },
  {
    icon: <FlameIcon />,
    title: "Oil, Gas & Energy Services",
    description:
      "Oilfield services and energy contractors invoice operators on net-30 to net-60 terms, while equipment, labor, and supply costs run continuously. Factors active in energy services understand the commodity-linked nature of the sector and may adjust credit policies to account for operator financial cycles. Factoring is common among drilling, completion, and midstream service contractors.",
    tags: ["Operator invoices", "Energy services", "Oilfield contractors", "Net-30 to net-60"],
    href: "/factoring/energy-factoring",
  },
  {
    icon: <WarehouseIcon />,
    title: "Wholesale & Import/Export",
    description:
      "Wholesale distributors and importers often extend trade credit to retail customers while carrying their own inventory financing obligations. Factoring can convert outstanding trade receivables into liquidity that supports restocking cycles. International receivables and export invoices may require specialized cross-border factoring arrangements with additional documentation requirements.",
    tags: ["Trade receivables", "Retail customers", "Import/export", "Cross-border options"],
    href: "/factoring/wholesale-factoring",
  },
];

// ── Advance rate table rows ───────────────────────────────────────────────────

const advanceRanges = [
  { industry: "Freight & Transportation", advance: "90–95%", fee: "2–5% / 30 days", note: "Quick pay programs from brokers may compete" },
  { industry: "Staffing & Workforce", advance: "85–92%", fee: "1.5–4% / 30 days", note: "Payroll funding often bundled" },
  { industry: "Construction (subcontractors)", advance: "70–85%", fee: "2–4% / 30 days", note: "Retainage and lien waivers affect eligibility" },
  { industry: "Healthcare (commercial payers)", advance: "60–80%", fee: "3–6% / 30 days", note: "Government payers have additional restrictions" },
  { industry: "Government Contracting", advance: "80–90%", fee: "1.5–3.5% / 30 days", note: "Assignment of Claims Act compliance required" },
  { industry: "Manufacturing & Distribution", advance: "75–90%", fee: "1–3.5% / 30 days", note: "Higher advance for diversified debtor base" },
  { industry: "Oil & Gas Services", advance: "80–90%", fee: "2–5% / 30 days", note: "Operator credit quality drives advance rate" },
  { industry: "Wholesale & Import/Export", advance: "75–90%", fee: "1.5–4% / 30 days", note: "Cross-border invoices may require separate facility" },
];

// ── Advance / Reserve cycle steps ─────────────────────────────────────────────

const cycleSteps = [
  {
    step: "1",
    label: "Invoice issued to a commercial or government customer",
    detail:
      "After delivering goods or completing services, your business issues an invoice with payment terms — net-30, net-60, or longer depending on the customer and industry norms.",
    accent: false,
  },
  {
    step: "2",
    label: "Invoice assigned to the factor",
    detail:
      "You submit the invoice to the factoring company along with supporting documentation. The factor verifies the invoice is valid, undisputed, and that the customer meets their credit criteria.",
    accent: false,
  },
  {
    step: "3",
    label: "Advance funded — typically 70–95% of face value",
    detail:
      "Once verified, the factor advances the agreed percentage of the invoice face value, usually within 1–3 business days. The exact advance rate depends on industry, invoice quality, and customer creditworthiness.",
    accent: true,
  },
  {
    step: "4",
    label: "Customer pays the factor directly",
    detail:
      "In standard notification factoring, your customer is directed to remit payment to the factor. The factor applies incoming payments against the outstanding advance on that invoice.",
    accent: false,
  },
  {
    step: "5",
    label: "Reserve released minus the factoring fee",
    detail:
      "After full customer payment, the factor releases the withheld reserve balance back to your business, less the discount fee. Reserve release timing varies by factor and contract structure.",
    accent: true,
  },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Does my industry affect the advance rate and fees I may receive?",
    a: "Industry is one of several factors that influence what a factoring company may offer. Sectors with historically fast payment cycles and creditworthy debtors — such as freight or government contracting — tend to support higher advance rates and more competitive fees. Industries with longer dispute cycles, retainage provisions, or complex billing structures (like construction and healthcare) may see lower advance rates and higher fee ranges. All terms are subject to underwriting by third-party providers and are not guaranteed.",
  },
  {
    q: "Are certain industries ineligible for invoice factoring?",
    a: "Most factoring companies focus on B2B or B2G (business-to-government) invoices. Consumer-facing businesses that collect at point of sale, B2C service providers, and businesses whose invoices are tied to future performance milestones rather than completed work are generally not eligible. Industries with high dispute rates, complex offset arrangements, or heavily concentrated single-customer receivable books may face limited options depending on the factor. Each situation is reviewed individually under the factor's underwriting guidelines.",
  },
  {
    q: "How does construction factoring differ from standard invoice factoring?",
    a: "Construction factoring carries additional complexity because of retainage — the portion of payment typically withheld by the general contractor or owner until project completion. Most factoring companies will not advance on retainage. Additionally, progress billing on incomplete work is generally ineligible. Construction factorable invoices typically must represent fully completed work with appropriate lien waivers in place. Factors active in this space understand joint check agreements and lien risk; selecting a factor with construction experience is important.",
  },
  {
    q: "Can healthcare and medical businesses use invoice factoring?",
    a: "Medical receivables financing exists but operates differently from commercial factoring. Factors working with healthcare businesses typically focus on commercial insurance receivables rather than Medicare or Medicaid, which have specific anti-assignment rules and reimbursement complexity. Eligibility depends on payer mix, billing quality, and whether claims are verified and clean. Healthcare factoring typically involves lower advance rates and higher fees than freight or staffing factoring to account for payer adjustment and denial risk. Subject to underwriting by third-party providers.",
  },
  {
    q: "What is the Assignment of Claims Act and why does it matter for government contractors?",
    a: "The Assignment of Claims Act (31 U.S.C. § 3727) governs when federal government contract receivables can be assigned to a third party such as a factoring company. To assign a federal receivable, the contract must be for more than $1,000, the assignment must be made to a bank, trust company, or financing institution, and proper notice must be given to the contracting officer and disbursing official. Failure to follow these procedures may make an assignment invalid and unenforceable against the government. Factors specializing in government contracting understand these requirements and assist clients through the notification process.",
  },
];

// ── Requirements list ─────────────────────────────────────────────────────────

const invoiceCriteria = [
  {
    label: "Completed work or delivered goods",
    detail:
      "Invoices must represent services fully rendered or goods already delivered. Progress billing on incomplete contracts is generally ineligible.",
  },
  {
    label: "B2B or B2G debtor",
    detail:
      "The customer owing payment must be a commercial business or government entity — not a consumer. Customer creditworthiness is the primary underwriting variable.",
  },
  {
    label: "No existing liens on the receivable",
    detail:
      "The invoice must be free from prior assignments, liens, or pledge agreements with other lenders. Existing blanket UCC filings may need to be addressed before factoring can proceed.",
  },
  {
    label: "No material disputes or offset rights",
    detail:
      "Invoices subject to dispute, customer offset rights, or contingent acceptance are typically ineligible. The obligation to pay must be unconditional.",
  },
  {
    label: "Invoice within the factor's term limits",
    detail:
      "Most factors have a maximum invoice age. Invoices for goods or services completed many months prior, or with very extended net terms, may be outside eligibility thresholds.",
  },
  {
    label: "Proper documentation",
    detail:
      "Proof of delivery, signed contracts, work orders, or approved timesheets may be required depending on the industry and factor. Government receivables typically require additional documentation.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function FactoringIndustriesPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Factoring"
        title="Factoring by Industry"
        subtitle="Invoice factoring is not a single product — its structure, advance rates, fee norms, and eligibility criteria shift meaningfully by industry. Freight factoring looks very different from healthcare receivables financing. Construction factoring carries considerations that don't apply to staffing. This guide breaks down how factoring works across eight major industries, what to look for in a factor, and what makes invoices eligible or ineligible by sector."
        breadcrumbs={breadcrumbs}
      />

      {/* ── Metrics strip ─────────────────────────────────────────────────── */}
      <section className="py-10 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical advance range"
              value="70–95"
              unit="% of invoice"
              note="Varies significantly by industry and customer credit quality"
            />
            <MetricCard
              label="Funding after verification"
              value="1–3"
              unit="business days"
              note="Initial onboarding may add additional time"
            />
            <MetricCard
              label="Typical fee range"
              value="1–6"
              unit="% per 30 days"
              note="Industry, volume, and debtor profile all affect pricing"
              highlight
            />
            <MetricCard
              label="Invoice terms supported"
              value="Net 30–120"
              note="Longer terms may incur additional fees beyond initial period"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are general market observations for illustrative purposes only. They are not offers, commitments, or guaranteed terms. All terms are subject to underwriting by third-party providers.
          </p>
        </div>
      </section>

      {/* ── What is it / who uses it ───────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
            What Is Invoice Factoring and Which Businesses Use It?
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Invoice factoring is the sale of accounts receivable — unpaid B2B or B2G invoices — to a third-party financing company called a factor, in exchange for an immediate cash advance. Rather than waiting for a customer to pay on their 30-, 60-, or 90-day terms, a business receives most of the invoice value upfront and the factor collects from the customer directly.
            </p>
            <p>
              Because approval is based primarily on the creditworthiness of the business's customers rather than the business itself, factoring is accessible to companies that may not qualify for traditional bank financing — including early-stage businesses, companies with imperfect credit, or businesses that have grown faster than their balance sheets support.
            </p>
            <p>
              Factoring is most common in industries where the cash flow mismatch between delivery and payment is structural and recurring: freight and logistics, staffing, government contracting, construction subcontracting, manufacturing and wholesale distribution, healthcare services, oil and gas services, and import/export trade. These sectors share a common profile — creditworthy B2B customers, extended payment cycles, and predictable invoice volume — that makes the factoring model viable.
            </p>
            <p>
              The key distinction from a loan is that factoring is a purchase of assets, not a borrowing. The factor buys the receivable; the business does not take on debt. How this is treated on the balance sheet depends on whether the arrangement qualifies as a true sale under applicable accounting standards and on the recourse provisions in the contract. Businesses should consult their accountant before drawing accounting conclusions from general descriptions.
            </p>
          </div>
        </div>
      </section>

      {/* ── Advance / reserve cycle ────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                How It Works
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
                The Advance, Reserve, and Fee Cycle
              </h2>
              <div className="space-y-4 text-[#737373] leading-relaxed text-sm">
                <p>
                  Regardless of industry, factoring follows a consistent financial structure: the factor advances a percentage of the invoice face value immediately upon verification, holds the remainder in a reserve account, and releases the reserve minus its fee once the customer pays. Understanding this cycle — and how each stage is affected by your industry — is essential to evaluating whether factoring makes financial sense.
                </p>
                <p>
                  The advance rate is the most industry-sensitive variable. In freight, factors regularly advance 90–95% because payment cycles are short, debtors are typically large brokers or shippers with strong credit, and verification is straightforward via rate confirmations and bills of lading. In construction, advance rates drop to 70–85% because retainage provisions, lien waiver complexity, and dispute risk require the factor to hold a larger reserve buffer. Healthcare factoring has even more variability because insurance reimbursement is subject to payer-specific adjustment logic, denial risk, and claim correction cycles.
                </p>
                <p>
                  The fee structure — typically expressed as a percentage of the invoice face value per 30-day period — reflects the factor's cost of capital, the risk profile of the debtor, the length of the payment cycle, and the operational complexity of the industry. Sectors with reliable, fast-paying debtors and low dispute rates tend to have lower fee structures than those with complex billing, multi-party payment chains, or elevated credit risk.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-6">
                Invoice lifecycle
              </p>
              <div className="space-y-0">
                {cycleSteps.map((s, i) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-[0.65rem] font-semibold tabular-nums ${
                          s.accent
                            ? "border-[#0f0f0f]/50 bg-[#f5f5f5] text-[#0f0f0f]"
                            : "border-[#e5e5e5] bg-[#f5f5f5] text-[#737373]"
                        }`}
                      >
                        {s.step}
                      </div>
                      {i < cycleSteps.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-[#e5e5e5]" style={{ minHeight: "1.5rem" }} />
                      )}
                    </div>
                    <div className={`pb-5 ${i === cycleSteps.length - 1 ? "pb-0" : ""}`}>
                      <p className={`text-sm font-semibold mb-0.5 ${s.accent ? "text-[#0f0f0f]" : "text-[#0f0f0f]"}`}>
                        {s.label}
                      </p>
                      <p className="text-sm text-[#a3a3a3] leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Invoice criteria / requirements ───────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Requirements
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
              Invoice Criteria and Common Eligibility Factors
            </h2>
            <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
              While requirements vary by factor and industry, the following criteria apply broadly across most factoring programs. No approval or outcome is guaranteed — all decisions are made by third-party providers under their own underwriting guidelines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {invoiceCriteria.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <div className="flex items-start gap-2 mb-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-sm font-semibold text-[#0f0f0f]">{item.label}</h3>
                </div>
                <p className="text-sm text-[#737373] leading-relaxed pl-6">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Industry-specific eligibility variations
            </p>
            <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
              <p>
                Beyond the general criteria above, individual industries carry additional eligibility considerations. Construction subcontractors must ensure invoices are free of retainage and that appropriate conditional lien waivers are in place before submission. Healthcare providers factoring commercial insurance receivables must present verified, submitted claims that are not in dispute or subject to coordination of benefits complications. Government contractors factoring federal receivables must comply with Assignment of Claims Act notice procedures — failure to properly notify the contracting officer and disbursing official may render the assignment unenforceable.
              </p>
              <p>
                Freight and transportation businesses typically have the most straightforward eligibility profile because rate confirmations, bills of lading, and signed proof of delivery provide clear evidence of completed service. The debtor (broker or shipper) is usually easily verified. This is one reason freight factoring has historically had among the highest advance rates and fastest funding times of any industry segment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advance rates and fees by industry ────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Pricing Reference
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2 text-balance">
            Advance Rates and Fee Ranges by Industry
          </h2>
          <p className="text-[#737373] text-sm mb-6 max-w-2xl">
            The ranges below are general market observations for educational reference. They are not offers, commitments, or indicative of any specific transaction. Actual terms are subject to underwriting by third-party providers and will vary based on invoice quality, customer credit, volume, and contract terms.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#e5e5e5]">
            <table className="w-full text-sm border-collapse" style={{ fontVariantNumeric: "tabular-nums" }}>
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-left px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3]">
                    Industry
                  </th>
                  <th className="text-left px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3]">
                    Typical Advance Range
                  </th>
                  <th className="text-left px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3]">
                    Typical Fee Range
                  </th>
                  <th className="text-left px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] hidden lg:table-cell">
                    Key Consideration
                  </th>
                </tr>
              </thead>
              <tbody>
                {advanceRanges.map((row, i) => (
                  <tr
                    key={row.industry}
                    className={`border-b border-[#e5e5e5] last:border-b-0 ${
                      i % 2 === 0 ? "bg-[#f5f5f5]" : "bg-[#ffffff]"
                    }`}
                  >
                    <td className="px-5 py-3.5 text-[#0f0f0f] font-medium">{row.industry}</td>
                    <td className="px-5 py-3.5 text-[#0f0f0f] font-semibold">{row.advance}</td>
                    <td className="px-5 py-3.5 text-[#737373]">{row.fee}</td>
                    <td className="px-5 py-3.5 text-[#a3a3a3] hidden lg:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#a3a3a3] mt-3">
            Ranges represent general industry observations only and are not offers or guaranteed terms. Individual factors may quote outside these ranges.
          </p>

          {/* Calculator callout */}
          <div className="mt-6 rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#0f0f0f] mb-1">
                Estimate your advance and fees
              </p>
              <p className="text-sm text-[#737373]">
                The{" "}
                <Link
                  href="/calculators/invoice-factoring-calculator"
                  className="text-[#0f0f0f] underline underline-offset-2 hover:text-[#0f0f0f] transition-colors"
                >
                  Invoice Factoring Calculator
                </Link>{" "}
                lets you model advance amounts, fee costs, and reserve release based on your invoice amounts and payment term assumptions. All outputs are estimates only.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#0f0f0f]/30 text-sm font-semibold text-[#0f0f0f] hover:bg-[#0f0f0f]/10 transition-colors"
            >
              Open Calculator <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Benefits and limitations ───────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Benefits */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Potential Benefits
              </p>
              <h2 className="text-xl font-semibold text-[#0f0f0f] mb-5 text-balance">
                Why Businesses Across Industries Consider Factoring
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    title: "Working capital tied to revenue, not debt capacity",
                    body: "As invoice volume grows, the potential amount of capital accessible through factoring scales with it — without requiring a new credit facility or additional collateral.",
                  },
                  {
                    title: "Customer credit replaces owner credit",
                    body: "For industries where the business serves large, creditworthy commercial customers, factoring may be accessible even if the business itself has limited operating history or imperfect credit.",
                  },
                  {
                    title: "Structural cash flow gap addressed at the source",
                    body: "Industries like freight, staffing, and government contracting face cash flow timing gaps that are an inherent property of their business model — not a sign of financial distress. Factoring is a purpose-built solution for this specific problem.",
                  },
                  {
                    title: "Faster access than traditional bank products",
                    body: "Once an account is established and debtors are verified, invoice advances can often be funded within 24–48 hours. Initial onboarding typically takes days, not the weeks or months often required for bank facilities.",
                  },
                  {
                    title: "Non-recourse options transfer insolvency risk",
                    body: "Some factors offer non-recourse programs where the factor absorbs credit risk if an approved debtor becomes insolvent. This does not typically cover disputes or slow payment — only actual insolvency — and usually carries higher fees.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8l3.5 3.5L13 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-[#0f0f0f] mb-0.5">{item.title}</p>
                      <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Limitations to Understand
              </p>
              <h2 className="text-xl font-semibold text-[#0f0f0f] mb-5 text-balance">
                Important Considerations Before Entering a Facility
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    title: "Effective cost can be higher than traditional credit",
                    body: "Factoring fees expressed as a percentage per 30-day period can produce effective annual rates significantly higher than a bank line of credit, particularly for invoices with slow-paying customers. Modeling total cost against your actual customer payment behavior is essential.",
                  },
                  {
                    title: "Customer notification affects some relationships",
                    body: "Most standard factoring programs require your customers to be notified and directed to pay the factor. Some customers — particularly in construction, where joint check agreements are common — may have concerns or contractual restrictions on assignment.",
                  },
                  {
                    title: "Minimum volume commitments in contract factoring",
                    body: "Traditional factoring facilities often require a minimum monthly invoice volume. Falling short of minimums triggers fees. Businesses with seasonal or irregular invoice flow should carefully review contract terms before committing.",
                  },
                  {
                    title: "UCC liens and existing lender conflicts",
                    body: "Factoring companies typically file a UCC-1 against your receivables. If an existing lender holds a blanket lien, you may need their consent or a subordination agreement before factoring can proceed.",
                  },
                  {
                    title: "Recourse obligations on non-payment in most structures",
                    body: "The majority of factoring is recourse factoring — if your customer doesn't pay within a defined window, you may be required to repurchase the invoice or substitute a new one. Understanding your exposure in this scenario is critical before signing.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#a3a3a3]" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 5v4M8 11h.01"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-[#0f0f0f] mb-0.5">{item.title}</p>
                      <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry cards ─────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            By Industry
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2 text-balance">
            Explore Factoring for Your Industry
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            Each industry below has a dedicated guide covering how factoring works in that sector, what invoices are typically eligible, advance rate norms, and key considerations for evaluating providers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((card) => (
              <FinancingPathCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <FAQ
        title="Factoring by Industry — Common Questions"
        items={faqItems}
      />

      {/* ── Disclaimer ─────────────────────────────────────────────────────── */}
      <section className="py-8 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="factoring" />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Explore whether factoring may be a fit for your industry"
        subtext="Submit a brief intake describing your receivables volume, customer base, and industry. ZEO will review potential factoring paths subject to third-party underwriting and approval. No commitment required."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="Compare All Factoring Types"
        secondaryHref="/factoring"
      />
    </div>
  );
}

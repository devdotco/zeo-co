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
  title: "Business Lines of Credit | ZEO.co",
  description:
    "Learn how a business line of credit works, who may qualify, how costs are structured, and how it compares to term loans and other commercial financing options. Subject to underwriting by third-party providers.",
  path: "/business-line-of-credit",
  keywords: [
    "business line of credit",
    "revolving credit facility",
    "working capital line",
    "small business credit line",
    "unsecured business line of credit",
    "secured line of credit",
    "business LOC",
    "commercial line of credit",
    "draw as needed financing",
    "cash flow financing",
  ],
});

// ── Constants ─────────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Financing Options", href: "/financing" },
  { label: "Business Lines of Credit" },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function DrawIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h12M3 13h8M3 5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="14" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function TermLoanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8h3M5 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 7l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function AssetBasedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="3" y="10" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="10" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

// ── Comparison data ───────────────────────────────────────────────────────────

const comparisonColumns = ["Line of Credit", "Term Loan", "SBA 7(a)", "MCA"];

const comparisonRows = [
  {
    feature: "Structure",
    "Line of Credit": "Revolving — draw and repay repeatedly",
    "Term Loan": "Lump sum, fixed repayment schedule",
    "SBA 7(a)": "Lump sum, SBA-guaranteed",
    MCA: "Advance against future receivables",
  },
  {
    feature: "Typical amount",
    "Line of Credit": "$10K – $500K",
    "Term Loan": "$25K – $2M",
    "SBA 7(a)": "$50K – $5M+",
    MCA: "$5K – $500K",
  },
  {
    feature: "Repayment",
    "Line of Credit": "Interest on drawn balance only",
    "Term Loan": "Fixed monthly payments",
    "SBA 7(a)": "Monthly, amortized",
    MCA: "Daily/weekly holdback % of sales",
  },
  {
    feature: "Collateral (typical)",
    "Line of Credit": "Often unsecured (smaller amounts)",
    "Term Loan": "Varies by lender",
    "SBA 7(a)": "Business assets + personal guarantee",
    MCA: "Future receivables (not traditional collateral)",
  },
  {
    feature: "Funding speed",
    "Line of Credit": "3 – 10 days",
    "Term Loan": "3 – 14 days",
    "SBA 7(a)": "30 – 90 days",
    MCA: "1 – 3 days",
  },
  {
    feature: "Min. credit (typical)",
    "Line of Credit": "600+",
    "Term Loan": "600+",
    "SBA 7(a)": "650+",
    MCA: "500+",
  },
  {
    feature: "Best use case",
    "Line of Credit": "Cash flow gaps, recurring operating needs",
    "Term Loan": "One-time capital expenditure or expansion",
    "SBA 7(a)": "Acquisition, CRE, large cap needs",
    MCA: "Short-term liquidity, limited credit options",
  },
];

// ── FAQ data ──────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What is a business line of credit and how is it different from a term loan?",
    a: "A business line of credit is a revolving credit facility: you are approved for a maximum limit and may draw any amount up to that limit, repay it, and draw again. You typically pay interest only on the outstanding drawn balance. A term loan, by contrast, provides a fixed lump sum disbursed at closing, repaid over a fixed schedule — even if you no longer need all of the funds. Lines of credit are generally better suited for recurring or unpredictable cash flow needs; term loans suit specific, one-time capital expenditures.",
  },
  {
    q: "What credit score and revenue may be required to qualify?",
    a: "Most conventional business lines of credit require a personal FICO score of 600 or above, though requirements vary significantly by provider and product type. Unsecured lines at larger amounts typically require 650–700+. Revenue requirements also vary; many providers look for at least $100,000–$250,000 in annual revenue and a minimum of 1–2 years in business. These are general observations — specific eligibility is determined by the third-party provider at underwriting.",
  },
  {
    q: "Are there fees beyond the interest rate on draws?",
    a: "Yes. Lines of credit may carry origination fees, annual maintenance fees, draw fees (charged each time you access funds), non-utilization fees (charged when the line goes unused), and prepayment penalties on some secured products. Always review the full fee schedule in the loan agreement, not just the advertised interest rate or factor rate, before accepting any offer.",
  },
  {
    q: "What is the difference between a secured and an unsecured business line of credit?",
    a: "A secured line of credit is backed by collateral — such as business assets, accounts receivable, real property, or a blanket lien — and typically allows for higher limits and may carry lower rates than unsecured products. An unsecured line requires no specific collateral pledge but often relies more heavily on personal credit, business revenue, and financial statements. Smaller unsecured lines ($10K–$100K) are more commonly available to established businesses with solid credit profiles.",
  },
  {
    q: "Does ZEO guarantee approval or specific rates on a line of credit?",
    a: "No. ZEO.co is not a lender and does not make credit decisions. All financing — including a business line of credit — is subject to underwriting, approval, and final terms set by the applicable third-party provider. ZEO helps businesses evaluate their options and may share your profile with providers where appropriate. Nothing on this site constitutes an offer, commitment, or guarantee of financing.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BusinessLineOfCreditPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Financing"
        title="Business Lines of Credit"
        subtitle="A revolving credit facility that lets you draw funds as needed up to an approved limit, repay, and draw again. Commonly used to manage cash flow variability, cover operating gaps, and fund recurring expenses — without taking on a fixed lump-sum loan."
      />

      {/* Who it's for */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Who It May Fit
              </p>
              <h2 className="text-2xl font-semibold text-white leading-snug">
                Businesses with recurring or unpredictable capital needs
              </h2>
              <p className="text-[#737373] text-sm mt-4 leading-relaxed">
                A line of credit is structurally distinct from a term loan. It suits businesses where capital needs vary month to month — not those funding a single, one-time project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Seasonal revenue fluctuation",
                  desc: "Businesses whose revenue concentrates in certain months — retail, hospitality, landscaping, agriculture — may use a line to bridge the low-revenue periods without carrying unused debt year-round.",
                },
                {
                  title: "Slow-paying receivables",
                  desc: "B2B companies with net-30 to net-90 payment terms can use a line of credit to fund operations while waiting on customer payments, rather than turning away new work or depleting reserves.",
                },
                {
                  title: "Opportunity-driven spending",
                  desc: "Businesses that periodically encounter short-notice bulk-purchase discounts, contract opportunities, or inventory buys benefit from having a facility ready to activate rather than re-applying each time.",
                },
                {
                  title: "Operating expense coverage",
                  desc: "Payroll timing mismatches, unexpected equipment repairs, or temporary supplier price increases are common short-term pressures. A standing credit line can cover these without triggering a new loan application.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f] mb-3" />
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.title}</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works — steps */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            The revolving credit cycle
          </h2>
          <p className="text-[#737373] text-sm mb-10 max-w-2xl leading-relaxed">
            Unlike a term loan, a line of credit does not disburse all funds at once. The structure revolves: draws reduce the available balance; repayments restore it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                label: "Application & approval",
                desc: "The provider reviews revenue, credit, time in business, and other underwriting criteria. An approved limit is set — the maximum you may have outstanding at any time.",
              },
              {
                step: "02",
                label: "Draw funds as needed",
                desc: "When a cash need arises, you request a draw — either online or by transfer — up to your available balance. Funds typically arrive within 1–2 business days for established lines.",
              },
              {
                step: "03",
                label: "Interest accrues on drawn balance",
                desc: "Unlike a term loan where you pay on the full principal from day one, interest on most lines accrues only on the amount currently outstanding — not on the unused portion of the limit.",
              },
              {
                step: "04",
                label: "Repayment restores availability",
                desc: "As you repay principal, that capacity becomes available to draw again. This revolving structure is what makes a line of credit different from a one-time loan disbursement.",
              },
              {
                step: "05",
                label: "Annual review or renewal",
                desc: "Most lines of credit have an annual review period. The provider may renew, adjust the limit, or change terms based on your business's financial performance during the prior year.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5"
              >
                <p className="text-[0.65rem] font-semibold tabular-nums tracking-[0.08em] text-[#0f0f0f] mb-3">
                  {item.step}
                </p>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2 leading-snug">
                  {item.label}
                </p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common use cases */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Common Use Cases
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            What businesses typically use a line of credit for
          </h2>
          <p className="text-[#737373] text-sm mb-10 max-w-2xl leading-relaxed">
            The following represent common patterns, not guarantees of eligibility or approval for any specific purpose. Lenders may restrict use of proceeds.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Payroll gap coverage",
                detail:
                  "Covering payroll when a large receivable is delayed by 1–3 weeks is one of the most common reasons businesses maintain a standing credit line. The draw is small and short in duration, making the interest cost relatively modest.",
              },
              {
                title: "Inventory purchasing",
                detail:
                  "Retailers and product-based businesses may draw on a line to purchase inventory ahead of a selling season, then repay as product sells. This avoids long-term debt for a cyclical, predictable need.",
              },
              {
                title: "Bridge between contracts",
                detail:
                  "Service businesses — contractors, staffing firms, agencies — often have gaps between project completions and new contract starts. A line of credit can cover overhead during those transitions.",
              },
              {
                title: "Marketing and growth spend",
                detail:
                  "A time-sensitive ad campaign, trade show deposit, or promotional push may have a short runway that doesn't align with a term loan's disbursement timeline. A line provides immediate access to capital already pre-approved.",
              },
              {
                title: "Emergency operating reserve",
                detail:
                  "Equipment failure, facility repairs, or a sudden vendor shortfall can require immediate capital. Businesses often maintain an undrawn line as a contingency, only tapping it when needed.",
              },
              {
                title: "Supplier early-pay discounts",
                detail:
                  "Some vendors offer 2–5% discounts for early payment (e.g., \"2/10 net 30\"). A small draw to capture that discount can generate a return that exceeds the cost of the credit if the line carries a modest rate.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border border-[#e5e5e5] bg-[#ffffff] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#0f0f0f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-[#0f0f0f] leading-snug">{item.title}</p>
                </div>
                <p className="text-xs text-[#a3a3a3] leading-relaxed pl-8">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical requirements — MetricCards */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Typical Requirements
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            What lenders generally evaluate
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl leading-relaxed">
            These are general ranges observed across conventional business line of credit products. Actual criteria vary by lender, line size, and whether the facility is secured or unsecured. Subject to underwriting by third-party providers.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            <MetricCard
              label="Personal Credit"
              value="600+"
              note="Higher scores may access larger unsecured limits"
            />
            <MetricCard
              label="Annual Revenue"
              value="$100K+"
              note="Some providers require $250K+ for larger lines"
            />
            <MetricCard
              label="Time in Business"
              value="1–2 yr"
              note="Many lenders prefer 2+ years of operating history"
            />
            <MetricCard
              label="Typical Limit Range"
              value="$10K–$500K"
              note="Larger secured lines may exceed $500K"
            />
            <MetricCard
              label="Typical Draw Term"
              value="12–24 mo"
              note="Revolving facilities usually reviewed annually"
            />
            <MetricCard
              label="Funding Speed"
              value="3–10 days"
              note="Once established, draws may fund in 1–2 days"
              highlight
            />
          </div>
          <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
            <p className="text-xs font-semibold text-[#0f0f0f] mb-2">Additional factors lenders commonly consider</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 mt-3">
              {[
                "Business bank account history and average daily balance",
                "Existing debt obligations and monthly payment load",
                "Collateral availability (for secured lines)",
                "Industry classification and risk profile",
                "Number of negative days or overdrafts in bank statements",
                "Personal guarantee — commonly required by conventional lenders",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-[#a3a3a3]">
                  <span className="mt-0.5 flex-shrink-0 text-[#0f0f0f]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cost discussion */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Cost Structure
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                How the cost of a business line of credit is structured
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-4">
                Business lines of credit can carry a range of costs depending on the provider, the size of the facility, whether it is secured or unsecured, and the borrower's credit and revenue profile. ZEO does not publish rate ranges and cannot guarantee any specific terms — all pricing is set by the third-party provider at the time of underwriting.
              </p>
              <p className="text-[#737373] text-sm leading-relaxed mb-4">
                The most important number to evaluate is the total cost of capital over the expected draw period — not just the stated interest rate. A line with a modest rate but meaningful draw fees and a non-utilization fee can carry a higher effective cost than it initially appears.
              </p>
              <p className="text-[#737373] text-sm leading-relaxed">
                When comparing offers, ask each provider for: the annual percentage rate (APR) on draws, any origination or establishment fee, draw fees per transaction, monthly maintenance or annual fee, and any minimum draw or minimum utilization requirement.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Interest on drawn balance",
                  desc: "Charged only on the amount you have drawn and not yet repaid. Some lines use a simple daily or monthly rate; others use APR. Rates vary widely by lender type, credit profile, and collateral.",
                },
                {
                  label: "Origination or establishment fee",
                  desc: "A one-time fee charged when the line is opened, often expressed as a percentage of the approved limit. Not all providers charge this; others roll it into the rate.",
                },
                {
                  label: "Draw fee",
                  desc: "A flat fee charged each time you request a draw. This can meaningfully increase the effective cost of small, frequent draws — factor it in when modeling real usage.",
                },
                {
                  label: "Non-utilization or inactivity fee",
                  desc: "Charged by some providers when the outstanding balance stays below a minimum threshold or the line goes unused for a period. Ensure you understand whether keeping the line undrawn incurs a cost.",
                },
                {
                  label: "Annual renewal or maintenance fee",
                  desc: "Ongoing cost to keep the line open, regardless of usage. Common in bank-issued revolving credit products. Often waived at higher utilization levels, depending on the lender agreement.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                >
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{item.label}</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Trade-offs
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Advantages and limitations to consider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded-full border border-[#0f0f0f]/40 bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 2.5" stroke="#0f0f0f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#0f0f0f]">Potential advantages</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Flexibility to draw only what you need, when you need it — no lump-sum pressure",
                  "Interest accrues only on the drawn balance, not the full approved limit",
                  "Revolving structure means repaid amounts are available to draw again",
                  "Useful as a standing contingency reserve, even if rarely drawn",
                  "May help manage cash flow timing mismatches without long-term obligations",
                  "Can be faster to access than a new loan once the line is established",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#737373] leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-[#0f0f0f]">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Cons */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded-full border border-[#a3a3a3]/40 bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2.5 7.5l5-5M7.5 7.5l-5-5" stroke="#737373" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#0f0f0f]">Limitations to be aware of</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Smaller limits than term loans or SBA products — typically not suited for large capital needs",
                  "Annual reviews can result in limit reductions or non-renewal if business performance declines",
                  "Fee structures (draw fees, maintenance fees) can raise the effective cost of small or frequent draws",
                  "Variable rate structures mean your cost can increase if market rates rise",
                  "Personal guarantee commonly required — lender may call on it in default scenarios",
                  "Not ideal for long-term capital investments; better suited for working capital than equipment or real estate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#737373] leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-[#a3a3a3]">−</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Line of credit vs. other financing structures
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl leading-relaxed">
            General overview only. Actual terms vary significantly by lender, borrower profile, and product. Not offers or commitments. Subject to underwriting.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Line of Credit"
          />
          <p className="text-[0.65rem] text-[#a3a3a3] mt-3">
            All figures are general market estimates. ZEO.co does not guarantee rates, terms, or approval. Third-party providers set their own criteria.
          </p>
        </div>
      </section>

      {/* Alternatives */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Alternatives
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Other structures that may address similar needs
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl leading-relaxed">
            A business line of credit is not always the most appropriate structure. Depending on your capital need, these alternatives may be worth evaluating.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<WorkingCapitalIcon />}
              title="Working Capital Loans"
              description="Term-based working capital financing for businesses that prefer a fixed payment schedule over a revolving draw structure."
              tags={["Fixed payments", "$50K–$5M", "6–36 mo"]}
              href="/working-capital"
            />
            <FinancingPathCard
              icon={<TermLoanIcon />}
              title="Business Term Loans"
              description="Lump-sum financing for one-time capital needs — expansion, buildout, equipment — where a revolving line is not the right structure."
              tags={["Lump sum", "Fixed term", "$25K–$2M"]}
              href="/business-term-loans"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA Loans"
              description="SBA CAPLines are revolving working capital lines for eligible businesses. Larger limits than conventional LOCs, with SBA program requirements."
              tags={["SBA CAPLine", "Longer terms", "650+ credit"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<AssetBasedIcon />}
              title="Asset-Based Lending"
              description="A revolving facility secured by accounts receivable and inventory. Better suited to larger, asset-rich businesses than conventional unsecured lines."
              tags={["A/R + inventory", "Revolving", "$500K+"]}
              href="/asset-based-lending"
            />
          </div>
        </div>
      </section>

      {/* Calculator link */}
      <section className="py-10 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1">
                Calculator
              </p>
              <p className="text-sm font-semibold text-[#0f0f0f]">
                Estimate the cost of drawing on a business line of credit
              </p>
              <p className="text-xs text-[#a3a3a3] mt-1">
                Model total interest cost across different draw amounts, rates, and repayment timelines. Estimates only — not a commitment or offer.
              </p>
            </div>
            <Link
              href="/calculators/line-of-credit"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#e5e5e5] text-sm text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors whitespace-nowrap"
            >
              Open Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Frequently Asked Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Evaluate whether a line of credit may fit your business"
        subtext="Submit a brief intake and ZEO will review financing structures that may be relevant based on your profile. All financing subject to underwriting and approval by third-party providers."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing Options"
        secondaryHref="/financing"
      />

      {/* Disclaimer */}
      <section className="pb-12 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>
    </>
  );
}

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
  title: "Staffing Agency Financing | ZEO.co",
  description:
    "Explore financing options for staffing agencies — including invoice factoring, SBA loans, business lines of credit, and working capital. Learn about payroll gap challenges, typical lender requirements, and which structures may be a potential fit, subject to underwriting.",
  path: "/industries/staffing",
  keywords: [
    "staffing agency financing",
    "staffing factoring",
    "payroll financing staffing",
    "temp agency working capital",
    "staffing agency SBA loan",
    "invoice factoring staffing",
    "staffing agency line of credit",
    "temporary staffing payroll funding",
    "staffing agency cash flow",
    "accounts receivable financing staffing",
  ],
});

// ── Icons ──────────────────────────────────────────────────────────────────────

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 15c0-2.76 2.46-5 5.5-5s5.5 2.24 5.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 4.5a2.5 2.5 0 0 1 0 5M16.5 15c0-2.2-1.4-4.06-3.5-4.75" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

function CreditLineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 11.5h2M8 11.5h1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 7h12M3 7V6l6-3 6 3v1M5 7v7M9 7v7M13 7v7M3 14h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 5.5v3.5l2.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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
      <path d="M7 2L1.5 12h11L7 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M7 6v2.5M7 10.5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Financing products data ────────────────────────────────────────────────────

const financingProducts = [
  {
    icon: <InvoiceIcon />,
    title: "Staffing & Payroll Factoring",
    description:
      "Convert outstanding client invoices into immediate working capital to cover weekly payroll obligations. Factors specializing in staffing understand the payroll-before-payment cycle and may offer bundled payroll funding alongside receivables advances.",
    tags: ["70–90% advance rate", "Weekly payroll gap", "30–60 day cycles", "Client credit focus"],
    href: "/factoring/staffing-factoring",
    highlight: true,
  },
  {
    icon: <CreditLineIcon />,
    title: "Business Line of Credit",
    description:
      "A revolving draw facility lets staffing agencies pull funds as needed for payroll, onboarding costs, or growth — and repay as client invoices clear. Approval is based on the agency's own creditworthiness, not individual client invoices.",
    tags: ["Revolving access", "Draw as needed", "Business credit", "Interest on draws only"],
    href: "/business-line-of-credit",
  },
  {
    icon: <SBAIcon />,
    title: "SBA 7(a) Loans",
    description:
      "Established staffing agencies with solid financials may explore SBA 7(a) loans for working capital, expansion, or equipment. Longer terms and government-backed structures can lower monthly obligations for agencies that qualify.",
    tags: ["Up to $5M", "Longer terms", "Equity injection may be required", "SBA guidelines apply"],
    href: "/sba-loans/7a",
  },
  {
    icon: <WorkingCapitalIcon />,
    title: "Working Capital Loans",
    description:
      "Short-to-medium term financing for operational gaps — covering payroll for a new contract ramp, bridging between client payment cycles, or sustaining operations during a slow billing period.",
    tags: ["Lump sum", "Fixed term", "Quick deployment", "Operational use"],
    href: "/working-capital",
  },
];

// ── Comparison data ────────────────────────────────────────────────────────────

const comparisonColumns = ["Staffing Factoring", "Line of Credit", "SBA 7(a)"];
const comparisonRows = [
  {
    feature: "Primary approval basis",
    "Staffing Factoring": "Client credit quality",
    "Line of Credit": "Agency creditworthiness",
    "SBA 7(a)": "Business financials & DSCR",
  },
  {
    feature: "Typical funding speed",
    "Staffing Factoring": "1–3 business days",
    "Line of Credit": "1–4 weeks",
    "SBA 7(a)": "30–90 days",
  },
  {
    feature: "Repayment structure",
    "Staffing Factoring": "Client pays factor directly",
    "Line of Credit": "Draw-and-repay revolving",
    "SBA 7(a)": "Fixed monthly installments",
  },
  {
    feature: "Useful for payroll gaps",
    "Staffing Factoring": "Yes — designed for this",
    "Line of Credit": "Yes — draw as needed",
    "SBA 7(a)": "Indirectly via working capital",
  },
  {
    feature: "Impact on client relationship",
    "Staffing Factoring": "Factor may contact client",
    "Line of Credit": "No client contact",
    "SBA 7(a)": "No client contact",
  },
  {
    feature: "Time in business typically needed",
    "Staffing Factoring": "Minimal — client credit matters more",
    "Line of Credit": "Usually 1–2+ years",
    "SBA 7(a)": "2+ years preferred",
  },
];

// ── FAQ data ───────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Why do staffing agencies face persistent cash flow challenges even when business is growing?",
    a: "Staffing agencies carry a structural mismatch between when money goes out and when it comes in. Employees and temporary workers must be paid weekly — often before client invoices are even issued, let alone paid. Client payment terms in staffing commonly run 30 to 60 days, and some enterprise or government clients may stretch to 90 days. As an agency wins more contracts and places more workers, payroll obligations grow immediately while the corresponding receivables take weeks to clear. This means a growing staffing firm can face a cash crunch precisely because business is going well. Financing options that bridge this payroll-to-payment gap are central to how many agencies manage growth.",
  },
  {
    q: "How does invoice factoring work specifically for staffing agencies?",
    a: "In a staffing factoring arrangement, the agency issues invoices to its clients for hours worked during a billing cycle. Rather than waiting 30–60 days for those invoices to be paid, the agency sells them to a factoring company. The factor advances a percentage of the invoice face value — typically 70–90% — often within one to three business days. The factor then collects payment directly from the client and remits the remaining reserve balance minus its discount fee back to the agency. Some staffing-focused factors also offer bundled payroll funding services, where the factor effectively funds payroll directly against the expected invoice value. This is subject to the factor's own underwriting and the creditworthiness of the staffing agency's client accounts.",
  },
  {
    q: "What lender requirements do staffing agencies typically encounter when applying for financing?",
    a: "Requirements vary by product. For invoice factoring, the primary consideration is the credit quality of the agency's clients — factors want to see that the businesses or government entities the agency bills are creditworthy and have a history of paying invoices. For traditional bank loans and lines of credit, lenders typically look at the agency's own financial statements, revenue history, DSCR (debt service coverage ratio), and sometimes owner credit scores. SBA 7(a) loan applicants should expect to provide two or more years of business tax returns, personal financial statements, a business plan for newer agencies, and potentially collateral documentation. Lenders may also evaluate the agency's mix of clients — heavy concentration with a single client can be viewed as a risk factor.",
  },
  {
    q: "Can a newer staffing agency with limited credit history qualify for financing?",
    a: "Newer agencies often find invoice factoring the most accessible path because approval hinges primarily on client credit rather than the agency's own credit history. If the agency has strong, creditworthy clients — enterprise companies, hospitals, government entities — some factors may be willing to advance against those receivables even when the agency itself is relatively young. Lines of credit and term loans from traditional lenders typically require a longer track record, often one to two years of operating history and demonstrable revenue. SBA programs have specific eligibility criteria including time in business, owner citizenship or residency status, and use-of-proceeds restrictions. Early-stage agencies should evaluate factoring first and explore traditional lending as the business matures.",
  },
  {
    q: "Does using a factoring company affect the staffing agency's relationship with its clients?",
    a: "In most factoring arrangements, the factor sends a notice of assignment to the client informing them that invoices have been assigned and that payment should be remitted to the factor rather than the agency. This is standard practice in the staffing industry and is generally well understood by enterprise clients. However, agencies should consider how individual clients might respond, particularly in competitive markets where a client might view factoring as a signal of financial instability. Confidential or undisclosed factoring arrangements — where the client is not notified — exist but are less common and may not be available for all client profiles. Agencies should review notification requirements carefully before entering a factoring facility.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function StaffingIndustryPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <PageHero
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Staffing Agency Financing" },
        ]}
        eyebrow="Industry"
        title="Staffing Agency Financing"
        subtitle="Staffing agencies pay workers before clients pay invoices — a structural gap that financing can bridge. Explore factoring, lines of credit, SBA options, and working capital products that may be a potential fit, subject to underwriting by third-party providers."
      />

      {/* ── Metrics strip ───────────────────────────────────────────────────── */}
      <section className="border-b border-[#e5e5e5] py-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical client payment terms"
              value="30–60"
              unit="days"
              note="Enterprise and government clients often run 45–90 days"
            />
            <MetricCard
              label="Payroll frequency"
              value="Weekly"
              note="Most staffing agencies pay temporary workers every week"
            />
            <MetricCard
              label="Factoring advance rate"
              value="70–90"
              unit="% of invoice"
              note="Remainder held in reserve, released when client pays"
              highlight
            />
            <MetricCard
              label="Factoring funding speed"
              value="1–3"
              unit="business days"
              note="After initial setup; repeat draws can be same-day with some factors"
            />
          </div>
        </div>
      </section>

      {/* ── Key financing challenges ─────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Industry Challenges
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
                Why staffing agencies need specialized financing
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-4">
                The staffing industry operates on a model that creates a fundamental cash flow problem by design. Workers are placed with client companies, hours are tracked, and invoices are issued — but payroll runs on a weekly cycle regardless of where client invoices are in the payment process. The business can be profitable on paper while struggling to make payroll on Thursday because a major client has not yet approved and remitted on invoices from three weeks ago.
              </p>
              <p className="text-[#737373] text-sm leading-relaxed">
                This is not a sign of poor financial management — it is a structural feature of how staffing businesses work. The challenge compounds as an agency grows: winning a large contract or landing an enterprise client means a larger payroll obligation hits before any of the corresponding revenue has been collected. Understanding the specific financing tools built to address this dynamic is essential for agency operators planning for growth.
              </p>
            </div>

            {/* Challenges grid */}
            <div className="space-y-3">
              {[
                {
                  title: "The payroll-to-payment gap",
                  body: "Workers must be paid weekly. Client invoices take 30–90 days to clear. Every week of growth widens this gap before the corresponding revenue arrives.",
                },
                {
                  title: "Contract ramp costs",
                  body: "Winning a new enterprise contract requires onboarding, screening, background checks, and initial placements — all funded before the first invoice is even issued.",
                },
                {
                  title: "Client payment concentration",
                  body: "Many agencies rely on a small number of large clients. When one delays payment or disputes an invoice, the impact on agency cash flow can be outsized.",
                },
                {
                  title: "Thin operating margins",
                  body: "Staffing margins are typically narrow — bill rate minus burden costs leaves limited cushion. Short-term cash gaps can quickly become operational problems without a financing facility in place.",
                },
                {
                  title: "Seasonal volume swings",
                  body: "Retail, hospitality, and administrative staffing often peaks in Q4 or around specific industries' hiring cycles, requiring agencies to scale payroll obligations rapidly before revenue catches up.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4"
                >
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1">{item.title}</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Financing products ──────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Financing Products
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
            Structures commonly used by staffing agencies
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            Not every financing product fits every staffing agency. The right structure depends on the agency&apos;s size, client mix, credit history, and how quickly funds are needed. These are general options — terms are set by third-party providers subject to underwriting.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {financingProducts.map((card) => (
              <FinancingPathCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy ───────────────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-7 text-sm text-[#737373] leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-[#0f0f0f] mb-3">
                  Invoice factoring: the most common staffing financing structure
                </h2>
                <p>
                  Invoice factoring is the financing product most closely associated with the staffing industry — and with good reason. Factoring is purpose-built for businesses that have reliable receivables but need liquidity before those receivables clear. Staffing agencies check both boxes: they issue invoices to commercial or government clients with established payment histories, and they face an unavoidable cash flow gap between invoice issuance and receipt.
                </p>
                <p className="mt-3">
                  In a staffing factoring arrangement, the agency assigns its outstanding client invoices to a factoring company. The factor advances a percentage of the invoice face value — typically 70 to 90 percent — within one to three business days of submitting and verifying invoices. The factor then takes over collection, contacting the client to receive payment, and remits the withheld reserve balance minus its discount fee once the client pays in full. For agencies billing weekly and collecting on 45-day terms, this structure effectively converts outstanding receivables into near-immediate operating cash, which is then used to fund the next payroll cycle.
                </p>
                <p className="mt-3">
                  Some factoring companies that specialize in staffing go further by offering bundled payroll funding services — effectively fronting payroll directly against the expected invoice value before the invoice is even issued. This is not universally available and is subject to each provider&apos;s own underwriting standards, but it addresses the most acute version of the cash timing problem that growing staffing agencies face.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0f0f0f] mb-3">
                  Lines of credit and term loans for established agencies
                </h2>
                <p>
                  Staffing agencies with two or more years of operating history, demonstrable revenue, and reasonable credit profiles may also qualify for business lines of credit or term loans from banks, credit unions, or alternative lenders. A revolving line of credit allows an agency to draw funds as needed — to cover a specific payroll cycle, fund a contract ramp, or bridge a seasonal slow period — and repay as client invoices clear. Interest accrues only on the outstanding balance, making this more cost-efficient than factoring for agencies that do not need continuous advances against all of their receivables.
                </p>
                <p className="mt-3">
                  The tradeoff is that approval for a line of credit is based on the agency&apos;s own financial profile rather than client credit quality. Lenders will evaluate revenue stability, profit margins, personal credit for owner-guarantors, and sometimes specific financial ratios. Agencies that are growing quickly but have not yet established a multi-year track record may find lines of credit less accessible than factoring until their financial history matures.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0f0f0f] mb-3">
                  SBA 7(a) loans for growth and long-term working capital
                </h2>
                <p>
                  The SBA 7(a) program is a government-backed loan program administered through participating lenders that can provide working capital, equipment financing, or funds for business acquisition. For staffing agencies with solid financial histories and an identifiable long-term use of proceeds, SBA 7(a) loans offer longer repayment terms and potentially more favorable structures than conventional alternatives. Loan sizes can range up to $5 million, and the government guarantee reduces lender risk, which may make approval more accessible for agencies that would not qualify for a conventional bank loan of the same size.
                </p>
                <p className="mt-3">
                  The application process is more involved than most alternative financing options. Applicants should expect to provide multiple years of business tax returns, personal financial statements for all owners above a threshold ownership percentage, a business plan for newer agencies, and potentially collateral documentation. Processing timelines from application to funding typically run 30 to 90 days depending on the lender and the complexity of the application. ZEO.co is not the SBA, an SBA lender, or a government agency — SBA programs are offered by participating lenders subject to SBA rules and lender underwriting.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0f0f0f] mb-3">
                  Evaluating which structure may be the right fit
                </h2>
                <p>
                  There is no single financing product that is optimal for every staffing agency. Early-stage agencies with strong enterprise or government clients but limited credit history often find factoring the most accessible and operationally relevant path. Established agencies with stable financials and predictable cash cycles may prefer the lower cost and flexibility of a revolving line of credit. Agencies pursuing acquisitions, significant geographic expansion, or major equipment investment may explore SBA options for their longer terms and larger potential amounts.
                </p>
                <p className="mt-3">
                  In some cases, agencies use more than one structure simultaneously — factoring for day-to-day payroll liquidity while maintaining a line of credit for larger strategic draws. The appropriate approach depends on the agency&apos;s specific revenue profile, client concentration, growth trajectory, and cost tolerance for financing. All of these structures are provided by third-party lenders and factors, and all are subject to their own underwriting criteria, terms, and conditions.
                </p>
              </div>
            </div>

            {/* Sidebar: lender requirements */}
            <div className="space-y-4">
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                  What lenders typically look for
                </p>
                <p className="text-xs text-[#a3a3a3] mb-4 leading-relaxed">
                  Requirements vary by product and provider. These are common signals — not guaranteed criteria.
                </p>
                <ul className="space-y-3">
                  {[
                    "Creditworthy commercial or government clients (for factoring)",
                    "Clean, undisputed invoices for completed placements",
                    "Consistent billing volume — factors often set monthly minimums",
                    "2+ years in business for traditional bank lending",
                    "Business tax returns for 1–3 years (SBA, term loans)",
                    "Personal credit score of owners (lines of credit, SBA)",
                    "No prior UCC liens on A/R that cannot be subordinated",
                    "Payroll records and client contracts for larger facilities",
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
                  Factors that may complicate approval
                </p>
                <ul className="space-y-3">
                  {[
                    "Heavy client concentration — one client representing 50%+ of invoices",
                    "Invoices for partially completed placements or disputed hours",
                    "Existing blanket lien on A/R from another lender",
                    "Clients with poor payment history or in financial difficulty",
                    "Tax liens or unresolved legal judgments against the agency",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#a3a3a3] leading-relaxed">
                      <AlertIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] p-5">
                <p className="text-xs font-semibold text-[#0f0f0f] mb-2">Not sure where to start?</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-4">
                  Submit a brief intake and ZEO will review your agency&apos;s profile against financing options that may be a potential fit, subject to third-party underwriting and approval.
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

      {/* ── Comparison table ────────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Comparison
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
            Staffing financing options side by side
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            This is a general reference only. Actual terms are set by third-party providers subject to their own underwriting criteria and are not offers or guarantees.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Staffing Factoring"
          />
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges and characteristics shown are general market observations. Individual product terms vary by provider and are subject to underwriting.
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────────── */}
      <FAQ
        items={faqItems}
        title="Frequently Asked Questions: Staffing Agency Financing"
      />

      {/* ── Disclaimer ──────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-10">
        <ProductDisclaimer type="general" />
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Explore financing options for your staffing agency"
        subtext="Submit a brief intake describing your agency's payroll needs, client mix, and cash flow goals. ZEO will review potential paths subject to third-party underwriting and approval."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing"
        secondaryHref="/financing"
      />
    </div>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import ComparisonTable from "@/components/ui/ComparisonTable";

export const metadata: Metadata = buildMetadata({
  title: "Healthcare Financing | ZEO.co",
  description:
    "Explore financing paths that may be a fit for medical practices, clinics, and healthcare businesses — from SBA loans to equipment financing and working capital.",
  path: "/industries/healthcare",
  keywords: [
    "healthcare business financing",
    "medical practice loans",
    "clinic equipment financing",
    "SBA loans for healthcare",
    "medical working capital",
    "healthcare accounts receivable factoring",
  ],
});

const breadcrumbs = [
  { label: "Industries", href: "/industries" },
  { label: "Healthcare Financing" },
];

const challenges = [
  {
    heading: "Slow insurance reimbursements",
    body: "Insurance cycles — Medicare, Medicaid, and commercial carriers — routinely stretch 30 to 90 days from claim submission to payment. That gap can strain payroll, supply purchasing, and overhead before a single dollar lands in the account.",
  },
  {
    heading: "High equipment costs",
    body: "Diagnostic imaging, surgical tools, dental chairs, lab analyzers, and EMR infrastructure carry significant capital requirements. Outright purchase ties up cash that could fund staffing or expansion.",
  },
  {
    heading: "Credentialing and ramp-up delays",
    body: "New providers or newly opened locations may face weeks or months of credentialing before generating billable revenue. That lag creates a financing need that most standard lenders are not structured to address.",
  },
  {
    heading: "Seasonal and specialty volume swings",
    body: "Urgent care centers, pediatric practices, and allergy clinics can see sharp seasonal shifts in patient volume. Maintaining consistent staffing and supplies through low-volume periods requires accessible working capital.",
  },
];

const products = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 5V4a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 11h6M10 8v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "SBA 7(a) Loans",
    description:
      "SBA 7(a) financing may be a fit for acquiring a practice, refinancing debt, or funding leasehold improvements. Loan amounts up to $5 million with longer repayment terms can reduce monthly payment pressure. Subject to SBA eligibility, lender underwriting, and approval.",
    tags: ["Practice acquisition", "Expansion", "Long-term debt"],
    href: "/financing/sba-loans",
    highlight: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 8h14M8 8v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Equipment Financing",
    description:
      "Dedicated equipment financing structures the asset as collateral, which may make approval more accessible than unsecured credit. Terms are typically matched to the useful life of the equipment, subject to third-party lender review and approval.",
    tags: ["Imaging equipment", "Dental chairs", "Lab analyzers", "EMR hardware"],
    href: "/financing/equipment",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h12M4 6h8M4 14h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Accounts Receivable Factoring",
    description:
      "Medical A/R factoring converts outstanding insurance claims and patient invoices into available cash ahead of the reimbursement cycle. Not all healthcare receivables qualify; review terms, fees, and recourse obligations carefully.",
    tags: ["Insurance A/R", "Cash flow", "No new debt"],
    href: "/financing/factoring",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Working Capital Lines",
    description:
      "Revolving credit facilities may help bridge gaps between billings and reimbursements, cover seasonal payroll increases, or fund credentialing ramp-up periods. Availability and terms are subject to lender underwriting and creditworthiness assessment.",
    tags: ["Payroll coverage", "Seasonal gaps", "Credentialing ramp"],
    href: "/financing/working-capital",
  },
];

const comparisonRows = [
  {
    feature: "Typical loan amount",
    "SBA 7(a)": "Up to $5M",
    "Equipment Financing": "$10K – $2M+",
    "A/R Factoring": "Based on receivables",
    "Working Capital Line": "$25K – $500K",
  },
  {
    feature: "Collateral",
    "SBA 7(a)": "Business assets / PG",
    "Equipment Financing": "Equipment itself",
    "A/R Factoring": "Receivables assigned",
    "Working Capital Line": "Varies by lender",
  },
  {
    feature: "Best use",
    "SBA 7(a)": "Acquisition, expansion",
    "Equipment Financing": "Specific asset purchase",
    "A/R Factoring": "Reimbursement gaps",
    "Working Capital Line": "Ongoing operations",
  },
  {
    feature: "Time to funding",
    "SBA 7(a)": "30 – 90 days",
    "Equipment Financing": "3 – 10 days",
    "A/R Factoring": "1 – 5 days",
    "Working Capital Line": "5 – 21 days",
  },
  {
    feature: "Credit sensitivity",
    "SBA 7(a)": "Higher",
    "Equipment Financing": "Moderate",
    "A/R Factoring": "Lower",
    "Working Capital Line": "Moderate–High",
  },
];

const requirements = [
  {
    label: "Time in operation",
    detail:
      "Most lenders prefer at least 2 years of operating history for a medical or dental practice. Newer practices may qualify with stronger equity, personal credit, or a seasoned operator profile.",
  },
  {
    label: "Revenue and billing records",
    detail:
      "Lenders typically review 2 to 3 years of tax returns, year-to-date profit and loss statements, and payer mix breakdowns. Insurance aging reports are often requested for A/R factoring.",
  },
  {
    label: "Personal credit",
    detail:
      "Owner FICO scores generally factor into underwriting for SBA loans and working capital lines. Equipment financing may apply more weight to the asset and business performance.",
  },
  {
    label: "Licensure and compliance",
    detail:
      "Active professional licenses, DEA registration where applicable, and absence of active Medicare or Medicaid exclusions are standard lender checkpoints.",
  },
  {
    label: "Debt service coverage",
    detail:
      "Lenders assess whether existing and proposed debt obligations can be serviced from business cash flow. A DSCR of 1.25x or higher is commonly sought, though requirements vary by lender and product.",
  },
  {
    label: "Facility lease or ownership",
    detail:
      "Proof of a stable practice location — whether owned real estate or a long-term lease — supports underwriting, particularly for SBA and equipment loans where the practice location is material to operations.",
  },
];

const faqItems = [
  {
    q: "Can a brand-new medical practice qualify for financing?",
    a: "Start-up healthcare practices face tighter underwriting because lenders cannot evaluate historical revenue. Some lenders who specialize in healthcare may still consider a new practice based on the owner's clinical track record, personal credit, projected patient volume, and equity injection. SBA 7(a) financing has been used for healthcare start-ups but typically requires a detailed business plan and meaningful owner equity. Results vary significantly by lender and are subject to underwriting.",
  },
  {
    q: "Does medical A/R factoring work with Medicare and Medicaid receivables?",
    a: "Some specialty factors do purchase government payer receivables, but it is more complex than commercial insurance factoring. Government assignments have restrictions under federal anti-assignment rules, and many factors prefer commercial payer A/R. If your payer mix is predominantly government, confirm eligibility directly with any factor you're evaluating, and review all compliance obligations before proceeding.",
  },
  {
    q: "How is equipment financing different from a practice acquisition loan?",
    a: "Equipment financing is a narrow facility secured specifically by the asset being purchased — an MRI machine, dental chair, or lab analyzer. It does not cover goodwill, patient lists, real estate, or working capital. A practice acquisition loan, often structured through SBA 7(a), finances the full transaction including intangible value. The right structure depends on what you're buying and how the deal is structured.",
  },
  {
    q: "What payer mix concerns do lenders have?",
    a: "Heavy reliance on government payers can raise lender concern because Medicare and Medicaid reimbursement rates are set administratively and subject to change. A diversified payer mix — commercial insurance plus some self-pay alongside government payers — often supports stronger underwriting. Lenders may also review your clean claims rate and days-in-AR as efficiency indicators.",
  },
  {
    q: "Is a personal guarantee required for healthcare financing?",
    a: "Most SBA loans and many working capital lines require a personal guarantee from owners holding 20% or more of the business. Equipment financing may or may not require a personal guarantee depending on loan size, equipment type, and business creditworthiness. Terms vary by lender and deal structure. Review all guarantee provisions with counsel before signing.",
  },
];

export default function HealthcareFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industry"
        title="Healthcare Financing"
        subtitle="Medical practices, dental clinics, urgent care centers, and allied health businesses face a financing landscape shaped by reimbursement cycles, equipment intensity, and regulatory requirements. Explore financing structures that third-party lenders may offer to healthcare operators — subject to underwriting and approval."
      />

      {/* Key financing challenges */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Financing Challenges
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2 max-w-2xl">
            Why healthcare financing is distinct
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-10 leading-relaxed">
            The clinical and operational realities of healthcare create specific cash flow patterns that general-purpose lenders may not be structured to address.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {challenges.map((item) => (
              <div
                key={item.heading}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] mt-2" aria-hidden="true" />
                  <h3 className="font-semibold text-[#0f0f0f] text-[0.9375rem] leading-snug">
                    {item.heading}
                  </h3>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed pl-4">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing products */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Financing Paths
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2 max-w-2xl">
            Products that may be a fit for healthcare
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-10 leading-relaxed">
            Different clinical business models call for different capital structures. The options below represent paths third-party lenders may offer — all subject to individual underwriting, eligibility, and approval.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <FinancingPathCard
                key={product.title}
                icon={product.icon}
                title={product.title}
                description={product.description}
                tags={product.tags}
                href={product.href}
                highlight={product.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Product Comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Financing structures at a glance
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-8 leading-relaxed">
            General ranges only. Actual terms are set by third-party lenders and subject to underwriting.
          </p>
          <ComparisonTable
            columns={["SBA 7(a)", "Equipment Financing", "A/R Factoring", "Working Capital Line"]}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
        </div>
      </section>

      {/* Metrics / scale indicators */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Industry Context
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Scale of the healthcare financing landscape
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-8 leading-relaxed">
            Reference figures illustrating financing demand across the healthcare sector. Individual business performance and eligibility vary.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              label="Avg insurance payment lag"
              value="45"
              unit="days"
              note="From claim submission to reimbursement. Varies by payer and specialty."
            />
            <MetricCard
              label="SBA 7(a) max loan"
              value="$5M"
              note="For eligible practices; subject to SBA program rules and lender approval."
              highlight
            />
            <MetricCard
              label="Equipment useful life"
              value="5–15"
              unit="yrs"
              note="Typical range; longer useful life can support longer equipment loan terms."
            />
            <MetricCard
              label="Typical factoring advance"
              value="70–90"
              unit="%"
              note="Of eligible receivable face value. Remaining reserve released after collection, less fees."
            />
          </div>
        </div>
      </section>

      {/* Lender requirements */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Lender Requirements
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              What lenders typically look for in healthcare
            </h2>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              These are representative criteria drawn from common lender practices. Specific requirements vary by product, lender, loan size, and individual business profile. Prepare documentation ahead of any application to streamline the underwriting process.
            </p>
            <dl className="space-y-0 divide-y divide-[#e5e5e5] border border-[#e5e5e5] rounded-xl overflow-hidden">
              {requirements.map((req) => (
                <div key={req.label} className="flex flex-col sm:flex-row sm:gap-6 px-5 py-4 bg-[#f5f5f5]">
                  <dt className="text-sm font-semibold text-[#0f0f0f] sm:w-52 shrink-0 mb-1 sm:mb-0">
                    {req.label}
                  </dt>
                  <dd className="text-sm text-[#a3a3a3] leading-relaxed">{req.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Healthcare Financing — Common Questions"
      />

      {/* CTA */}
      <CTASection
        headline="Explore financing options for your practice"
        subtext="Submit a brief intake and ZEO will identify financing paths that may be a potential fit for your healthcare business — subject to underwriting and third-party approval."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Browse All Financing"
        secondaryHref="/financing"
      />

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

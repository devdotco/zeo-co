import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Industry-Specific Business Financing | ZEO.co",
  description:
    "Explore financing options by industry. ZEO.co evaluates financing structures for trucking, healthcare, construction, staffing, restaurants, manufacturing, and more. Subject to third-party underwriting.",
  path: "/industries",
  keywords: [
    "industry financing",
    "trucking financing",
    "healthcare business loans",
    "construction financing",
    "staffing factoring",
    "restaurant financing",
    "manufacturing working capital",
    "industry-specific business loans",
  ],
});

// ── Industry Data ─────────────────────────────────────────────────────────────

const industries = [
  {
    slug: "trucking",
    title: "Trucking & Transportation",
    description:
      "Equipment financing, fuel advances, and invoice factoring for owner-operators, fleets, and freight brokers. Receivables-backed structures common due to freight invoice payment cycles.",
    tags: ["Factoring", "Equipment", "Fleet"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Medical",
    description:
      "Working capital, equipment financing, and accounts receivable factoring for medical practices, clinics, home health agencies, and healthcare staffing firms. Insurance reimbursement cycles often create cash flow gaps.",
    tags: ["A/R Factoring", "Equipment", "Working Capital"],
  },
  {
    slug: "construction",
    title: "Construction",
    description:
      "Bridge loans, equipment financing, and working capital for contractors, subcontractors, and developers. Slow payment cycles and large material costs make short-term financing tools common.",
    tags: ["Bridge Loans", "Equipment", "WC"],
  },
  {
    slug: "staffing",
    title: "Staffing & Workforce",
    description:
      "Payroll financing and invoice factoring for staffing agencies and professional employer organizations. Receivables-backed funding is frequently used to bridge the gap between payroll disbursement and client payment.",
    tags: ["Payroll Funding", "Factoring", "Working Capital"],
  },
  {
    slug: "restaurants",
    title: "Restaurants & Food Service",
    description:
      "Working capital, equipment financing, and revenue-based financing for restaurants, food trucks, catering companies, and quick-service operators. High revenue volume and daily sales data often inform underwriting.",
    tags: ["Working Capital", "Equipment", "Revenue-Based"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Inventory financing, asset-based lending, equipment financing, and purchase order financing for manufacturers. Collateral-rich operations may qualify for larger revolving facilities.",
    tags: ["Inventory", "Asset-Based", "PO Financing"],
  },
  {
    slug: "retail",
    title: "Retail & E-Commerce",
    description:
      "Inventory financing, working capital, and revenue-based financing for brick-and-mortar retailers and online sellers. Seasonal inventory cycles and marketplace revenue data are common underwriting inputs.",
    tags: ["Inventory", "Seasonal", "Revenue-Based"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    description:
      "Business lines of credit, term loans, and working capital for law firms, accounting practices, consulting firms, and other professional services businesses. Recurring billing and contract backlog may support underwriting.",
    tags: ["Line of Credit", "Term Loans", "WC"],
  },
  {
    slug: "real-estate",
    title: "Real Estate & Property",
    description:
      "Commercial real estate loans, hard money bridge loans, and private lending for investors, developers, and owner-operators. DSCR, LTV, and asset quality are primary underwriting factors.",
    tags: ["CRE Loans", "Hard Money", "Bridge"],
  },
  {
    slug: "technology",
    title: "Technology & SaaS",
    description:
      "Revenue-based financing, venture debt, and term loans for technology companies with recurring revenue. ARR, growth rate, and churn metrics may factor into provider underwriting.",
    tags: ["Revenue-Based", "Venture Debt", "ARR-Based"],
  },
  {
    slug: "agriculture",
    title: "Agriculture & Farming",
    description:
      "Equipment financing, operating lines of credit, and invoice factoring for farms, agricultural producers, and food distributors. Seasonal revenue patterns and commodity exposure are common underwriting considerations.",
    tags: ["Equipment", "Operating Line", "Factoring"],
  },
  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Floor plan financing, equipment financing, and working capital for auto dealers, repair shops, and fleet operators. Inventory-secured structures are common for dealerships.",
    tags: ["Floor Plan", "Equipment", "Working Capital"],
  },
  {
    slug: "government-contracting",
    title: "Government Contracting",
    description:
      "Contract financing, invoice factoring, and SBA loans for businesses with federal, state, or municipal contracts. Assignment of contract payments may be required by factoring providers.",
    tags: ["Contract Financing", "Factoring", "SBA"],
  },
  {
    slug: "oil-gas",
    title: "Oil, Gas & Energy",
    description:
      "Asset-based lending, equipment financing, and working capital for energy sector businesses including oilfield services, pipeline operators, and renewable energy contractors. Commodity price exposure may affect underwriting.",
    tags: ["Asset-Based", "Equipment", "Working Capital"],
  },
  {
    slug: "nonprofits",
    title: "Nonprofits & Social Enterprises",
    description:
      "SBA loans (where eligible), lines of credit, and grant-bridge financing for qualifying nonprofit organizations and social enterprises. Government contract factoring is available for nonprofits with qualifying receivables.",
    tags: ["SBA (eligible)", "Line of Credit", "Bridge"],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Industries", url: "https://zeo.co/industries" },
        ])}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
        eyebrow="By Industry"
        title="Industry-Specific Business Financing"
        subtitle="Different industries have distinct cash flow patterns, collateral profiles, and capital needs. Explore financing structures commonly used in your sector. All financing subject to third-party underwriting and approval."
      />

      {/* Industry Grid */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Industries
            </p>
            <h2 className="text-2xl font-semibold text-white">
              15 industry verticals
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-xl">
              Select your industry to explore financing structures commonly relevant to your sector. Eligibility and available products vary by business profile and third-party provider.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5 hover:border-[#0f0f0f]/40 hover:bg-[#f5f5f5] transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-semibold text-[#0f0f0f] group-hover:text-white transition-colors leading-snug pr-2">
                    {industry.title}
                  </h3>
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-[#a3a3a3] group-hover:text-[#0f0f0f] transition-colors mt-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {industry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.6rem] font-medium uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#ffffff] border border-[#e5e5e5] text-[#a3a3a3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <ProductDisclaimer type="general" />
          </div>
        </div>
      </section>

      {/* Why Industry Matters */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Context
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Why industry context matters in financing
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-2xl">
              Lenders and providers evaluate businesses differently based on the sector they operate in. Understanding industry-specific dynamics can help set accurate expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Cash Flow Patterns",
                desc: "Industries with long invoice cycles — trucking, staffing, construction, healthcare — often benefit from receivables-based products like factoring. Industries with daily revenue like retail or restaurants may have different options available.",
              },
              {
                label: "Collateral Profile",
                desc: "Asset-rich industries such as manufacturing, agriculture, and equipment-heavy businesses may qualify for larger asset-based facilities. Service-based businesses with fewer hard assets may rely more on cash flow underwriting.",
              },
              {
                label: "SBA Eligibility",
                desc: "Not all industries are eligible for SBA-guaranteed financing. Financial services, gambling, certain real estate ventures, and other categories may be restricted or ineligible. SBA eligibility is determined by the applicable lender.",
              },
              {
                label: "Regulatory Environment",
                desc: "Certain industries operate under licensing, compliance, or regulatory structures that providers factor into underwriting. Healthcare, cannabis, and financial services each present distinct considerations.",
              },
              {
                label: "Concentration Risk",
                desc: "Businesses with a small number of large customers may face scrutiny from factoring and asset-based lenders around customer concentration. Diverse customer bases are generally viewed more favorably.",
              },
              {
                label: "Seasonality",
                desc: "Highly seasonal businesses — agriculture, retail, certain construction trades — may require financing structures that accommodate irregular revenue patterns. Revolving facilities and lines of credit are common tools.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5"
              >
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.label}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Nav to Financing Products */}
      <section className="py-14 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-2">
                Also Browse
              </p>
              <p className="text-white font-semibold text-lg">Explore all financing structures</p>
              <p className="text-[#737373] text-sm mt-1 max-w-md">
                Browse the full range of commercial financing products independent of industry.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/financing"
                className="px-6 py-2.5 rounded-xl bg-[#0f0f0f] text-black text-sm font-semibold hover:bg-[#333333] transition-colors"
              >
                All Financing Products
              </Link>
              <Link
                href="/use-cases"
                className="px-6 py-2.5 rounded-xl border border-[#e5e5e5] text-[#737373] text-sm hover:text-white hover:border-[#0f0f0f] transition-colors"
              >
                Browse Use Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to explore financing for your industry?"
        subtext="Submit a brief intake and ZEO will evaluate potential financing paths relevant to your business and sector. Subject to underwriting by third-party providers."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="View All Products"
        secondaryHref="/financing"
      />
    </>
  );
}

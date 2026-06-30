export const NAV = {
  financing: {
    label: "Financing Options",
    href: "/financing",
    columns: [
      {
        heading: "SBA Loans",
        items: [
          { label: "SBA Loans Overview", href: "/sba-loans", desc: "SBA-guaranteed financing programs" },
          { label: "SBA 7(a) Loans", href: "/sba-loans/7a", desc: "Most flexible SBA program" },
          { label: "SBA 504 Loans", href: "/sba-loans/504", desc: "Fixed-asset and real estate" },
          { label: "SBA Microloans", href: "/sba-loans/microloans", desc: "Up to $50K for small businesses" },
        ],
      },
      {
        heading: "Working Capital",
        items: [
          { label: "Working Capital Loans", href: "/working-capital", desc: "Cover operational gaps" },
          { label: "Business Lines of Credit", href: "/business-line-of-credit", desc: "Revolving access to capital" },
          { label: "Business Term Loans", href: "/business-term-loans", desc: "Lump-sum commercial financing" },
          { label: "Revenue-Based Financing", href: "/revenue-based-financing", desc: "Tied to monthly revenue" },
        ],
      },
      {
        heading: "Asset & Equipment",
        items: [
          { label: "Equipment Financing", href: "/equipment-financing", desc: "Finance or lease equipment" },
          { label: "Asset-Based Lending", href: "/asset-based-lending", desc: "Borrow against business assets" },
          { label: "Inventory Financing", href: "/inventory-financing", desc: "Fund inventory purchases" },
          { label: "Purchase Order Financing", href: "/purchase-order-financing", desc: "Fund supplier payments" },
        ],
      },
      {
        heading: "Growth & Acquisition",
        items: [
          { label: "Acquisition Financing", href: "/acquisition-financing", desc: "Finance business purchases" },
          { label: "Franchise Financing", href: "/franchise-financing", desc: "Franchise acquisition & buildout" },
          { label: "Commercial Real Estate", href: "/commercial-real-estate-loans", desc: "CRE purchase & refinance" },
          { label: "Debt Refinancing", href: "/debt-refinancing", desc: "Restructure existing debt" },
        ],
      },
      {
        heading: "Alternative",
        items: [
          { label: "Private Business Loans", href: "/private-lending", desc: "Non-bank private credit" },
          { label: "Hard Money Business Loans", href: "/hard-money-business-loans", desc: "Asset-secured, short-term" },
          { label: "Merchant Cash Advance", href: "/merchant-cash-advance", desc: "Sales-based advances" },
        ],
      },
    ],
  },
  factoring: {
    label: "Factoring",
    href: "/factoring",
    columns: [
      {
        heading: "Factoring Types",
        items: [
          { label: "Invoice Factoring", href: "/factoring/invoice-factoring", desc: "Advance on outstanding invoices" },
          { label: "Accounts Receivable Factoring", href: "/factoring/accounts-receivable-factoring", desc: "A/R as working capital" },
          { label: "Spot Factoring", href: "/factoring/spot-factoring", desc: "Single invoice advance" },
          { label: "Non-Recourse Factoring", href: "/factoring/non-recourse-factoring", desc: "Credit risk stays with factor" },
          { label: "Recourse Factoring", href: "/factoring/recourse-factoring", desc: "Lower cost, you retain risk" },
          { label: "Payroll Funding", href: "/factoring/payroll-funding", desc: "Cover payroll via A/R" },
          { label: "Purchase Order Financing", href: "/factoring/purchase-order-financing", desc: "Fund supplier POs" },
        ],
      },
      {
        heading: "Learn",
        items: [
          { label: "How Factoring Works", href: "/factoring/how-it-works", desc: "The advance/reserve cycle" },
          { label: "Factoring vs Bank Loans", href: "/factoring/factoring-vs-bank-loans", desc: "Side-by-side comparison" },
          { label: "Factoring Costs", href: "/factoring/costs", desc: "Fees, rates, and true cost" },
          { label: "Factoring Requirements", href: "/factoring/requirements", desc: "What qualifies" },
          { label: "Factoring Industries", href: "/factoring/industries", desc: "Industries we serve" },
        ],
      },
      {
        heading: "Industries",
        items: [
          { label: "Trucking & Freight", href: "/factoring/trucking", desc: "Freight broker & carrier factoring" },
          { label: "Staffing Agencies", href: "/factoring/staffing", desc: "Payroll-cycle gap funding" },
          { label: "Healthcare", href: "/factoring/healthcare", desc: "Medical A/R factoring" },
          { label: "Manufacturing", href: "/factoring/manufacturing", desc: "Production cycle financing" },
          { label: "Oil & Gas", href: "/factoring/oilfield", desc: "Oilfield services factoring" },
          { label: "Construction", href: "/factoring/construction", desc: "Contract & subcontractor A/R" },
          { label: "Government Contractors", href: "/factoring/government-contractors", desc: "Federal/state contract factoring" },
          { label: "Small Business", href: "/factoring/small-business", desc: "B2B small business factoring" },
        ],
      },
    ],
  },
  useCases: {
    label: "Use Cases",
    href: "/use-cases",
    items: [
      { label: "Get Working Capital", href: "/use-cases/working-capital", desc: "Bridge cash flow gaps" },
      { label: "Buy a Business", href: "/use-cases/buy-a-business", desc: "Acquisition financing paths" },
      { label: "Finance Equipment", href: "/use-cases/finance-equipment", desc: "Acquire assets without cash" },
      { label: "Expand Locations", href: "/use-cases/expand-business", desc: "Open a new location" },
      { label: "Cover Payroll", href: "/use-cases/payroll-financing", desc: "Meet payroll on time" },
      { label: "Improve Cash Flow", href: "/use-cases/cash-flow", desc: "Accelerate receivables" },
      { label: "Refinance Debt", href: "/use-cases/refinance-business-debt", desc: "Lower debt burden" },
      { label: "Fund Inventory", href: "/use-cases/inventory-financing", desc: "Stock up for growth" },
      { label: "Finance a Franchise", href: "/use-cases/franchise-financing", desc: "Franchise launch & acquisition" },
      { label: "Government Contract", href: "/use-cases/government-contract-financing", desc: "Fund contract fulfillment" },
    ],
  },
  industries: {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Trucking & Logistics", href: "/industries/trucking-logistics" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Staffing", href: "/industries/staffing" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Retail / Ecommerce", href: "/industries/retail-ecommerce" },
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Government Contractors", href: "/industries/government-contractors" },
      { label: "Franchises", href: "/industries/franchises" },
      { label: "Real Estate Operators", href: "/industries/real-estate" },
      { label: "SaaS / Technology", href: "/industries/saas-technology" },
      { label: "Home Services", href: "/industries/home-services" },
    ],
  },
  resources: {
    label: "Resources",
    href: "/resources",
    calculators: [
      { label: "Business Loan Calculator", href: "/calculators/business-loan-calculator" },
      { label: "SBA Loan Calculator", href: "/calculators/sba-loan-calculator" },
      { label: "SBA 7(a) Payment Calculator", href: "/calculators/sba-7a-loan-calculator" },
      { label: "SBA 504 Calculator", href: "/calculators/sba-504-loan-calculator" },
      { label: "DSCR Calculator", href: "/calculators/dscr-calculator" },
      { label: "Business Acquisition Loan Calculator", href: "/calculators/business-acquisition-loan-calculator" },
      { label: "Working Capital Calculator", href: "/calculators/working-capital-calculator" },
      { label: "Invoice Factoring Calculator", href: "/calculators/invoice-factoring-calculator" },
      { label: "Equipment Financing Calculator", href: "/calculators/equipment-financing-calculator" },
      { label: "Line of Credit Calculator", href: "/calculators/line-of-credit-calculator" },
      { label: "MCA APR Calculator", href: "/calculators/mca-apr-calculator" },
      { label: "Loan Affordability Calculator", href: "/calculators/business-loan-affordability-calculator" },
      { label: "Debt Refinance Calculator", href: "/calculators/business-debt-refinance-calculator" },
      { label: "Loan Comparison Calculator", href: "/calculators/loan-comparison-calculator" },
    ],
    guides: [
      { label: "Business Loan Guide", href: "/resources/business-loan-guide" },
      { label: "SBA Loan Guide", href: "/resources/sba-loan-guide" },
      { label: "Factoring Guide", href: "/resources/factoring-guide" },
      { label: "Acquisition Financing Guide", href: "/resources/acquisition-financing-guide" },
      { label: "Equipment Financing Guide", href: "/resources/equipment-financing-guide" },
      { label: "Private Credit Guide", href: "/resources/private-credit-guide" },
      { label: "Business Loan Requirements", href: "/resources/business-loan-requirements" },
      { label: "Documents Needed", href: "/resources/documents-needed" },
    ],
    blog: "/blog",
  },
  company: {
    label: "Company",
    href: "/about",
    items: [
      { label: "About ZEO", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Partner With Us", href: "/partners" },
      { label: "Lender Network", href: "/lenders" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "State Disclosures", href: "/state-disclosures" },
      { label: "California Disclosures", href: "/state-disclosures/california" },
      { label: "Security", href: "/security" },
    ],
  },
};

export const FOOTER_DISCLOSURE = `ZEO.co is not a bank, lender, mortgage broker, loan broker, loan originator, underwriter, financial advisor, or credit repair organization. ZEO.co does not make loans or credit decisions, does not issue commitments to lend, and does not guarantee approval, funding, rates, terms, or loan amounts. Information submitted through this website may be used to help evaluate potential business financing options and may be shared with third-party financing providers, brokers, lenders, funders, or service providers where permitted by law.

Business financing products are offered only by participating third-party providers, subject to their own underwriting, approval, documentation, pricing, fees, and legal requirements. Rates, terms, funding amounts, eligibility, and availability vary by applicant, business profile, state, product type, and provider.

ZEO.co may receive compensation from third-party providers or partners for referrals, introductions, funded transactions, or other services. Such compensation may affect the placement or presentation of financing options but does not guarantee that any provider will offer financing or that any offer is the best available option.

Commercial financing, factoring, merchant cash advances, asset-based lending, SBA loans, equipment financing, acquisition financing, and other products may be subject to federal and state laws, licensing, registration, disclosure, and eligibility requirements. Users are responsible for reviewing all financing documents and should consult their own legal, tax, accounting, and financial advisors before entering into any financing transaction.

California residents and businesses: ZEO.co is not licensed under the California Financing Law unless expressly stated on this website. ZEO.co does not make or broker loans in California except where exempt from licensing or through appropriately licensed or exempt third-party providers. Any commercial financing disclosures required under California law are the responsibility of the applicable financing provider at the time a specific financing offer is made.`;

export const FORM_CONSENT = `By clicking 'Submit,' I certify that I am authorized to submit this information on behalf of the business identified above. I agree that ZEO.co may use the information I provide to evaluate potential business financing options and may share it with third-party financing providers, brokers, lenders, funders, referral partners, and service providers for that purpose.

I understand that ZEO.co is not a lender, bank, mortgage broker, loan broker, underwriter, or financial advisor; does not make credit decisions; and does not guarantee approval, funding, rates, terms, or loan amounts. I understand that any financing offer, approval, disclosure, agreement, or funding decision will come only from the applicable third-party provider.

I consent to be contacted by ZEO.co and its partners by email, phone, text message, or automated technology regarding my inquiry, even if my number is listed on a federal or state do-not-call registry. Consent is not required as a condition of purchasing any goods or services. Message and data rates may apply. I may opt out at any time.`;

import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co";

function url(path: string, priority = 0.7, changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly"): MetadataRoute.Sitemap[0] {
  return { url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core
    url("/", 1.0, "weekly"),
    url("/apply", 0.9, "monthly"),
    url("/financing", 0.9, "monthly"),
    url("/how-it-works", 0.8, "monthly"),
    url("/about", 0.7, "monthly"),
    url("/contact", 0.7, "monthly"),
    url("/partners", 0.6, "monthly"),
    url("/lenders", 0.6, "monthly"),
    url("/calculators", 0.9, "monthly"),
    url("/resources", 0.8, "monthly"),
    url("/blog", 0.8, "weekly"),

    // Financing
    url("/sba-loans", 0.9, "monthly"),
    url("/sba-loans/7a", 0.8, "monthly"),
    url("/sba-loans/504", 0.8, "monthly"),
    url("/sba-loans/microloans", 0.7, "monthly"),
    url("/working-capital", 0.8, "monthly"),
    url("/business-line-of-credit", 0.8, "monthly"),
    url("/business-term-loans", 0.8, "monthly"),
    url("/equipment-financing", 0.8, "monthly"),
    url("/commercial-real-estate-loans", 0.8, "monthly"),
    url("/acquisition-financing", 0.9, "monthly"),
    url("/franchise-financing", 0.7, "monthly"),
    url("/debt-refinancing", 0.7, "monthly"),
    url("/merchant-cash-advance", 0.7, "monthly"),
    url("/revenue-based-financing", 0.7, "monthly"),
    url("/private-lending", 0.7, "monthly"),
    url("/hard-money-business-loans", 0.6, "monthly"),
    url("/asset-based-lending", 0.7, "monthly"),
    url("/inventory-financing", 0.7, "monthly"),
    url("/purchase-order-financing", 0.7, "monthly"),

    // Factoring
    url("/factoring", 0.9, "monthly"),
    url("/factoring/invoice-factoring", 0.8, "monthly"),
    url("/factoring/accounts-receivable-factoring", 0.8, "monthly"),
    url("/factoring/payroll-funding", 0.7, "monthly"),
    url("/factoring/purchase-order-financing", 0.7, "monthly"),
    url("/factoring/spot-factoring", 0.7, "monthly"),
    url("/factoring/non-recourse-factoring", 0.7, "monthly"),
    url("/factoring/recourse-factoring", 0.7, "monthly"),
    url("/factoring/factoring-vs-bank-loans", 0.8, "monthly"),
    url("/factoring/costs", 0.8, "monthly"),
    url("/factoring/requirements", 0.8, "monthly"),
    url("/factoring/how-it-works", 0.8, "monthly"),
    url("/factoring/industries", 0.7, "monthly"),
    url("/factoring/trucking", 0.8, "monthly"),
    url("/factoring/staffing", 0.8, "monthly"),
    url("/factoring/healthcare", 0.8, "monthly"),
    url("/factoring/manufacturing", 0.7, "monthly"),
    url("/factoring/oilfield", 0.7, "monthly"),
    url("/factoring/construction", 0.7, "monthly"),
    url("/factoring/agriculture", 0.7, "monthly"),
    url("/factoring/government-contractors", 0.7, "monthly"),
    url("/factoring/service-providers", 0.7, "monthly"),
    url("/factoring/small-business", 0.7, "monthly"),

    // Use Cases
    url("/use-cases/working-capital", 0.7, "monthly"),
    url("/use-cases/buy-a-business", 0.8, "monthly"),
    url("/use-cases/finance-equipment", 0.7, "monthly"),
    url("/use-cases/expand-business", 0.7, "monthly"),
    url("/use-cases/payroll-financing", 0.7, "monthly"),
    url("/use-cases/cash-flow", 0.7, "monthly"),
    url("/use-cases/refinance-business-debt", 0.7, "monthly"),
    url("/use-cases/inventory-financing", 0.7, "monthly"),
    url("/use-cases/franchise-financing", 0.7, "monthly"),
    url("/use-cases/government-contract-financing", 0.7, "monthly"),

    // Industries
    url("/industries/healthcare", 0.7, "monthly"),
    url("/industries/construction", 0.7, "monthly"),
    url("/industries/trucking-logistics", 0.7, "monthly"),
    url("/industries/manufacturing", 0.7, "monthly"),
    url("/industries/staffing", 0.7, "monthly"),
    url("/industries/professional-services", 0.7, "monthly"),
    url("/industries/restaurants", 0.7, "monthly"),
    url("/industries/retail-ecommerce", 0.7, "monthly"),
    url("/industries/agriculture", 0.7, "monthly"),
    url("/industries/oil-gas", 0.7, "monthly"),
    url("/industries/government-contractors", 0.7, "monthly"),
    url("/industries/franchises", 0.7, "monthly"),
    url("/industries/real-estate", 0.7, "monthly"),
    url("/industries/saas-technology", 0.7, "monthly"),
    url("/industries/home-services", 0.7, "monthly"),

    // Calculators
    url("/calculators/business-loan-calculator", 0.8, "monthly"),
    url("/calculators/sba-loan-calculator", 0.8, "monthly"),
    url("/calculators/sba-7a-loan-calculator", 0.8, "monthly"),
    url("/calculators/sba-504-loan-calculator", 0.8, "monthly"),
    url("/calculators/dscr-calculator", 0.9, "monthly"),
    url("/calculators/business-acquisition-loan-calculator", 0.9, "monthly"),
    url("/calculators/working-capital-calculator", 0.8, "monthly"),
    url("/calculators/invoice-factoring-calculator", 0.8, "monthly"),
    url("/calculators/equipment-financing-calculator", 0.7, "monthly"),
    url("/calculators/line-of-credit-calculator", 0.7, "monthly"),
    url("/calculators/mca-apr-calculator", 0.8, "monthly"),
    url("/calculators/business-loan-affordability-calculator", 0.8, "monthly"),
    url("/calculators/business-debt-refinance-calculator", 0.7, "monthly"),
    url("/calculators/loan-comparison-calculator", 0.8, "monthly"),

    // Resources
    url("/resources/business-loan-guide", 0.7, "monthly"),
    url("/resources/sba-loan-guide", 0.7, "monthly"),
    url("/resources/factoring-guide", 0.7, "monthly"),
    url("/resources/acquisition-financing-guide", 0.7, "monthly"),
    url("/resources/equipment-financing-guide", 0.7, "monthly"),
    url("/resources/private-credit-guide", 0.7, "monthly"),
    url("/resources/business-loan-requirements", 0.7, "monthly"),
    url("/resources/documents-needed", 0.7, "monthly"),

    // Legal
    url("/privacy-policy", 0.5, "yearly"),
    url("/terms-of-service", 0.5, "yearly"),
    url("/state-disclosures", 0.5, "yearly"),
    url("/state-disclosures/california", 0.5, "yearly"),
    url("/security", 0.4, "yearly"),
  ];
}

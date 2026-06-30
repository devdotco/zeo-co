import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import BusinessDebtRefinanceCalculator from "@/components/calculators/BusinessDebtRefinanceCalculator";

export const metadata: Metadata = buildMetadata({
  title: "Business Debt Refinance Calculator | ZEO.co",
  description: "Refinance savings, new payment, and break-even period",
  path: "/calculators/business-debt-refinance-calculator",
});

export default function BusinessDebtRefinanceCalculatorPage() {
  return <BusinessDebtRefinanceCalculator />;
}

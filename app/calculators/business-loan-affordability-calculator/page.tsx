import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import BusinessLoanAffordabilityCalculator from "@/components/calculators/BusinessLoanAffordabilityCalculator";

export const metadata: Metadata = buildMetadata({
  title: "Loan Affordability Calculator | ZEO.co",
  description: "Max supportable loan from EBITDA, DSCR, rate, and term",
  path: "/calculators/business-loan-affordability-calculator",
});

export default function BusinessLoanAffordabilityCalculatorPage() {
  return <BusinessLoanAffordabilityCalculator />;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LoanComparisonCalculator from "@/components/calculators/LoanComparisonCalculator";

export const metadata: Metadata = buildMetadata({
  title: "Loan Comparison Calculator | ZEO.co",
  description: "Compare 2 to 4 financing options by total cost",
  path: "/calculators/loan-comparison-calculator",
});

export default function LoanComparisonCalculatorPage() {
  return <LoanComparisonCalculator />;
}

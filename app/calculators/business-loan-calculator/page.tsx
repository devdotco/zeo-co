import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import BusinessLoanCalculator from "@/components/calculators/BusinessLoanCalculator";

export const metadata: Metadata = buildMetadata({
  title: "Business Loan Calculator | ZEO.co",
  description:
    "Monthly payment, total interest, amortization for business term loan",
  path: "/calculators/business-loan-calculator",
});

export default function BusinessLoanCalculatorPage() {
  return <BusinessLoanCalculator />;
}

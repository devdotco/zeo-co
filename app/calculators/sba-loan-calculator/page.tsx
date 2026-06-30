import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SBALoanCalculator from "@/components/calculators/SBALoanCalculator";

export const metadata: Metadata = buildMetadata({
  title: "SBA Loan Calculator | ZEO.co",
  description: "SBA loan cost with guarantee fee and closing costs",
  path: "/calculators/sba-loan-calculator",
});

export default function SBALoanCalculatorPage() {
  return <SBALoanCalculator />;
}

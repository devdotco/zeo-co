import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LineOfCreditCalculator from "@/components/calculators/LineOfCreditCalculator";

export const metadata: Metadata = buildMetadata({
  title: "Line of Credit Calculator | ZEO.co",
  description: "Interest and payments on a business line of credit",
  path: "/calculators/line-of-credit-calculator",
});

export default function LineOfCreditCalculatorPage() {
  return <LineOfCreditCalculator />;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SBA7aLoanCalculatorClient from "@/components/calculators/SBA7aLoanCalculator";

export const metadata: Metadata = buildMetadata({
  title: "SBA 7(a) Payment Calculator | ZEO.co",
  description: "SBA 7a payment, DSCR, and sources/uses for acquisitions",
  path: "/calculators/sba-7a-loan-calculator",
});

export default function SBA7aLoanCalculatorPage() {
  return <SBA7aLoanCalculatorClient />;
}

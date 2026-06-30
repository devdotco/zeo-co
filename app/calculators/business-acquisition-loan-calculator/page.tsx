import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import BusinessAcquisitionLoanCalculator from "@/components/calculators/BusinessAcquisitionLoanCalculator";

export const metadata: Metadata = buildMetadata({
  title: "Business Acquisition Loan Calculator | ZEO.co",
  description:
    "DSCR, sources/uses, buyer cash flow, and max supportable price for a business acquisition loan.",
  path: "/calculators/business-acquisition-loan-calculator",
  keywords: [
    "business acquisition loan calculator",
    "DSCR calculator",
    "SBA acquisition loan",
    "seller note financing",
    "business purchase financing",
    "max supportable price",
    "sources and uses",
    "buyer cash flow",
  ],
});

export default function BusinessAcquisitionLoanCalculatorPage() {
  return <BusinessAcquisitionLoanCalculator />;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import InvoiceFactoringCalculator from "@/components/calculators/InvoiceFactoringCalculator";

export const metadata: Metadata = buildMetadata({
  title: "Invoice Factoring Calculator | ZEO.co",
  description: "Advance, fee, reserve release, and effective cost",
  path: "/calculators/invoice-factoring-calculator",
});

export default function InvoiceFactoringCalculatorPage() {
  return <InvoiceFactoringCalculator />;
}

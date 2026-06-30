import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import DscrCalculatorClient from "./DscrCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "DSCR Calculator | ZEO.co",
  description: "Debt service coverage ratio and maximum supportable debt",
  path: "/calculators/dscr-calculator",
});

export default function DscrCalculatorPage() {
  return <DscrCalculatorClient />;
}

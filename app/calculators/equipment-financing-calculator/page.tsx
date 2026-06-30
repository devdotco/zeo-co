import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import EquipmentFinancingCalculator from "@/components/calculators/EquipmentFinancingCalculator";

export const metadata: Metadata = buildMetadata({
  title: "Equipment Financing Calculator | ZEO.co",
  description: "Equipment loan payment, total interest, and cash required",
  path: "/calculators/equipment-financing-calculator",
});

export default function EquipmentFinancingCalculatorPage() {
  return <EquipmentFinancingCalculator />;
}

"use client";

import { useState } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

export default function InvoiceFactoringCalculator() {
  const [invoiceAmount, setInvoiceAmount] = useState(100000);
  const [advanceRatePct, setAdvanceRatePct] = useState(85);
  const [factoringFeePct, setFactoringFeePct] = useState(2.5);
  const [daysOutstanding, setDaysOutstanding] = useState(45);
  const [reservePct, setReservePct] = useState(15);
  const [additionalFees, setAdditionalFees] = useState(0);

  // Derived calculations
  // Initial advance = invoice * advance rate
  const initialAdvance = invoiceAmount * (advanceRatePct / 100);

  // Factoring fee = invoice * fee rate
  const factoringFee = invoiceAmount * (factoringFeePct / 100);

  // Reserve = invoice * reserve% - factoring fee
  // (reserve held back, returned after customer pays minus the fee)
  const reserveHeld = invoiceAmount * (reservePct / 100);
  const reserveRelease = reserveHeld - factoringFee;

  // Total net proceeds = initial advance + reserve release - additional fees
  const totalNetProceeds = initialAdvance + reserveRelease - additionalFees;

  // Effective cost as annualized % of invoice amount
  // Total cost = factoringFee + additionalFees
  // Annualized = (totalCost / invoiceAmount) * (365 / daysOutstanding) * 100
  const totalCost = factoringFee + additionalFees;
  const effectiveCostPct =
    invoiceAmount > 0 && daysOutstanding > 0
      ? (totalCost / invoiceAmount) * (365 / daysOutstanding) * 100
      : 0;

  // Breakdown percentages for visualization
  const advancePct = invoiceAmount > 0 ? (initialAdvance / invoiceAmount) * 100 : 0;
  const feePct = invoiceAmount > 0 ? (totalCost / invoiceAmount) * 100 : 0;
  const netReservePct = invoiceAmount > 0 ? (Math.max(0, reserveRelease) / invoiceAmount) * 100 : 0;

  return (
    <CalculatorShell
      title="Invoice Factoring Calculator"
      description="Estimate your advance, factoring fee, reserve release, and effective annualized cost."
      disclaimerType="factoring"
      relatedCalcs={[
        { label: "Business Loan Calculator", href: "/calculators/business-loan-calculator" },
        { label: "Working Capital Calculator", href: "/calculators/working-capital-calculator" },
        { label: "SBA 7(a) Calculator", href: "/calculators/sba-7a-loan-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs — left column */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">Invoice Parameters</p>

          <CalcInput
            label="Invoice Amount"
            id="invoiceAmount"
            value={invoiceAmount}
            onChange={setInvoiceAmount}
            min={1000}
            max={10000000}
            step={1000}
            prefix="$"
            note="Face value of the invoice(s) being factored"
          />

          <CalcInput
            label="Advance Rate"
            id="advanceRatePct"
            value={advanceRatePct}
            onChange={setAdvanceRatePct}
            min={50}
            max={100}
            step={0.5}
            suffix="%"
            note="Percentage of invoice advanced upfront (typically 70–95%)"
          />

          <CalcInput
            label="Factoring Fee"
            id="factoringFeePct"
            value={factoringFeePct}
            onChange={setFactoringFeePct}
            min={0.1}
            max={20}
            step={0.1}
            suffix="%"
            note="Factor's fee as a % of invoice face value"
          />

          <CalcInput
            label="Days Outstanding"
            id="daysOutstanding"
            value={daysOutstanding}
            onChange={setDaysOutstanding}
            min={1}
            max={365}
            step={1}
            suffix="days"
            note="Expected days until customer pays the invoice"
          />

          <CalcInput
            label="Reserve Percentage"
            id="reservePct"
            value={reservePct}
            onChange={setReservePct}
            min={0}
            max={50}
            step={0.5}
            suffix="%"
            note="Portion held back until customer pays (invoice minus advance)"
          />

          <CalcInput
            label="Additional Fees"
            id="additionalFees"
            value={additionalFees}
            onChange={setAdditionalFees}
            min={0}
            max={100000}
            step={50}
            prefix="$"
            note="Due diligence, ACH, or other flat fees (optional)"
          />
        </div>

        {/* Results — right column */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">Funding Summary</p>

          <CalcResult
            label="Initial Advance"
            value={fmt(initialAdvance)}
            highlight
            note={`Funded immediately — ${advanceRatePct}% of invoice`}
          />

          <CalcResult
            label="Factoring Fee"
            value={fmt(factoringFee)}
            note={`Cost deducted from reserve at settlement`}
          />

          <CalcResult
            label="Reserve Release"
            value={fmt(Math.max(0, reserveRelease))}
            note="Returned after customer pays, net of factoring fee"
          />

          <CalcResult
            label="Total Net Proceeds"
            value={fmt(totalNetProceeds)}
            note="Advance + reserve release minus all fees"
          />

          <CalcResult
            label="Effective Annualized Cost"
            value={fmt(effectiveCostPct, "percent")}
            note={`Annualized over ${daysOutstanding}-day collection period`}
          />
        </div>
      </div>

      {/* Cash flow breakdown bar */}
      {invoiceAmount > 0 && isFinite(totalNetProceeds) && (
        <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Invoice Proceeds Breakdown
          </p>
          <div className="flex rounded-full overflow-hidden h-2 mb-3">
            <div
              className="bg-[#0f0f0f] transition-all duration-300"
              style={{ width: `${Math.min(100, advancePct)}%` }}
              title="Initial Advance"
            />
            <div
              className="bg-[#4ade80]/40 transition-all duration-300"
              style={{ width: `${Math.min(100, netReservePct)}%` }}
              title="Net Reserve Release"
            />
            <div
              className="bg-[#a3a3a3] transition-all duration-300"
              style={{ width: `${Math.min(100, feePct)}%` }}
              title="Fees"
            />
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-[#737373]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0f0f0f]" />
              Advance {advancePct.toFixed(1)}%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#4ade80]/60" />
              Net Reserve {netReservePct.toFixed(1)}%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#a3a3a3]" />
              Fees {feePct.toFixed(1)}%
            </span>
          </div>
        </div>
      )}
    </CalculatorShell>
  );
}

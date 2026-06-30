"use client";

import { useState } from "react";
import CalculatorShell, {
  CalcInput,
  CalcResult,
  fmt,
} from "@/components/calculators/CalculatorShell";

// ── Status band ───────────────────────────────────────────────────────────────

type StatusBand = "strong" | "marginal" | "insufficient";

function getStatusBand(dscr: number): StatusBand {
  if (dscr >= 1.25) return "strong";
  if (dscr >= 1.0) return "marginal";
  return "insufficient";
}

const STATUS_CONFIG: Record<
  StatusBand,
  { label: string; bg: string; text: string; border: string; dot: string }
> = {
  strong: {
    label: "Strong Coverage",
    bg: "bg-[#0f2a14]",
    text: "text-[#0f0f0f]",
    border: "border-[#0f0f0f]/30",
    dot: "bg-[#0f0f0f]",
  },
  marginal: {
    label: "Marginal Coverage",
    bg: "bg-[#2a2100]",
    text: "text-[#eab308]",
    border: "border-[#eab308]/30",
    dot: "bg-[#eab308]",
  },
  insufficient: {
    label: "Insufficient Coverage",
    bg: "bg-[#2a0a0a]",
    text: "text-[#ef4444]",
    border: "border-[#ef4444]/30",
    dot: "bg-[#ef4444]",
  },
};

// ── Calculator ─────────────────────────────────────────────────────────────────

export default function DscrCalculatorClient() {
  const [ebitda, setEbitda] = useState(250000);
  const [addBacks, setAddBacks] = useState(0);
  const [existingAnnualDS, setExistingAnnualDS] = useState(0);
  const [proposedAnnualDS, setProposedAnnualDS] = useState(100000);
  const [targetDscr, setTargetDscr] = useState(1.25);

  // ── Derived values ──────────────────────────────────────────────────────────
  const adjustedIncome = ebitda + addBacks;
  const totalDebtService = existingAnnualDS + proposedAnnualDS;
  const dscr = totalDebtService > 0 ? adjustedIncome / totalDebtService : Infinity;
  const maxAnnualDS = targetDscr > 0 ? adjustedIncome / targetDscr : 0;
  const maxNewDS = Math.max(0, maxAnnualDS - existingAnnualDS);

  const isValidDscr = isFinite(dscr);
  const statusBand = isValidDscr ? getStatusBand(dscr) : "strong";
  const status = STATUS_CONFIG[statusBand];

  const dscrDisplay = isValidDscr
    ? `${dscr.toFixed(2)}x`
    : totalDebtService === 0
    ? "No Debt"
    : "—";

  return (
    <CalculatorShell
      title="DSCR Calculator"
      description="Calculate your debt service coverage ratio and maximum supportable annual debt payments."
      disclaimerType="general"
    >
      {/* ── Two-column layout ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ── Inputs ──────────────────────────────────────────────────────── */}
        <div className="space-y-4">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">
            Income &amp; Add-Backs
          </p>

          <CalcInput
            label="EBITDA / Net Operating Income"
            id="ebitda"
            value={ebitda}
            onChange={setEbitda}
            min={0}
            step={1000}
            prefix="$"
            note="Annual earnings before interest, taxes, depreciation, and amortization"
          />

          <CalcInput
            label="Owner Add-Backs"
            id="addBacks"
            value={addBacks}
            onChange={setAddBacks}
            min={0}
            step={1000}
            prefix="$"
            note="Discretionary expenses added back to normalize income"
          />

          <div className="pt-2">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
              Debt Service
            </p>

            <div className="space-y-4">
              <CalcInput
                label="Existing Annual Debt Service"
                id="existingAnnualDS"
                value={existingAnnualDS}
                onChange={setExistingAnnualDS}
                min={0}
                step={1000}
                prefix="$"
                note="Total principal + interest on all current debt obligations (annual)"
              />

              <CalcInput
                label="Proposed Annual Debt Service"
                id="proposedAnnualDS"
                value={proposedAnnualDS}
                onChange={setProposedAnnualDS}
                min={0}
                step={1000}
                prefix="$"
                note="Principal + interest on the new loan being evaluated (annual)"
              />
            </div>
          </div>

          <div className="pt-2">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
              Target
            </p>

            <CalcInput
              label="Target DSCR"
              id="targetDscr"
              value={targetDscr}
              onChange={setTargetDscr}
              min={0.01}
              max={10}
              step={0.05}
              suffix="x"
              note="Most lenders require 1.25x minimum; SBA requires 1.15x–1.25x"
            />
          </div>
        </div>

        {/* ── Results ─────────────────────────────────────────────────────── */}
        <div className="space-y-3">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">
            Results
          </p>

          {/* DSCR — color-coded status card */}
          <div
            className={`rounded-xl border p-4 ${status.bg} ${status.border}`}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">
                DSCR
              </p>
              <span
                className={`flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.08em] ${status.text}`}
              >
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full ${status.dot}`}
                />
                {status.label}
              </span>
            </div>
            <p
              className={`text-3xl font-semibold tabular-nums ${status.text}`}
            >
              {dscrDisplay}
            </p>
            <p className="text-[0.625rem] text-[#3a4a38] mt-1.5">
              Adjusted Income ÷ Total Debt Service
            </p>
          </div>

          {/* Adjusted Income */}
          <CalcResult
            label="Adjusted Income"
            value={fmt(adjustedIncome)}
            note="EBITDA + owner add-backs"
          />

          {/* Total Debt Service */}
          <CalcResult
            label="Total Annual Debt Service"
            value={fmt(totalDebtService)}
            note="Existing + proposed debt service"
          />

          {/* Max Annual DS at Target */}
          <CalcResult
            label={`Max Annual Debt Service at ${targetDscr.toFixed(2)}x`}
            value={fmt(maxAnnualDS)}
            highlight={maxAnnualDS > 0}
            note={`Maximum total debt service your income supports at ${targetDscr.toFixed(2)}x DSCR`}
          />

          {/* Max New DS */}
          <CalcResult
            label="Max Supportable New Debt Service"
            value={fmt(maxNewDS)}
            highlight={maxNewDS > 0}
            note={`After accounting for ${fmt(existingAnnualDS)} in existing annual payments`}
          />

          {/* Summary note */}
          <div className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-4 py-3 mt-1">
            <p className="text-[0.625rem] text-[#a3a3a3] leading-relaxed">
              <span className="text-[#737373] font-medium">How it works: </span>
              DSCR = (EBITDA + Add-Backs) / (Existing DS + Proposed DS). A ratio
              of 1.25x means you generate $1.25 of income for every $1.00 of debt
              service — the standard minimum for most commercial lenders.
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}

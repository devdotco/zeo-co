"use client";

import { useState, useMemo } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

const TARGET_DSCR = 1.25;

function calcMonthlyPayment(principal: number, annualRatePct: number, termYears: number): number {
  const months = termYears * 12;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / months;
  const factor = Math.pow(1 + r, months);
  return (principal * r * factor) / (factor - 1);
}

export default function BusinessAcquisitionLoanCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(1500000);
  const [ebitda, setEbitda] = useState(350000);
  const [downPayment, setDownPayment] = useState(225000);
  const [sellerNote, setSellerNote] = useState(225000);
  const [loanAmount, setLoanAmount] = useState(1050000);
  const [interestRatePct, setInterestRatePct] = useState(7.5);
  const [termYears, setTermYears] = useState(10);
  const [workingCapital, setWorkingCapital] = useState(50000);

  const results = useMemo(() => {
    // Sources & Uses
    const totalSources = loanAmount + sellerNote + downPayment;
    const totalUses = purchasePrice + workingCapital;
    const gap = totalSources - totalUses;

    // Monthly payment on SBA/bank loan
    const monthlyPayment = calcMonthlyPayment(loanAmount, interestRatePct, termYears);
    const annualLoanService = monthlyPayment * 12;

    // Seller note assumed interest-only at 6% for DSCR (simplified — no amortization inputs)
    const sellerNoteService = sellerNote * 0.06;
    const totalAnnualDebtService = annualLoanService + sellerNoteService;

    // DSCR
    const dscr = totalAnnualDebtService > 0 ? ebitda / totalAnnualDebtService : Infinity;

    // Buyer cash flow (EBITDA minus all debt service)
    const buyerCashFlow = ebitda - totalAnnualDebtService;

    // Max supportable price
    // annualPaymentPerDollar = annualService / loanAmount (unit payment rate for the loan structure)
    // maxLoan = ebitda / (TARGET_DSCR) - sellerNoteService → then back-calculate price
    // Simplified: we find max loan where DSCR = 1.25, holding loan/price ratio constant
    const loanToPriceRatio = purchasePrice > 0 ? loanAmount / purchasePrice : 0;
    const annualPaymentPerDollar = loanAmount > 0 ? annualLoanService / loanAmount : 0;
    // max_loan * annualPaymentPerDollar + max_loan * (sellerNote/loanAmount) * 0.06 = ebitda / TARGET_DSCR
    const sellerNoteRatio = loanAmount > 0 ? sellerNote / loanAmount : 0;
    const combinedRatePerDollar = annualPaymentPerDollar + sellerNoteRatio * 0.06;
    const maxLoan = combinedRatePerDollar > 0
      ? (ebitda / TARGET_DSCR) / combinedRatePerDollar
      : 0;
    const maxSupportablePrice = loanToPriceRatio > 0 ? maxLoan / loanToPriceRatio : 0;

    return {
      gap,
      totalSources,
      totalUses,
      monthlyPayment,
      annualLoanService,
      sellerNoteService,
      totalAnnualDebtService,
      dscr,
      buyerCashFlow,
      maxSupportablePrice,
    };
  }, [purchasePrice, ebitda, downPayment, sellerNote, loanAmount, interestRatePct, termYears, workingCapital]);

  const dscrColor =
    results.dscr >= 1.25
      ? "text-[#0f0f0f]"
      : results.dscr >= 1.0
      ? "text-yellow-400"
      : "text-red-400";

  const dscrLabel =
    results.dscr >= 1.25
      ? "Passes (≥ 1.25x)"
      : results.dscr >= 1.0
      ? "Marginal (1.0–1.25x)"
      : "Fails (< 1.0x)";

  return (
    <CalculatorShell
      title="Business Acquisition Loan Calculator"
      description="Model DSCR, sources & uses, buyer cash flow, and max supportable price for an acquisition."
      disclaimerType="acquisition"
      relatedCalcs={[
        { label: "SBA 7(a) Calculator", href: "/calculators/sba-7a-loan-calculator" },
        { label: "SBA 504 Calculator", href: "/calculators/sba-504-loan-calculator" },
        { label: "DSCR Calculator", href: "/calculators/dscr-calculator" },
        { label: "Business Loan Calculator", href: "/calculators/business-loan-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ── LEFT: Inputs ── */}
        <div className="flex flex-col gap-5">
          {/* Deal Structure */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Deal Structure
            </p>
            <div className="flex flex-col gap-3">
              <CalcInput
                label="Purchase Price"
                id="purchasePrice"
                value={purchasePrice}
                onChange={setPurchasePrice}
                min={100000}
                max={50000000}
                step={50000}
                prefix="$"
                note="Total agreed enterprise value"
              />
              <CalcInput
                label="Business EBITDA"
                id="ebitda"
                value={ebitda}
                onChange={setEbitda}
                min={0}
                max={10000000}
                step={10000}
                prefix="$"
                note="Trailing 12-month adjusted EBITDA"
              />
              <CalcInput
                label="Working Capital Needed"
                id="workingCapital"
                value={workingCapital}
                onChange={setWorkingCapital}
                min={0}
                max={2000000}
                step={5000}
                prefix="$"
                note="Post-close operating cushion"
              />
            </div>
          </div>

          {/* Sources of Capital */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Sources of Capital
            </p>
            <div className="flex flex-col gap-3">
              <CalcInput
                label="SBA / Bank Loan Amount"
                id="loanAmount"
                value={loanAmount}
                onChange={setLoanAmount}
                min={0}
                max={25000000}
                step={50000}
                prefix="$"
                note="Senior debt from lender"
              />
              <CalcInput
                label="Seller Note"
                id="sellerNote"
                value={sellerNote}
                onChange={setSellerNote}
                min={0}
                max={10000000}
                step={25000}
                prefix="$"
                note="Seller carry-back financing (6% assumed)"
              />
              <CalcInput
                label="Buyer Equity Injection"
                id="downPayment"
                value={downPayment}
                onChange={setDownPayment}
                min={0}
                max={10000000}
                step={25000}
                prefix="$"
                note="Cash from buyer at close"
              />
            </div>
          </div>

          {/* Loan Terms */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Senior Loan Terms
            </p>
            <div className="flex flex-col gap-3">
              <CalcInput
                label="Interest Rate"
                id="interestRate"
                value={interestRatePct}
                onChange={setInterestRatePct}
                min={1}
                max={30}
                step={0.125}
                suffix="%"
                note="Annual rate on senior loan"
              />
              <CalcInput
                label="Loan Term"
                id="termYears"
                value={termYears}
                onChange={setTermYears}
                min={1}
                max={25}
                step={1}
                suffix="yrs"
                note="Amortization period"
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Results ── */}
        <div className="flex flex-col gap-4">
          {/* DSCR — hero metric */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Debt Service Coverage
            </p>
            <div
              className={`rounded-xl border p-4 ${
                results.dscr >= 1.25
                  ? "border-[#0f0f0f]/30 bg-[#0f2a14]"
                  : results.dscr >= 1.0
                  ? "border-yellow-400/20 bg-[#1a1a00]"
                  : "border-red-500/20 bg-[#1a0606]"
              }`}
            >
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-1">
                DSCR
              </p>
              <p className={`text-3xl font-semibold tabular-nums ${dscrColor}`}>
                {isFinite(results.dscr) ? results.dscr.toFixed(2) + "x" : "—"}
              </p>
              <p className={`text-xs mt-1 ${dscrColor}`}>{dscrLabel}</p>
              <p className="text-[0.625rem] text-[#a3a3a3] mt-1.5">
                Lenders typically require ≥ 1.25x. EBITDA ÷ total annual debt service.
              </p>
            </div>
          </div>

          {/* Cash flow + max price */}
          <div className="grid grid-cols-2 gap-3">
            <CalcResult
              label="Monthly Payment"
              value={fmt(results.monthlyPayment)}
              highlight
              note="Senior loan P+I"
            />
            <CalcResult
              label="Annual Debt Service"
              value={fmt(results.totalAnnualDebtService)}
              note="Loan + seller note"
            />
            <CalcResult
              label="Buyer Cash Flow"
              value={fmt(results.buyerCashFlow)}
              note="EBITDA after all debt service"
            />
            <CalcResult
              label="Max Supportable Price"
              value={fmt(results.maxSupportablePrice)}
              note={`At ${TARGET_DSCR}x DSCR target`}
            />
          </div>

          {/* Sources & Uses Table */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Sources &amp; Uses
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs tabular-nums">
                <thead>
                  <tr className="border-b border-[#e5e5e5]">
                    <th className="text-left pb-2 font-medium text-[#a3a3a3]">Sources</th>
                    <th className="text-right pb-2 font-medium text-[#a3a3a3]">Amount</th>
                    <th className="text-left pb-2 pl-6 font-medium text-[#a3a3a3]">Uses</th>
                    <th className="text-right pb-2 font-medium text-[#a3a3a3]">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-[#0f0f0f]">
                  <tr className="border-b border-[#e5e5e5]/50">
                    <td className="py-2 text-[#737373]">SBA / Bank Loan</td>
                    <td className="py-2 text-right">{fmt(loanAmount)}</td>
                    <td className="py-2 pl-6 text-[#737373]">Purchase Price</td>
                    <td className="py-2 text-right">{fmt(purchasePrice)}</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e5]/50">
                    <td className="py-2 text-[#737373]">Seller Note</td>
                    <td className="py-2 text-right">{fmt(sellerNote)}</td>
                    <td className="py-2 pl-6 text-[#737373]">Working Capital</td>
                    <td className="py-2 text-right">{fmt(workingCapital)}</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e5]/50">
                    <td className="py-2 text-[#737373]">Buyer Equity</td>
                    <td className="py-2 text-right">{fmt(downPayment)}</td>
                    <td className="py-2 pl-6" />
                    <td className="py-2 text-right" />
                  </tr>
                  <tr>
                    <td className="pt-2.5 font-semibold text-[#0f0f0f]">Total Sources</td>
                    <td className="pt-2.5 text-right font-semibold text-[#0f0f0f]">
                      {fmt(results.totalSources)}
                    </td>
                    <td className="pt-2.5 pl-6 font-semibold text-[#0f0f0f]">Total Uses</td>
                    <td className="pt-2.5 text-right font-semibold text-[#0f0f0f]">
                      {fmt(results.totalUses)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Gap indicator */}
            {Math.abs(results.gap) > 1 && (
              <div
                className={`mt-3 rounded-lg px-3 py-2 text-xs flex items-center gap-2 ${
                  Math.abs(results.gap) < 1000
                    ? "bg-[#0f2a14] text-[#0f0f0f]"
                    : results.gap > 0
                    ? "bg-[#0d1f18] text-yellow-400"
                    : "bg-[#1a0606] text-red-400"
                }`}
              >
                <span className="font-semibold">
                  {results.gap > 0 ? "Surplus" : "Gap"}:
                </span>
                <span className="tabular-nums">{fmt(Math.abs(results.gap))}</span>
                <span className="text-[0.625rem] opacity-70">
                  {results.gap > 0
                    ? "Sources exceed uses — consider reducing loan or adding uses."
                    : "Uses exceed sources — increase loan, equity, or seller note."}
                </span>
              </div>
            )}
          </div>

          {/* DSCR visual bar */}
          {isFinite(results.dscr) && results.dscr > 0 && (
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">
                  Coverage Ratio vs. Required
                </p>
                <span className="text-[0.625rem] text-[#a3a3a3] tabular-nums">
                  {isFinite(results.dscr) ? results.dscr.toFixed(2) : "—"}x of {TARGET_DSCR}x min
                </span>
              </div>
              <div className="h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    results.dscr >= 1.25
                      ? "bg-[#0f0f0f]"
                      : results.dscr >= 1.0
                      ? "bg-yellow-400"
                      : "bg-red-400"
                  }`}
                  style={{ width: `${Math.min((results.dscr / 2) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-1.5 text-[0.5rem] text-[#a3a3a3]">
                <span>0x</span>
                <span>1.0x</span>
                <span>1.25x min</span>
                <span>2.0x</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </CalculatorShell>
  );
}

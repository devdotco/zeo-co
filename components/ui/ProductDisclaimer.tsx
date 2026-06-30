import type { ReactNode } from "react";

const DISCLAIMERS = {
  sba: "ZEO.co is not the U.S. Small Business Administration, an SBA lender, or a government agency. SBA loan programs are offered by participating lenders and are subject to SBA rules, lender underwriting, eligibility, collateral, documentation, and approval.",
  factoring:
    "Factoring is not structured as a traditional loan in all cases, but it may still involve fees, UCC filings, recourse obligations, reserve accounts, notice requirements, contractual restrictions, and commercial financing disclosures. Review all factoring agreements with qualified counsel before signing.",
  mca: "Merchant cash advances and sales-based financing may carry high effective costs and are not the same as traditional term loans. Review the total repayment amount, payment frequency, holdback percentage, reconciliation rights, default provisions, fees, and effective cost before accepting any offer.",
  acquisition:
    "Acquisition financing is subject to lender underwriting, buyer equity injection, seller note terms, collateral, DSCR, historical financial performance, business valuation, and lender-specific requirements. ZEO.co does not provide valuation, investment, legal, tax, or accounting advice.",
  private:
    "Private credit and private business lending products may involve higher rates, shorter terms, collateral requirements, personal guarantees, or other risks. Review all terms carefully with your own advisors.",
  general:
    "ZEO.co is not a bank, lender, loan broker, or financial advisor. All financing is subject to underwriting, approval, and terms set by third-party providers. Results from calculators and tools on this site are estimates only and are not offers, commitments, or guarantees.",
} as const;

type DisclaimerKey = keyof typeof DISCLAIMERS;

interface ProductDisclaimerProps {
  type?: DisclaimerKey;
  custom?: string;
  className?: string;
}

export default function ProductDisclaimer({
  type = "general",
  custom,
  className = "",
}: ProductDisclaimerProps) {
  const text = custom ?? DISCLAIMERS[type];

  return (
    <aside
      role="note"
      className={`rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3 ${className}`}
    >
      <p className="text-xs text-[#a3a3a3] leading-relaxed">{text}</p>
    </aside>
  );
}

export function DisclaimerInline({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs text-[#a3a3a3] leading-relaxed mt-3">{children}</p>
  );
}

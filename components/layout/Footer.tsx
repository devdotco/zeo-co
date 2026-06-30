import Link from "next/link";
import { FOOTER_DISCLOSURE } from "@/data/navigation";

function ZeoLogoSvg() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#0f0f0f"/>
      <path d="M8 22L14 10H18L24 22H20.5L16 13L11.5 22H8Z" fill="#000"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-[#ffffff]">
      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ZeoLogoSvg />
              <span className="text-base font-semibold text-[#0f0f0f]">
                zeo<span className="text-[#0f0f0f]">.</span>co
              </span>
            </Link>
            <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-xs">
              Business financing matched to how your company actually makes money. Compare SBA loans, working capital, factoring, and more.
            </p>
            <Link
              href="/apply"
              className="inline-flex mt-5 items-center px-5 py-2.5 rounded-lg bg-[#0f0f0f] text-[#0f0f0f] text-sm font-semibold hover:bg-[#333333] transition-colors"
            >
              Find Financing
            </Link>
          </div>

          {/* Financing Options */}
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">Financing</p>
            <ul className="space-y-2.5">
              {[
                ["SBA Loans", "/sba-loans"],
                ["Working Capital", "/working-capital"],
                ["Equipment Financing", "/equipment-financing"],
                ["Acquisition Financing", "/acquisition-financing"],
                ["Business Line of Credit", "/business-line-of-credit"],
                ["Private Lending", "/private-lending"],
                ["All Financing", "/financing"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#a3a3a3] hover:text-[#0f0f0f] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Factoring */}
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">Factoring</p>
            <ul className="space-y-2.5">
              {[
                ["Invoice Factoring", "/factoring/invoice-factoring"],
                ["Trucking Factoring", "/factoring/trucking"],
                ["Staffing Factoring", "/factoring/staffing"],
                ["Healthcare Factoring", "/factoring/healthcare"],
                ["How It Works", "/factoring/how-it-works"],
                ["Factoring Costs", "/factoring/costs"],
                ["All Factoring", "/factoring"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#a3a3a3] hover:text-[#0f0f0f] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">Resources</p>
            <ul className="space-y-2.5">
              {[
                ["Calculators", "/calculators"],
                ["Business Loan Guide", "/resources/business-loan-guide"],
                ["SBA Loan Guide", "/resources/sba-loan-guide"],
                ["Factoring Guide", "/resources/factoring-guide"],
                ["Acquisition Guide", "/resources/acquisition-financing-guide"],
                ["Documents Needed", "/resources/documents-needed"],
                ["Blog", "/blog"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#a3a3a3] hover:text-[#0f0f0f] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                ["About", "/about"],
                ["How It Works", "/how-it-works"],
                ["Partners", "/partners"],
                ["Lenders", "/lenders"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#a3a3a3] hover:text-[#0f0f0f] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mt-5 mb-3">Legal</p>
            <ul className="space-y-2.5">
              {[
                ["Privacy Policy", "/privacy-policy"],
                ["Terms of Service", "/terms-of-service"],
                ["State Disclosures", "/state-disclosures"],
                ["California", "/state-disclosures/california"],
                ["Security", "/security"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#a3a3a3] hover:text-[#0f0f0f] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal disclosure */}
      <div className="border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
          <p className="text-xs text-[#a3a3a3] leading-relaxed whitespace-pre-line">
            {FOOTER_DISCLOSURE}
          </p>
          <p className="text-xs text-[#a3a3a3] mt-4">
            © {new Date().getFullYear()} ZEO.co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

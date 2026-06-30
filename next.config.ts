import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  async redirects() {
    return [
      // ── Factoring.io → ZEO.co/factoring ─────────────────────────────────
      { source: "/accounts-receivable", destination: "/factoring/accounts-receivable-factoring", permanent: true },
      { source: "/accounts-receivable/", destination: "/factoring/accounts-receivable-factoring", permanent: true },
      { source: "/invoice", destination: "/factoring/invoice-factoring", permanent: true },
      { source: "/invoice/", destination: "/factoring/invoice-factoring", permanent: true },
      { source: "/payroll", destination: "/factoring/payroll-funding", permanent: true },
      { source: "/payroll/", destination: "/factoring/payroll-funding", permanent: true },
      { source: "/purchase-order-financing", destination: "/factoring/purchase-order-financing", permanent: true },
      { source: "/purchase-order-financing/", destination: "/factoring/purchase-order-financing", permanent: true },
      { source: "/spot", destination: "/factoring/spot-factoring", permanent: true },
      { source: "/spot/", destination: "/factoring/spot-factoring", permanent: true },
      { source: "/small-business", destination: "/factoring/small-business", permanent: true },
      { source: "/small-business/", destination: "/factoring/small-business", permanent: true },
      { source: "/freight-broker-invoice-factoring-guide", destination: "/factoring/trucking", permanent: true },
      { source: "/freight-broker-invoice-factoring-guide/", destination: "/factoring/trucking", permanent: true },
      { source: "/staffing", destination: "/factoring/staffing", permanent: true },
      { source: "/staffing/", destination: "/factoring/staffing", permanent: true },
      { source: "/healthcare", destination: "/factoring/healthcare", permanent: true },
      { source: "/healthcare/", destination: "/factoring/healthcare", permanent: true },
      { source: "/manufacturing-factoring", destination: "/factoring/manufacturing", permanent: true },
      { source: "/manufacturing-factoring/", destination: "/factoring/manufacturing", permanent: true },
      { source: "/oilfield-factoring", destination: "/factoring/oilfield", permanent: true },
      { source: "/oilfield-factoring/", destination: "/factoring/oilfield", permanent: true },
      { source: "/construction", destination: "/factoring/construction", permanent: true },
      { source: "/construction/", destination: "/factoring/construction", permanent: true },
      { source: "/agriculture", destination: "/factoring/agriculture", permanent: true },
      { source: "/agriculture/", destination: "/factoring/agriculture", permanent: true },
      { source: "/government", destination: "/factoring/government-contractors", permanent: true },
      { source: "/government/", destination: "/factoring/government-contractors", permanent: true },
      { source: "/service-providers", destination: "/factoring/service-providers", permanent: true },
      { source: "/service-providers/", destination: "/factoring/service-providers", permanent: true },
      { source: "/industries", destination: "/factoring/industries", permanent: true },
      { source: "/industries/", destination: "/factoring/industries", permanent: true },
      { source: "/factoring-vs-bank-loans-2", destination: "/factoring/factoring-vs-bank-loans", permanent: true },
      { source: "/factoring-vs-bank-loans-2/", destination: "/factoring/factoring-vs-bank-loans", permanent: true },
      { source: "/blog", destination: "/blog", permanent: false },
      { source: "/process", destination: "/factoring/how-it-works", permanent: true },
      { source: "/process/", destination: "/factoring/how-it-works", permanent: true },
      { source: "/contact", destination: "/contact", permanent: false },

      // ── Old ZEO.co blockchain/DAO content → appropriate new pages ────────
      { source: "/dao", destination: "/financing", permanent: true },
      { source: "/dao/:path*", destination: "/financing", permanent: true },
      { source: "/blockchain", destination: "/financing", permanent: true },
      { source: "/blockchain/:path*", destination: "/financing", permanent: true },
      { source: "/token", destination: "/financing", permanent: true },
      { source: "/token/:path*", destination: "/financing", permanent: true },
      { source: "/defi", destination: "/financing", permanent: true },
      { source: "/defi/:path*", destination: "/financing", permanent: true },
      { source: "/nft", destination: "/financing", permanent: true },
      { source: "/nft/:path*", destination: "/financing", permanent: true },
      { source: "/crypto", destination: "/financing", permanent: true },
      { source: "/crypto/:path*", destination: "/financing", permanent: true },
      { source: "/web3", destination: "/financing", permanent: true },
      { source: "/web3/:path*", destination: "/financing", permanent: true },
    ];
  },
};

export default nextConfig;

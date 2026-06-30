import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd, { orgSchema, websiteSchema } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZEO.co — Business Financing Matched to How Your Company Makes Money",
    template: "%s | ZEO.co",
  },
  description:
    "Compare SBA loans, working capital, invoice factoring, equipment financing, private lending, acquisition financing, and other commercial financing options through one guided intake.",
  keywords: [
    "business financing",
    "SBA loans",
    "invoice factoring",
    "working capital loans",
    "equipment financing",
    "acquisition financing",
    "business line of credit",
    "commercial financing",
    "small business loans",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ZEO.co",
    title: "ZEO.co — Business Financing Matched to How Your Company Makes Money",
    description:
      "Compare SBA loans, working capital, invoice factoring, equipment financing, private lending, and other commercial financing options.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "ZEO.co" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZEO.co — Business Financing Matched to How Your Company Makes Money",
    description:
      "One guided intake. Multiple capital paths. SBA loans, factoring, working capital, and more.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <JsonLd data={orgSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Key Next.js 16 Breaking Changes

- `params` and `searchParams` in layouts/pages MUST be awaited: `const { slug } = await params`
- `middleware.ts` is now `proxy.ts` (middleware is deprecated)
- Turbopack is now the default bundler
- `revalidateTag` requires a second argument

## Project: ZEO.co

Business financing education, comparison, and referral marketplace.

### Design System

**Monochrome / white — no color accents.**

- Background: `#ffffff`, Surface: `#f5f5f5`, Surface-2: `#eeeeee`, Border: `#e5e5e5`
- Text: `#0f0f0f`, Muted: `#737373`, Dim: `#a3a3a3`
- Accent (buttons/links/focus): `#0f0f0f` (black), Hover: `#333333`
- **Never use green, blue, or any chromatic color.** Black, white, and grays only.
- Tailwind v4 with `@import "tailwindcss"` — no config file, use CSS vars and arbitrary values
- Font: Inter (body), IBM Plex Mono (numbers/mono)

### Critical Compliance Rules

- ZEO.co is NOT a bank, lender, or loan broker. Do not add language suggesting it is.
- Never write: "guaranteed approval", "best rates", "lowest rates", "guaranteed funding"
- Always include `ProductDisclaimer` on financing and factoring pages
- SBA pages: must note ZEO is not the SBA or an SBA lender
- MCA pages: must include prominent warning about high effective cost
- All form submissions: consent checkbox required, never pre-checked

### Component Library

```
components/
  layout/    Header.tsx, Footer.tsx
  ui/        PageHero, FAQ, CTASection, ProductDisclaimer, Breadcrumbs,
             MetricCard, ComparisonTable, FinancingPathCard
  forms/     MultiStepFinancingForm.tsx
  calculators/ CalculatorShell.tsx (CalcInput, CalcResult, fmt helpers)
  seo/       JsonLd.tsx (orgSchema, websiteSchema, breadcrumbSchema, faqSchema, calculatorSchema)
lib/
  metadata.ts   buildMetadata() helper
  storyblok.ts  getBlogPosts, getBlogPost, getBlogSlugs, richTextToHtml
data/
  navigation.ts NAV, FOOTER_DISCLOSURE, FORM_CONSENT
```

### Calculator Pattern

Calculators split into server wrapper + client component:
```tsx
// app/calculators/[name]/page.tsx (server component)
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import MyCalculatorClient from "@/components/calculators/MyCalculator";

export const metadata: Metadata = buildMetadata({...});

export default function MyCalculatorPage() {
  return <MyCalculatorClient />;
}

// components/calculators/MyCalculator.tsx (client component)
"use client";
// ... useState, math, CalcInput, CalcResult
```

### Storyblok

Space: 293541618606048 (EU). Blog-only CMS. Preview token in STORYBLOK_API_KEY env var.
Only use storyblok for /blog and /blog/[slug] pages.

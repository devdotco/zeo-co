import { NextRequest, NextResponse } from "next/server";

// TODO: configure environment variables to enable email delivery and CRM push
// RESEND_API_KEY     — Resend email notification
// LEAD_NOTIFY_EMAIL  — destination email for new lead alerts
// CRM_WEBHOOK_URL    — optional CRM webhook POST

interface LeadPayload {
  fundingPurpose?: string;
  capitalAmount?: string;
  businessType?: string;
  monthlyRevenue?: string;
  annualRevenue?: string;
  ebitda?: string;
  avgMonthlyInvoices?: string;
  state?: string;
  urgency?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  files?: string[];
  leadCategory?: string;
  timestamp?: string;
  pageUrl?: string;
  userAgent?: string;
  consentVersion?: string;
}

export async function POST(request: NextRequest) {
  let payload: LeadPayload;
  try {
    payload = await request.json() as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const submission = {
    ...payload,
    ip,
    receivedAt: new Date().toISOString(),
  };

  // ── Email via Resend ────────────────────────────────────────────────────────
  if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFY_EMAIL) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const html = `
        <h2>New ZEO.co Lead</h2>
        <table style="border-collapse:collapse;font-size:14px">
          <tr><td style="padding:4px 12px 4px 0;color:#666">Category</td><td><strong>${submission.leadCategory}</strong></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Name</td><td>${submission.name}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Company</td><td>${submission.company}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td>${submission.email}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Phone</td><td>${submission.phone}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Purpose</td><td>${submission.fundingPurpose}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Amount</td><td>${submission.capitalAmount}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Business Type</td><td>${submission.businessType}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Monthly Revenue</td><td>${submission.monthlyRevenue}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Annual Revenue</td><td>${submission.annualRevenue}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">EBITDA/SDE</td><td>${submission.ebitda || "—"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">State</td><td>${submission.state}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Urgency</td><td>${submission.urgency}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Timestamp</td><td>${submission.timestamp}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">IP</td><td>${ip}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Consent Version</td><td>${submission.consentVersion}</td></tr>
        </table>
      `;

      await resend.emails.send({
        from: "ZEO.co Leads <leads@zeo.co>",
        to: process.env.LEAD_NOTIFY_EMAIL,
        subject: `New Lead: ${submission.leadCategory?.toUpperCase()} — ${submission.company || submission.name || "Unknown"}`,
        html,
      });
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[ZEO] Resend error:", err);
      }
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.log("[ZEO] Lead submission (no Resend configured):", {
      category: submission.leadCategory,
      name: submission.name,
      email: submission.email,
      company: submission.company,
      purpose: submission.fundingPurpose,
      amount: submission.capitalAmount,
    });
  }

  // ── CRM webhook ─────────────────────────────────────────────────────────────
  if (process.env.CRM_WEBHOOK_URL) {
    try {
      await fetch(process.env.CRM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[ZEO] CRM webhook error:", err);
      }
    }
  }

  return NextResponse.json({ ok: true });
}

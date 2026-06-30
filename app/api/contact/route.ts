import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, subject, message } = body as {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const isDev = process.env.NODE_ENV === "development";

  if (isDev || !process.env.RESEND_API_KEY) {
    console.log("[contact] form submission:", { name, email, subject, message });
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "ZEO.co Contact <noreply@zeo.co>",
      to: ["info@zeo.co"],
      replyTo: email,
      subject: `[ZEO Contact] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });
  } catch (err) {
    console.error("[contact] resend error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

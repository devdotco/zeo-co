"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly at info@zeo.co.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#0f0f0f]/30 bg-[#0f0f0f]/10 px-6 py-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f0f0f]/20">
          <svg className="h-6 w-6 text-[#0f0f0f]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-base font-semibold text-[#0f0f0f] mb-2">Message Sent</h3>
        <p className="text-sm text-[#737373]">
          Thanks for reaching out. We typically respond within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-[#0f0f0f] hover:text-[#4ade80] transition-colors duration-150"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#a3a3a3] mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-[#a3a3a3] focus:border-[#0f0f0f] focus:outline-none focus:ring-1 focus:ring-[#0f0f0f] transition-colors duration-150"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#a3a3a3] mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-[#a3a3a3] focus:border-[#0f0f0f] focus:outline-none focus:ring-1 focus:ring-[#0f0f0f] transition-colors duration-150"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#a3a3a3] mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="General inquiry, partnership, press..."
          className="w-full rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-[#a3a3a3] focus:border-[#0f0f0f] focus:outline-none focus:ring-1 focus:ring-[#0f0f0f] transition-colors duration-150"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#a3a3a3] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className="w-full rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-[#a3a3a3] focus:border-[#0f0f0f] focus:outline-none focus:ring-1 focus:ring-[#0f0f0f] transition-colors duration-150 resize-none"
        />
      </div>

      {status === "error" && errorMsg && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {errorMsg}
        </div>
      )}

      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-[#a3a3a3]">
          For financing, use{" "}
          <Link href="/apply" className="text-[#0f0f0f] hover:underline">
            /apply
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-lg bg-[#0f0f0f] px-6 py-2.5 text-sm font-semibold text-[#ffffff] hover:bg-[#4ade80] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-150"
        >
          {status === "submitting" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}

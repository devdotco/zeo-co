"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { NAV } from "@/data/navigation";

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ── Logo ───────────────────────────────────────────────────────────────────────

function ZeoLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="ZEO.co Home">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
        <rect width="32" height="32" rx="6" fill="#0f0f0f"/>
        <path d="M8 22L14 10H18L24 22H20.5L16 13L11.5 22H8Z" fill="#000"/>
      </svg>
      <span className="text-[1.0625rem] font-semibold tracking-tight text-[#0f0f0f] group-hover:text-[#333333] transition-colors">
        zeo<span className="text-[#0f0f0f]">.</span>co
      </span>
    </Link>
  );
}

// ── Mega Menu: Financing Options ───────────────────────────────────────────────

function FinancingMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[900px] max-w-[calc(100vw-2rem)] bg-[#f5f5f5] border border-[#e5e5e5] rounded-xl shadow-2xl p-6 z-50">
      <div className="grid grid-cols-5 gap-4">
        {NAV.financing.columns.map((col) => (
          <div key={col.heading}>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">{col.heading}</p>
            <ul className="space-y-1">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block text-sm text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5] rounded-md px-2 py-1.5 -mx-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-[#e5e5e5] flex items-center justify-between">
        <Link href="/financing" onClick={onClose} className="text-sm text-[#0f0f0f] hover:underline">
          View all financing options →
        </Link>
        <Link
          href="/apply"
          onClick={onClose}
          className="px-4 py-1.5 rounded-lg bg-[#0f0f0f] text-[#0f0f0f] text-sm font-semibold hover:bg-[#333333] transition-colors"
        >
          Find Financing
        </Link>
      </div>
    </div>
  );
}

// ── Mega Menu: Factoring ───────────────────────────────────────────────────────

function FactoringMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[760px] max-w-[calc(100vw-2rem)] bg-[#f5f5f5] border border-[#e5e5e5] rounded-xl shadow-2xl p-6 z-50">
      <div className="grid grid-cols-3 gap-6">
        {NAV.factoring.columns.map((col) => (
          <div key={col.heading}>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">{col.heading}</p>
            <ul className="space-y-1">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block text-sm text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5] rounded-md px-2 py-1.5 -mx-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-[#e5e5e5] flex items-center justify-between">
        <Link href="/factoring" onClick={onClose} className="text-sm text-[#0f0f0f] hover:underline">
          Factoring overview →
        </Link>
        <Link
          href="/calculators/invoice-factoring-calculator"
          onClick={onClose}
          className="text-sm text-[#737373] hover:text-[#0f0f0f] transition-colors"
        >
          Factoring calculator →
        </Link>
      </div>
    </div>
  );
}

// ── Mega Menu: Use Cases ───────────────────────────────────────────────────────

function UseCasesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[400px] bg-[#f5f5f5] border border-[#e5e5e5] rounded-xl shadow-2xl p-5 z-50">
      <div className="grid grid-cols-2 gap-1">
        {NAV.useCases.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block rounded-lg px-3 py-2.5 hover:bg-[#f5f5f5] transition-colors"
          >
            <p className="text-sm font-medium text-[#0f0f0f]">{item.label}</p>
            <p className="text-xs text-[#a3a3a3] mt-0.5">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Mega Menu: Industries ──────────────────────────────────────────────────────

function IndustriesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[360px] bg-[#f5f5f5] border border-[#e5e5e5] rounded-xl shadow-2xl p-5 z-50">
      <div className="grid grid-cols-2 gap-1">
        {NAV.industries.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block text-sm text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5] rounded-md px-3 py-2 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Mega Menu: Resources ───────────────────────────────────────────────────────

function ResourcesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full right-0 mt-2 w-[720px] max-w-[calc(100vw-2rem)] bg-[#f5f5f5] border border-[#e5e5e5] rounded-xl shadow-2xl p-6 z-50">
      <div className="grid grid-cols-3 gap-6">
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">Calculators</p>
          <ul className="space-y-1">
            {NAV.resources.calculators.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block text-sm text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5] rounded-md px-2 py-1.5 -mx-2 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/calculators" onClick={onClose} className="text-xs text-[#0f0f0f] hover:underline mt-1 block">
                All calculators →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">More Calculators</p>
          <ul className="space-y-1">
            {NAV.resources.calculators.slice(7).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block text-sm text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5] rounded-md px-2 py-1.5 -mx-2 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">Guides</p>
          <ul className="space-y-1">
            {NAV.resources.guides.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block text-sm text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5] rounded-md px-2 py-1.5 -mx-2 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" onClick={onClose} className="block text-sm text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5] rounded-md px-2 py-1.5 -mx-2 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ── Mega Menu: Company ─────────────────────────────────────────────────────────

function CompanyMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full right-0 mt-2 w-[340px] bg-[#f5f5f5] border border-[#e5e5e5] rounded-xl shadow-2xl p-5 z-50">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">Company</p>
          {NAV.company.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block text-sm text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5] rounded-md px-2 py-1.5 -mx-2 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">Legal</p>
          {NAV.company.legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block text-sm text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5] rounded-md px-2 py-1.5 -mx-2 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Nav Item with Dropdown ─────────────────────────────────────────────────────

type MenuKey = "financing" | "factoring" | "useCases" | "industries" | "resources" | "company" | null;

function NavItem({
  label,
  menuKey,
  activeMenu,
  setActiveMenu,
  onCancelClose,
  children,
}: {
  label: string;
  menuKey: MenuKey;
  activeMenu: MenuKey;
  setActiveMenu: (key: MenuKey) => void;
  onCancelClose: () => void;
  children: React.ReactNode;
}) {
  const isOpen = activeMenu === menuKey;

  return (
    <div className="relative" onMouseEnter={onCancelClose}>
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
          isOpen ? "text-[#0f0f0f] bg-[#f5f5f5]" : "text-[#737373] hover:text-[#0f0f0f] hover:bg-[#f5f5f5]"
        }`}
        onMouseEnter={() => setActiveMenu(menuKey)}
        onClick={() => setActiveMenu(isOpen ? null : menuKey)}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && children}
    </div>
  );
}

// ── Mobile Nav ─────────────────────────────────────────────────────────────────

function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#ffffff] flex flex-col overflow-y-auto">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5]">
        <ZeoLogo />
        <button onClick={onClose} className="p-2 text-[#737373]" aria-label="Close menu">
          <CloseIcon />
        </button>
      </div>
      <nav className="flex flex-col gap-1 p-5">
        <MobileSection label="Financing Options" href="/financing" items={NAV.financing.columns.flatMap((c) => c.items)} onClose={onClose} />
        <MobileSection label="Factoring" href="/factoring" items={NAV.factoring.columns.flatMap((c) => c.items)} onClose={onClose} />
        <MobileSection label="Use Cases" href="/use-cases" items={NAV.useCases.items} onClose={onClose} />
        <MobileSection label="Industries" href="/industries" items={NAV.industries.items} onClose={onClose} />
        <MobileSection label="Resources" href="/resources" items={[...NAV.resources.calculators, ...NAV.resources.guides]} onClose={onClose} />
        <MobileSection label="Company" href="/about" items={[...NAV.company.items, ...NAV.company.legal]} onClose={onClose} />
      </nav>
      <div className="p-5 mt-auto border-t border-[#e5e5e5]">
        <Link
          href="/apply"
          onClick={onClose}
          className="block w-full text-center py-3 rounded-xl bg-[#0f0f0f] text-[#0f0f0f] font-semibold hover:bg-[#333333] transition-colors"
        >
          Find Financing
        </Link>
      </div>
    </div>
  );
}

function MobileSection({
  label,
  href,
  items,
  onClose,
}: {
  label: string;
  href: string;
  items: Array<{ label: string; href: string }>;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex w-full items-center justify-between py-3 text-base font-medium text-[#0f0f0f]"
        onClick={() => setOpen(!open)}
      >
        <Link href={href} onClick={onClose} className="hover:text-[#333333]">
          {label}
        </Link>
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-3 mb-2 border-l border-[#e5e5e5] pl-3 space-y-1">
          {items.slice(0, 10).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block py-1.5 text-sm text-[#737373] hover:text-[#0f0f0f]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Header ────────────────────────────────────────────────────────────────

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 300);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeMenu(); setMobileOpen(false); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    if (activeMenu) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [activeMenu, closeMenu]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-200 ${
          scrolled
            ? "bg-[#ffffff]/95 backdrop-blur-sm border-b border-[#e5e5e5]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <div className="flex items-center h-16 gap-6">
            <ZeoLogo />

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1 ml-4"
              onMouseLeave={closeMenu}
            >
              <NavItem label="Financing Options" menuKey="financing" activeMenu={activeMenu} setActiveMenu={setActiveMenu} onCancelClose={cancelClose}>
                <FinancingMegaMenu onClose={closeMenu} />
              </NavItem>
              <NavItem label="Factoring" menuKey="factoring" activeMenu={activeMenu} setActiveMenu={setActiveMenu} onCancelClose={cancelClose}>
                <FactoringMegaMenu onClose={closeMenu} />
              </NavItem>
              <NavItem label="Use Cases" menuKey="useCases" activeMenu={activeMenu} setActiveMenu={setActiveMenu} onCancelClose={cancelClose}>
                <UseCasesMegaMenu onClose={closeMenu} />
              </NavItem>
              <NavItem label="Industries" menuKey="industries" activeMenu={activeMenu} setActiveMenu={setActiveMenu} onCancelClose={cancelClose}>
                <IndustriesMegaMenu onClose={closeMenu} />
              </NavItem>
              <NavItem label="Resources" menuKey="resources" activeMenu={activeMenu} setActiveMenu={setActiveMenu} onCancelClose={cancelClose}>
                <ResourcesMegaMenu onClose={closeMenu} />
              </NavItem>
              <NavItem label="Company" menuKey="company" activeMenu={activeMenu} setActiveMenu={setActiveMenu} onCancelClose={cancelClose}>
                <CompanyMegaMenu onClose={closeMenu} />
              </NavItem>
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <Link
                href="/apply"
                className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg bg-[#0f0f0f] text-[#0f0f0f] text-sm font-semibold hover:bg-[#333333] transition-colors"
              >
                Find Financing
              </Link>

              {/* Mobile toggle */}
              <button
                className="lg:hidden p-2 text-[#737373] hover:text-[#0f0f0f]"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Overlay */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-20"
          onClick={closeMenu}
          aria-hidden
        />
      )}
    </>
  );
}

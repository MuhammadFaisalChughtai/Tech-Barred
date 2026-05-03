"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 border-b border-[#c8c8c8] transition-all duration-300 ${scrolled ? "bg-[#ebebeb]/92 shadow-sm backdrop-blur-xl" : "bg-[#ebebeb]"}`}>
      <div className="mx-auto flex h-14 max-w-[1480px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-16 lg:px-8">
        <Link href="/" className="flex-shrink-0" aria-label="TechBarred home">
          <Logo size={28} />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <Link key={to} href={to}
                className={`factory-label story-link text-[11px] transition hover:text-[var(--accent)] ${isActive ? "text-[var(--accent)]" : "text-[#1a1a1a]"}`}>
                {label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact"
          className="factory-button factory-label hidden h-9 items-center gap-2 border border-black bg-black px-4 text-white lg:inline-flex hover:bg-neutral-800">
          Start Project <ArrowRight size={13} />
        </Link>
        <button
          className="inline-flex size-10 items-center justify-center rounded-[3px] text-black transition hover:bg-black/5 lg:hidden"
          type="button"
          onClick={() => setOpen(v => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="border-t border-[#c8c8c8] bg-[#ebebeb] px-4 pb-4 pt-2 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}>
            <div className="grid gap-1">
              {navLinks.map(({ to, label }) => {
                const isActive = pathname === to;
                return (
                  <Link key={to} href={to}
                    className={`factory-label flex rounded-[3px] px-3 py-3 text-[12px] transition hover:bg-black/5 ${isActive ? "text-[var(--accent)]" : "text-[#1a1a1a]"}`}>
                    {label}
                  </Link>
                );
              })}
              <Link href="/contact"
                className="factory-button factory-label mt-2 flex h-10 items-center justify-center gap-2 border border-black bg-black px-4 text-white">
                Start Project <ArrowRight size={13} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

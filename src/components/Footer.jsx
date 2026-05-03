import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const links = {
    Services: [
      { label: "AI Apps", to: "/services#ai-apps" },
      { label: "AI Automation", to: "/services#ai-automation" },
      { label: "Web Solutions", to: "/services#web-solutions" },
      { label: "Cloud Services", to: "/services#cloud-services" },
      { label: "Custom Apps", to: "/services#custom-apps" },
      { label: "Integrations", to: "/services#integrations" },
    ],
    Company: [
      { label: "About Us", to: "/about" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Contact", to: "/contact" },
    ],
  };

  return (
    <footer className="border-t border-[#c8c8c8] px-4 pb-8 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="TechBarred home">
              <Logo size={28} />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-500">
              Engineering AI applications, automation, web platforms, cloud infrastructure, and custom integrations for businesses worldwide.
            </p>
            <a href="mailto:hello@techbarred.com"
              className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] text-[var(--accent)] hover:underline">
              <Mail size={12} /> hello@techbarred.com
            </a>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="mb-5 font-mono text-[11px] uppercase tracking-widest text-black">{title}</h3>
              <ul className="grid gap-3">
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link href={to} className="text-sm text-neutral-500 transition hover:text-[var(--accent)]">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#c8c8c8] pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-neutral-400">© {new Date().getFullYear()} TechBarred. All rights reserved.</p>
          <a href="https://techbarred.com" className="font-mono text-[11px] text-neutral-400 hover:text-[var(--accent)]">techbarred.com</a>
        </div>
      </div>
    </footer>
  );
}

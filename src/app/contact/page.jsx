"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight, CheckCircle2, Globe2, Clock, Zap } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const services = [
  "AI Applications",
  "AI Automation",
  "Web Development",
  "Cloud Infrastructure",
  "Custom Mobile/Desktop App",
  "System Integrations",
  "Other",
];

// Animated side visual for Contact
function ContactVisual() {
  const items = [
    { label: "Response time", value: "< 24h", icon: Clock },
    { label: "Global reach", value: "6+ countries", icon: Globe2 },
    { label: "Projects delivered", value: "100+", icon: Zap },
  ];
  return (
    <div className="relative flex flex-col gap-4">
      {items.map(({ label, value, icon: Icon }, i) => (
        <motion.div key={label}
          className="flex items-center gap-4 rounded-[3px] border border-[#c8c8c8] bg-white/90 p-5 shadow-sm"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          whileHover={{ x: 4, borderColor: "var(--accent)" }}>
          <div className="grid size-10 shrink-0 place-items-center rounded-[3px] border border-[#c8c8c8] bg-[#f6f6f3] text-[var(--accent)]">
            <Icon size={18} />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</p>
            <strong className="factory-heading text-xl text-black">{value}</strong>
          </div>
        </motion.div>
      ))}

      {/* animated connecting lines */}
      <div className="relative mt-4 overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-[#f4f4f1] p-5">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 120" fill="none" preserveAspectRatio="none">
          <path className="network-path" d="M0 60H80L120 20H180L220 60H300" />
          <path className="network-path delay" d="M0 80H60L100 40H200L240 80H300" />
          <circle r="3" fill="var(--accent)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M0 60H80L120 20H180L220 60H300" />
          </circle>
        </svg>
        <div className="relative z-10 flex items-center gap-3">
          <span className="size-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="font-mono text-[11px] text-neutral-600">hello@techbarred.com</span>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${form.service || "General"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`);
    window.location.href = `mailto:hello@techbarred.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="hatch border-b border-[#c8c8c8] px-5 py-20">
        <div className="mx-auto max-w-[1480px]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              <span className="size-1.5 rounded-full bg-[var(--accent)]" /> Contact
            </p>
            <h1 className="factory-heading text-[clamp(3rem,5vw,5.5rem)] leading-[0.93] text-black">
              Let's build<br />
              <span className="text-[var(--accent)]">something great.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
              Tell us about your project — whether it's an AI application, cloud migration, web platform, or custom integration. We'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section id="contact" className="mx-auto max-w-[1480px] px-5 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
          {/* FORM */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            {sent ? (
              <motion.div className="flex flex-col items-center justify-center gap-4 rounded-[3px] border border-[#c8c8c8] bg-white/80 py-20 text-center"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle2 size={48} className="text-[var(--accent)]" />
                <h2 className="factory-heading text-3xl text-black">Message Sent!</h2>
                <p className="max-w-sm text-sm text-neutral-500">Your email client should have opened. We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-neutral-600">Your Name</label>
                    <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Muhammad Shehryar"
                      className="w-full rounded-[3px] border border-[#c8c8c8] bg-white px-4 py-3 font-mono text-sm text-black outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20" />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-neutral-600">Email Address</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="hello@yourcompany.com"
                      className="w-full rounded-[3px] border border-[#c8c8c8] bg-white px-4 py-3 font-mono text-sm text-black outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-neutral-600">Service Needed</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-[3px] border border-[#c8c8c8] bg-white px-4 py-3 font-mono text-sm text-black outline-none transition focus:border-[var(--accent)]">
                    <option value="">Select a service…</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-neutral-600">Project Details</label>
                  <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, goals, and timeline…"
                    className="w-full rounded-[3px] border border-[#c8c8c8] bg-white px-4 py-3 font-mono text-sm text-black outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 resize-none" />
                </div>

                <button type="submit"
                  className="factory-button factory-label inline-flex h-12 w-full items-center justify-center gap-2 border border-black bg-black px-6 text-white transition hover:bg-neutral-800">
                  Send Message <ArrowRight size={15} />
                </button>

                <p className="text-center font-mono text-[10px] text-neutral-400">
                  Or email us directly at{" "}
                  <a href="mailto:hello@techbarred.com" className="text-[var(--accent)] hover:underline">hello@techbarred.com</a>
                </p>
              </form>
            )}
          </motion.div>

          {/* SIDEBAR */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <ContactVisual />
          </motion.div>
        </div>
      </section>
    </>
  );
}

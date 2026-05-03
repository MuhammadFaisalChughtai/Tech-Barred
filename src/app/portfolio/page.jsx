"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, ExternalLink, CloudCog, BarChart3, LockKeyhole,
  Monitor, Cloud, Network, Braces, Zap, Globe2, ShieldCheck,
  ArrowUpRight, Filter, BookOpen, Calculator,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const portfolio = [
  {
    title: "SaaS Taxi & Courier Platform",
    category: "Web Solution",
    service: "AI Automation",
    description: "A colossal multi-tenant SaaS ecosystem with 3 React frontends and 4 decoupled backends. Intelligent dispatching, global payment integrations, and Elasticsearch analytics.",
    tags: ["React", "Node.js", "Elasticsearch", "Multi-tenant"],
    icon: CloudCog,
    link: "https://taxi.aansaea.com/embed/default",
    featured: true,
    metric: "3 Frontends · 4 Backends",
  },
  {
    title: "Real-Time Sales Analytics",
    category: "Cloud Services",
    service: "AI",
    description: "Enterprise-grade Azure pipeline streaming 600K+ records through Event Hubs → Stream Analytics → SQL Database, visualized live in Power BI via DirectQuery.",
    tags: ["Azure", "Power BI", "Kafka", "SQL"],
    icon: BarChart3,
    link: null,
    featured: true,
    metric: "600K+ records/sec",
  },
  {
    title: "Fraud Detection AI Pipeline",
    category: "AI Apps",
    service: "AI Automation",
    description: "End-to-end real-time fraud detection. Kafka streams into PySpark for feature engineering, persisted to PostgreSQL, with sub-100ms inference via FastAPI — orchestrated by Airflow.",
    tags: ["Kafka", "PySpark", "FastAPI", "Airflow"],
    icon: LockKeyhole,
    link: null,
    featured: true,
    metric: "<100ms inference",
  },
  {
    title: "WhatsApp Agent Desktop App",
    category: "Custom Apps",
    service: "Integrations",
    description: "Enterprise Electron desktop app for remote support teams to collaboratively manage WhatsApp Business in real-time with Socket.io, FFmpeg, and Meta APIs.",
    tags: ["Electron", "Socket.io", "Meta APIs", "FFmpeg"],
    icon: Monitor,
    link: null,
    featured: false,
    metric: "Real-time multi-agent",
  },
  {
    title: "Automated Weather Pipeline",
    category: "Cloud Services",
    service: "Integrations",
    description: "Serverless Azure Data Factory pipeline ingesting daily weather & AQI data from 24 global cities via OpenWeatherMap — into Blob Storage, SQL, and Power BI with risk KPIs.",
    tags: ["Azure", "Data Factory", "Serverless", "Power BI"],
    icon: Cloud,
    link: null,
    featured: false,
    metric: "24 cities · Daily sync",
  },
  {
    title: "Caberly Fleet Management",
    category: "Web Solution",
    service: "Custom Apps",
    description: "Cloud-based platform for real-time ride booking, intelligent driver allocation, and live GPS tracking with automated dispatching and fleet dashboards.",
    tags: ["GPS Tracking", "React", "Node.js", "Fleet"],
    icon: Network,
    link: "https://admin.test.pelickandespatch.com:8443/",
    featured: false,
    metric: "Live GPS · Auto-dispatch",
  },
  {
    title: "ColorPouch Palette Generator",
    category: "Web Solution",
    service: "Web Solution",
    description: "Accessibility-tested color scheme generator with Color Wheel, Gradient Maker, and Image-to-Palette extractor for designers and developers.",
    tags: ["React", "UI/UX", "Design Tools"],
    icon: Braces,
    link: "https://colorpouch.com",
    featured: false,
    metric: "WCAG-compliant",
  },
  {
    title: "4XHUB Trading Platform",
    category: "Web Solution",
    service: "Integrations",
    description: "High-speed global CFD trading platform for automated and manual execution with ultra-low latency, real-time market updates, and strict type-safe frontend.",
    tags: ["Trading", "PHP", "Real-Time", "TypeScript"],
    icon: Zap,
    link: "https://4xhub.com",
    featured: false,
    metric: "Ultra-low latency",
  },
  {
    title: "BEPAKISTANI.PK News Platform",
    category: "Web Solution",
    service: "Web Solution",
    description: "Independent digital news platform with custom Rich-Text editor, SEO optimization, and internationalization covering technology, business, and automobiles.",
    tags: ["Next.js", "SEO", "CMS", "i18n"],
    icon: Globe2,
    link: "https://bepakistani.pk",
    featured: false,
    metric: "SEO-optimized · i18n",
  },
  {
    title: "Abbasi Law Associates",
    category: "Web Solution",
    service: "Web Solution",
    description: "Professional legal firm website with performant, secure presence and a polished user experience optimized for lead generation and credibility.",
    tags: ["React", "Performance", "Security"],
    icon: ShieldCheck,
    link: "https://abbasilawassociates.com",
    featured: false,
    metric: "Lighthouse 95+",
  },
  {
    title: "QuranSarf — Quranic Learning Platform",
    category: "Web Solution",
    service: "Custom Apps",
    description: "A dedicated Islamic education platform built with React, teaching Quranic Sarf (Arabic morphology). Features structured learning paths, interactive lessons, and a distraction-free UI optimized for mobile learners worldwide.",
    tags: ["React", "Education", "PWA", "Mobile-first"],
    icon: BookOpen,
    link: "https://www.quransarf.com/",
    featured: false,
    metric: "Mobile-first · PWA",
  },
  {
    title: "Elite Financials Pro",
    category: "Web Solution",
    service: "Integrations",
    description: "Full-featured accounting and bookkeeping services platform for SMBs in Texas, USA. Includes a services showcase, client testimonials, structured pricing, and a contact funnel — engineered for professional credibility and lead generation.",
    tags: ["WordPress", "Business", "Finance", "Lead Gen"],
    icon: Calculator,
    link: "https://elitefinancialspro.com/",
    featured: false,
    metric: "SMB Finance · Texas USA",
  },
];

const filterCategories = ["All", "AI Apps", "AI Automation", "Web Solution", "Cloud Services", "Custom Apps", "Integrations"];

// Mini animated sparkline for featured cards
function Sparkline({ color = "var(--accent)" }) {
  const points = [40, 25, 55, 30, 60, 45, 70, 50, 80, 55, 90];
  const max = Math.max(...points);
  const h = 40;
  const w = 120;
  const pts = points.map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / max) * h}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <polyline points={pts} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <motion.circle cx={(10 / (points.length - 1)) * w} cy={h - (points[10] / max) * h} r="3" fill={color}
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
    </svg>
  );
}

// Featured card (large horizontal)
function FeaturedCard({ project, index }) {
  const { title, category, service, description, tags, icon: Icon, link, metric } = project;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-white transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-2xl hover:shadow-black/8 hover:-translate-y-1"
    >
      {/* top accent bar */}
      <div className="h-[2px] w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_320px]">
        {/* left content */}
        <div className="p-8">
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-[3px] border border-[#e0e0e0] bg-[#f6f6f3] text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]/30 group-hover:bg-orange-50">
                <Icon size={20} />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)]">{category} · {service}</p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">{metric}</p>
              </div>
            </div>
            {link && (
              <a href={link} target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 rounded-[3px] border border-[#e0e0e0] px-3 py-1.5 font-mono text-[10px] text-neutral-500 transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                View live <ArrowUpRight size={11} />
              </a>
            )}
          </div>

          <h3 className="factory-heading text-[1.8rem] leading-none text-black">{title}</h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-600">{description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-[2px] border border-[#e8e8e8] bg-[#f7f7f4] px-2.5 py-1 font-mono text-[10px] text-neutral-500">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* right visual panel */}
        <div className="relative flex flex-col justify-between border-l border-[#e8e8e8] bg-[#f9f9f7] p-6">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "repeating-linear-gradient(-45deg,transparent,transparent 3px,rgba(0,0,0,0.02) 3px,rgba(0,0,0,0.02) 4px)" }} />
          <div className="relative z-10">
            <p className="mb-3 font-mono text-[9px] uppercase tracking-widest text-neutral-400">Activity</p>
            <Sparkline />
          </div>
          <div className="relative z-10 mt-auto">
            <div className="rounded-[3px] border border-[#e0e0e0] bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">Status</span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] text-[var(--accent)]">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  Production
                </span>
              </div>
              <div className="mt-2 grid gap-1.5">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-neutral-500">Uptime</span>
                  <span className="text-black">99.9%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <motion.div className="h-full rounded-full bg-[var(--accent)]"
                    animate={{ width: ["85%", "95%", "85%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// Regular card
function ProjectCard({ project, index }) {
  const { title, category, service, description, tags, icon: Icon, link, metric } = project;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-white transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-xl hover:shadow-black/6 hover:-translate-y-1"
    >
      {/* top bar */}
      <div className="h-[2px] w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between">
          <div className="grid size-11 place-items-center rounded-[3px] border border-[#e0e0e0] bg-[#f6f6f3] text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]/30 group-hover:bg-orange-50">
            <Icon size={20} />
          </div>
          {link && (
            <a href={link} target="_blank" rel="noreferrer"
              className="grid size-8 place-items-center rounded-[3px] border border-[#e0e0e0] text-neutral-300 transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
              <ExternalLink size={12} />
            </a>
          )}
        </div>

        <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-[var(--accent)]">{category}</p>
        <h3 className="factory-heading text-xl leading-snug text-black">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-neutral-500">{description}</p>

        {/* metric chip */}
        <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-[2px] border border-[#e8e8e8] bg-[#f7f7f4] px-2.5 py-1">
          <span className="size-1.5 rounded-full bg-[var(--accent)]" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">{metric}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="rounded-[2px] border border-[#ebebeb] bg-[#f9f9f7] px-2 py-0.5 font-mono text-[10px] text-neutral-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const allFiltered = filter === "All"
    ? portfolio
    : portfolio.filter(p => p.category === filter || p.service === filter);

  const featured = allFiltered.filter(p => p.featured);
  const regular = allFiltered.filter(p => !p.featured);

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#c8c8c8] px-5 py-20">
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "repeating-linear-gradient(-45deg,transparent,transparent 3px,rgba(0,0,0,0.022) 3px,rgba(0,0,0,0.022) 4px)" }} />

        {/* animated background lines */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
          <path className="network-path" d="M0 150H300L400 80H600L700 150H1440" />
          <path className="network-path delay" d="M0 200H200L350 120H700L850 200H1440" />
          <path className="pulse-line slow" d="M0 100H400L500 180H900L1050 100H1440" />
          <circle r="5" fill="var(--accent)">
            <animateMotion dur="8s" repeatCount="indefinite" path="M0 150H300L400 80H600L700 150H1440" />
          </circle>
        </svg>

        <div className="relative mx-auto max-w-[1480px]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              <span className="size-1.5 rounded-full bg-[var(--accent)]" /> Portfolio
            </p>
            <h1 className="factory-heading text-[clamp(3rem,5.5vw,6rem)] leading-[0.92] text-black">
              Built for production.<br />
              <span className="text-[var(--accent)]">Trusted globally.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-500">
              12+ production systems across AI, cloud, web, and data engineering — serving real businesses across 6+ countries.
            </p>
          </motion.div>

          {/* animated stats row */}
          <div className="mt-12 flex flex-wrap gap-0 divide-x divide-[#c8c8c8]">
            {[
              ["12+", "Production Systems"],
              ["6+", "Countries Served"],
              ["600K+", "Events/sec Processed"],
              ["<100ms", "AI Inference Time"],
            ].map(([val, label], i) => (
              <motion.div key={label}
                className="flex flex-col px-8 first:pl-0"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}>
                <strong className="factory-heading block text-[2.5rem] text-black">{val}</strong>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ───────────────────────── */}
      <section className="mx-auto max-w-[1480px] px-5 py-14">
        {/* sticky filter bar */}
        <div className="sticky top-[64px] z-30 -mx-5 mb-10 border-b border-[#c8c8c8] bg-[#ebebeb]/95 px-5 py-3 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-neutral-400 sm:flex">
              <Filter size={11} /> Filter
            </span>
            {filterCategories.map((cat) => (
              <button key={cat} type="button" onClick={() => setFilter(cat)}
                className={`factory-button factory-label h-7 px-3 transition-all duration-200 ${
                  filter === cat
                    ? "border border-[var(--accent)] bg-[var(--accent)] text-white shadow-md"
                    : "border border-[#d0d0d0] bg-white text-neutral-500 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={filter}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}>

            {/* featured (large horizontal) */}
            {featured.length > 0 && (
              <div className="mb-6 grid gap-4">
                {featured.map((project, i) => (
                  <FeaturedCard key={project.title} project={project} index={i} />
                ))}
              </div>
            )}

            {/* regular grid */}
            {regular.length > 0 && (
              <>
                {featured.length > 0 && (
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">More Projects</span>
                    <div className="flex-1 border-t border-[#e0e0e0]" />
                  </div>
                )}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {regular.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                  ))}
                </div>
              </>
            )}

            {/* empty state */}
            {allFiltered.length === 0 && (
              <motion.div className="flex flex-col items-center justify-center py-24 text-center"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="mb-4 grid size-16 place-items-center rounded-[3px] border border-[#e0e0e0] bg-[#f6f6f3] text-neutral-300">
                  <Filter size={24} />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">No projects in this category yet</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="border-t border-[#c8c8c8] px-5 py-20">
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            className="relative overflow-hidden rounded-[3px] border border-black bg-[#111] p-10 text-white"
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <div className="slide-hatch absolute inset-0" />
            {/* animated dots */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-10" viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none">
              <path className="network-path bright" d="M0 100H300L400 40H700L800 100H1200" />
              <circle r="4" fill="var(--accent)">
                <animateMotion dur="5s" repeatCount="indefinite" path="M0 100H300L400 40H700L800 100H1200" />
              </circle>
            </svg>
            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
                  <span className="size-1.5 rounded-full bg-[var(--accent)]" /> Work with us
                </p>
                <h2 className="factory-heading text-[clamp(2rem,4vw,4rem)] leading-[0.93] text-white">
                  Want something like<br />this built for you?
                </h2>
                <p className="mt-3 max-w-lg text-sm text-white/50">Let's talk requirements — we'll scope it, design it, and ship it.</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link href="/contact"
                  className="factory-button factory-label inline-flex h-11 items-center gap-2 bg-white px-6 text-black">
                  Start a Project <ArrowRight size={14} />
                </Link>
                <a href="mailto:hello@techbarred.com"
                  className="factory-button factory-label inline-flex h-11 items-center gap-2 border border-white/20 px-6 text-white hover:border-white/50">
                  hello@techbarred.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

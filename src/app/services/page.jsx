"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Zap, Globe2, Cloud, Smartphone, Plug, ChevronRight, BrainCircuit, Workflow, Code2, Server } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const services = [
  {
    slug: "ai-apps",
    icon: Bot,
    label: "AI Apps",
    tagline: "LLM-powered applications that think, learn, and adapt.",
    color: "#ff4f00",
    description: "We build production-grade AI applications using the latest large language models, computer vision, and custom ML pipelines. From intelligent chatbots to document analysis engines — we turn AI capabilities into real business tools.",
    features: ["Custom LLM integrations (GPT-4o, Claude, Gemini)", "AI chatbots & virtual assistants", "Document parsing & intelligent search", "Computer vision & image recognition", "Recommendation engines", "RAG (Retrieval-Augmented Generation) systems"],
    visual: "ai",
  },
  {
    slug: "ai-automation",
    icon: Zap,
    label: "AI Automation",
    tagline: "Automate workflows, eliminate manual ops, move faster.",
    color: "#ff4f00",
    description: "We design and implement intelligent automation systems that handle repetitive tasks, trigger complex workflows, and integrate your tools — so your team can focus on what actually matters.",
    features: ["End-to-end workflow automation", "RPA with AI decision-making", "Email, Slack & CRM automations", "ETL & data pipeline automation", "Scheduled reporting & alerting", "Multi-system orchestration"],
    visual: "automation",
  },
  {
    slug: "web-solutions",
    icon: Code2,
    label: "Web Solutions",
    tagline: "Full-stack platforms built for scale and performance.",
    color: "#ff4f00",
    description: "From SaaS dashboards to public-facing platforms — we engineer web applications that are fast, accessible, and built to scale. React, Next.js, Node.js, and everything in between.",
    features: ["React & Next.js frontends", "Node.js / REST / GraphQL backends", "SaaS multi-tenant architecture", "E-commerce & booking systems", "Real-time dashboards (Socket.io)", "SEO-optimized marketing sites"],
    visual: "web",
  },
  {
    slug: "cloud-services",
    icon: Cloud,
    label: "Cloud Services",
    tagline: "Azure & AWS architecture, DevOps pipelines, infra-as-code.",
    color: "#ff4f00",
    description: "We architect, migrate, and manage cloud infrastructure that is secure, observable, and cost-efficient. From simple deployments to enterprise-grade multi-region setups.",
    features: ["Azure & AWS architecture", "CI/CD pipelines (Jenkins, GitHub Actions)", "Docker & Kubernetes orchestration", "Real-time data streaming (Kafka)", "Serverless & microservices", "Cloud cost optimization"],
    visual: "cloud",
  },
  {
    slug: "custom-apps",
    icon: Smartphone,
    label: "Custom Apps",
    tagline: "Mobile & desktop apps tailored to your exact use case.",
    color: "#ff4f00",
    description: "We build cross-platform mobile apps and desktop applications that are polished, performant, and production-ready. React Native for mobile, Electron for desktop.",
    features: ["React Native (iOS & Android)", "Electron desktop apps", "Offline-first architecture", "Push notifications & real-time sync", "GPS & mapping integrations", "Payment gateway integration"],
    visual: "apps",
  },
  {
    slug: "integrations",
    icon: Plug,
    label: "Integrations",
    tagline: "Connect every tool in your stack — APIs, webhooks, ETL.",
    color: "#ff4f00",
    description: "We specialize in connecting disparate systems — whether it's syncing your CRM with your warehouse, setting up webhook pipelines, or building custom API bridges between third-party services.",
    features: ["REST & GraphQL API development", "Third-party API integrations", "Webhook pipeline design", "ETL & data sync pipelines", "WhatsApp & Telegram bot integrations", "Payment & fintech gateway bridges"],
    visual: "integrations",
  },
];

// Unique animated visual for each service
function ServiceVisual({ type }) {
  if (type === "ai") return (
    <div className="relative h-72 overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-[#f4f4f1]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 280" fill="none" preserveAspectRatio="none">
        <path className="network-path bright" d="M50 140H150L200 80H300L350 140H450" />
        <path className="network-path" d="M80 200H180L240 120H300L380 200H460" />
        <circle r="4" fill="var(--accent)"><animateMotion dur="3s" repeatCount="indefinite" path="M50 140H150L200 80H300L350 140H450" /></circle>
      </svg>
      <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3px] border border-[#c8c8c8] bg-white p-5 shadow-xl"
        animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <BrainCircuit size={32} className="mx-auto text-[var(--accent)]" />
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-400 text-center">AI Processing</p>
        <motion.div className="mt-2 h-1 overflow-hidden rounded-full bg-neutral-100">
          <motion.div className="h-full bg-[var(--accent)]" animate={{ width: ["0%","100%","0%"] }} transition={{ duration: 2.5, repeat: Infinity }} />
        </motion.div>
      </motion.div>
      <span className="network-signal one" /><span className="network-signal two" /><span className="network-signal three" />
    </div>
  );

  if (type === "automation") return (
    <div className="relative h-72 overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-[#f4f4f1]">
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "repeating-linear-gradient(-45deg,transparent,transparent 3px,rgba(0,0,0,0.028) 3px,rgba(0,0,0,0.028) 4px)" }} />
      {["Trigger", "Process", "Route", "Complete"].map((step, i) => (
        <motion.div key={step}
          className="absolute flex items-center gap-2 rounded-[3px] border border-[#c8c8c8] bg-white px-3 py-2 shadow-md font-mono text-[11px]"
          style={{ left: `${12 + i * 22}%`, top: `${30 + (i % 2) * 30}%` }}
          animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}>
          <span className="size-2 rounded-full bg-[var(--accent)]" />
          {step}
        </motion.div>
      ))}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 280" fill="none" preserveAspectRatio="none">
        <path className="network-path" d="M80 160H150M200 145H280M330 155H410" />
      </svg>
    </div>
  );

  if (type === "web") return (
    <div className="relative h-72 overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-[#f4f4f1]">
      <motion.div className="absolute left-1/2 top-6 w-64 -translate-x-1/2 rounded-[3px] border border-[#c8c8c8] bg-white shadow-xl"
        animate={{ y: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <div className="flex items-center gap-2 border-b border-[#e8e8e8] px-3 py-2">
          <span className="size-2 rounded-full bg-[var(--accent)]" />
          <span className="size-2 rounded-full bg-neutral-200" />
          <span className="size-2 rounded-full bg-neutral-200" />
          <span className="ml-auto font-mono text-[9px] text-neutral-400">techbarred.com</span>
        </div>
        <div className="p-4">
          <div className="mb-2 h-3 w-3/4 rounded bg-neutral-100" />
          <div className="mb-2 h-2 w-full rounded bg-neutral-100" />
          <div className="mb-3 h-2 w-2/3 rounded bg-neutral-100" />
          <div className="h-7 w-24 rounded-[3px] bg-[var(--accent)]" />
        </div>
      </motion.div>
      <motion.div className="absolute bottom-6 left-6 rounded-[3px] border border-[#c8c8c8] bg-white px-3 py-2 shadow-md font-mono text-[10px]"
        animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <span className="text-[var(--accent)]">✓</span> 99.9% uptime
      </motion.div>
      <motion.div className="absolute bottom-6 right-6 rounded-[3px] border border-[#c8c8c8] bg-white px-3 py-2 shadow-md font-mono text-[10px]"
        animate={{ y: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
        <span className="text-[var(--accent)]">&lt;</span>50ms
      </motion.div>
    </div>
  );

  if (type === "cloud") return (
    <div className="relative h-72 overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-[#f4f4f1]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 280" fill="none" preserveAspectRatio="none">
        <path className="pulse-line" d="M100 140H200L250 80H300L400 140" />
        <path className="pulse-line delay" d="M80 200H180L240 150H320L420 200" />
        <circle cx="200" cy="140" r="5" fill="var(--accent)" />
        <circle cx="300" cy="80" r="5" fill="var(--accent)" />
        <circle cx="240" cy="150" r="5" fill="var(--accent)" />
      </svg>
      {[["Azure", "14%", "20%"], ["AWS", "72%", "18%"], ["Docker", "42%", "72%"]].map(([name, x, y]) => (
        <motion.div key={name} className="absolute rounded-[3px] border border-[#c8c8c8] bg-white px-3 py-1.5 font-mono text-[10px] shadow-md"
          style={{ left: x, top: y }}
          animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2 }}>
          <span className="text-[var(--accent)] mr-1">◈</span>{name}
        </motion.div>
      ))}
    </div>
  );

  if (type === "apps") return (
    <div className="relative h-72 overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-[#f4f4f1] flex items-center justify-center gap-6">
      {/* Mobile */}
      <motion.div className="w-28 rounded-2xl border-2 border-[#c8c8c8] bg-white overflow-hidden shadow-xl"
        animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <div className="h-4 bg-neutral-100 flex items-center justify-center"><div className="h-1.5 w-8 rounded bg-neutral-200" /></div>
        <div className="p-2 grid gap-1.5">
          <div className="h-16 rounded-[2px] bg-[var(--accent)]/10 border border-[var(--accent)]/20" />
          <div className="h-2 w-3/4 rounded bg-neutral-100" />
          <div className="h-2 w-1/2 rounded bg-neutral-100" />
          <div className="h-6 w-full rounded-[2px] bg-[var(--accent)]" />
        </div>
      </motion.div>
      {/* Desktop */}
      <motion.div className="w-48 rounded-[3px] border border-[#c8c8c8] bg-white overflow-hidden shadow-xl"
        animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <div className="flex items-center gap-1.5 border-b border-[#e8e8e8] px-2 py-1.5">
          <span className="size-1.5 rounded-full bg-[var(--accent)]" />
          <span className="size-1.5 rounded-full bg-neutral-200" />
          <span className="size-1.5 rounded-full bg-neutral-200" />
        </div>
        <div className="p-3 grid gap-1.5">
          <div className="h-2 w-full rounded bg-neutral-100" />
          <div className="h-2 w-3/4 rounded bg-neutral-100" />
          <div className="h-12 rounded-[2px] bg-[#f6f6f3] border border-[#e8e8e8]" />
          <div className="h-5 w-20 rounded-[2px] bg-[var(--accent)]" />
        </div>
      </motion.div>
    </div>
  );

  // integrations
  return (
    <div className="relative h-72 overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-[#f4f4f1]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 280" fill="none" preserveAspectRatio="none">
        <path className="network-path bright" d="M250 140L120 80M250 140L380 80M250 140L120 200M250 140L380 200" />
        <circle r="3.5" fill="var(--accent)"><animateMotion dur="2s" repeatCount="indefinite" path="M250 140L120 80" /></circle>
        <circle r="3.5" fill="var(--accent)"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s" path="M250 140L380 80" /></circle>
        <circle r="3.5" fill="var(--accent)"><animateMotion dur="2.2s" repeatCount="indefinite" begin="1s" path="M250 140L120 200" /></circle>
        <circle r="3.5" fill="var(--accent)"><animateMotion dur="1.8s" repeatCount="indefinite" begin="1.5s" path="M250 140L380 200" /></circle>
      </svg>
      {[["WhatsApp","10%","20%"],["Stripe","72%","18%"],["Slack","8%","65%"],["HubSpot","70%","68%"]].map(([name, x, y]) => (
        <motion.div key={name} className="absolute rounded-[3px] border border-[#c8c8c8] bg-white px-2 py-1 font-mono text-[10px] shadow-md"
          style={{ left: x, top: y }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}>
          {name}
        </motion.div>
      ))}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full border-2 border-[var(--accent)] bg-white shadow-xl">
        <Plug size={18} className="text-[var(--accent)]" />
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="hatch border-b border-[#c8c8c8] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">

          {/* LEFT — heading */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              <span className="size-1.5 rounded-full bg-[var(--accent)]" /> Services
            </p>
            <h1 className="factory-heading text-[clamp(3rem,5vw,5.5rem)] leading-[0.93] text-black">
              Everything you need<br />to build at scale.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
              From AI-powered applications to cloud infrastructure and custom integrations — TechBarred delivers end-to-end digital engineering for modern businesses.
            </p>
          </motion.div>

          {/* RIGHT — compact service index (hidden on mobile) */}
          <motion.div
            className="hidden items-center lg:flex"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="w-full overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-white/80 shadow-sm">
              {/* header bar */}
              <div className="flex items-center justify-between border-b border-[#e8e8e8] px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">Our Services</span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] text-[var(--accent)]">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  6 active
                </span>
              </div>

              {/* service rows */}
              {services.map(({ slug, icon: Icon, label, tagline }, i) => (
                <motion.a
                  key={slug}
                  href={`#${slug}`}
                  className="group flex items-center gap-3 border-b border-[#f0f0f0] px-4 py-3 transition-colors last:border-b-0 hover:bg-[#fafaf8]"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-[3px] border border-[#e8e8e8] bg-[#f6f6f3] text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]/30 group-hover:bg-orange-50">
                    <Icon size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-black">{label}</p>
                    <p className="truncate font-mono text-[9px] text-neutral-400">{tagline}</p>
                  </div>
                  <span className="font-mono text-[9px] text-neutral-300 transition-colors group-hover:text-[var(--accent)]">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}

              {/* footer */}
              <div className="border-t border-[#e8e8e8] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-100">
                    <motion.div className="h-full rounded-full bg-[var(--accent)]"
                      animate={{ width: ["20%", "90%", "20%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">Building the future</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* SERVICES DETAIL */}
      <section className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6">
          {services.map(({ slug, icon: Icon, label, tagline, description, features, visual }, i) => (
            <motion.div key={slug} id={slug}
              className="grid grid-cols-1 gap-6 rounded-[3px] border border-[#c8c8c8] bg-white/70 p-5 sm:p-8 lg:grid-cols-[1fr_400px]"
              initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-[3px] border border-[#c8c8c8] bg-[#f6f6f3] text-[var(--accent)]">
                    <Icon size={18} />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">0{i + 1}</p>
                </div>
                <h2 className="factory-heading text-[2.2rem] leading-none text-black">{label}</h2>
                <p className="mt-2 font-mono text-sm text-[var(--accent)]">{tagline}</p>
                <p className="mt-5 text-sm leading-7 text-neutral-600">{description}</p>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-mono text-[11px] text-neutral-700">
                      <ChevronRight size={11} className="text-[var(--accent)] shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="factory-button factory-label mt-8 inline-flex h-10 items-center gap-2 border border-black bg-black px-5 text-white">
                  Get Started <ArrowRight size={13} />
                </Link>
              </div>
              <div className="flex items-center">
                <div className="w-full"><ServiceVisual type={visual} /></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

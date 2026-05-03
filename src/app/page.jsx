"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Bot, Zap, Globe2, Cloud, Smartphone, Plug,
  Shield, Headphones, ChevronRight, BrainCircuit, Workflow,
  Code2, Server, Layers, GitBranch,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const services = [
  { slug: "ai-apps", icon: Bot, label: "AI Apps", tagline: "Intelligent applications powered by LLMs and custom models." },
  { slug: "ai-automation", icon: Zap, label: "AI Automation", tagline: "Automate workflows, eliminate manual ops, move faster." },
  { slug: "web-solutions", icon: Code2, label: "Web Solutions", tagline: "Full-stack platforms built for scale and performance." },
  { slug: "cloud-services", icon: Cloud, label: "Cloud Services", tagline: "Azure & AWS architecture, devops pipelines, infra-as-code." },
  { slug: "custom-apps", icon: Smartphone, label: "Custom Apps", tagline: "Mobile & desktop apps tailored to your exact use case." },
  { slug: "integrations", icon: Plug, label: "Integrations", tagline: "Connect every tool in your stack — APIs, webhooks, ETL." },
];

const stats = [
  { value: "100+", label: "Global Clients", icon: Globe2 },
  { value: "99.9%", label: "Uptime SLA", icon: Shield },
  { value: "6+", label: "Countries", icon: Globe2 },
  { value: "24/7", label: "Support", icon: Headphones },
];

const floatingNodes = [
  { label: "GPT-4o", x: "8%", y: "20%", delay: 0 },
  { label: "Azure", x: "78%", y: "15%", delay: 0.8 },
  { label: "Kafka", x: "82%", y: "65%", delay: 1.4 },
  { label: "React", x: "5%", y: "70%", delay: 2 },
  { label: "Docker", x: "42%", y: "82%", delay: 0.4 },
];

function HeroVisual() {
  return (
    <div className="relative h-full min-h-[480px] overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-[#f4f4f1]">
      {/* hatch bg */}
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "repeating-linear-gradient(-45deg,transparent,transparent 3px,rgba(0,0,0,0.028) 3px,rgba(0,0,0,0.028) 4px)" }} />

      {/* animated SVG network */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 480" fill="none" preserveAspectRatio="none">
        <path className="network-path" d="M50 240H180L240 160H360L420 240H550" />
        <path className="network-path delay" d="M80 320H200L280 200H400L480 320H560" />
        <path className="network-path slow" d="M60 140H160L220 300H380L440 140H540" />
        <path className="network-path bright" d="M150 240H250L300 180H350L450 240" />
        {/* flowing dots on paths */}
        <circle r="4" fill="var(--accent)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M50 240H180L240 160H360L420 240H550" />
        </circle>
        <circle r="3" fill="var(--accent)" opacity="0.7">
          <animateMotion dur="6s" repeatCount="indefinite" begin="1s" path="M80 320H200L280 200H400L480 320H560" />
        </circle>
        <circle r="3.5" fill="#111">
          <animateMotion dur="5s" repeatCount="indefinite" begin="2s" path="M60 140H160L220 300H380L440 140H540" />
        </circle>
      </svg>

      {/* node badges */}
      {floatingNodes.map(({ label, x, y, delay }) => (
        <motion.div
          key={label}
          className="absolute flex items-center gap-2 rounded-md border border-[#c8c8c8] bg-white/90 px-3 py-1.5 font-mono text-[11px] text-black shadow-lg backdrop-blur"
          style={{ left: x, top: y }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <span className="size-1.5 rounded-full bg-[var(--accent)]" />
          {label}
        </motion.div>
      ))}

      {/* center card */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[3px] border border-[#c8c8c8] bg-white/95 p-4 shadow-2xl backdrop-blur"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex items-center gap-2 border-b border-black/8 pb-3">
          <BrainCircuit size={16} className="text-[var(--accent)]" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider">TechBarred AI</span>
        </div>
        <div className="grid gap-2">
          {["Analyzing request…", "Generating plan…", "Deploying solution…"].map((t, i) => (
            <motion.div key={t} className="flex items-center gap-2 font-mono text-[10px] text-neutral-500"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.6, repeat: Infinity, repeatDelay: 2 }}>
              <span className="size-1 rounded-full bg-[var(--accent)]" />
              {t}
            </motion.div>
          ))}
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-100">
          <motion.div className="h-full bg-[var(--accent)]" animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        </div>
      </motion.div>

      {/* ripple signals */}
      <span className="network-signal one" />
      <span className="network-signal two" />
      <span className="network-signal three" />

      {/* bottom bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">AI · Cloud · Web</span>
        <span className="font-mono text-[10px] text-[var(--accent)]">● live</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section id="top" className="mx-auto grid min-h-[calc(100svh-56px)] max-w-[1480px] grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-20">
        <motion.div className="flex flex-col justify-center" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
          <motion.div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-neutral-600"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="pulse-dot size-2 rounded-full bg-[var(--accent)]" />
            AI · Automation · Web · Cloud
          </motion.div>

          <h1 className="factory-heading text-[clamp(3rem,5.5vw,6rem)] leading-[0.93] tracking-tight text-black">
            {["Build smarter.", "Ship faster."].map((line, i) => (
              <motion.span key={line} className="block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: "easeOut" }}>
                {line}
              </motion.span>
            ))}
            <motion.span className="block text-[var(--accent)]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}>
              Grow without limits.
            </motion.span>
          </h1>

          <motion.p className="mt-8 max-w-lg text-base leading-8 text-neutral-600"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            TechBarred engineers AI applications, intelligent automation, web platforms, cloud infrastructure, and custom integrations — purpose-built for ambitious businesses worldwide.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.42 }}>
            <Link href="/services" className="factory-button factory-label inline-flex h-11 items-center gap-2 border border-black bg-black px-5 text-white">
              Explore Services <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="factory-button factory-label inline-flex h-11 items-center gap-2 border border-[#b8b3b0] bg-white/70 px-5 text-black hover:border-[var(--accent)] hover:text-[var(--accent)]">
              Talk to an Expert
            </Link>
          </motion.div>

          {/* CLI widget */}
          <motion.div className="mt-10 max-w-xl overflow-hidden rounded-[3px] border border-[#c8c8c8] bg-white/90"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}>
            <div className="flex items-center justify-between border-b border-[#c8c8c8] px-4 py-2.5">
              <div className="flex items-center gap-3">
                <span className="rounded border border-[#c8c8c8] px-2 py-0.5 font-mono text-[10px] text-black">AI / CLOUD</span>
                <span className="rounded border border-[#c8c8c8] px-2 py-0.5 font-mono text-[10px] text-neutral-400">WEB</span>
              </div>
              <div className="flex gap-2">
                <span className="size-2 rounded-full bg-[var(--accent)]" />
                <span className="size-2 rounded-full bg-neutral-200" />
                <span className="size-2 rounded-full bg-neutral-200" />
              </div>
            </div>
            <div className="bg-[#f6f6f3] p-4">
              <div className="flex items-center justify-between rounded-[3px] border border-[#c8c8c8] bg-white px-4 py-3 font-mono text-sm shadow-sm">
                <span>
                  <span className="text-[var(--accent)]">&gt;</span>{" "}
                  <span className="typewriter-command">npx techbarred init --ai --cloud</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT visual */}
        <motion.div className="hidden lg:block" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <HeroVisual />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#c8c8c8]">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 divide-x divide-y divide-[#c8c8c8] lg:grid-cols-4 lg:divide-y-0">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div key={label}
              className="flex items-center justify-between p-5 sm:p-7 lg:p-8"
              initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div>
                <strong className="factory-heading block text-3xl text-black sm:text-4xl">{value}</strong>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</span>
              </div>
              <Icon size={24} className="text-[var(--accent)]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="mx-auto max-w-[1480px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
            <span className="size-1.5 rounded-full bg-[var(--accent)]" /> What we build
          </p>
          <h2 className="factory-heading text-[clamp(2.2rem,4vw,4rem)] leading-[0.98] text-black">
            Six pillars of<br />digital excellence.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, icon: Icon, label, tagline }, i) => (
            <motion.div key={slug} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}>
              <Link href={`/services/${slug}`}
                className="group flex h-full flex-col rounded-[3px] border border-[#c8c8c8] bg-white/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:shadow-lg">
                <div className="mb-5 grid size-12 place-items-center rounded-[3px] border border-[#c8c8c8] bg-[#f6f6f3] text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]/40 group-hover:bg-orange-50">
                  <Icon size={22} />
                </div>
                <strong className="factory-heading text-xl text-black">{label}</strong>
                <p className="mt-2 flex-1 text-sm leading-6 text-neutral-500">{tagline}</p>
                <div className="mt-5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ChevronRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="hatch border-y border-[#c8c8c8] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1480px]">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                <span className="size-1.5 rounded-full bg-[var(--accent)]" /> Real work
              </p>
              <h2 className="factory-heading text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.98] text-black">
                Built for production.<br />Trusted by teams globally.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-600">
                From SaaS platforms handling 600K+ events/sec to AI pipelines delivering sub-100ms inference — we ship systems that work at scale.
              </p>
            </div>
            <Link href="/portfolio" className="factory-button factory-label inline-flex shrink-0 h-11 items-center gap-2 border border-black bg-black px-6 text-white">
              View Portfolio <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div className="relative overflow-hidden rounded-[3px] border border-black bg-[#111] p-10 text-white"
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <div className="slide-hatch absolute inset-0" />
          <div className="relative z-10">
            <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/50">
              <span className="size-1.5 rounded-full bg-[var(--accent)]" /> Start today
            </p>
            <h2 className="factory-heading text-[clamp(2.4rem,4.5vw,5rem)] leading-[0.93] text-white">
              Ready to transform<br />your business?
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/60">
              Let's build your next AI app, automate your workflows, or ship your cloud platform. We'll move fast and deliver right.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="factory-button factory-label inline-flex h-11 items-center gap-2 bg-white px-5 text-black">
                Start a Project <ArrowRight size={15} />
              </Link>
              <a href="mailto:hello@techbarred.com" className="factory-button factory-label inline-flex h-11 items-center gap-2 border border-white/20 px-5 text-white hover:border-white/50">
                hello@techbarred.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

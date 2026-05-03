"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Terminal, Database, Network, BarChart3, Server, Bot, Zap, Code2, Cloud, Smartphone, Plug } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const expertise = [
  { label: "Frontend", icon: Monitor, skills: ["React.js", "Next.js", "TypeScript", "React Native", "Framer Motion", "Tailwind CSS"] },
  { label: "Backend", icon: Terminal, skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets", "Microservices"] },
  { label: "Databases", icon: Database, skills: ["PostgreSQL", "MongoDB", "Elasticsearch", "Redis", "Firebase", "MinIO (S3)"] },
  { label: "Data Eng.", icon: Network, skills: ["Kafka", "Apache Spark", "Airflow", "ETL Pipelines", "Monstache", "Kibana"] },
  { label: "Data Science", icon: BarChart3, skills: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Power BI", "TensorFlow"] },
  { label: "DevOps & Cloud", icon: Server, skills: ["Docker", "Azure", "AWS", "Jenkins", "Nginx", "Rancher"] },
];

const services = [
  { icon: Bot, label: "AI Apps", link: "/services/ai-apps" },
  { icon: Zap, label: "AI Automation", link: "/services/ai-automation" },
  { icon: Code2, label: "Web Solutions", link: "/services/web-solutions" },
  { icon: Cloud, label: "Cloud Services", link: "/services/cloud-services" },
  { icon: Smartphone, label: "Custom Apps", link: "/services/custom-apps" },
  { icon: Plug, label: "Integrations", link: "/services/integrations" },
];

// Orbit animation for About hero visual
function OrbitVisual() {
  const [tick, setTick] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(Date.now());

  useEffect(() => {
    const animate = () => {
      setTick((Date.now() - startRef.current) / 1000);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const size = 360;
  const cx = size / 2;
  const cy = size / 2;

  // inner orbit: radius 90, 3 items
  const inner = [
    { label: "AI", speed: 0.4, offset: 0, icon: "🤖" },
    { label: "Cloud", speed: 0.4, offset: (2 * Math.PI) / 3, icon: "☁️" },
    { label: "Data", speed: 0.4, offset: (4 * Math.PI) / 3, icon: "📊" },
  ];

  // outer orbit: radius 155, 4 items, counter-clockwise
  const outer = [
    { label: "Web", speed: -0.25, offset: 0, icon: "🌐" },
    { label: "Apps", speed: -0.25, offset: Math.PI / 2, icon: "📱" },
    { label: "APIs", speed: -0.25, offset: Math.PI, icon: "🔗" },
    { label: "DevOps", speed: -0.25, offset: (3 * Math.PI) / 2, icon: "⚙️" },
  ];

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0">
        {/* outer ring — animated dash */}
        <motion.circle
          cx={cx} cy={cy} r={155}
          fill="none" stroke="#c8c8c8" strokeWidth="1"
          strokeDasharray="6 10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ originX: cx, originY: cy }}
        />
        {/* inner ring — animated dash opposite direction */}
        <motion.circle
          cx={cx} cy={cy} r={90}
          fill="none" stroke="#d8d8d8" strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ originX: cx, originY: cy }}
        />
        {/* subtle accent arc on outer ring */}
        <motion.circle
          cx={cx} cy={cy} r={155}
          fill="none" stroke="var(--accent)" strokeWidth="2"
          strokeDasharray="40 900"
          opacity={0.7}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: cx, originY: cy }}
        />
        {/* subtle accent arc on inner ring */}
        <motion.circle
          cx={cx} cy={cy} r={90}
          fill="none" stroke="var(--accent)" strokeWidth="2"
          strokeDasharray="25 600"
          opacity={0.5}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ originX: cx, originY: cy }}
        />
      </svg>

      {/* inner orbit items */}
      {inner.map(({ label, speed, offset }) => {
        const angle = tick * speed + offset;
        const r = 90;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        return (
          <div key={label}
            className="absolute flex items-center gap-1.5 rounded-[3px] border border-[#c8c8c8] bg-white px-2.5 py-1.5 font-mono text-[10px] shadow-md"
            style={{ left: x, top: y, transform: "translate(-50%, -50%)", whiteSpace: "nowrap" }}>
            <span className="size-1.5 rounded-full bg-[var(--accent)]" />
            {label}
          </div>
        );
      })}

      {/* outer orbit items */}
      {outer.map(({ label, speed, offset }) => {
        const angle = tick * speed + offset;
        const r = 155;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        return (
          <div key={label}
            className="absolute flex items-center gap-1.5 rounded-[3px] border border-[#c8c8c8] bg-white/90 px-2.5 py-1.5 font-mono text-[10px] shadow-sm backdrop-blur"
            style={{ left: x, top: y, transform: "translate(-50%, -50%)", whiteSpace: "nowrap" }}>
            <span className="size-1 rounded-full bg-black/40" />
            {label}
          </div>
        );
      })}

      {/* center logo */}
      <motion.div
        className="absolute grid place-items-center rounded-full overflow-hidden"
        style={{ width: 80, height: 80, left: cx, top: cy, transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
        <img src="/logo 2.png" alt="Shield Logo" style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
      </motion.div>
    </div>
  );
}


export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[#c8c8c8] px-5 py-20">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              <span className="size-1.5 rounded-full bg-[var(--accent)]" /> About
            </p>
            <h1 className="factory-heading text-[clamp(3rem,5vw,5.5rem)] leading-[0.93] text-black">
              Built for<br />Tomorrow.
            </h1>
            <p className="mt-6 text-base leading-8 text-neutral-600">
              TechBarred is an engineering-first digital studio specializing in AI applications, intelligent automation, cloud infrastructure, and high-performance web platforms. We work with startups to enterprises across 6+ countries.
            </p>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              We're engineering the future with cutting-edge AI and quantum-ready architecture. Simple, powerful, and built to last. Trusted by 100+ companies worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {[["100+", "Clients"], ["6+", "Countries"], ["99.9%", "Uptime"], ["24/7", "Support"]].map(([v, l]) => (
                <div key={l} className="rounded-[3px] border border-[#c8c8c8] bg-white/80 px-5 py-3 text-center">
                  <strong className="factory-heading block text-2xl text-black">{v}</strong>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{l}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <OrbitVisual />
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="hatch border-b border-[#c8c8c8] px-5 py-20">
        <div className="mx-auto max-w-[1480px]">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              <span className="size-1.5 rounded-full bg-[var(--accent)]" /> Our Services
            </p>
            <h2 className="factory-heading text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.98] text-black">What we build</h2>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {services.map(({ icon: Icon, label, link }, i) => (
              <motion.div key={label} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={link} className="group flex flex-col items-center gap-3 rounded-[3px] border border-[#c8c8c8] bg-white/80 p-5 text-center transition-all hover:-translate-y-1 hover:border-[var(--accent)]/60">
                  <div className="grid size-10 place-items-center rounded-[3px] border border-[#c8c8c8] bg-[#f6f6f3] text-[var(--accent)] group-hover:bg-orange-50">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-700">{label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section id="expertise" className="mx-auto max-w-[1480px] px-5 py-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
            <span className="size-1.5 rounded-full bg-[var(--accent)]" /> Technical Expertise
          </p>
          <h2 className="factory-heading text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.98] text-black">
            Multi-disciplinary<br />engineering depth.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
            Our engineering approach combines core software excellence with advanced data systems and cloud-native architecture — delivering complete solutions, not just fragments.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map(({ label, icon: Icon, skills }, i) => (
            <motion.article key={label}
              className="rounded-[3px] border border-[#c8c8c8] bg-white/70 p-6 transition-colors hover:border-[var(--accent)]/50"
              initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <div className="mb-5 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-[3px] border border-[#c8c8c8] bg-[#f6f6f3] text-[var(--accent)]">
                  <Icon size={18} />
                </div>
                <h3 className="factory-heading text-xl text-black">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded border border-[#e0e0e0] bg-[#f7f7f4] px-2 py-0.5 font-mono text-[10px] text-neutral-600">{s}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#c8c8c8] px-5 py-20">
        <div className="mx-auto max-w-[1480px] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="factory-heading text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.98] text-black">Ready to work together?</h2>
            <p className="mt-2 text-sm text-neutral-500">Tell us about your project — we'll respond within 24 hours.</p>
          </div>
          <Link href="/contact" className="factory-button factory-label inline-flex shrink-0 h-11 items-center gap-2 border border-black bg-black px-6 text-white">
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

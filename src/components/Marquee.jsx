"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  const names = ["Azure", "AWS", "React", "Next.js", "Python", "Kafka", "Power BI", "Docker", "MongoDB", "Node.js", "GPT-4o", "Electron", "FastAPI", "TypeScript"];
  return (
    <div className="border-y border-[#c8c8c8] overflow-hidden py-4">
      <motion.div
        className="flex w-max gap-12 font-mono text-[11px] font-semibold uppercase tracking-widest text-neutral-300 pr-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {[...names, ...names].map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center gap-3">
            <span className="size-1 rounded-full bg-[var(--accent)] opacity-60" />
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

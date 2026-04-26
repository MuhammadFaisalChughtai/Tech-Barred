"use client";

import React from "react";
import { skillDomains } from "../data/skills";
import { Code2, Server, Database, BarChart3, Binary, Cloud } from "lucide-react";

const Expertise = () => {
  const getIcon = (title) => {
    switch (title) {
      case "Frontend Engineering":
        return Code2;
      case "Backend Engineering":
        return Server;
      case "Databases & Storage":
        return Database;
      case "Data Engineering":
        return Binary;
      case "Data Science & Analytics":
        return BarChart3;
      case "DevOps & Cloud":
        return Cloud;
      default:
        return Code2;
    }
  };

  return (
    <section id="expertise" className="py-24 bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our multi-disciplinary engineering approach combines core software excellence with advanced data systems and cloud native architecture.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillDomains.map((domain, idx) => {
            const Icon = getIcon(domain.title);
            return (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border ${domain.border} bg-gradient-to-br ${domain.color} p-8 hover:transform hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center ${domain.accent} border ${domain.border}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{domain.title}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {domain.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-slate-300 group/item">
                      <div className={`w-1.5 h-1.5 rounded-full ${domain.dot} opacity-60 group-hover/item:opacity-100 transition-opacity`} />
                      <span className="text-sm font-medium tracking-wide">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Background Element */}
                <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-current ${domain.accent} opacity-[0.03] blur-2xl group-hover:scale-150 transition-transform duration-700`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 border-b border-slate-800">
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Build the Future with <br />
          <span className="text-blue-500">TechBarred</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Powerful, scalable, and secure infrastructure for modern applications.
          Start building your next big idea today with our enterprise-grade
          tools.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="/#products" className="btn-primary w-full sm:w-auto">
            Explore Products <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a href="/#about" className="btn-outline w-full sm:w-auto">
            Learn More
          </a>
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12 max-w-4xl mx-auto">
          {[
            { label: "Uptime", value: "99.9%" },
            { label: "Global Clients", value: "100+" },
            { label: "Support", value: "24/7" },
            { label: "Latency", value: "<50ms" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

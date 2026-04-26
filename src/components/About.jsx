import React from "react";
import { Zap, Shield, Rocket, Globe, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    { icon: Zap, title: "Ultra Speed", desc: "< 10ms latency" },
    { icon: Shield, title: "Secure", desc: "Enterprise-grade protection" },
    { icon: Rocket, title: "Scalable", desc: "Infinite capacity" },
    { icon: Globe, title: "Global", desc: "Worldwide edge network" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-900 border-t border-slate-800"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                About TechBarred
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100">
              Built for <span className="text-blue-500">Tomorrow</span>
            </h2>

            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              We're engineering the future with cutting-edge AI and
              quantum-ready architecture. Simple, powerful, and built to last.
            </p>

             <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Trusted by{" "}
              <span className="text-slate-100 font-semibold">
                100+ companies
              </span>{" "}
              across 6+ countries.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-5"
                >
                  <item.icon className="w-6 h-6 text-blue-500 mb-3" />
                  <h4 className="font-bold text-slate-100 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="card text-center bg-slate-800 p-12">
              <div className="relative z-10">
                <div className="text-6xl md:text-8xl font-black text-slate-700 mb-4 opacity-50 select-none">
                  TechBarred
                </div>
                <p className="text-xl font-bold text-slate-100 mb-8">
                  Powering Tomorrow
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "100+", label: "Clients" },
                    { value: "6+", label: "Countries" },
                    { value: "24/7", label: "Support" },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-xl font-bold text-blue-400">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

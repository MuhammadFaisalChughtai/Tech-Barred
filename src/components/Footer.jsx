"use client";

import React from "react";
import Link from "next/link";
import { Zap, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-xl font-bold text-slate-100">
                TECHBARRED
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed text-sm">
              Building reliable digital infrastructure for businesses worldwide.
              Simple, secure, and scalable.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Github, href: "https://github.com/TechBarred" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <item.Icon className="w-5 h-5 text-slate-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-100 mb-6">Products</h4>
            <ul className="space-y-4">
              {[
                { name: "SaaS Ecosystems", href: "/#products" },
                { name: "Cloud Architecture", href: "/#expertise" },
                { name: "Data Engineering", href: "/#expertise" },
                { name: "Mobile Solutions", href: "/#products" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-100 mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "Our Profile", href: "/#about" },
                { name: "Core Arsenal", href: "/#expertise" },
                { name: "Global Portfolio", href: "/#products" },
                { name: "Contact Sales", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-100">TechBarred</span>. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-all z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;

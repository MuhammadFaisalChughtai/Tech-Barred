"use client";

import React from "react";
import Link from "next/link";
import { Shield, Lock, Eye, Database } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Lock, title: "Secure", desc: "Your data is protected" },
            {
              icon: Eye,
              title: "Transparent",
              desc: "Clear about what we collect",
            },
            { icon: Database, title: "Minimal", desc: "Only essential data" },
          ].map((item, idx) => (
            <div key={idx} className="card text-center">
              <item.icon className="w-6 h-6 text-blue-500 mx-auto mb-3" />
              <h3 className="text-slate-100 font-bold mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {/* General Principles */}
          <section className="card">
            <h2 className="text-xl font-bold text-slate-100 mb-4">
              General Principles
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              TechBarred ("we", "us", or "our") understands that your privacy is
              important to you. We respect and value the privacy of everyone who
              visits this website and will only collect and use personal data in
              ways that are described here, and in a manner that is consistent
              with our obligations and your rights under the law.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Please read this Privacy Policy carefully. Your acceptance of our
              Privacy Policy is deemed to occur upon your first use of our site.
            </p>
          </section>

          {/* What Data is Collected */}
          <section className="card">
            <h2 className="text-xl font-bold text-slate-100 mb-4">
              What Data Do We Collect?
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Personal Information
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Data we collect includes your name, email address, and any other
                information you provide when engaging with us through contact
                forms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Cookies & Analytics
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Our site may use cookies to improve your experience and analyze
                site traffic. We collect anonymous technical information such as
                your browser type and device information.
              </p>
            </div>
          </section>

          {/* Data Usage */}
          <section className="card">
            <h2 className="text-xl font-bold text-slate-100 mb-4">
              How Do We Use Your Data?
            </h2>
            <ul className="space-y-2 text-slate-300 list-disc pl-5">
              <li>Providing and managing your access to our site</li>
              <li>Supplying our services to you</li>
              <li>Personalizing and tailoring our services</li>
              <li>Replying to emails and contact form submissions</li>
              <li>Analyzing site usage to improve user experience</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="card border-blue-900/30 bg-blue-900/10">
            <h2 className="text-xl font-bold text-slate-100 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-300 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <p className="font-medium text-blue-400">privacy@techbarred.com</p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/" className="btn-outline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

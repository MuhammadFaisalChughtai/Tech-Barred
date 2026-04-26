"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, AlertCircle, HelpCircle } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-slate-400">
            Please read these terms carefully before using our service.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4 text-blue-500">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-xl font-bold text-slate-100">
                1. Introduction
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Welcome to TechBarred. By accessing or using our website,
              services, and tools, you agree to be bound by these Terms and
              Conditions. If you disagree with any part of these terms, you may
              not access the service.
            </p>
          </div>

          {/* Usage */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4 text-blue-500">
              <FileText className="w-6 h-6" />
              <h2 className="text-xl font-bold text-slate-100">
                2. Use of Service
              </h2>
            </div>
            <ul className="space-y-3 text-slate-300 list-disc pl-5">
              <li>You must be at least 18 years old to use this service.</li>
              <li>
                You represent that all information you provide is accurate and
                complete.
              </li>
              <li>
                You agree not to use the service for any illegal or unauthorized
                purpose.
              </li>
              <li>
                You must not transmit any worms or viruses or any code of a
                destructive nature.
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4 text-blue-500">
              <AlertCircle className="w-6 h-6" />
              <h2 className="text-xl font-bold text-slate-100">
                3. Intellectual Property
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              The service and its original content, features, and functionality
              are and will remain the exclusive property of TechBarred and its
              licensors. The service is protected by copyright, trademark, and
              other laws.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our trademarks and trade dress may not be used in connection with
              any product or service without the prior written consent of
              TechBarred.
            </p>
          </div>

          {/* User Accounts */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4 text-blue-500">
              <HelpCircle className="w-6 h-6" />
              <h2 className="text-xl font-bold text-slate-100">
                4. User Accounts
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              When you create an account with us, you must provide us with
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms.
            </p>
            <p className="text-slate-300 leading-relaxed">
              You are responsible for safeguarding the password that you use to
              access the service and for any activities or actions under your
              password.
            </p>
          </div>

          {/* Termination */}
          <div className="card">
            <h2 className="text-xl font-bold text-slate-100 mb-4">
              5. Termination
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms. Upon termination, your
              right to use the Service will immediately cease.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="card">
            <h2 className="text-xl font-bold text-slate-100 mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. By continuing to access or use our
              Service after those revisions become effective, you agree to be
              bound by the revised terms.
            </p>
          </div>

          {/* Contact Us */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">
              If you have any questions about these Terms, please contact us.
            </p>
            <Link
              href="/#contact"
              className="text-blue-500 hover:text-blue-400 font-medium"
            >
              Contact Support &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

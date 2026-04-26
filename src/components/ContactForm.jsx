"use client";

import React, { useState } from "react";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { sendEmail } from "../app/actions";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.target);
    const result = await sendEmail(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setError(result.error || "An unexpected error occurred.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 border-t border-slate-800"
    >
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">
              Get in Touch
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Ready to transform your business? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Form */}
          <div className="card bg-slate-800 border-slate-700 p-8 relative overflow-hidden shadow-2xl shadow-blue-900/10">
            {submitted && (
              <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-20 rounded-lg animate-in fade-in duration-300">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-900/20">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-300">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-blue-400 hover:text-blue-300 text-sm font-medium underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                    <User className="w-4 h-4" /> Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder:text-slate-600 transition-all disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                    <Mail className="w-4 h-4" /> Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder:text-slate-600 transition-all disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                  <MessageSquare className="w-4 h-4" /> Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder:text-slate-600 transition-all resize-none disabled:opacity-50"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 disabled:opacity-70 disabled:cursor-not-allowed group transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

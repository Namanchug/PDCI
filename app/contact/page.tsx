"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Narcotics Detection",
  "Explosive Detection",
  "Patrol & Guard Dogs",
  "Event Security",
  "K9 Training & Certification",
  "Other",
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setError("");
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setSubmitted(false);
    setError("");
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.message ??
          "Unable to send your message right now. Please try again."
        );
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your message right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400">Contact Us</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Reach out to our team for a free consultation, service enquiry, or
            to discuss your K9 security requirements.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="bg-gold-500/10 rounded-full p-3 shrink-0 h-fit">
                      <Phone className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-navy-900 font-semibold text-sm mb-1">
                        Phone
                      </div>
                      <a
                        href="tel:+919818562642"
                        className="text-gray-600 text-sm hover:text-gold-500 transition-colors"
                      >
                        +91 98185 62642
                      </a>
                      <br />
                      <a
                        href="tel:+918287793696"
                        className="text-gray-600 text-sm hover:text-gold-500 transition-colors"
                      >
                        +91 82877 93696
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-gold-500/10 rounded-full p-3 shrink-0 h-fit">
                      <Mail className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-navy-900 font-semibold text-sm mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:policedogcentreindia@gmail.com"
                        className="text-gray-600 text-sm hover:text-gold-500 transition-colors"
                      >
                        policedogcentreindia@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-gold-500/10 rounded-full p-3 shrink-0 h-fit">
                      <MapPin className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-navy-900 font-semibold text-sm mb-1">
                        Headquarters
                      </div>
                      <p className="text-gray-600 text-sm">
                        Block A, Security Complex,
                        <br />
                        Karol Bagh, New Delhi – 110005
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center h-full flex flex-col items-center justify-center">
                  <div className="bg-green-50 rounded-full p-5 mb-5">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-navy-900 font-bold text-2xl mb-3">
                    Message Received!
                  </h3>
                  <p className="text-gray-500 mb-6 max-w-sm text-sm leading-relaxed">
                    Thank you for contacting Police Dog Centre India. Our team
                    will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      resetForm();
                    }}
                    className="text-gold-500 font-semibold text-sm hover:text-gold-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">
                    Send Us a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-navy-900 font-semibold text-xs uppercase tracking-wider mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-navy-900 font-semibold text-xs uppercase tracking-wider mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-navy-900 font-semibold text-xs uppercase tracking-wider mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-navy-900 font-semibold text-xs uppercase tracking-wider mb-2"
                      >
                        Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company / Agency name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="service"
                      className="block text-navy-900 font-semibold text-xs uppercase tracking-wider mb-2"
                    >
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-navy-900 font-semibold text-xs uppercase tracking-wider mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your security requirements, location, duration, and any specific needs..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                    />
                  </div>

                  {error ? (
                    <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-navy-900 hover:bg-navy-800 disabled:opacity-70 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

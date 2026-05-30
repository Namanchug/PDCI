"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Tracking & Trailing Dogs",
  "Explosive Detection",
  "Narcotics Detection",
  "Patrol Dogs",
  "Event Security Dogs",
  "Behaviour Assessment & Selection",
  "Proficiency Evaluation & Certification",
  "Pet Dog Training / Boarding & Behaviour Modification",
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
      {/* ── Page Header ── */}
      <section className="py-8" style={{ background: "#f9f6f1", borderBottom: "2px solid #c9a45a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link
              href="/"
              className="transition-colors hover:text-[#c9a45a]"
              style={{ color: "#64748b" }}
            >
              Home
            </Link>
            <span style={{ color: "#c9a45a" }}>/</span>
            <span style={{ color: "#c9a45a" }}>Contact Us</span>
          </div>

          {/* Eyebrow */}
          <p
            className="font-semibold uppercase mb-4"
            style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}
          >
            Get In Touch
          </p>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 max-w-2xl"
            style={{ fontFamily: "Georgia, serif", color: "#0a1628", lineHeight: 1.15 }}
          >
            Contact <span style={{ color: "#c9a45a" }}>Our Team</span>
          </h1>

          {/* Description */}
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#64748b" }}>
            Reach out to our team for a free consultation, service enquiry, or
            to discuss your K9 security requirements.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

            {/* ── Contact Details ── */}
            <div className="lg:col-span-2">
              {/* Section heading */}
              <p
                className="font-semibold uppercase mb-3"
                style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}
              >
                Reach Us
              </p>
              <div
                className="mb-7"
                style={{
                  width: "40px",
                  height: "1px",
                  background: "linear-gradient(90deg, #c9a45a, transparent)",
                }}
              />
              <h2
                className="text-2xl sm:text-3xl font-bold mb-8"
                style={{ fontFamily: "Georgia, serif", color: "#0a1628", lineHeight: 1.2 }}
              >
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div
                    className="shrink-0 h-fit flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(201,164,90,0.1)",
                      border: "1px solid rgba(201,164,90,0.25)",
                      borderRadius: "2px",
                    }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "#c9a45a" }} />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-xs uppercase mb-1"
                      style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                    >
                      Phone
                    </div>
                    <a
                      href="tel:+918287793696"
                      className="text-sm transition-colors hover:text-[#c9a45a]"
                      style={{ color: "#4b5563" }}
                    >
                      +91 8287793696
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div
                    className="shrink-0 h-fit flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(201,164,90,0.1)",
                      border: "1px solid rgba(201,164,90,0.25)",
                      borderRadius: "2px",
                    }}
                  >
                    <Mail className="w-5 h-5" style={{ color: "#c9a45a" }} />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-xs uppercase mb-1"
                      style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:policedogcentreindia@gmail.com"
                      className="text-sm transition-colors hover:text-[#c9a45a] break-all"
                      style={{ color: "#4b5563" }}
                    >
                      policedogcentreindia@gmail.com
                    </a>
                  </div>
                </div>

                {/* Training Facilities */}
                <div className="flex gap-4">
                  <div
                    className="shrink-0 h-fit flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(201,164,90,0.1)",
                      border: "1px solid rgba(201,164,90,0.25)",
                      borderRadius: "2px",
                    }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#c9a45a" }} />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-xs uppercase mb-1"
                      style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                    >
                      Training Facilities
                    </div>
                    <p className="text-sm" style={{ color: "#4b5563" }}>
                      Sainik Farma, GXMH+3FQ, Badusarai, New Delhi, Delhi,
                      110071
                    </p>
                  </div>
                </div>

                {/* Head Office */}
                <div className="flex gap-4">
                  <div
                    className="shrink-0 h-fit flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(201,164,90,0.1)",
                      border: "1px solid rgba(201,164,90,0.25)",
                      borderRadius: "2px",
                    }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#c9a45a" }} />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-xs uppercase mb-1"
                      style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                    >
                      Head Office
                    </div>
                    <p className="text-sm" style={{ color: "#4b5563" }}>
                      E-601, Jagran CGHS, Plot-17, Dwarka Sector-22, New
                      Delhi, 110077
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider + note */}
              <div
                className="mt-10 pt-8"
                style={{ borderTop: "1px solid rgba(201,164,90,0.15)" }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                  Our team typically responds within 24 hours. For urgent security
                  requirements, please call us directly.
                </p>
              </div>
            </div>

            {/* ── Contact Form ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  className="p-12 text-center h-full flex flex-col items-center justify-center"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(201,164,90,0.18)",
                    borderTop: "3px solid #c9a45a",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    className="flex items-center justify-center mb-6"
                    style={{
                      width: "72px",
                      height: "72px",
                      background: "rgba(201,164,90,0.1)",
                      border: "1px solid rgba(201,164,90,0.3)",
                      borderRadius: "2px",
                    }}
                  >
                    <CheckCircle className="w-9 h-9" style={{ color: "#c9a45a" }} />
                  </div>
                  <h3
                    className="font-bold text-2xl mb-3"
                    style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
                  >
                    Message Received!
                  </h3>
                  <p className="mb-8 max-w-sm text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    Thank you for contacting Police Dog Centre India. Our team
                    will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      resetForm();
                    }}
                    className="font-semibold text-sm transition-colors hover:opacity-70"
                    style={{ color: "#c9a45a", letterSpacing: "0.08em" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(201,164,90,0.18)",
                    borderTop: "3px solid #c9a45a",
                    borderRadius: "2px",
                    padding: "2.5rem",
                  }}
                >
                  <p
                    className="font-semibold uppercase mb-3"
                    style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}
                  >
                    Enquiry Form
                  </p>
                  <h2
                    className="text-2xl font-bold mb-8"
                    style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
                  >
                    Send Us a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-semibold text-xs uppercase tracking-wider mb-2"
                        style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                      >
                        Full Name <span style={{ color: "#dc2626" }}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-semibold text-xs uppercase tracking-wider mb-2"
                        style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                      >
                        Email Address <span style={{ color: "#dc2626" }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-semibold text-xs uppercase tracking-wider mb-2"
                        style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                      >
                        Phone Number <span style={{ color: "#dc2626" }}>*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="organization"
                        className="block font-semibold text-xs uppercase tracking-wider mb-2"
                        style={{ color: "#0a1628", letterSpacing: "0.12em" }}
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
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="service"
                      className="block font-semibold text-xs uppercase tracking-wider mb-2"
                      style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                    >
                      Service Required <span style={{ color: "#dc2626" }}>*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors bg-white"
                      style={{ borderRadius: "2px" }}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-7">
                    <label
                      htmlFor="message"
                      className="block font-semibold text-xs uppercase tracking-wider mb-2"
                      style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                    >
                      Message <span style={{ color: "#dc2626" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your security requirements, location, duration, and any specific needs..."
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>

                  {error ? (
                    <div
                      className="mb-5 px-4 py-3 text-sm"
                      style={{
                        border: "1px solid rgba(220,38,38,0.3)",
                        borderLeft: "3px solid #dc2626",
                        background: "rgba(220,38,38,0.04)",
                        color: "#dc2626",
                        borderRadius: "2px",
                      }}
                    >
                      {error}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-bold py-4 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #0a1628 0%, #112240 100%)",
                      color: "#ffffff",
                      letterSpacing: "0.08em",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      borderRadius: "2px",
                    }}
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

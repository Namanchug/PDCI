"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const offices = [
  {
    city: "New Delhi (HQ)",
    address: "Block A, Security Complex, Karol Bagh, New Delhi – 110005",
    phone: "+91 11 2345 6789",
    email: "delhi@policedogcentreindia.com",
  },
  {
    city: "Mumbai",
    address: "Unit 12, Andheri Industrial Estate, Andheri East, Mumbai – 400093",
    phone: "+91 22 6789 1234",
    email: "mumbai@policedogcentreindia.com",
  },
  {
    city: "Bengaluru",
    address: "No. 45, Whitefield Main Road, Bengaluru – 560066",
    phone: "+91 80 4567 8901",
    email: "bengaluru@policedogcentreindia.com",
  },
];

const serviceOptions = [
  "Narcotics Detection",
  "Explosive Detection",
  "Patrol & Guard Dogs",
  "Search & Rescue",
  "Event Security",
  "Corporate K9 Security",
  "K9 Training & Certification",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400">Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Reach out to our team for a free consultation, service enquiry, or
            to discuss your K9 security requirements.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-8">
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
                        href="tel:+911234567890"
                        className="text-gray-600 text-sm hover:text-gold-500 transition-colors"
                      >
                        +91 12345 67890
                      </a>
                      <br />
                      <a
                        href="tel:+911800001234"
                        className="text-gray-600 text-sm hover:text-gold-500 transition-colors"
                      >
                        1800-00-1234 (Toll Free)
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
                        href="mailto:info@policedogcentreindia.com"
                        className="text-gray-600 text-sm hover:text-gold-500 transition-colors"
                      >
                        info@policedogcentreindia.com
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

                  <div className="flex gap-4">
                    <div className="bg-gold-500/10 rounded-full p-3 shrink-0 h-fit">
                      <Clock className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-navy-900 font-semibold text-sm mb-1">
                        Working Hours
                      </div>
                      <p className="text-gray-600 text-sm">
                        Monday – Saturday: 9:00 AM – 6:00 PM
                        <br />
                        Sunday: Closed (Emergency line available)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-navy-900 rounded-xl p-6 border-l-4 border-gold-500">
                <div className="text-gold-400 font-bold text-sm mb-2">
                  Emergency Security Support
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  For urgent K9 security deployment, our emergency line operates
                  24×7.
                </p>
                <a
                  href="tel:+911234500000"
                  className="inline-block mt-3 text-gold-400 font-bold text-sm hover:text-gold-300 transition-colors"
                >
                  +91 12345 00000 (24×7)
                </a>
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
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        organization: "",
                        service: "",
                        message: "",
                      });
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

      {/* Regional Offices */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Our Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Regional Offices
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-gold-500/30 transition-all"
              >
                <h3 className="text-navy-900 font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  {office.city}
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 hover:text-gold-500 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-500" />
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 hover:text-gold-500 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold-500" />
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-navy-900 h-80 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gold-400 mx-auto mb-4" />
          <p className="text-white font-semibold text-lg">
            Police Dog Centre India — New Delhi HQ
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Block A, Security Complex, Karol Bagh, New Delhi – 110005
          </p>
          <a
            href="https://maps.google.com/?q=Karol+Bagh+New+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm font-medium underline underline-offset-2 transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>
    </>
  );
}

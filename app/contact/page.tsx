"use client";

import { useState, useRef, useEffect } from "react";
import { Shield } from "lucide-react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Award,
  Heart,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

// ─── Country Codes ────────────────────────────────────────────────────────────
const countryCodes: { code: string; name: string }[] = [
  { code: '+61', name: 'Australia' },
  { code: '+880', name: 'Bangladesh' },
  { code: '+32', name: 'Belgium' },
  { code: '+975', name: 'Bhutan' },
  { code: '+1', name: 'Canada' },
  { code: '+45', name: 'Denmark' },
  { code: '+358', name: 'Finland' },
  { code: '+33', name: 'France' },
  { code: '+995', name: 'Georgia' },
  { code: '+49', name: 'Germany' },
  { code: '+91', name: 'India' },
  { code: '+353', name: 'Ireland' },
  { code: '+39', name: 'Italy' },
  { code: '+81', name: 'Japan' },
  { code: '+965', name: 'Kuwait' },
  { code: '+60', name: 'Malaysia' },
  { code: '+95', name: 'Myanmar' },
  { code: '+977', name: 'Nepal' },
  { code: '+31', name: 'Netherlands' },
  { code: '+64', name: 'New Zealand' },
  { code: '+968', name: 'Oman' },
  { code: '+48', name: 'Poland' },
  { code: '+974', name: 'Qatar' },
  { code: '+7', name: 'Russia' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+65', name: 'Singapore' },
  { code: '+82', name: 'South Korea' },
  { code: '+34', name: 'Spain' },
  { code: '+94', name: 'Sri Lanka' },
  { code: '+46', name: 'Sweden' },
  { code: '+41', name: 'Switzerland' },
  { code: '+380', name: 'Ukraine' },
  { code: '+971', name: 'United Arab Emirates' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+1', name: 'United States' },
];

// ─── Service Taxonomy ────────────────────────────────────────────────────────

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
  subServices: string[];
  showDate?: boolean;
  dateLabel?: string;
  datePlaceholder?: string;
  showParticipants?: boolean;
  messagePlaceholder: string;
};

const serviceCategories: Category[] = [
  {
    id: "k9-security",
    label: "K9 Security Deployment",
    icon: Shield,
    description: "Detection, patrol & event security teams",
    subServices: [
      "Tracking & Trailing Dogs",
      "Explosive Detection",
      "Narcotics Detection",
      "Patrol Dogs",
      "Event Security Dogs",
    ],
    messagePlaceholder:
      "Describe your operational requirements - location, duration, threat profile, venue type, and any specific needs.",
  },
  {
    id: "assessment-cert",
    label: "Assessment & Certification",
    icon: Award,
    description: "Behaviour assessment & K9 PET certification",
    subServices: [
      "Behaviour Assessment & Selection",
      "Proficiency Evaluation & Certification (K9 PET)",
    ],
    messagePlaceholder:
      "Share details about the dogs to be assessed or certified - breed, age, current role, and number of dog teams.",
  },
  {
    id: "pet-dog",
    label: "Pet Dog Services",
    icon: Heart,
    description: "Training, boarding & behaviour modification",
    subServices: [
      "Obedience Training",
      "Behaviour Modification",
      "Boarding",
      "Training + Boarding (Combined)",
    ],
    messagePlaceholder:
      "Tell us about your dog - breed, age, specific behaviour concerns, and your training goals.",
  },
  {
    id: "education",
    label: "Education & Courses",
    icon: GraduationCap,
    description: "NFSU diploma, workshops & seminar requests",
    subServices: [
      "NFSU Professional Diploma in Canine Forensics (PDCF)",
      "Request a Workshop for Your Organisation",
      "Attend a K9 Seminar / Conference",
      "Custom Training Programme",
    ],
    showDate: true,
    dateLabel: "Preferred Start Date / Event Date",
    datePlaceholder: "DD/MM/YYYY or preferred month / batch",
    showParticipants: true,
    messagePlaceholder:
      "Describe your requirements - organisation type, learning objectives, participant background, and any specific topics of interest.",
  },
  {
    id: "general",
    label: "General Enquiry",
    icon: MessageCircle,
    description: "Any other question or requirement",
    subServices: [],
    messagePlaceholder: "Tell us how we can help you.",
  },
];

// ─── Validation ───────────────────────────────────────────────────────────────

function validateName(v: string) {
  if (!v.trim()) return "Full name is required.";
  if (v.trim().length < 2) return "Name must be at least 2 characters.";
  return "";
}

function validateEmail(v: string) {
  if (!v.trim()) return "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()))
    return "Please enter a valid email address.";
  return "";
}

function validatePhone(v: string) {
  if (!v.trim()) return "Phone number is required.";
  const digits = v.replace(/\D/g, "");
  if (digits.length < 5) return "Phone number is too short.";
  if (digits.length > 15) return "Phone number is too long.";
  if (!/^[\d\s\-().]+$/.test(v.trim()))
    return "Phone number contains invalid characters.";
  return "";
}

// ─── Form State ──────────────────────────────────────────────────────────────

const initialFormData = {
  name: "",
  email: "",
  countryCode: "+91",
  phoneNumber: "",
  organization: "",
  serviceCategory: "",
  subService: "",
  preferredDate: "",
  participants: "",
  message: "",
};

type FieldErrors = {
  name?: string;
  email?: string;
  phoneNumber?: string;
};

// ─── Shared style helpers ─────────────────────────────────────────────────────

const inputCls =
  "w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c9a45a] focus:ring-1 focus:ring-[#c9a45a] transition-colors bg-white";

const labelCls = "block font-semibold text-xs uppercase mb-2 text-[#0a1628]";

const fieldErrorCls = "mt-1.5 text-xs text-red-600";

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectWidth, setSelectWidth] = useState<number | null>(null);
  const measureSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (measureSpanRef.current) {
      setSelectWidth(measureSpanRef.current.scrollWidth + 32);
    }
  }, [formData.countryCode]);

  const selectedCategory = serviceCategories.find(
    (c) => c.id === formData.serviceCategory
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setError("");
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "name" || name === "email" || name === "phoneNumber") {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name")
      setFieldErrors((prev) => ({ ...prev, name: validateName(value) }));
    else if (name === "email")
      setFieldErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    else if (name === "phoneNumber")
      setFieldErrors((prev) => ({
        ...prev,
        phoneNumber: validatePhone(value),
      }));
  };

  const handleCategorySelect = (id: string) => {
    setError("");
    setFormData((prev) => ({
      ...prev,
      serviceCategory: prev.serviceCategory === id ? "" : id,
      subService: "",
      preferredDate: "",
      participants: "",
    }));
  };

  const resetForm = () => {
    setSubmitted(false);
    setError("");
    setFieldErrors({});
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Field-level validation
    const errors: FieldErrors = {};
    const nameErr = validateName(formData.name);
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phoneNumber);
    if (nameErr) errors.name = nameErr;
    if (emailErr) errors.email = emailErr;
    if (phoneErr) errors.phoneNumber = phoneErr;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError("Please fix the highlighted fields before submitting.");
      setLoading(false);
      return;
    }

    if (!formData.serviceCategory) {
      setError("Please select a service category above.");
      setLoading(false);
      return;
    }

    if (
      selectedCategory &&
      selectedCategory.subServices.length > 0 &&
      !formData.subService
    ) {
      setError("Please select a specific service.");
      setLoading(false);
      return;
    }

    const serviceLabel = selectedCategory
      ? selectedCategory.subServices.length > 0 && formData.subService
        ? `${selectedCategory.label} - ${formData.subService}`
        : selectedCategory.label
      : "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phoneNumber}`.trim(),
          organization: formData.organization,
          service: serviceLabel,
          preferredDate: formData.preferredDate || undefined,
          participants: formData.participants || undefined,
          message: formData.message,
        }),
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
      setFieldErrors({});
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
      <section
        className="py-8"
        style={{ background: "#f9f6f1", borderBottom: "2px solid #c9a45a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <p
            className="font-semibold uppercase mb-4"
            style={{
              color: "#c9a45a",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
            }}
          >
            Get In Touch
          </p>

          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 max-w-2xl"
            style={{
              fontFamily: "Georgia, serif",
              color: "#0a1628",
              lineHeight: 1.15,
            }}
          >
            Contact <span style={{ color: "#c9a45a" }}>Our Team</span>
          </h1>

          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: "#64748b" }}
          >
            Reach out for a free consultation, service enquiry, course
            admission, workshop request, or to discuss your K9 requirements.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

            {/* ── Contact Details ── */}
            <div className="lg:col-span-2">
              <p
                className="font-semibold uppercase mb-3"
                style={{
                  color: "#c9a45a",
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                }}
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
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#0a1628",
                  lineHeight: 1.2,
                }}
              >
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div
                    className="shrink-0 flex items-center justify-center"
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

                <div className="flex gap-4">
                  <div
                    className="shrink-0 flex items-center justify-center"
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

                <div className="flex gap-4">
                  <div
                    className="shrink-0 flex items-center justify-center"
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

                <div className="flex gap-4">
                  <div
                    className="shrink-0 flex items-center justify-center"
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

              <div
                className="mt-10 pt-8"
                style={{ borderTop: "1px solid rgba(201,164,90,0.15)" }}
              >
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#94a3b8" }}
                >
                  Our team typically responds within 24 hours. For urgent
                  security requirements, please call us directly.
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
                    <CheckCircle
                      className="w-9 h-9"
                      style={{ color: "#c9a45a" }}
                    />
                  </div>
                  <h3
                    className="font-bold text-2xl mb-3"
                    style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
                  >
                    Message Received!
                  </h3>
                  <p
                    className="mb-8 max-w-sm text-sm leading-relaxed"
                    style={{ color: "#64748b" }}
                  >
                    Thank you for contacting Police Dog Centre India. Our team
                    will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
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
                    style={{
                      color: "#c9a45a",
                      fontSize: "0.7rem",
                      letterSpacing: "0.25em",
                    }}
                  >
                    Enquiry Form
                  </p>
                  <h2
                    className="text-2xl font-bold mb-8"
                    style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
                  >
                    Send Us a Message
                  </h2>

                  {/* ── Personal Details ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className={labelCls}
                        style={{ letterSpacing: "0.12em" }}
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
                        onBlur={handleBlur}
                        placeholder="Your full name"
                        className={inputCls}
                        style={{
                          borderRadius: "2px",
                          borderColor: fieldErrors.name
                            ? "#dc2626"
                            : undefined,
                        }}
                      />
                      {fieldErrors.name && (
                        <p className={fieldErrorCls}>{fieldErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className={labelCls}
                        style={{ letterSpacing: "0.12em" }}
                      >
                        Email Address{" "}
                        <span style={{ color: "#dc2626" }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="your@email.com"
                        className={inputCls}
                        style={{
                          borderRadius: "2px",
                          borderColor: fieldErrors.email
                            ? "#dc2626"
                            : undefined,
                        }}
                      />
                      {fieldErrors.email && (
                        <p className={fieldErrorCls}>{fieldErrors.email}</p>
                      )}
                    </div>

                    {/* Phone with country code — full row */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phoneNumber"
                        className={labelCls}
                        style={{ letterSpacing: "0.12em" }}
                      >
                        Phone Number{" "}
                        <span style={{ color: "#dc2626" }}>*</span>
                      </label>
                      <div
                        className="flex focus-within:ring-1 focus-within:ring-[#c9a45a] transition-colors"
                        style={{
                          position: "relative",
                          border: fieldErrors.phoneNumber
                            ? "1px solid #dc2626"
                            : "1px solid #e5e7eb",
                          borderRadius: "2px",
                        }}
                      >
                        {/* Hidden span used to measure the selected option's text width */}
                        <span
                          ref={measureSpanRef}
                          aria-hidden="true"
                          className="text-sm"
                          style={{
                            position: "absolute",
                            visibility: "hidden",
                            whiteSpace: "nowrap",
                            pointerEvents: "none",
                            paddingLeft: "0.75rem",
                            paddingRight: "0.5rem",
                          }}
                        >
                          {(() => {
                            const sel = countryCodes.find(
                              (c) => c.code === formData.countryCode
                            );
                            return sel ? `${sel.name} (${sel.code})` : "";
                          })()}
                        </span>
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          aria-label="Country code"
                          className="shrink-0 border-0 border-r border-gray-200 bg-white pl-3 pr-2 py-3 text-sm text-gray-700 focus:outline-none focus:ring-0 cursor-pointer"
                          style={{
                            borderRadius: "2px 0 0 2px",
                            width: selectWidth ? `${selectWidth}px` : "auto",
                            minWidth: "6rem",
                            maxWidth: "18rem",
                          }}
                        >
                          {countryCodes.map((c) => (
                            <option
                              key={`${c.name}-${c.code}`}
                              value={c.code}
                            >
                              {c.name} ({c.code})
                            </option>
                          ))}
                        </select>
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="9876543210"
                          className="flex-1 min-w-0 border-0 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
                          style={{ borderRadius: "0 2px 2px 0" }}
                        />
                      </div>
                      {fieldErrors.phoneNumber && (
                        <p className={fieldErrorCls}>
                          {fieldErrors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* Organization */}
                    <div>
                      <label
                        htmlFor="organization"
                        className={labelCls}
                        style={{ letterSpacing: "0.12em" }}
                      >
                        Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company / Agency / Institution"
                        className={inputCls}
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                  </div>

                  {/* ── Service Category Cards ── */}
                  <div className="mb-5">
                    <label
                      className={labelCls}
                      style={{ letterSpacing: "0.12em" }}
                    >
                      What can we help you with?{" "}
                      <span style={{ color: "#dc2626" }}>*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {serviceCategories.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected =
                          formData.serviceCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => handleCategorySelect(cat.id)}
                            className="text-left transition-all"
                            style={{
                              padding: "10px 12px",
                              border: isSelected
                                ? "1.5px solid #c9a45a"
                                : "1px solid #e5e7eb",
                              background: isSelected
                                ? "rgba(201,164,90,0.07)"
                                : "#fafafa",
                              borderRadius: "2px",
                            }}
                          >
                            <Icon
                              className="w-4 h-4 mb-1.5"
                              style={{
                                color: isSelected ? "#c9a45a" : "#94a3b8",
                              }}
                            />
                            <div
                              className="font-semibold leading-tight mb-0.5"
                              style={{
                                fontSize: "0.72rem",
                                color: isSelected ? "#0a1628" : "#374151",
                              }}
                            >
                              {cat.label}
                            </div>
                            <div
                              className="leading-tight"
                              style={{
                                fontSize: "0.67rem",
                                color: "#94a3b8",
                              }}
                            >
                              {cat.description}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* ── Sub-service Dropdown ── */}
                  {selectedCategory &&
                    selectedCategory.subServices.length > 0 && (
                      <div className="mb-5">
                        <label
                          htmlFor="subService"
                          className={labelCls}
                          style={{ letterSpacing: "0.12em" }}
                        >
                          Specific Service{" "}
                          <span style={{ color: "#dc2626" }}>*</span>
                        </label>
                        <select
                          id="subService"
                          name="subService"
                          value={formData.subService}
                          onChange={handleChange}
                          className={inputCls}
                          style={{ borderRadius: "2px" }}
                        >
                          <option value="">Select specific service.</option>
                          {selectedCategory.subServices.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                  {/* ── Preferred Date ── */}
                  {selectedCategory?.showDate && (
                    <div className="mb-5">
                      <label
                        htmlFor="preferredDate"
                        className={labelCls}
                        style={{ letterSpacing: "0.12em" }}
                      >
                        {selectedCategory.dateLabel ?? "Preferred Date"}
                      </label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="text"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        placeholder={
                          selectedCategory.datePlaceholder ?? "DD/MM/YYYY"
                        }
                        className={inputCls}
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                  )}

                  {/* ── Number of Participants ── */}
                  {selectedCategory?.showParticipants && (
                    <div className="mb-5">
                      <label
                        htmlFor="participants"
                        className={labelCls}
                        style={{ letterSpacing: "0.12em" }}
                      >
                        Number of Participants
                      </label>
                      <input
                        id="participants"
                        name="participants"
                        type="number"
                        min="1"
                        value={formData.participants}
                        onChange={handleChange}
                        placeholder="e.g. 20"
                        className={inputCls}
                        style={{ borderRadius: "2px" }}
                      />
                    </div>
                  )}

                  {/* ── Message ── */}
                  <div className="mb-7">
                    <label
                      htmlFor="message"
                      className={labelCls}
                      style={{ letterSpacing: "0.12em" }}
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
                      placeholder={
                        selectedCategory?.messagePlaceholder ??
                        "Describe your requirements, location, and any specific needs."
                      }
                      className={inputCls}
                      style={{ borderRadius: "2px", resize: "none" }}
                    />
                  </div>

                  {/* ── Error Banner ── */}
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

                  {/* ── Submit ── */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-bold py-4 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(135deg, #0a1628 0%, #112240 100%)",
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
                        Sending.
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

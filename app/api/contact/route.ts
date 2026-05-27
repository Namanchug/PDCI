import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  organization?: string;
  service: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildTextBody(form: ContactFormPayload) {
  return [
    "New contact form submission",
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Organization: ${form.organization?.trim() || "N/A"}`,
    `Service Required: ${form.service}`,
    "Message:",
    form.message,
  ].join("\n");
}

function buildHtmlBody(form: ContactFormPayload) {
  const rows = [
    ["Name", form.name],
    ["Email", form.email],
    ["Phone", form.phone],
    ["Organization", form.organization?.trim() || "N/A"],
    ["Service Required", form.service],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; color: #0f172a;">New Contact Form Submission</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 640px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding: 8px 12px 8px 0; vertical-align: top; width: 180px; font-weight: 700; border-bottom: 1px solid #e5e7eb;">${escapeHtml(
                  label,
                )}</td>
                <td style="padding: 8px 0; vertical-align: top; border-bottom: 1px solid #e5e7eb;">${escapeHtml(
                  value,
                )}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <div style="margin-top: 20px;">
        <div style="font-weight: 700; margin-bottom: 8px;">Message</div>
        <div style="white-space: pre-wrap; background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px;">${escapeHtml(
          form.message,
        )}</div>
      </div>
    </div>
  `;
}

function getMailerConfig() {
  const host = process.env.SMTP_HOST;
  const portValue = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromAddress = process.env.CONTACT_FROM_EMAIL || user;
  const recipient =
    process.env.CONTACT_RECIPIENT_EMAIL || "policedogcentreindia@gmail.com";
  const fromName = process.env.CONTACT_FROM_NAME || "Police Dog Centre India";

  if (!host || !portValue || !user || !pass || !fromAddress) {
    throw new Error(
      "Mail is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_RECIPIENT_EMAIL in .env.local.",
    );
  }

  const port = Number(portValue);

  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a number.");
  }

  return {
    recipient,
    fromName,
    fromAddress,
    transporter: nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    }),
  };
}

function validatePayload(payload: unknown): ContactFormPayload | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const candidate = payload as Partial<ContactFormPayload>;
  const requiredFields = [
    "name",
    "email",
    "phone",
    "service",
    "message",
  ] as const;

  if (requiredFields.some((field) => !candidate[field]?.toString().trim())) {
    return null;
  }

  return {
    name: candidate.name?.toString().trim() ?? "",
    email: candidate.email?.toString().trim() ?? "",
    phone: candidate.phone?.toString().trim() ?? "",
    organization: candidate.organization?.toString().trim() ?? "",
    service: candidate.service?.toString().trim() ?? "",
    message: candidate.message?.toString().trim() ?? "",
  };
}

export async function POST(request: Request) {
  try {
    const payload = validatePayload(await request.json());

    if (!payload) {
      return NextResponse.json(
        { message: "Please complete all required fields before sending." },
        { status: 400 },
      );
    }

    const { transporter, recipient, fromAddress, fromName } = getMailerConfig();

    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: recipient,
      replyTo: payload.email,
      subject: `New contact form submission from ${payload.name}`,
      text: buildTextBody(payload),
      html: buildHtmlBody(payload),
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form email failed", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Unable to send message right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}

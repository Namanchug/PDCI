import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

// Service-role client — never exposed to the browser
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// ── Helpers ────────────────────────────────────────────────────────────────────

function getShipping(price: number): number {
  if (price >= 2500) return 0;
  if (price >= 2000) return 250;
  if (price >= 1000) return 200;
  return 100;
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ── Email ──────────────────────────────────────────────────────────────────────

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
};

async function sendConfirmationEmail({
  name,
  email,
  phone,
  items,
  total,
  address,
  paymentId,
}: {
  name: string;
  email: string;
  phone: string;
  items: OrderItem[];
  total: number;
  address: string;
  paymentId: string;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const itemsHtml = items
    .map((item) => {
      const meta = [
        item.color ? escapeHtml(item.color) : null,
        item.size ? `Size: ${escapeHtml(item.size)}` : null,
      ]
        .filter(Boolean)
        .join(" · ");

      return `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #ece6d8;">
            <span style="font-size:14px;font-weight:bold;color:#1a2a3a;">${escapeHtml(item.name)}</span><br/>
            ${meta ? `<span style="font-size:12px;color:#888;">${meta}</span><br/>` : ""}
            <span style="font-size:12px;color:#888;">Qty: ${Number(item.quantity)}</span>
          </td>
          <td style="padding:14px 0;border-bottom:1px solid #ece6d8;text-align:right;vertical-align:top;">
            <span style="font-size:14px;font-weight:bold;color:#c9a45a;">
              ₹${(item.price * item.quantity).toLocaleString("en-IN")}
            </span>
          </td>
        </tr>
      `;
    })
    .join("");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f2ede4;font-family:Georgia,'Times New Roman',serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2ede4;padding:40px 16px;">
    <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0"
      style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;
             box-shadow:0 8px 40px rgba(0,0,0,0.10);">

      <!-- Header -->
      <tr>
        <td style="background:#0f1f33;padding:44px 40px 36px;text-align:center;">
          <p style="margin:0 0 10px;font-size:11px;letter-spacing:3px;color:#c9a45a;text-transform:uppercase;">
            Police Dog Centre India
          </p>
          <h1 style="margin:0;font-size:28px;color:#f8f2e7;font-family:Georgia,serif;font-weight:normal;">
            Order Confirmed
          </h1>
          <div style="width:48px;height:2px;background:#c9a45a;margin:16px auto 0;"></div>
        </td>
      </tr>

      <!-- Greeting -->
      <tr>
        <td style="padding:36px 40px 0;">
          <p style="margin:0 0 8px;font-size:20px;color:#1a2a3a;">
            Thank you, <strong>${escapeHtml(name)}</strong>!
          </p>
          <p style="margin:0;font-size:14px;color:#666;line-height:1.7;font-family:Arial,sans-serif;">
            Your order has been received and confirmed. We'll get it ready for dispatch shortly.
            Keep this email as your order receipt.
          </p>
        </td>
      </tr>

      <!-- Order meta -->
      <tr>
        <td style="padding:24px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0"
            style="background:#f9f5ee;border-radius:12px;border:1px solid #ece6d8;">
            <tr>
              <td style="padding:16px 20px;">
                <p style="margin:0 0 4px;font-size:11px;color:#999;text-transform:uppercase;
                           letter-spacing:1px;font-family:Arial,sans-serif;">Payment ID</p>
                <p style="margin:0;font-size:13px;color:#1a2a3a;font-family:'Courier New',monospace;">
                  ${escapeHtml(paymentId)}
                </p>
              </td>
              <td style="padding:16px 20px;border-left:1px solid #ece6d8;">
                <p style="margin:0 0 4px;font-size:11px;color:#999;text-transform:uppercase;
                           letter-spacing:1px;font-family:Arial,sans-serif;">Mobile</p>
                <p style="margin:0;font-size:13px;color:#1a2a3a;font-family:Arial,sans-serif;">
                  ${escapeHtml(phone)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Items -->
      <tr>
        <td style="padding:32px 40px 0;">
          <p style="margin:0 0 4px;font-size:11px;color:#999;text-transform:uppercase;
                     letter-spacing:1px;font-family:Arial,sans-serif;">Items Ordered</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${itemsHtml}
            <tr>
              <td style="padding:18px 0 0;font-family:Arial,sans-serif;">
                <span style="font-size:14px;font-weight:bold;color:#1a2a3a;">Total Paid</span>
              </td>
              <td style="padding:18px 0 0;text-align:right;">
                <span style="font-size:20px;font-weight:bold;color:#c9a45a;">
                  ₹${total.toLocaleString("en-IN")}
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Divider -->
      <tr>
        <td style="padding:28px 40px;">
          <div style="height:1px;background:#ece6d8;"></div>
        </td>
      </tr>

      <!-- Delivery address -->
      <tr>
        <td style="padding:0 40px 36px;">
          <p style="margin:0 0 8px;font-size:11px;color:#999;text-transform:uppercase;
                     letter-spacing:1px;font-family:Arial,sans-serif;">Delivery Address</p>
          <p style="margin:0;font-size:14px;color:#444;line-height:1.8;font-family:Arial,sans-serif;">
            ${escapeHtml(address)}
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#0f1f33;padding:28px 40px;text-align:center;">
          <p style="margin:0 0 8px;font-size:12px;color:#d0d8e3;font-family:Arial,sans-serif;">
            Questions? Reach us at
            <a href="mailto:policedogcentreindia@gmail.com"
               style="color:#c9a45a;text-decoration:none;">
              policedogcentreindia@gmail.com
            </a>
          </p>
          <p style="margin:0;font-size:11px;color:#4a5f78;font-family:Arial,sans-serif;">
            © 2025 Police Dog Centre India · All rights reserved
          </p>
        </td>
      </tr>

    </table>
    </td></tr>
  </table>

</body>
</html>
  `;

  await transporter.sendMail({
    from: `"Police Dog Centre India" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Order Confirmed – ₹${total.toLocaleString("en-IN")} | PDCI Store`,
    html,
  });
}

// ── POST /api/verify-payment ───────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      items,
      form,
    } = body;

    // ── 1. Validate presence of required fields ──────────────────────────────
    if (
      typeof razorpay_order_id !== "string" ||
      typeof razorpay_payment_id !== "string" ||
      typeof razorpay_signature !== "string" ||
      !Array.isArray(items) ||
      items.length === 0 ||
      !form ||
      typeof form !== "object"
    ) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 },
      );
    }

    // Basic form field presence check
    const requiredFormFields = ["name", "email", "phone", "address", "city", "state", "pincode"];
    for (const field of requiredFormFields) {
      if (!form[field]?.toString().trim()) {
        return NextResponse.json(
          { error: `Missing delivery field: ${field}` },
          { status: 400 },
        );
      }
    }

    // ── 2. Verify Razorpay HMAC signature ────────────────────────────────────
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      console.error("RAZORPAY_KEY_SECRET not set");
      return NextResponse.json(
        { error: "Payment configuration error" },
        { status: 500 },
      );
    }

    const expectedSig = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    // Timing-safe comparison prevents timing attacks
    const sigBuffer = Buffer.from(razorpay_signature, "hex");
    const expectedBuffer = Buffer.from(expectedSig, "hex");

    const signaturesMatch =
      sigBuffer.length === expectedBuffer.length &&
      crypto.timingSafeEqual(sigBuffer, expectedBuffer);

    if (!signaturesMatch) {
      console.error("Razorpay signature mismatch — possible tampered response");
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 },
      );
    }

    // ── 3. Re-verify prices server-side (never trust client amounts) ─────────
    const ids: string[] = items.map((item: { id: unknown }) => String(item.id));
    const { data: products, error: priceError } = await supabase
      .from("products")
      .select("id, base_price")
      .in("id", ids);

    if (priceError || !products) {
      return NextResponse.json(
        { error: "Could not verify prices" },
        { status: 500 },
      );
    }

    const subtotal = items.reduce((sum: number, item: { id: unknown; quantity: unknown }) => {
      const product = products.find((p) => p.id === String(item.id));
      if (!product) return sum;
      const qty = Math.max(1, Math.min(Math.floor(Number(item.quantity) || 1), 100));
      return sum + product.base_price * qty;
    }, 0);

    const total = subtotal + getShipping(subtotal);

    // ── 4. Build address string ───────────────────────────────────────────────
    const address = [
      form.address,
      form.address2,
      form.city,
      `${form.state} - ${form.pincode}`,
      form.landmark ? `Near: ${form.landmark}` : null,
    ]
      .filter(Boolean)
      .join(", ");

    // ── 5. Insert order (server-side with service role) ───────────────────────
    const { error: orderError } = await supabase.from("orders").insert({
      customer_name: form.name,
      customer_email: form.email,
      customer_phone: form.phone,
      items,
      total,
      razorpay_order_id,
      razorpay_payment_id,
      status: "paid",
      address,
    });

    if (orderError) {
      // Payment is verified — log but don't block the response
      console.error("Order insert error:", orderError);
    }

    // ── 6. Deduct stock ───────────────────────────────────────────────────────
    for (const item of items) {
      if (!item.color && !item.size) continue;
      const variantKey = [item.color, item.size].filter(Boolean).join("-");
      const qty = Math.max(1, Math.min(Math.floor(Number(item.quantity) || 1), 100));
      const { error: stockError } = await supabase.rpc("deduct_variant_stock", {
        p_product_id: String(item.id),
        p_variant_key: variantKey,
        p_qty: qty,
      });
      if (stockError) {
        console.error(`Stock deduction failed for product ${item.id}:`, stockError);
      }
    }

    // ── 7. Send confirmation email ────────────────────────────────────────────
    try {
      await sendConfirmationEmail({
        name: String(form.name),
        email: String(form.email),
        phone: String(form.phone),
        items,
        total,
        address,
        paymentId: razorpay_payment_id,
      });
    } catch (emailErr) {
      // Email failure must not fail the payment response
      console.error("Confirmation email failed:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("verify-payment error:", err);
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 },
    );
  }
}

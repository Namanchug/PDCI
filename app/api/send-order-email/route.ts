import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, items, total, address, paymentId } =
      await req.json();

    const itemsHtml = (items as OrderItem[])
      .map(
        (item) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #ece6d8;">
            <span style="font-size:14px;font-weight:bold;color:#1a2a3a;">${item.name}</span><br/>
            <span style="font-size:12px;color:#888;">
              ${[item.color, item.size ? `Size: ${item.size}` : null].filter(Boolean).join(" · ")}
            </span><br/>
            <span style="font-size:12px;color:#888;">Qty: ${item.quantity}</span>
          </td>
          <td style="padding:14px 0;border-bottom:1px solid #ece6d8;text-align:right;vertical-align:top;">
            <span style="font-size:14px;font-weight:bold;color:#c9a45a;">
              ₹${(item.price * item.quantity).toLocaleString("en-IN")}
            </span>
          </td>
        </tr>
      `,
      )
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

      <!-- ── Header ── -->
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

      <!-- ── Greeting ── -->
      <tr>
        <td style="padding:36px 40px 0;">
          <p style="margin:0 0 8px;font-size:20px;color:#1a2a3a;">
            Thank you, <strong>${name}</strong>!
          </p>
          <p style="margin:0;font-size:14px;color:#666;line-height:1.7;font-family:Arial,sans-serif;">
            Your order has been received and confirmed. We'll get it ready for dispatch shortly.
            Keep this email as your order receipt.
          </p>
        </td>
      </tr>

      <!-- ── Order meta pill ── -->
      <tr>
        <td style="padding:24px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0"
            style="background:#f9f5ee;border-radius:12px;border:1px solid #ece6d8;">
            <tr>
              <td style="padding:16px 20px;">
                <p style="margin:0 0 4px;font-size:11px;color:#999;text-transform:uppercase;
                           letter-spacing:1px;font-family:Arial,sans-serif;">Payment ID</p>
                <p style="margin:0;font-size:13px;color:#1a2a3a;font-family:'Courier New',monospace;">
                  ${paymentId}
                </p>
              </td>
              <td style="padding:16px 20px;border-left:1px solid #ece6d8;">
                <p style="margin:0 0 4px;font-size:11px;color:#999;text-transform:uppercase;
                           letter-spacing:1px;font-family:Arial,sans-serif;">Mobile</p>
                <p style="margin:0;font-size:13px;color:#1a2a3a;font-family:Arial,sans-serif;">
                  ${phone}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ── Items ── -->
      <tr>
        <td style="padding:32px 40px 0;">
          <p style="margin:0 0 4px;font-size:11px;color:#999;text-transform:uppercase;
                     letter-spacing:1px;font-family:Arial,sans-serif;">Items Ordered</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${itemsHtml}
            <!-- Total row -->
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

      <!-- ── Divider ── -->
      <tr>
        <td style="padding:28px 40px;">
          <div style="height:1px;background:#ece6d8;"></div>
        </td>
      </tr>

      <!-- ── Delivery address ── -->
      <tr>
        <td style="padding:0 40px 36px;">
          <p style="margin:0 0 8px;font-size:11px;color:#999;text-transform:uppercase;
                     letter-spacing:1px;font-family:Arial,sans-serif;">Delivery Address</p>
          <p style="margin:0;font-size:14px;color:#444;line-height:1.8;font-family:Arial,sans-serif;">
            ${address}
          </p>
        </td>
      </tr>

      <!-- ── Footer ── -->
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Order email error:", err);
    return NextResponse.json(
      { error: "Failed to send confirmation email" },
      { status: 500 },
    );
  }
}

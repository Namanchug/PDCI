import { NextRequest, NextResponse } from "next/server";

/**
 * MAINTENANCE MODE
 * Set MAINTENANCE_MODE=true in Vercel's Environment Variables to block
 * all public traffic to the site (all domains, including production).
 * Set it back to false (or remove it) and redeploy to restore access.
 */
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true";

const maintenanceHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Site Under Maintenance</title>
    <meta name="robots" content="noindex, nofollow" />
    <style>
      body {
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0a1628;
        color: #f9f6f1;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        text-align: center;
        padding: 0 20px;
      }
      h1 { color: #c9a45a; font-size: 1.6rem; margin-bottom: 0.5rem; }
      p { font-size: 1rem; opacity: 0.85; }
    </style>
  </head>
  <body>
    <div>
      <h1>Site Under Maintenance</h1>
      <p>We'll be back shortly. Thank you for your patience.</p>
    </div>
  </body>
</html>`;

/**
 * IP-based rate limiting for sensitive API routes.
 *
 * ⚠️  This in-memory store resets on every cold start (serverless).
 *     It protects against bursts on a single instance but is not a substitute
 *     for a distributed limiter (e.g., Upstash Redis) in high-traffic production.
 *     Replace with @upstash/ratelimit when you scale.
 */

const WINDOW_MS = 60_000; // 1 minute

/** Max requests per IP per window for each route */
const LIMITS: Record<string, number> = {
  "/api/razorpay": 10,
  "/api/verify-payment": 10,
  "/api/contact": 5,
  "/api/send-order-email": 10,
  "/api/deduct-stock": 10,
};

type Entry = { count: number; resetAt: number };
const store = new Map<string, Entry>();

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export function middleware(req: NextRequest) {
  if (MAINTENANCE_MODE) {
    return new NextResponse(maintenanceHtml, {
      status: 503,
      headers: {
        "Content-Type": "text/html",
        "Retry-After": "3600",
      },
    });
  }

  const { pathname } = req.nextUrl;
  const limit = LIMITS[pathname];
  if (!limit) return NextResponse.next();

  const ip = getClientIp(req);
  const key = `${ip}:${pathname}`;
  const now = Date.now();

  let entry = store.get(key);

  if (!entry || entry.resetAt <= now) {
    entry = { count: 1, resetAt: now + WINDOW_MS };
    store.set(key, entry);
    return NextResponse.next();
  }

  if (entry.count >= limit) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((entry.resetAt - now) / 1000)),
        },
      },
    );
  }

  entry.count++;
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

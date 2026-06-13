import { NextRequest, NextResponse } from "next/server";

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
  matcher: [
    "/api/razorpay",
    "/api/verify-payment",
    "/api/contact",
    "/api/send-order-email",
    "/api/deduct-stock",
  ],
};

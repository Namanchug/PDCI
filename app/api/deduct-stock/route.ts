import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// NOTE: Stock deduction is now handled inside /api/verify-payment after
// Razorpay signature verification. This route is kept as a fallback but
// should NOT be called directly from the browser in normal operation.

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body;

    // ── Input validation ──────────────────────────────────────────────────────
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid items array" }, { status: 400 });
    }

    if (items.length > 50) {
      return NextResponse.json({ error: "Too many items" }, { status: 400 });
    }

    for (const item of items) {
      if (!item || typeof item !== "object") {
        return NextResponse.json({ error: "Invalid item structure" }, { status: 400 });
      }
      if (!item.id || typeof item.id !== "string") {
        return NextResponse.json({ error: "Invalid item id" }, { status: 400 });
      }
      const qty = Number(item.quantity);
      if (!Number.isInteger(qty) || qty < 1 || qty > 100) {
        return NextResponse.json(
          { error: `Invalid quantity for item ${item.id}: must be 1–100` },
          { status: 400 },
        );
      }
    }

    // ── Deduct stock ──────────────────────────────────────────────────────────
    for (const item of items) {
      if (!item.color && !item.size) continue;

      const variantKey = [item.color, item.size].filter(Boolean).join("-");
      const qty = Math.max(1, Math.min(Math.floor(Number(item.quantity)), 100));

      const { error } = await supabase.rpc("deduct_variant_stock", {
        p_product_id: String(item.id),
        p_variant_key: variantKey,
        p_qty: qty,
      });

      if (error) {
        console.error(`Stock deduction failed for ${item.id}:`, error);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Stock deduction error:", err);
    return NextResponse.json(
      { error: "Failed to deduct stock" },
      { status: 500 },
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    for (const item of items) {
      if (!item.color && !item.size) continue;

      const variantKey = [item.color, item.size].filter(Boolean).join("-");

      await supabase.rpc("deduct_variant_stock", {
        p_product_id: item.id,
        p_variant_key: variantKey,
        p_qty: item.quantity,
      });
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

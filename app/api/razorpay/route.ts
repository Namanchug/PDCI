import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { createClient } from "@supabase/supabase-js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

function getShipping(price: number): number {
  if (price >= 2500) return 0;
  if (price >= 2000) return 250;
  if (price >= 1000) return 200;
  return 100;
}

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    // Fetch real prices from the database
    const ids = items.map((item: any) => item.id);
    const { data: products, error } = await supabase
      .from("products")
      .select("id, base_price")
      .in("id", ids);

    if (error || !products) {
      return NextResponse.json(
        { error: "Could not verify prices" },
        { status: 500 },
      );
    }

    // Calculate total server-side
    const subtotal = items.reduce((sum: number, item: any) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return sum;
      return sum + product.base_price * item.quantity;
    }, 0);

    const total = subtotal + getShipping(subtotal);

    const order = await razorpay.orders.create({
      amount: Math.round(total * 100), // paise
      currency: "INR",
      receipt: `pdci_${Date.now()}`,
    });

    return NextResponse.json({ orderId: order.id, amount: total });
  } catch (err) {
    console.error("Razorpay error:", err);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 },
    );
  }
}

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name: string;
  description: string;
  base_price: number;
  category: string;
  images: Array<{ url: string; color: string } | string>;
  sizes: string[];
  colors: string[];
  size_chart: {
    headers?: string[];
    rows?: string[][];
    note?: string;
  };
  has_sizes: boolean;
  size_label?: string;
  has_colors: boolean;
  stock: number;
  video_url?: string;
  video_urls?: string[];
  color_stock: Record<string, number>;
  variant_stock: Record<string, number>;
  created_at: string;
};

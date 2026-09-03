import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";
import { SITE_URL } from "./layout";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/k9-security-services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/forensic-k9-education", priority: 0.9, changeFrequency: "monthly" },
  { path: "/k9-seminars-workshops", priority: 0.7, changeFrequency: "monthly" },
  { path: "/accreditations", priority: 0.7, changeFrequency: "monthly" },
  { path: "/store", priority: 0.8, changeFrequency: "daily" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let productEntries: MetadataRoute.Sitemap = [];
  try {
    const { data } = await supabase
      .from("products")
      .select("id, created_at");

    if (data) {
      productEntries = data.map((product: { id: string; created_at?: string }) => ({
        url: `${SITE_URL}/store/${product.id}`,
        lastModified: product.created_at ? new Date(product.created_at) : now,
        changeFrequency: "weekly",
        priority: 0.6,
      }));
    }
  } catch {
    // Supabase unreachable at build time — ship the sitemap without product URLs
    // rather than failing the whole build.
  }

  return [...staticEntries, ...productEntries];
}

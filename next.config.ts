import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [], // Add external domains here if needed
    unoptimized: true, // Allow unoptimized images for local files
  },
};

export default nextConfig;

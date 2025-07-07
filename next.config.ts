import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */

  // GitHub Pages configuration
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  basePath: process.env.NODE_ENV === "production" ? "/agi-endogenous-steering-resistance" : "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig

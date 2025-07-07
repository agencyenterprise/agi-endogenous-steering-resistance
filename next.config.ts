import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */

  // GitHub Pages configuration
  output: "export",
  basePath: "/agi-endogenous-steering-resistance",
  // Images must be unoptimized for GitHub Pages
  images: {
    unoptimized: true,
  },
}

export default nextConfig

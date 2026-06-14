import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` for GitHub Pages.
  output: "export",
  // Project site is served from https://<user>.github.io/my-portfolio
  basePath: "/my-portfolio",
  // GitHub Pages can't run the Next.js image optimizer.
  images: { unoptimized: true },
};

export default nextConfig;

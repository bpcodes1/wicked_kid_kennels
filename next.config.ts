import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set NEXT_PUBLIC_BASE_PATH to your repo name (e.g. "/wicked-kennels")
  // if deploying to username.github.io/repo-name.
  // Leave unset (or empty) for a custom domain or user/org GitHub Pages site.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;

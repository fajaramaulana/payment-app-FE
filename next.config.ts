import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PORT: process.env.PORT || '3000',  // Fallback to 3000 if PORT is not defined
  },
};

export default nextConfig;

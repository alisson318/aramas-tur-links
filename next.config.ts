import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.VERCEL !== "1" && {
    output: "standalone",
  }),
  reactCompiler: true,
  images: {
    qualities: [65, 75],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "server.5points-academy.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.thoughthubhq.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

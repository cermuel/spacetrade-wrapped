import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spacetrade.b-cdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sandbox.getspacetrade.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "getspacetrade.b-cdn.net",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

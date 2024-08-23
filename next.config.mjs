/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.**" || "**.**.**" || "**.**.**.**" || "**.**.**.**.**",
        port: "",
      },
      {
        protocol: "http",
        hostname: "**.**" || "**.**.**" || "**.**.**.**" || "**.**.**.**.**",
        port: "**",
      },
    ],
    // domains: ["34.143.196.56", "34.143.196.56"],
    domains: ["localhost"],
    // domains: ["*"]
  },
};

export default nextConfig;

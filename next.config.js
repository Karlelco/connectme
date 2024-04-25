/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "energetic-leopard-450.convex.cloud",
      },
      {
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig

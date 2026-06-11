import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets phones on your LAN load the dev server (HMR) via http://192.168.x.x:3000
  allowedDevOrigins: ["192.168.0.15"],
};

export default nextConfig;

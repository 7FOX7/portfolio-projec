import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'utfs.io', 
        port: "", 
        pathname: "/**"
      }
    ]
  }, 
  basePath: "/?about-me=education&projects=big-projects"
};

export default nextConfig;

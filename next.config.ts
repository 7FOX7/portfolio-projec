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
  
  async redirects() {
    return [
      {
        source: '/',
        missing: [
          {
            type: 'query', 
            key: 'about-me'
          }, 
          {
            type: 'query', 
            key: 'projects'
          }
        ], 
        destination: '/?about-me=education&projects=big-projects', 
        permanent: true
      }
    ]
  }, 
};

export default nextConfig;

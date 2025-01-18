import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // First domain
        pathname: '/**',  // Accepts all paths under the given domain
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Second domain
        pathname: '/**',  // Accepts all paths under the given domain
      },
    ],
  },
};

export default nextConfig;

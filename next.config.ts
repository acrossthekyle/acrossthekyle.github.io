import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.imagekit.io',
        port: '',
        pathname: '/acrossthekyle/**',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);

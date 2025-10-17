import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.0.0.100'],
  images: {
    loader: 'custom',
    loaderFile: './next.config.image-loader.js',
    qualities: [10, 80, 100],
    remotePatterns: [new URL('https://imagekit.io/acrossthekyle/**')],
  },
  async redirects() {
    return [
      {
        source: '/travels',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/experiences',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/travels/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/experiences/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

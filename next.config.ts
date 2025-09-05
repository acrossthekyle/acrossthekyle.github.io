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
        destination: '/experiences',
        permanent: true,
      },
      {
        source: '/travels/:slug',
        destination: '/experiences/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

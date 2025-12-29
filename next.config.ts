import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.0.0.100', '192.168.1.13'],
  images: {
    loader: 'custom',
    loaderFile: './next.config.image-loader.js',
    qualities: [10, 80, 100],
    remotePatterns: [new URL('https://imagekit.io/acrossthekyle/**')],
  },
};

export default nextConfig;

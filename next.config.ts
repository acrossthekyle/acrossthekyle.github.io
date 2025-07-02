import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './next.config.image-loader.js',
    remotePatterns: [new URL('https://imagekit.io/acrossthekyle/**')],
  },
};

export default nextConfig;

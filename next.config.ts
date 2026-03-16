import fs from 'fs';
import path from 'path';
import type { NextConfig } from 'next';

let lastUpdated = '';

try {
  lastUpdated = fs.readFileSync(
    path.resolve(process.cwd(), '.last-updated'),
    'utf-8',
  );
  // eslint-disable-next-line unused-imports/no-unused-vars
} catch (error: unknown) {
  // ignore
}

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.0.0.100'],
  env: {
    NEXT_PUBLIC_LAST_UPDATED: lastUpdated,
  },
  images: {
    loader: 'custom',
    loaderFile: './next.config.image-loader.js',
    qualities: [10, 80, 100],
    remotePatterns: [new URL('https://imagekit.io/acrossthekyle/**')],
  },
};

export default nextConfig;

const withMDX = require('@next/mdx')();

module.exports = withMDX({
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
});

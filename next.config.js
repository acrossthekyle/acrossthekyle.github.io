const withMDX = require('@next/mdx')({
  options: {
    recmaPlugins: [require('recma-mdx-displayname')],
  },
});

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
        source: '/about',
        destination: '/posts/about',
      },
    ]
  },
});

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
        source: '/',
        destination: '/home',
      },
      {
        source: '/store',
        destination: '/store/page',
      },
      {
        source: '/store/:item',
        destination: '/store/item/page',
      },
      {
        source: '/store/checkout/cart',
        destination: '/store/checkout/cart/page',
      },
      {
        source: '/store/checkout/confirm',
        destination: '/store/checkout/confirm/page',
      },
      {
        source: '/store/checkout/success',
        destination: '/store/checkout/success/page',
      },
      {
        source: '/store/policies',
        destination: '/store/policies/page',
      },
    ];
  },
});

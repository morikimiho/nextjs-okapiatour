/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/api/tours',
        destination: 'http://localhost:8000/tours',
      },
      {
        source: '/api/tours/:slug',
        destination: 'http://localhost:8000/tours/:slug',
      },
      {
        source: '/api/inCarts',
        destination: 'http://localhost:8000/inCart',
      },
      {
        source: '/api/inCarts/:slug',
        destination: 'http://localhost:8000/inCart/:slug',
      },
    ];
  },
}

module.exports = nextConfig

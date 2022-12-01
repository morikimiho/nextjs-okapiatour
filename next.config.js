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

        destination: 'http://localhost:8000/inCarts',
      },
      {
        source: '/api/inCarts/:slug',
        destination: 'http://localhost:8000/inCarts/:slug',

      },
    ];
  },
}

module.exports = nextConfig

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
        source: '/api/carts',
        destination: 'http://localhost:8000/carts',
      },
      {
        source: '/api/carts/:slug',
        destination: 'http://localhost:8000/carts/:slug',
      },
    ];
  },
}

module.exports = nextConfig

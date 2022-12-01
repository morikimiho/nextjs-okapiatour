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
        source: '/api/inCart',
        destination: 'http://localhost:8000/inCart',
      },
      {
        source: '/api/inCart/:slug',
        destination: 'http://localhost:8000/inCart/:slug',
      },
    ];
  },
}

module.exports = nextConfig

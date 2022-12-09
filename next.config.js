/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {source: '/api/tours',
       destination: 'http://localhost:8000/tours',
      },
      {source: '/api/tours/:slug',
        destination: 'http://localhost:8000/tours/:slug',
      },
      {source: '/api/inCarts',
        destination: 'http://localhost:8000/inCarts',
      },
      {source: '/api/inCarts/:slug',
        destination: 'http://localhost:8000/inCarts/:slug',
      },
      {source: '/api/orders',
      destination: 'http://localhost:8000/orders',
      },
      {source: '/api/orders/:slug',
       destination: 'http://localhost:8000/orders/:slug',
      },
       {source: '/api/users',
        destination: 'http://localhost:8000/users',
      },
      {source: '/api/users/:slug',
       destination: 'http://localhost:8000/users/:slug',
      },
      {source: '/api/comment/:slug',
      destination: 'http://localhost:8000/comment/:slug',
     },
     {source: '/api/comment',
     destination: 'http://localhost:8000/comment',
   },
    ];
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false, // 🔒 QUITA x-powered-by

  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: 'http://10.10.0.49:3001/contact',
      },
    ]
  },
}

module.exports = nextConfig
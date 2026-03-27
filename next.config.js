/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: 'http://10.10.0.49:3001/contact',
      },
    ]
  },
  // Si no existe, puedes agregar otras configuraciones aquí
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  serverExternalPackages: ['nodemailer'],
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

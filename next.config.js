/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mamunuiux.com', 'localhost']
  },
}

module.exports = nextConfig;

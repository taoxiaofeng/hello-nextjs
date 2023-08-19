/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'pokeapi.co'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'raw.githubusercontent.com',
      pathname: '/api/**',
      port: '',
    }],
  },
}

module.exports = nextConfig

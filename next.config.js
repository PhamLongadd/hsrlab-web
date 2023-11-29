/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://103.162.20.144:1337/api/:path*' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig

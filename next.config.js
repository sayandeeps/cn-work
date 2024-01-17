/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://api.sandbox.co.in/:path*',
          },
        ]
      },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.format.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig

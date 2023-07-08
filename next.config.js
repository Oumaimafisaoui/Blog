/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'code.org',
          },
        ],
      },
}

module.exports = nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i5wancfdm9.ufs.sh',
      },
    ],
  },
}

export default nextConfig

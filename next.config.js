/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: `www.${process.env.CHECKPERSON_PUBLIC_SITE}.com` }],
        destination: `https://${process.env.NEXT_PUBLIC_URL}.com/:path*`,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

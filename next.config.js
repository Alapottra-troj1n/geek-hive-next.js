/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co','monstar-lab.com','img.freepik.com'],
  }
}

module.exports = nextConfig

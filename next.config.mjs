/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/viratsbuildtech',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

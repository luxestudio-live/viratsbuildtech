/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/viratsbuildtech',
  assetPrefix: '/viratsbuildtech',
  env: {
    BASE_PATH: '/viratsbuildtech',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

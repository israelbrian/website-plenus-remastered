/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['embla-carousel-react', 'embla-carousel-autoplay', 'embla-carousel-wheel-gestures', 'lucide-react'],
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

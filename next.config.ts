import bundleAnalyzer from '@next/bundle-analyzer'
import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2678400, // 31 days
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
    deviceSizes: [430, 768, 1080, 1280, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // React configuration
  reactStrictMode: true, // Enable for better development experience
  swcMinify: true, // Use SWC minifier for better performance

  // Build configuration
  output: 'standalone',
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Compiler optimizations
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
          exclude: ['error', 'warn'], // Keep error and warn logs
        }
        : false,
  },

  // Experimental features
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FID', 'FCP', 'TTFB'],
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Performance optimizations
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

const withNextIntl = createNextIntlPlugin()

// Usage: ANALYZE=true npm run build
export default withNextIntl(withBundleAnalyzer(nextConfig))

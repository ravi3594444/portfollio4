/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Serve /public/index.html transparently at "/" — no visible redirect
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/index.html',
        },
      ],
    }
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/(:path*\\.(?:jpg|jpeg|png|svg|gif|webp|avif|woff2|woff))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig

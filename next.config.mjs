/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/editor',
        destination: 'https://rapid.new/editor',
        permanent: true,
      },
      {
        source: '/editor/:id',
        destination: 'https://rapid.new/editor/:id',
        permanent: true,
      },
      {
        source: '/share',
        destination: 'https://rapid.new/share',
        permanent: true,
      },
      {
        source: '/share/:id',
        destination: 'https://rapid.new/share/:id',
        permanent: true,
      },
      {
        source: '/planner',
        destination: 'https://rapid.new/planner',
        permanent: true,
      },
      {
        source: '/planner/:id',
        destination: 'https://rapid.new/planner/:id',
        permanent: true,
      },
      {
        source: '/projects',
        destination: 'https://rapid.new/projects',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: 'https://rapid.new/pricing',
        permanent: true,
      },
      {
        source: '/about',
        destination: 'https://rapid.new/about',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: 'https://rapid.new/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: 'https://rapid.new/terms',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://rapid.new/contact',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // Allow any path on picsum.photos
      },
    ],
  },
  // experimental: {
  //   serverActions: true, // Enable Server Actions - Already default in newer Next.js, but good to be explicit if needed
  // },
};

export default nextConfig;

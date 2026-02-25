/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {
    resolveAlias: {
      // Ensure paths are resolved correctly
    },
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingIncludes: {
    '/demos/[slug]': [
      './public/demos/**/*',
    ],
  },
};

export default nextConfig;

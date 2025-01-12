/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  trailingSlash: true, // Ensures proper routing for static hosting
  images: {
    unoptimized: true, // Required for static export if you're using the Next.js Image component
  },
};

module.exports = nextConfig;

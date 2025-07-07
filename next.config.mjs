/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean development configuration
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

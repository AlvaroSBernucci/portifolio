/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portifolio",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

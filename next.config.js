/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["strapi.la-chapelle-aux-filtzmeens.fr"],
  },
  experimental: {
    images: {
      layoutRaw: true,
    }
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

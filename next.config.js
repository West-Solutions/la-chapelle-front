/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: [
    {
      key: "cache-control",
      value: "public, max-age=31536000, must-revalidate"
    }
  ]
};

module.exports = nextConfig;

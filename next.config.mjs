/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ebpack: (config) => {
    return config;
  },
};

export default nextConfig;

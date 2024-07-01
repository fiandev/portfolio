const { hostname } = require("os");

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "**.kompasiana.com"
      }, {
        hostname: "images.unsplash.com"
      }, {
        hostname: "i.pinimg.com"
      }, {
        hostname: "harapandigital.com"
      }],
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

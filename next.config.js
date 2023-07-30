module.exports = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    env: {
      APP_ENV: process.env.APP_ENV,
      MONGODB_CONNECTION: process.env.MONGODB_CONNECTION,
      ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
      API_KEY: process.env.API_KEY,
    }
};
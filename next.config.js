module.exports = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    env: {
      APP_ENV: production,
      MONGODB_CONNECTION: ${{ secrets.MONGODB_CONNECTION }},
      ENCRYPTION_KEY: ${{ secrets.ENCRYPTION_KEY }},
      API_KEY: ${{ secrets.API_KEY }},
    }
};
module.exports = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    env: {
      APP_ENV: local,
      ENCRYPTION_KEY: "fiandev_key",
      MONGODB_CONNECTION: "mongodb+srv://fiandev:rEAjduhM3uYk9x0P@fiandev.8rpux3s.mongodb.net/?retryWrites=true&w=majority",
      API_KEY: "fiandev@secret_12345",
    }
};
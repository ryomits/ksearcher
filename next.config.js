/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  output: 'standalone',
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@atoms': path.resolve(__dirname, 'src/components/atoms'),
        '@molecules': path.resolve(__dirname, 'src/components/molecules'),
        '@organisms': path.resolve(__dirname, 'src/components/organisms'),
        '@layouts': path.resolve(__dirname, 'src/components/layouts'),
      },
    }
    return config
  },
  publicRuntimeConfig: {},
  devIndicators: {
    buildActivity: false,
  },
}

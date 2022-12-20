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
      },
    }
    return config
  },
  publicRuntimeConfig: {},
  devIndicators: {
    buildActivity: false,
  },
}

import consola from 'consola'
import BundleBuddyWebpackPlugin from 'bundle-buddy-webpack-plugin'

const logger = consola.withTag('nuxt-bundle-buddy')

export default function nuxtBundleBuddy() {
  const { build: { analyze }, dev, bundleBuddy } = this.options

  const options = Object.assign({}, { removeDefaultAnalyzer: true }, bundleBuddy)

  if (!dev && analyze) {
    logger.info('Loading module')
    this.extendBuild(webpackFn(options))
  }
}

const webpackFn = options => (config, { isServer, isModern }) => {
  // Only evaluate client bundle
  if (isServer || isModern) {
    return
  }

  // Remove normal analyze plugin if option is set
  if (options.removeDefaultAnalyzer) {
    const pluginIndex = config.plugins.findIndex(p => p.constructor.toString().includes('BundleAnalyzer'))
    config.plugins.splice(pluginIndex, 1)
  }

  // Add bundle-buddy-plugin and **force sourcemaps**

  config.devtool = 'source-map'
  config.plugins.push(new BundleBuddyWebpackPlugin({ sam: true }))
}

module.exports.meta = require('../package.json')

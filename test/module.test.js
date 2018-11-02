const consola = require('consola')
const { Nuxt, Builder } = require('nuxt-edge')

jest.setTimeout(60 * 1000)

let nuxt

describe('nuxt-bundle-buddy', () => {
  let consolaLog

  beforeEach(() => {
    jest.spyOn(process, 'exit').mockImplementationOnce(() => {})
    jest.spyOn(global.console, 'log')
    consolaLog = jest.fn()
    consola.restoreAll()
    consola.setReporters({
      log: consolaLog
    })
    consola.wrapAll()
  })

  test('load bundle-buddy webpack plugin', async () => {
    try {
      nuxt = await setupNuxt(require('./fixture/configs/default'))
    } catch (e) {}

    const consolaMessages = consolaLog.mock.calls.map(c => c[0].args[0])
    expect(consolaMessages.find(s => s.includes('No bundle duplication detected'))).toBeTruthy()
  })

  afterEach(async () => {
    if (nuxt) {
      await nuxt.close()
    }
  })
})
const setupNuxt = async (config) => {
  const nuxt = new Nuxt(config)
  await new Builder(nuxt).build()

  return nuxt
}

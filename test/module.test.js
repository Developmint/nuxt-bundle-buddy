const consola = require('consola')
const { Nuxt, Builder } = require('nuxt-edge')

jest.setTimeout(60 * 1000)

let nuxt

describe('nuxt-bundle-buddy', () => {
  beforeAll(() => {
    consola.wrapAll()
  })

  beforeEach(() => {
    jest.spyOn(process, 'exit').mockImplementationOnce(() => {})
    consola.mockTypes(() => jest.fn())
  })

  test('load bundle-buddy webpack plugin', async () => {
    try {
      nuxt = await setupNuxt(require('./fixture/configs/default'))
    } catch (e) {}

    const consolaMessages = consola.log.mock.calls.map(c => c[0])
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

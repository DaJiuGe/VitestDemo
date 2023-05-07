import { asyncResolveFunc, asyncRejectFunc } from './03.expect'


describe('modifiers', () => {
  test('.not', () => {
    expect(true).not.toBeFalsy()
  })

  describe('.resolves', () => {

    test('.resolves return', () => {
      return expect(asyncResolveFunc()).resolves.toBe('done')
    })

    test('.resolves await', async () => {
      await expect(asyncResolveFunc()).resolves.toBe('done')
    })
  })
  describe('.rejects', () => {
    test('.rejects return', () => {
      return expect(asyncRejectFunc()).rejects.toBe('error')
    })

    test('.rejects await', async () => {
      await expect(asyncRejectFunc()).rejects.toBe('error')
    })
  })
})

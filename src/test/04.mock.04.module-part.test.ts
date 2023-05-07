import fakeModule, { sum } from './04.mock.04.module'

vi.mock('./04.mock.04.module', async (importOriginal) => {
  const originalModule = await importOriginal()

  return {
    ...originalModule as any,
    sum: vi.fn((a: number, b: number) => 100)
  }
})

describe('mock module-part', () => {
  test('test sum', () => {
    sum(1, 1)

    expect(sum).toHaveBeenCalled()
    expect(sum).toHaveReturnedWith(100)
  })

  test('test minus', () => {
    vitest.spyOn(fakeModule, 'minus')

    fakeModule.minus(1, 0)

    expect(fakeModule.minus).toHaveBeenCalled()
    expect(fakeModule.minus).toHaveReturnedWith(1)
  })
})
import { sum } from './04.mock.04.module'

vi.mock('./04.mock.04.module', () => ({
  sum: vi.fn((a: number, b: number) => 100)
}))

describe('mock module-total', () => {
  test('test sum', () => {
    sum(1, 1)

    expect(sum).toHaveBeenCalled()
    expect(sum).toHaveReturnedWith(100)
  })
})
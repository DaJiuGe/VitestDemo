import { sum } from './04.mock.04.module'

beforeEach(() => {
  vitest.clearAllMocks()
})

const mockFunc = vi.fn(sum)

test('mock', () => {
  mockFunc(1, 1)
  expect(mockFunc).toHaveBeenCalledTimes(1)
})

test('mock again', () => {
  mockFunc(1, 2)
  expect(mockFunc).toHaveBeenCalledTimes(1)
})
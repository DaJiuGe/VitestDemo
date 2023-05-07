import { sum } from './02.sum-coverage'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('should throw error if adds negative number', () => {
  expect(() => sum(-1, 2)).toThrow()
})
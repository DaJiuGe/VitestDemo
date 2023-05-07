import { after1000ms } from './04.mock.timer';

test('after1000ms', () => {
  const callback = vi.fn()

  vitest.useFakeTimers()
  after1000ms(callback)
  vitest.runAllTimers()

  expect(callback).toBeCalled()
})

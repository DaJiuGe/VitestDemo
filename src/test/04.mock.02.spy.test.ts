import { get0or1ByRandom } from "./04.mock.02.spy";

test('mock spy', () => {
  const mockFunc = vitest.spyOn(Math, 'random')

  mockFunc.mockReturnValue(0.1)
  expect(get0or1ByRandom()).toBe(0)

  mockFunc.mockReturnValue(0.9)
  expect(get0or1ByRandom()).toBe(1)
})
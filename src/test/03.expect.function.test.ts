test('toHaveReturn&toHaveBeenCalled', () => {
  const mockFunc = vi.fn()

  mockFunc()
  mockFunc()

  expect(mockFunc).toHaveReturned()
  expect(mockFunc).toHaveBeenCalled()

  expect(mockFunc).toHaveReturnedTimes(2)
  expect(mockFunc).toHaveBeenCalledTimes(2)
})

test('toHaveReturnWith&toHaveBeenCalledWith', () => {
  const mockFunc = vi.fn(str => `vitest_${str}`)

  mockFunc('foo')

  expect(mockFunc).toHaveReturnedWith('vitest_foo')
  expect(mockFunc).toHaveBeenCalledWith('foo')
})

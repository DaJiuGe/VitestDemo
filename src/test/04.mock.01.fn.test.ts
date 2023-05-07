test('mock fn', () => {
  const mockFunc = vi.fn((a, b) => a + b)

  mockFunc.mockReturnValueOnce(10).mockReturnValueOnce(20)

  expect(mockFunc(1, 2)).toBe(10)
  expect(mockFunc(3, 4)).toBe(20)
})
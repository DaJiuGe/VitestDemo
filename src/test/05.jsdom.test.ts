import Token from './utils/token'

describe('token', () => {
  test('should get token', () => {
    Token.set('token')
    expect(Token.get()).toBe('token')
  })

  test('should clear token', () => {
    Token.clear()
    expect(Token.get()).toBeNull()
  })
})
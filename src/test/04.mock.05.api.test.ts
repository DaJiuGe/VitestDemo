import { formatUserAge } from './04.mock.05.api'

vi.mock('./utils/request', () => ({
  getUserInfo: vi.fn((name: string) => ({ name, age: 2023 }))
}))

test('should format user info', () => {
  expect(formatUserAge('peter')).resolves.toBe('peter 2023')
})
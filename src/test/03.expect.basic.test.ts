import { sum } from './02.sum-coverage'
import { profile } from './03.expect'

describe('toBe', () => {
  test('should have name peter', () => {
    expect(profile.name).toBe('peter');
  });

  test('should have age 12', () => {
    expect(profile.age).toBe(12);
  });
});

test('toBe variant', () => {
  expect(undefined).toBeUndefined()
  expect(1).toBeDefined()
  expect(null).toBeNull()
  expect(NaN).toBeNaN()
  expect(true).toBeTruthy()
  expect(false).toBeFalsy()
})

test('toBe number', () => {
  // bad case for float number
  // expect(0.1 + 0.2).toBe(0.3)
  expect(0.1 + 0.2).toBeCloseTo(0.3)

  expect(0.1 + 0.2).toBeGreaterThan(0.2)
  expect(0.1 + 0.2).toBeLessThan(0.4)
  expect(1 + Math.random() > 0.5 ? 1 : 0).toBeGreaterThanOrEqual(1)
  expect(1 - Math.random() > 0.5 ? 1 : 0).toBeLessThanOrEqual(1)
})

describe('toEqual', () => {
  test('should be the right profile', () => {
    expect(profile).toEqual({
      name: 'peter',
      age: 12,
      hobbies: ['coding', 'reading']
    });
  });
})

describe('toHaveLength', () => {
  test('should have the right hobbies length', () => {
    expect(profile.hobbies).toHaveLength(2)
  })
})

describe('toContain', () => {
  test('should contain coding in hobbies', () => {
    expect(profile.hobbies).toContain('coding')
  })
})

describe('toMatch', () => {
  test('should match the right name', () => {
    expect(profile.name).toMatch(/peter/)
  })
})

describe('toThrow', () => {
  test('should throw error if adds negative number', () => {
    expect(() => sum(-1, 2)).toThrow()
  })

  test('should throw specific error if adds negative number', () => {
    expect(() => sum(-1, 2)).toThrow('params must be positive')
  })
})

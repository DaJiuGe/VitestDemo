export function sum(a: number, b: number) {
  if (a < 0) {
    throw new Error('params must be positive')
  }
  return a + b;
}
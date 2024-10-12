const { sum } = require('../src/math');

describe('set of arithmetic operations', () => {
  
  test('sum of numbers', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
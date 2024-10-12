const { isUpperCase } = require('../src/utils');

describe('validation if a string is upper case', () => {
  
    test('testing the string HELLO should be return true', () => {
        expect(isUpperCase('HELLO')).toBe(true);
    });

    // test == it
    it('testing the string HELLO should be return true', () => {
        expect(isUpperCase('HELLO')).toBe(true);
    });
});
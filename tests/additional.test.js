/* global test, expect */
test('Base tests with types converted', () => {
    Array.prototype.includes = undefined;
    require('../array-includes');

    const testArray = [1, 2, 3, 4, 5];

    expect(testArray.includes('1')).toEqual(false);
    expect(testArray.includes('0')).toEqual(false);
    expect(testArray.includes(null)).toEqual(false);
    expect(testArray.includes(NaN)).toEqual(false);
    expect(testArray.includes(Symbol('1'))).toEqual(false);
});

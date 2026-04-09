/* global beforeEach, test, expect */
beforeEach(() => {
    jest.resetModules();
    Array.prototype.includes = undefined;
    require('../array-includes');
});

test('strict type comparison: string does not match number', () => {
    const testArray = [1, 2, 3, 4, 5];

    expect(testArray.includes('1')).toEqual(false);
    expect(testArray.includes('0')).toEqual(false);
});

test('strict type comparison: null and Symbol', () => {
    const testArray = [1, 2, 3, 4, 5];

    expect(testArray.includes(null)).toEqual(false);
    expect(testArray.includes(Symbol('1'))).toEqual(false);
});

test('NaN: not found when not in array', () => {
    expect([1, 2, 3].includes(NaN)).toEqual(false);
});

test('NaN: found when present in array (key difference vs indexOf)', () => {
    expect([1, NaN, 3].includes(NaN)).toEqual(true);
    expect([NaN].includes(NaN)).toEqual(true);
});

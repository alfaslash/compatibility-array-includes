/* global beforeEach, test, expect */
beforeEach(() => {
    jest.resetModules();
    Array.prototype.includes = undefined;
    require('../array-includes');
});

test('finds elements present in the array', () => {
    const testArray = [1, 2, 3, 4, 5];

    expect(testArray.includes(1)).toEqual(true);
    expect(testArray.includes(2)).toEqual(true);
    expect(testArray.includes(3)).toEqual(true);
    expect(testArray.includes(4)).toEqual(true);
    expect(testArray.includes(5)).toEqual(true);
});

test('returns false for elements not in the array', () => {
    const testArray = [1, 2, 3, 4, 5];

    expect(testArray.includes(0)).toEqual(false);
    expect(testArray.includes(-1)).toEqual(false);
    expect(testArray.includes(6)).toEqual(false);
    expect(testArray.includes(-12)).toEqual(false);
    expect(testArray.includes(24)).toEqual(false);
});

test('returns false for empty array', () => {
    expect([].includes(1)).toEqual(false);
    expect([].includes(undefined)).toEqual(false);
});

test('fromIndex: positive offset skips earlier occurrences', () => {
    expect([1, 2, 3].includes(1, 1)).toEqual(false);
    expect([1, 2, 3].includes(2, 1)).toEqual(true);
    expect([1, 2, 1].includes(1, 1)).toEqual(true);
});

test('fromIndex: negative offset counts from end', () => {
    expect([1, 2, 3].includes(3, -1)).toEqual(true);
    expect([1, 2, 3].includes(1, -3)).toEqual(true);
    expect([1, 2, 3].includes(1, -1)).toEqual(false);
    expect([1, 2, 3].includes(1, -100)).toEqual(true);
});

test('fromIndex: Infinity means search never starts', () => {
    expect([1, 2, 3].includes(1, Infinity)).toEqual(false);
    expect([1, 2, 3].includes(1, -Infinity)).toEqual(true);
});

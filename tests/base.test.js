/* global test, expect */
test('Base tests without types converted', () => {
    Array.prototype.includes = undefined;
    require('../array-includes');

    const testArray = [1, 2, 3, 4, 5];

    expect(testArray.includes(1)).toEqual(true);
    expect(testArray.includes(2)).toEqual(true);
    expect(testArray.includes(3)).toEqual(true);
    expect(testArray.includes(4)).toEqual(true);
    expect(testArray.includes(5)).toEqual(true);

    expect(testArray.includes(0)).toEqual(false);
    expect(testArray.includes(-1)).toEqual(false);
    expect(testArray.includes(6)).toEqual(false);
    expect(testArray.includes(-12)).toEqual(false);
    expect(testArray.includes(24)).toEqual(false);
});

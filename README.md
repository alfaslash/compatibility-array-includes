# Polyfill for Array.includes()
[![Build Status](https://travis-ci.org/alfaslash/array-includes.svg?branch=master)](https://travis-ci.org/alfaslash/array-includes)

Polyfill for arrays method `inclides()` ([ECMAScript 2016 (ECMA-262)](http://www.ecma-international.org/ecma-262/7.0/#sec-array.prototype.includes)).

See more examples and description on the [page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

### Usage

```
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, NaN].includes(NaN); // true
```

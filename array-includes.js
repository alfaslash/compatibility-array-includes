if (typeof Array.prototype.includes !== 'function') {
    Array.prototype.includes = function (searchElement, fromIndex) {
        'use strict';
        var O = Object(this);
        var len = Math.floor(Math.abs(Number(O.length))) || 0;
        if (len === 0) {
            return false;
        }
        var n = Number(fromIndex);
        if (isNaN(n)) {
            n = 0;
        } else if (n !== 0 && isFinite(n)) {
            n = (n > 0 ? 1 : -1) * Math.floor(Math.abs(n));
        }
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }
        while (k < len) {
            var currentElement = O[k];
            if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)
            ) {
                return true;
            }
            k++;
        }
        return false;
    };
}

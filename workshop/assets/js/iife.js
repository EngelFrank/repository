/**
 * Immediate invoked function Expression
 *
 * @package Webapplication
 * @module fdsafdfa
 * @author Michael <michael@zenbox.de>
 * @version v1.0.0
 * @since vfdsfsf
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2019 Michael Reichart, Cologne
 */


!(function () {
    'use strict';

    // - - - - - - - - - - - - 
    // DECLARATION 

    // FUNCTIONS
    function _add4     (a, b, c) {
        // ES5: using default operator for default values
        var _a = a || 0;
        var _b = b || 0;
        var _c = c || 0;

        if (typeof (_a) !== 'number') return NaN
        if (typeof (_b) !== 'number') return NaN
        if (typeof (_c) !== 'number') return NaN

        return _a + _b + _c;

    }

    function _main() {

        window.Autark = {} || window.Autark; // || ... defaultwert
        window.Autark.add = _add4;
    }

    // CONTROL
    _main();
    // - - - - - - - - - - - - 

}());

console.log(window.Autark.add(2, 4))
/** Variablen und Scopes erforschen
  *
  *  @desc Schreibe ein Skript "scopes_and_types.js" und binde es in ein einfaches HTML-Gerüst ein.
- baue eine IIFE, um einen Scope für deine Variablen und Funktionen zu schaffen.
- Erfinde je eine Variable für die Wertetypen number, string, boolean, array, object und
function und weise einen beliebigen passenden Wert zu.
- Schreibe eine Funktion log() , die für jede Variable den Namen, den Typ und den Wert über die
Konsole mit folgendem Format ausgibt (Hinweis: Der Variablenname muss extra übergeben werden):
myString {string}: Lorem ipsum dolor sit.
myNumber {number}: 42 usw.
  *
  * @package Webapplication
  * @module 
  * @author Frank <frank.engel@autark.com>
  * @version v1.0.0
  * @since 2019-11-27
  * @see i.e. inspired by ... {link to}
  * @license MIT {https://opensource.org/licenses/MIT}
  * @copyright (c) 2019 Frank Engel, Baunatal
  */

!(function () {
    'use strict';

    // Declaration
    let myString = 'hello World',
        myNumber = 42,
        myBoolean = true,
        myArray = [1, 2, 3],
        myObject = {
            key: 'value',
            otherKey: 'other value',
            numberValue: 42,
            booleanValue: true
        },
        myFunction = function () {
            console.log('myFunction is working');
            return true;
        };

    // Functions
    function log(varname, variable) {

        console.log(varname + ' {' + typeof (variable) + '}:' + variable);
    }

    // Control
    console.log(log('myString', myString));
    console.log(log('myNumber', myNumber));
    console.log(log('myBoolean', myBoolean));
    console.log(log('myArray', myArray));
    console.log(log('myObject', myObject));
    console.log(log('myFunction', myFunction));


})()
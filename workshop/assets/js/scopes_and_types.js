/** Explore Variables And Scopes
  * @desc 
  * Übung 2:
  *       Schreibe ein Skript "scopes_and_types.js" und binde es in ein einfaches HTML-Gerüst ein.
          - baue eine IIFE, um einen Scope für deine Variablen und Funktionen zu schaffen.
          - Erfinde je eine Variable für die Wertetypen number, string, boolean, array, object 
            und function und weise einen beliebigen passenden Wert zu.
          - Schreibe eine Funktion log() , die für jede Variable den Namen, den Typ und den Wert 
            über die Konsole mit folgendem Format ausgibt (Hinweis: Der Variablenname muss extra 
            übergeben werden): myString {string}: Lorem ipsum dolor sit. myNumber {number}: 42 usw.
    Übung 3:
  *       Erweitere das Javascript des Browsers um ein Objekt namens "window.tools". Erweitere und
          - implementiere deine bereits geschriebene _log() Methode zur Ausgabe von Name, Typ und Wert einer
            beliebigen Variable.
          - Schreibe für das Ermitteln des Typs eine eigene Funktion _getType(), die auch den Typ 'array'
            zurück geben kann.
          - Dokumentiere und benenne nach den allgemeinen Gepflogenheiten in englisch.
  *        
  * @package Webapplication
  * @module scopes and types
  * @author Frank <frank.engel@autark.com>
  * @version v1.0.2
  * @since 2019-11-27
  * @license MIT {https://opensource.org/licenses/MIT}
  * @copyright (c) 2019 Frank Engel, Baunatal
  */

!(function () {
    'use strict';

    // Declaration
    let myString = 'hello World',
        myNumber = 42,
        myBoolean = true,
        myArray = [1, 'two', 'III'],
        myObject = {
            key: 'value',
            otherKey: 'other value',
            numberValue: 42,
            booleanValue: true
        },
        myFunction = function () {
            console.log('myFunction is working');
            return true;
        },
        _arr = 'array';


    // Functions

    function _getType(variable) {
        if (Array.isArray(variable)) {
            return _arr;
        }
        return typeof (variable);
    }


    function _log(varname, variable) {

        let typ = _getType(variable);

        console.log(varname + ' {' + typ + '}: ' + variable);

        if (typ === 'object' || typ === _arr) {

            // iteration within the object
            for (var key in variable) {
                if (typ === 'object') {
                    console.log('       ' + key + ':' + variable[key]);
                } else {
                    console.log('       ' + key + ': ' + '{' + _getType(variable[key]) + '} ' + variable[key]);
                }
            }
        }
    }


    function _main() {
        // Testfälle
        _log('myString', myString);
        _log('myNumber', myNumber);
        _log('myBoolean', myBoolean);
        _log('myArray', myArray);
        _log('myObject', myObject);
        _log('myFunction', myFunction);

        window.tools = {} || window.tools; // || ... defaultwert
        window.tools._log = _log;
        // window.tools.addNavigation;
    }

    // Control
    _main();


})()
/** Create a simple module
 * @desc 
 *  Übung 3:
 *       Erweitere das Javascript des Browsers um ein Objekt namens "window.tools". Erweitere und
 *       - implementiere deine bereits geschriebene _log() Methode zur Ausgabe von Name, Typ und Wert einer
 *         beliebigen Variable.
 *       - Schreibe für das Ermitteln des Typs eine eigene Funktion _getType(), die auch den Typ 'array'
 *         zurück geben kann.
 *       - Dokumentiere und benenne nach den allgemeinen Gepflogenheiten in englisch.
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

    // Functions

    /**
     * 
     * @param {*} variable
     * @return string
     */
    function _getType(variable) {
        if (Array.isArray(variable)) {
            return 'array';
        }

        return typeof (variable);
    }

    /**
     * 
     * @param {string} varname 
     * @param {*} variable 
     */
    function _log(varname, variable) {

        let type = _getType(variable);

        console.log(varname + ' {' + type + '}: ' + variable);

        if (type === 'object' || type === 'array') {

            // iteration within the object
            for (var key in variable) {
                if (type === 'object') {
                    console.log('       ' + key + ':' + variable[key]);
                } else {
                    console.log('       ' + key + ': ' + '{' + _getType(variable[key]) + '} ' + variable[key]);
                }
            }
        }
    }

    // - - - - - - - - - -
    // Publication
    // - - - - - - - - - -
    /**
     * Extend the window with 'tools'
     * @return void
     */
    function _main() {
        window.tools = window.tools || {};
        window.tools.log = _log;
    }

    // - - - - - - - - - -
    // Local control -> init and publish this module
    // - - - - - - - - - -
    _main();
})()
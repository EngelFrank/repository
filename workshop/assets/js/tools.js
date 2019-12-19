/** Create a simple module
 * @desc 
 *  Übung 3:
 *       Erweitere das Javascript des Browsers um ein Objekt namens "window.tools". Erweitere und
 *       - implementiere deine bereits geschriebene _log() Methode zur Ausgabe von Name, Typ und Wert einer
 *         beliebigen Variable.
 *       - Schreibe für das Ermitteln des Typs eine eigene Funktion _getType(), die auch den Typ 'array'
 *         zurück geben kann.
 *       - Dokumentiere und benenne nach den allgemeinen Gepflogenheiten in englisch.
 *  Übung 4:     
 *       - Generiere eine Navigation auf Basis eines Datenobjekts.
 *       - Ergänze die tools.js um addNavigation() und nutze die Funktionen createElement(),
 *       - setAttribute(), appendChild().
 * 
 * @package Webapplication
 * @module tools
 * @author Frank <frank.engel@autark.com>
 * @version v1.0.4
 * @since 2019-11-27
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Frank Engel, Baunatal
 */


/* Function for Exercise 3 */
!(function () {
    'use strict';

    // Declaration

    // Functions

    /**
     * 
     * @param {*} variable
     * @returns string
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
     * @returns void
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


/* Function for exercise 4 */
!(function () {
    'use strict';

    // - - - - - - - - - -
    // Functions
    // - - - - - - - - - -
    /**
     * @param {string or HTMLElement} varHangIn (expected HTMLElement to insert or name of the htmlelement as a string)
     * @param {*} variableobjectarray 
     */
    function _addNavigation(varHangIn, variableobjectarray) {

        // Creating nav + ul-elements
        let nav1 = document.createElement('nav');
        let ulI = document.createElement('ul');
        // Get Hang In Element
        let myHangIn;

        if (typeof (varHangIn) === 'string') {
            myHangIn = document.querySelector(varHangIn);
            if (myHangIn === null) {
                console.log('Kein HTML-Element zum Namen gefunden:');
                window.tools.log('varHangIn', varHangIn);
                return false;
            }
        } else {
            myHangIn = varHangIn;
            if (myHangIn === null) {
                console.log('HTML-Element varHangIn nicht definiert!');
                return false;
            }
        }



        for (let key in variableobjectarray) {
            let link1 = document.createElement('li');
            let a = document.createElement('a');
            let text = document.createTextNode(variableobjectarray[key].text);
            a.setAttribute('href', variableobjectarray[key].link);
            a.appendChild(text);
            link1.appendChild(a);

            // hang in link into ui-element
            ulI.appendChild(link1);

        }


        // hang in ui-element into nav-element
        nav1.appendChild(ulI);

        // now everthing in nav1 is completed, hanging nav1 into the 
        myHangIn.appendChild(nav1);
        return true;

    }


    // - - - - - - - - - -
    // Publication
    // - - - - - - - - - -
    /**
     * Extend the window with 'tools'
     * @returns void
     */
    function _main() {
        window.tools = window.tools || {};
        window.tools.addNavigation = _addNavigation;
    }

    // - - - - - - - - - -
    // Local control -> init and publish this module
    // - - - - - - - - - -
    _main();

})()
// /** 
//   *
//   *  @desc 
//   *
//   * @package Webapplication
//   * @module 
//   * @author Michael <michael.reichart@gfu.net>
//   * @version v1.0.0
//   * @since 2019-11-19
//   * @see i.e. inspired by ... {link to}
//   * @license MIT {https://opensource.org/licenses/MIT}
//   * @copyright (c) 2019 Michael Reichart, Cologne
//   */

//   !(function () {
//   'use strict';

//   // Declaration
//   let componentElementsList = [
//     { element:'form',
//     attributes:{id:'form-login', method:'get'},
//     context:'aside' },
//     { element:'fieldset',
//     context:'#form-login' },
//     { element:'legend',
//     content:'Enter your account',
//     context:'#form-login>fieldset' },
//     { element:'label',
//     content:'Email',
//     context:'#form-login>fieldset' },
//     { element:'input',
//     context:'#form-login>fieldset' },

//    ]

// //   [{
// //     element: 'form',
// //     context: 'aside'
// //   }, {
// //     element: 'fieldset',
// //     context: 'form'
// //   }, {
// //     element: 'legend',
// //     context: 'fieldset'
// //   }, {
// //     element: 'label',
// //     context: 'fieldset'
// //   }]; 


//   // Functions

//   // createElement(componentelement)
//   function createElement(elementvar){
//     let ret = document.createElement(elementvar.element);
//     return ret;
// } 

//   function createAttribute(elementvar, ret) {
//     if (elementvar.attributes !== false) {
//         for (const key in elementvar.attributes) {
//             if (object.hasOwnProperty(key)) {
//                 const element = object[key];
//                 ret.setAttribute(key, element);
//             }
//         }
//     }
// }  

// function createContext(params) {
//     let _context = document.querySelector(context);
//     return _context;
//   }


//   function main() {
//     for (let i = 0; i < componentElementsList.length; i += 1) {
//         let element = createElement(componentElementsList[i].element);
//         let attribut = createAttribute(element, element.attributes)
//           //context = setContext(componentElementsList[i].context);


//         //context.appendChild(element);
//     }    

//   };

//   // CONTROL
//   // window.onload = function () {}
//   window.addEventListener('load', main);
// //   let formular = document.createElement('form');
// //   let fieldsetvar = document.createElement('fieldset');
// //   let legendvar = document.createElement('legend');
// //   let emaildvar = document.createElement('label');
// //   let inputemaildvar = document.createElement('email');

// //   let asidevar = document.querySelector('aside');
// //   asidevar.appendChild(formular);
//         // <input type="email">
//         // <label>Password</label>
//         // <input type="password">

//         // <label type="checkbox"><input type="checkbox"></label>

//         // <button type="submit>log in</button> 

//   }());

/* global console, window, document */
/**
 * A Login Component
 * @desc generates a login form with email, password for an user account login.
 *       Includes event listener and handler.
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/11/19
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */


!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    let form;

    let componentElementsList = [{
            element: 'form',
            context: 'aside',
            attributes: {
                id: 'form-login',
                method: 'get',
                action: 'login.php'
            }
        }, {
            element: 'fieldset',
            context: 'form'
        }, {
            element: 'legend',
            content: 'enter your account',
            context: 'fieldset'
        }, {
            element: 'label',
            content: 'Email',
            context: 'fieldset',
            attributes: {
                for: 'login-email'
            }
        }, {
            element: 'input',
            context: 'fieldset',
            attributes: {
                type: 'email',
                id: 'login-email'

            }
        },
        {
            element: 'label',
            context: 'fieldset',
            content: 'Password',
            attributes: {
                for: 'login-password'
            }
        },
        {
            element: 'input',
            context: 'fieldset',
            attributes: {
                type: 'password',
                id: 'login-password'
            }
        },
        {
            element: 'input',
            context: 'fieldset',
            attributes: {
                type: 'checkbox',
                id: 'login-keep-password',
                class: 'checkbox'
            }
        },
        {
            element: 'label',
            content: 'keep password',
            context: 'fieldset',
            attributes: {
                for: 'login-keep-password'
            }
        },
        {
            context: 'fieldset',
            element: 'button',
            content: 'log in',
            attributes: {
                type: 'submit'
            }
        }
    ];

    // METHODS
    function createElement(element) {
        let
            _element = document.createElement(element);
        return _element;
    }

    function setContext(context) {
        let _context = document.querySelector(context);
        return _context;
    }

    function appendChild(element, context) {
        let
            _element = element || undefined,
            _context = context || undefined;

        try {
            _context.appendChild(_element);
        } catch (error) {
            console.log(error);
        }
    }

    function setAttributes(element, attributes) {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    function setContent(element, content) {
        let
            _element = element || undefined,
            _content = document.createTextNode(content) || undefined;

        if (!content || !element) return false;

        element.appendChild(_content);
        return true;
    }

    /* TODO use local scope namespaces */
    function createComponent() {
        for (let i = 0; i < componentElementsList.length; i += 1) {
            let
                _element, _context,
                element = componentElementsList[i].element,
                context = componentElementsList[i].context,
                attributes = componentElementsList[i].attributes,
                content = componentElementsList[i].content;

            _element = createElement(element);
            _context = setContext(context);

            if (attributes) {
                setAttributes(_element, attributes);
            }


            setContent(_element, content);

            try {
                appendChild(_element, _context);
            } catch (error) {
                console.log(error);
            }

        }
    };

    function onSubmitLoginForm(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        console.log('submit');

    }

    function onAction(event) {
        console.log(event.target);
                console.log(this);
                console.dir(event);
    }


    function onChange(event) {
        let val = event.target.value.test;

        console.log(event.target);
                console.log(this);
                console.dir(event);
                console.log(validateEmail(val));
                if (validateEmail(val)) {
                    window.notification.show('gut gemacht');
                }
                else{
                    window.notification.show('Schade!');
                }
                
    }
    
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function main() {
        createComponent();

        // Event Control
        //   form = document.querySelector('#form-login');
        //   form.addEventListener('submit', onSubmitLoginForm);
        // document
        //     .querySelector('#form-login')
        //     .addEventListener('submit', onSubmitLoginForm);

        // document
        //     .querySelector('#login-email')
        //     .addEventListener('keyup', onAction);

        // document
        //     .querySelector('#login-email')
        //     .addEventListener('focus', onAction);
            //.addEventListener('blur',onAction);

        document
            .querySelector('#login-email')
            .addEventListener('change', onChange);

    };

    // CONTROL
    // window.onload = function () {}
    window.addEventListener('load', main);
    // - - - - - - - - - -
}());
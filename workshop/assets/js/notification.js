/** 
  *
  *  @desc 
  *
  * @package Webapplication
  * @module 
  * @author Michael <michael.reichart@gfu.net>
  * @version v1.0.0
  * @since 2019-11-20
  * @see i.e. inspired by ... {link to}
  * @license MIT {https://opensource.org/licenses/MIT}
  * @copyright (c) 2019 Michael Reichart, Cologne
  */

// !(function () {
// 'use strict';
// // Declaration
// let
// notificationElement,
// config = {
//     defaulttagName: 'div',
//     defaultState: 'default',
//     defaultContext: 'body'
// };

// // Functions
// function _show(text) {
//   let _text=document.querySelector('#notificationtext');
//   _text.setAttribute('',text);
  
//   return text;
// }


// function _main() {

//     window.notification = {} || window.notification; // || ... defaultwert
//     window.notification.show = _show;
// }

// // Control
// _main();

// })()

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  // - - - - -
  let
      notificationElement, notificationText, notificationState,
      config = {
          defaultTagName: 'div',
          defaultState: 'default',
          defaultContext: 'body',
          defaultContent: 'hello World'
      };

  // - - - - -
  // FUNCTIONS
  // - - - - -

  function _createNotificationElement(tagName) {
      let _tagName = tagName || config.defaultTagName;

      notificationElement = document.createElement(_tagName);
      return true;
  }

  function _createNotificationText(content) {
      let _content = content || config.defaultContent;

      notificationText = document.createTextNode(_content);
      notificationElement.appendChild(notificationText);
      return true;
  }

  function _appendNotificationElement(context) {
      let _context = context || config.defaultContext;
      _context = document.querySelector(_context);
      _context.appendChild(notificationElement);

      return true;
  }

  function _setNotificationState(state) {
      let _state = state || config.defaultState;

      notificationElement.classList.add(_state);
      return true;
  }

  function _show(content) {
      var _content = content || 0;
      if (typeof (_content) !== 'string') return false;

      _createNotificationElement();
      _createNotificationText();
      _appendNotificationElement();
      _setNotificationState();
      

      return true;
  };

  function _main() {
      // publish module and a function
      window.notification = {} || window.notification;
      window.notification.show = _show;
  }

  // - - - - -
  // CONTROL
  // - - - - -
  _main();
  // - - - - - - - - - -
}())
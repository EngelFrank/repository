// Global script, using the new module 'tools'
window.onload = function() {
  "use strict";
  // - - - - - - - - - -
  let myString = "hello World",
    myNumber = 42,
    myBoolean = true,
    myArray = [1, "two", "III"],
    myObject = {
      key: "value",
      otherKey: "other value",
      numberValue: 42,
      booleanValue: true
    },
    myFunction = function() {
      console.log("myFunction is working");
      return true;
      };
    
    console.dir(window);

  // Variables Navigation
  let myNavigation = [ {"text":"Home", "link":"index.html"},
  {"text":"Work", "link":"work.html"},
  {"text":"Contact", "link":"contact.html"},
  {"text":"Imprint", "link":"imprint.html"} ]

    
  // Test cases log
  window.tools.log("myString", myString);
  window.tools.log("myNumber", myNumber);
  window.tools.log("myBoolean", myBoolean);
  window.tools.log("myArray", myArray);
  window.tools.log("myObject", myObject);
  window.tools.log("myFunction", myFunction);
  // - - - - - - - - - -

  // Test cases Navigation
  window.tools.log("myString", myString);
  window.tools.log("myNumber", myNumber);
  window.tools.log("myBoolean", myBoolean);
  window.tools.log("myArray", myArray);
  window.tools.log("myObject", myObject);
  window.tools.log("myFunction", myFunction);
  // - - - - - - - - - -



};

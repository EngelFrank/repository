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
    
  // Test cases
  window.tools.log("myString", myString);
  window.tools.log("myNumber", myNumber);
  window.tools.log("myBoolean", myBoolean);
  window.tools.log("myArray", myArray);
  window.tools.log("myObject", myObject);
  window.tools.log("myFunction", myFunction);
  // - - - - - - - - - -
};

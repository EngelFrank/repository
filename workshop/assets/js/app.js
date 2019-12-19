// Global script, using the new module 'tools'
window.onload = function() {
    "use strict";
  
    // Variables Navigation
    let myNavigation = [ {"text":"Home", "link":"index.html"},
    {"text":"Work", "link":"work.html"},
    {"text":"Contact", "link":"contact.html"},
    {"text":"Imprint", "link":"imprint.html"} ];
    let myheader = 'header';
    let myheaderobject = document.querySelector('header');

    console.dir(window);
      
  
    // Test case Navigation    
    window.tools.addNavigation('notexistingHTMLElement', myNavigation);
    window.tools.addNavigation(null, myNavigation);
    window.tools.addNavigation(myheader, myNavigation);
    window.tools.addNavigation(myheaderobject, myNavigation);
    
    // - - - - - - - - - -
  
  
  
  };
  
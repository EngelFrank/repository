/** DOM Manipulation Examples
  *
  * @desc creating and modifying elements and attributes 
  *
  * @package Webapplication
  * @module 
  * @author Michael <michael.reichart@gfu.net>
  * @version v1.0.0
  * @since 2019-11-18
  * @see i.e. inspired by ... {link to}
  * @license MIT {https://opensource.org/licenses/MIT}
  * @copyright (c) 2019 Michael Reichart, Cologne
  */


  !(function () {
  'use strict';
  // ---------------

  // Declaration /Initialisation

  
  // Functions

  // Control (Event Control)
  console.log(window);
  console.log(window.navigator.userAgent);
  console.log(window.navigator.appVersion);
  console.log(window.document);
  console.log(document);
  // better as object with console.dir!
  console.dir(document);

  document.body.bgColor = "green";
  //document.body.style.bgColor = "green";
  
  // don't work
  //window.document.html.body.h1.innerText = "new Headline"

  // use Selectors!
  let h1 = document.querySelector('h1');
  
  h1 = document.querySelector('#myheadline');
  h1 = document.getElementById('myheadline');
  
  let h2 = document.querySelector('h2');
  h2 = document.querySelector('#myheadline2');
  h2 = document.getElementById('myheadline2');

  h1.innerText = "A new headline";
  h2.innerText = "A new headline2";

  let arr = document.querySelectorAll('h1');
  for (let i = 0; i < arr.length; i+=1) {
    arr[i].innerText = "A verynew headline";      
  }

  // see obejct
  console.log(h1);
  console.dir(h1);

  // other selector commands
  document.querySelector('h1');
  document.querySelectorAll('.teaser');


  // Creating elements
  let list = document.createElement('ul');

  // creating text nodes
  let text = document.createTextNode('hello World!');
  // append element to the DOM
  document.body.appendChild(list);

  // Set attibutes
  list.setAttribute('class', 'navigation');


  let navArray = [
      ["home", "index.html"],
      ["work", "work.html"],
      ["Contact", "contact.html"],
      ["imprint", "imprint.html"]
  ]

  for (let i = 0; i < navArray.length; i++) {
      const  element = navArray[i];
      console.log(element[0], element[1]);      
  }

  let fromserver = [
    {text:"home", link:"index.html"},
    {text:"work", link:"work.html"},
    {text:"contact", link:"contact.html"},
    {text:"imprint", link:"imprint.html"},
    ]

  // Creating elements
  let nav1 = document.createElement('nav');
  
  // append element to the DOM

    
  let ulI = document.createElement('ul');
  
  for (let key in fromserver) {
        let link1 = document.createElement('li');
        let a = document.createElement('a');
        let text = document.createTextNode(fromserver[key].text);     
        a.setAttribute('href',fromserver[key].link);
        a.appendChild(text);
        link1.appendChild(a);
        ulI.appendChild(link1);

    }

    nav1.appendChild(ulI);
    document.body.appendChild(nav1);



  // ---------------

  })()
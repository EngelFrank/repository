/**
 * Titel of this script
 * @desc lorem24
 * @package 1.0.0.0
 * @since 2019/11/04
 * @author Frank
 * ...
 */

 // einzeiliger Kommentar

 // declaration of variables
var mystring = 'any text'; // 
console.log(mystring);
console.log(typeof mystring); 
console.log(typeof(mystring)); // Standard

mystring = 42
console.log(typeof(mystring)); // Standard

// types
// 1. unified number type
var a = 42; // 
var b = 108;

console.log(typeof(a));

// parseInt(a)
// parseFloat(a)

// 2. strings
var c = 'any text2';

// numbers and strings
console.log(a+b);
console.log(a+c);
console.log(a+b+c);
console.log(a+b+c+a+b);

// 3. boolean
var d = false;
var e = true;

console.log(typeof(d));

// primitive vaulue types
// number, string , boolean

// using booleans ...
console.clear();
console.log(true == true);
console.log(false == false);
console.log(true == false);

console.log( 1 == true);
console.log( '1' == true); // Aua... das ist true!

// use triple als Standard
console.log( '1' === true); // Werte und Typenvergleich
console.log( '1' !== true); 

// maybe funny:
console.log('' == false);
console.log(' ' == false); // Kompiler filtert das Leerzeichen heraus

// mehrwertige Wertetypen
// array:
console.clear();
var arr_1 = [1,2,3];
var arr_2 = [true,'two',3];

console.log(arr_1[0]);

// array length:
console.log( arr_1.length);

// iteration with arrays

for (var i=0; i<arr_2.length; i+=1){
    arr_2[3] = 'new';
    console.log(arr_2[i]);
}

for (var i=0, len=arr_2.length; i<len; i+=1){
    arr_2[4] = 'very new';
    console.log(arr_2[i]);
}

delete(arr_2[0]);
console.log(arr_2);

// obeject - JSON
console.clear();
var obj = {
    key : 'value',
    otherKey : 'other value',
    numberValue : 42,
    booleanValue : true
};

console.log(obj['key']);
console.log(obj.key);


// iteration with an object
for (var key in obj) {
    console.log(key + ':' + obj[key]);
}

// funktion

function fn() {
    console.log('function is working');
    return true;
    
}

fn();

var fn_2 = function(){
    console.log('function2 is working');
    return true;
    
}

fn_2();















